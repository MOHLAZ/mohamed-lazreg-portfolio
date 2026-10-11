import { GraduationCap, MapPin, Calendar, Building2 } from 'lucide-react';
import { useLanguage } from '@/i18n/context';

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-anchor py-20 sm:py-24 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">{t.education.sectionLabel}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            {t.education.sectionTitle}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {t.education.items.map((edu, i) => (
            <div
              key={i}
              className="card-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lift"
            >
              <div className="absolute -top-12 -end-12 h-32 w-32 rounded-full bg-gradient-to-br from-navy-600 to-primary-500 opacity-0 blur-2xl transition-opacity group-hover:opacity-10" aria-hidden="true" />

              <div className="relative flex items-center gap-3.5 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-600 to-primary-500 text-white shadow-soft transition-transform group-hover:scale-105">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-navy-800 leading-snug">
                  {edu.title}
                </h3>
              </div>
              <div className="relative space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm text-slate-600 rounded-lg bg-slate-50/50 px-3 py-2">
                  <Building2 className="h-4 w-4 text-primary-400" />
                  <span className="font-medium text-slate-500">{edu.institutionLabel}:</span>
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-600 rounded-lg bg-slate-50/50 px-3 py-2">
                  <MapPin className="h-4 w-4 text-primary-400" />
                  <span className="font-medium text-slate-500">{edu.locationLabel}:</span>
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-600 rounded-lg bg-slate-50/50 px-3 py-2">
                  <Calendar className="h-4 w-4 text-primary-400" />
                  <span className="font-medium text-slate-500">{edu.periodLabel}:</span>
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4 text-justify">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
