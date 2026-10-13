-- ==============================================================================
-- Migration Supabase : Table contact_messages & Sécurité RLS
-- Description : Stockage sécurisé des messages de contact du portfolio
-- ==============================================================================

-- 1. Création de la table contact_messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    notification_sent BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Indexation pour faciliter l'ordre chronologique
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at 
ON public.contact_messages (created_at DESC);

-- 3. Activation de Row Level Security (RLS) impératif
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 4. Principe du moindre privilège :
-- La table n'a AUCUNE politique de SELECT / READ pour les utilisateurs anonymes ('anon')
-- Ni les visiteurs ni les utilisateurs non authentifiés ne peuvent lire les messages.
-- Seul le 'service_role' (utilisé côté serveur par l'Edge Function) ou le super-administrateur
-- peut insérer et lire les enregistrements.

-- Optionnel : si vous souhaitez autoriser l'insertion directe par un client anon (non recommandé si l'Edge Function s'en charge) :
-- Mais ici l'architecture sécurisée confie l'insertion à l'Edge Function via service_role ou JWT contrôlé.
