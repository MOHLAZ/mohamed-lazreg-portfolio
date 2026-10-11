import { Briefcase, CircleDot, Calendar, MapPin, Tag } from 'lucide-react';
import { useLanguage } from '@/i18n/context';
import type { Experience } from '@/i18n/types';

function ExperienceCard({ exp }: { exp: Experience }) {
  const Icon = exp.isPersonal ? CircleDot : Briefcase;
  const gradient = exp.isPersonal
    ? 'from-accent-500 to-sky-500'
    : 'from-navy-600 to-primary-500';

  return (
    <div
      className={`card-lift group relative overflow-hidden rounded-2xl border bg-white p-7 sm:p-8 hover:shadow-lift ${
        exp.isPersonal ? 'border-accent-200/50' : 'border-slate-200'
      }`}
    >
      {/* Left gradient stripe */}
      <div className={`absolute inset-y-0 start-0 w-1 bg-gradient-to-b ${gradient} opacity-60 transition-opacity group-hover:opacity-100`} />

      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-soft`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy-800">{exp.organization}</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {exp.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <h4 className="text-base font-semibold text-primary-700 mb-4">{exp.subtitle}</h4>

      {/* Description paragraphs */}
      <div className="space-y-3 mb-6">
        {exp.descriptionParagraphs.map((para, i) => (
          <p key={i} className="text-[15px] leading-[175%] text-slate-700 text-justify">
            {para}
          </p>
        ))}
      </div>

      {/* Domain tags */}
      {exp.domains.length > 0 && (
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-navy-700 mb-3">
            <Tag className="h-4 w-4 text-primary-500" />
            {exp.domainsLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.domains.map((d, i) => (
              <span
                key={i}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium border ${
                  exp.isPersonal
                    ? 'bg-accent-50 text-accent-700 border-accent-200'
                    : 'bg-primary-50 text-primary-700 border-primary-200'
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ExperiencesSection() {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="section-anchor py-20 sm:py-24 bg-mesh">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">{t.experiences.sectionLabel}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            {t.experiences.sectionTitle}
          </h2>
        </div>
        <div className="grid gap-5 sm:gap-6">
          {t.experiences.items.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
