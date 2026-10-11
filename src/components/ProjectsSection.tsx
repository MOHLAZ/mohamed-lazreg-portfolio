import { FolderKanban, CheckCircle2, ListChecks, AlertCircle, Tag, Lock } from 'lucide-react';
import { useLanguage } from '@/i18n/context';
import type { Project } from '@/i18n/types';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const gradient = index === 0 ? 'from-navy-600 to-primary-500' : 'from-accent-500 to-sky-500';
  const badgeClass = project.isInProgress
    ? 'bg-success-50 text-success-700 border-success-200'
    : 'bg-primary-50 text-primary-700 border-primary-200';

  return (
    <div className="card-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 hover:shadow-lift">
      {/* Subtle hover glow */}
      <div className={`absolute -top-16 -end-16 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-opacity group-hover:opacity-[0.07]`} aria-hidden="true" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-start gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-soft shrink-0 transition-transform group-hover:scale-105`}>
            <FolderKanban className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{project.number}</span>
            <h3 className="text-xl font-bold text-navy-800 leading-snug">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{project.subtitle}</p>
          </div>
        </div>
        <span className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold border ${badgeClass}`}>
          {project.badge}
        </span>
      </div>

      {/* Context */}
      <div className="mb-5 rounded-xl bg-slate-50/70 px-5 py-4 border border-slate-100">
        <p className="text-sm font-semibold text-navy-700 mb-1.5">{project.contextLabel}</p>
        <p className="text-[15px] leading-[170%] text-slate-700 text-justify">{project.context}</p>
      </div>

      {/* Contribution / work done */}
      {project.contributions.length > 0 && (
        <div className="mb-5">
          <p className="flex items-center gap-2 text-sm font-semibold text-navy-700 mb-3">
            <ListChecks className="h-4 w-4 text-primary-500" />
            {project.contributionLabel}
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {project.contributions.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 rounded-lg bg-slate-50/50 px-3 py-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary-400 shrink-0" />
                <span className="leading-relaxed text-justify">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Result */}
      {project.result && (
        <div className="mb-5 rounded-xl bg-amber-50/60 border border-amber-100 px-5 py-4">
          <p className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700 text-justify">
            <AlertCircle className="mt-0.5 h-4 w-4 text-amber-600 shrink-0" />
            <span className="text-justify">
              <span className="font-semibold text-navy-800">{project.resultLabel}: </span>
              {project.result}
            </span>
          </p>
        </div>
      )}

      {/* Skills tags */}
      {project.skills.length > 0 && (
        <div className="mb-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-navy-700 mb-3">
            <Tag className="h-4 w-4 text-primary-500" />
            {project.skillsLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 border border-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Status footer */}
      {project.status && (
        <div className="flex items-center gap-2 border-t border-slate-100 pt-4 mt-2">
          <Lock className="h-4 w-4 text-slate-400 shrink-0" />
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-600">{project.statusLabel}: </span>
            {project.status}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-anchor py-20 sm:py-24 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">{t.projects.sectionLabel}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            {t.projects.sectionTitle}
          </h2>
        </div>
        <div className="grid gap-5 sm:gap-6">
          {t.projects.items.map((proj, i) => (
            <ProjectCard key={i} project={proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
