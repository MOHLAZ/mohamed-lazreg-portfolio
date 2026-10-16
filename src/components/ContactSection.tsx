import { useState, type FormEvent } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/i18n/context';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  company_hp: string; // Honeypot antispam
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company_hp: '',
};

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // 1. Honeypot check (piège à spam bots : si rempli, on simule un succès sans rien envoyer)
    if (formData.company_hp.trim().length > 0) {
      setIsSuccess(true);
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setErrorMessage(t.contact.errorMessage);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage(t.contact.errorMessage);
      return;
    }

    if (name.length > 100 || email.length > 255 || subject.length > 200 || message.length > 5000) {
      setErrorMessage(t.contact.errorMessage);
      return;
    }

    // 2. Limitation du taux de soumission (minimum 15s entre chaque envoi)
    const lastSentAt = localStorage.getItem('last_contact_ts');
    const now = Date.now();
    if (lastSentAt && now - parseInt(lastSentAt, 10) < 15000) {
      setErrorMessage(t.contact.rateLimitMessage);
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      console.error('[ContactForm] Supabase is not configured');
      setErrorMessage(t.contact.errorMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name,
          email,
          subject,
          message,
        },
      });

      if (error) {
        console.error('[ContactForm] Supabase function invocation error:', error.message || error);
        throw error;
      }

      if (data && data.success === false) {
        console.error('[ContactForm] Server returned failure:', data.error);
        throw new Error(data.error || 'Submission failed');
      }

      localStorage.setItem('last_contact_ts', now.toString());
      setIsSuccess(true);
      setFormData(INITIAL_FORM);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[ContactForm] Submission failed:', msg);
      setErrorMessage(t.contact.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    setFormData(INITIAL_FORM);
  };

  return (
    <section id="contact" className="section-anchor py-20 sm:py-24 bg-mesh relative overflow-hidden">
      <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-primary-100/20 blur-3xl animate-pulse-soft" aria-hidden="true" />
      <div className="absolute -bottom-24 -start-24 h-72 w-72 rounded-full bg-accent-100/20 blur-3xl animate-pulse-soft" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10">
          {t.contact.sectionLabel && (
            <span className="section-label justify-center">{t.contact.sectionLabel}</span>
          )}
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gradient">
            {t.contact.title}
          </h2>
          {t.contact.text && (
            <p className="mt-5 text-[15px] leading-[175%] text-slate-600 max-w-2xl mx-auto text-justify">
              {t.contact.text}
            </p>
          )}
        </div>

        <div className="card-lift relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-soft hover:shadow-lift">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-700 to-primary-500" />

          {t.contact.formTitle && (
            <h3 className="text-lg font-semibold text-navy-800 mb-5">{t.contact.formTitle}</h3>
          )}

          {t.contact.formNotice && (
            <div className="mb-6 flex items-start gap-3 rounded-xl bg-amber-50/60 border border-amber-100 px-4 py-3.5">
              <p className="text-sm leading-relaxed text-slate-600 text-justify">{t.contact.formNotice}</p>
            </div>
          )}

          {isSuccess ? (
            <div className="rounded-2xl bg-success-50/80 border border-success-200 p-8 text-center animate-scale-in">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success-100 mb-4">
                <CheckCircle2 className="h-8 w-8 text-success-600" />
              </div>
              <h4 className="text-lg font-semibold text-success-900 mb-2">
                {t.contact.successTitle}
              </h4>
              <p className="text-sm leading-relaxed text-success-800 max-w-md mx-auto mb-6">
                {t.contact.successMessage}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-success-300 bg-white px-5 py-2.5 text-xs font-semibold text-success-800 shadow-xs hover:bg-success-50 transition-colors cursor-pointer"
              >
                {t.contact.resetButton}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Piège antispam honeypot pour robots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company_hp">Company</label>
                <input
                  type="text"
                  id="company_hp"
                  name="company_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company_hp}
                  onChange={(e) => setFormData({ ...formData, company_hp: e.target.value })}
                />
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl bg-rose-50 border border-rose-200 p-4 text-rose-800 animate-scale-in"
                >
                  <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed font-medium">{errorMessage}</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.contact.nameLabel} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative group">
                    <User className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-primary-500" />
                    <input
                      id="contact-name"
                      type="text"
                      required
                      maxLength={100}
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 ps-11 pe-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.contact.emailLabel} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative group">
                    <Mail className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-primary-500" />
                    <input
                      id="contact-email"
                      type="email"
                      required
                      maxLength={255}
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 ps-11 pe-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.subjectLabel} <span className="text-rose-500">*</span>
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-primary-500" />
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    maxLength={200}
                    disabled={isSubmitting}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.contact.subjectPlaceholder}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 ps-11 pe-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.messageLabel} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  maxLength={5000}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white outline-none transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-navy-700 to-primary-600 px-6 py-3 text-sm font-medium text-white shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-soft disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t.contact.submittingButton}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t.contact.submitButton}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
