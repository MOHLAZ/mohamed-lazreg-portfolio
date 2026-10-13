import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

// Helper pour échapper le HTML et éviter toute injection dans l'email
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

serve(async (req: Request) => {
  // 1. Gestion des requêtes préliminaires CORS OPTIONS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, error: 'Method Not Allowed' }),
      {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const payload = await req.json();
    const { name, email, subject, message } = payload;

    // 2. Validation stricte côté serveur
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string'
    ) {
      return new Response(
        JSON.stringify({ success: false, error: 'Champs invalides' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return new Response(
        JSON.stringify({ success: false, error: 'Tous les champs sont obligatoires' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Format d\'adresse e-mail invalide' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 255 ||
      cleanSubject.length > 200 ||
      cleanMessage.length > 5000
    ) {
      return new Response(
        JSON.stringify({ success: false, error: 'Longueur de champ dépassée' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 3. Récupération des secrets côté serveur (Supabase Edge Function Secrets)
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const toEmail = Deno.env.get('TO_NOTIFICATION_EMAIL');
    const fromEmail = Deno.env.get('FROM_EMAIL') || 'Mohamed Portfolio <onboarding@resend.dev>';

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase server credentials');
      return new Response(
        JSON.stringify({ success: false, error: 'Configuration serveur incomplète' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!resendApiKey || !toEmail) {
      console.error('Missing RESEND_API_KEY or TO_NOTIFICATION_EMAIL');
      return new Response(
        JSON.stringify({ success: false, error: 'Service d\'envoi non configuré' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 4. Enregistrement en base de données Supabase avec service_role
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    const { data: insertedData, error: dbError } = await supabaseAdmin
      .from('contact_messages')
      .insert([
        {
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
          notification_sent: false,
        },
      ])
      .select('id')
      .single();

    if (dbError) {
      console.error('Supabase DB Insert Error:', dbError);
      return new Response(
        JSON.stringify({ success: false, error: 'Erreur lors de l\'enregistrement en base' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const messageId = insertedData.id;

    // 5. Envoi de l'e-mail de notification via l'API Resend
    const escapedName = escapeHtml(cleanName);
    const escapedEmail = escapeHtml(cleanEmail);
    const escapedSubject = escapeHtml(cleanSubject);
    const escapedMessage = escapeHtml(cleanMessage).replace(/\n/g, '<br/>');

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1e293b; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="margin-top: 0; color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 12px; font-size: 20px;">
          Nouveau message depuis votre portfolio
        </h2>
        
        <div style="background-color: #f8fafc; border-radius: 8px; padding: 16px; margin: 20px 0; border: 1px solid #e2e8f0;">
          <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Expéditeur :</strong> ${escapedName}</p>
          <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>E-mail :</strong> <a href="mailto:${escapedEmail}" style="color: #2563eb; text-decoration: none;">${escapedEmail}</a></p>
          <p style="margin: 0; font-size: 14px;"><strong>Objet :</strong> ${escapedSubject}</p>
        </div>

        <div style="margin-top: 24px;">
          <h3 style="font-size: 15px; color: #334155; margin-bottom: 8px;">Message :</h3>
          <div style="padding: 16px; background-color: #ffffff; border-left: 4px solid #3b82f6; border-radius: 4px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${escapedMessage}</div>
        </div>

        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
          Vous pouvez répondre directement à cet e-mail pour écrire à ${escapedName} (${escapedEmail}).
        </div>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: `[Portfolio] ${cleanSubject} - ${cleanName}`,
        html: htmlBody,
        text: `Nouveau message reçu depuis votre portfolio :\n\nDe : ${cleanName} (${cleanEmail})\nObjet : ${cleanSubject}\n\nMessage :\n${cleanMessage}\n`,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API Error:', resendResponse.status, errorText);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Échec de l\'envoi de la notification par e-mail',
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 6. Mise à jour du statut notification_sent = true en base
    await supabaseAdmin
      .from('contact_messages')
      .update({ notification_sent: true })
      .eq('id', messageId);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message enregistré et notification transmise avec succès',
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown internal error';
    console.error('Unhandled server error:', message);
    return new Response(
      JSON.stringify({ success: false, error: 'Une erreur interne est survenue' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
