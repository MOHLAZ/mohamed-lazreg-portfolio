import { User } from 'lucide-react';
import { useLanguage } from '@/i18n/context';

export default function ProfileSection() {
  const { t } = useLanguage();

  return (
    <section id="profile" className="section-anchor relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-primary-100/30 blur-3xl animate-pulse-soft" aria-hidden="true" />
      <div className="absolute top-40 -start-24 h-64 w-64 rounded-full bg-accent-100/30 blur-3xl animate-pulse-soft" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
          {/* Photo placeholder */}
          <div className="flex flex-col items-center lg:items-start animate-slide-in-left">
            <div className="group relative aspect-[4/5] w-full max-w-[280px] rounded-3xl border-2 border-dashed border-primary-200 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-6 shadow-soft transition-all hover:shadow-lift hover:border-primary-300">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-50/50 to-accent-50/50 opacity-50" aria-hidden="true" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-soft border border-primary-100 transition-transform group-hover:scale-105">
                <User className="h-8 w-8 text-primary-400" />
              </div>
              <p className="relative text-center text-xs font-medium text-navy-600 leading-relaxed">
                {t.photo.placeholder}
              </p>
              <span className="relative rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-navy-500 border border-navy-100">
                {t.photo.format}
              </span>
            </div>
            <p className="mt-4 text-center lg:text-start text-sm font-medium text-slate-500">
              {t.photo.portrait}
            </p>
          </div>

          {/* Profile content */}
          <div className="animate-slide-in-right">
            <span className="section-label">
              {t.profile.sectionLabel}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold leading-[1.15] text-gradient">
              {t.profile.name}
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-medium text-slate-600 leading-relaxed">
              {t.profile.title}
            </p>
            <div className="mt-7 space-y-4 max-w-3xl">
              {t.profile.paragraphs.map((para, i) => (
                <p key={i} className="text-[15px] leading-[175%] text-slate-700 text-justify">
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
