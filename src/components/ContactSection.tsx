import { useState } from 'react';
import { Mail, User, MessageSquare, Send, Info, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/i18n/context';

export default function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-anchor py-20 sm:py-24 bg-mesh relative overflow-hidden">
      <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-primary-100/20 blur-3xl animate-pulse-soft" aria-hidden="true" />
      <div className="absolute -bottom-24 -start-24 h-72 w-72 rounded-full bg-accent-100/20 blur-3xl animate-pulse-soft" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="section-label justify-center">{t.contact.sectionLabel}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gradient">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-[15px] leading-[175%] text-slate-600 max-w-2xl mx-auto text-justify">
            {t.contact.text}
          </p>
        </div>

        <div className="card-lift relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-soft hover:shadow-lift">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-700 to-primary-500" />

          <h3 className="text-lg font-semibold text-navy-800 mb-5">{t.contact.formTitle}</h3>

          <div className="mb-6 flex items-start gap-3 rounded-xl bg-amber-50/60 border border-amber-100 px-4 py-3.5">
            <Info className="mt-0.5 h-4 w-4 text-amber-600 shrink-0" />
            <p className="text-sm leading-relaxed text-slate-600 text-justify">{t.contact.formNotice}</p>
          </div>

          {submitted ? (
            <div className="rounded-xl bg-success-50 border border-success-200 px-6 py-8 text-center animate-scale-in">
              <CheckCircle2 className="mx-auto h-10 w-10 text-success-500 mb-3" />
              <p className="text-sm font-medium text-success-700">{t.contact.formNotice}</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <div className="relative group">
                    <User className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-primary-500" />
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 ps-11 pe-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <div className="relative group">
                    <Mail className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-primary-500" />
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 ps-11 pe-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.subjectLabel}
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-primary-500" />
                  <input
                    type="text"
                    required
                    placeholder={t.contact.subjectPlaceholder}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 ps-11 pe-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:bg-white outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-navy-700 to-primary-600 px-6 py-3 text-sm font-medium text-white shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                {t.contact.submitButton}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
