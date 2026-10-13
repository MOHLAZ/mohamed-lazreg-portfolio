import { useLanguage } from '@/i18n/context';

export default function ProfileSection() {
  const { t } = useLanguage();

  return (
    <section
      id="profile"
      className="section-anchor relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 bg-grid opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-primary-100/30 blur-3xl animate-pulse-soft"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 -start-24 h-64 w-64 rounded-full bg-accent-100/30 blur-3xl animate-pulse-soft"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
          {/* Profile photo */}
          <div className="flex flex-col items-center lg:items-start animate-slide-in-left">
            <div className="group relative w-full max-w-[280px]">
              <div className="relative overflow-hidden rounded-3xl border border-primary-200/80 bg-white shadow-soft transition-all duration-300 group-hover:shadow-lift group-hover:border-primary-300">
                <img
                  src="/images/Foto.png"
                  alt={t.photo.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle overlay on hover */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            </div>

            <p className="mt-3 text-center lg:text-start text-xs font-medium text-slate-500">
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
