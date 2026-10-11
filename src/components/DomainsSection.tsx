import { FolderKanban, ClipboardList, Lightbulb, Sparkles, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/context';

const ICONS = [FolderKanban, ClipboardList, Lightbulb, Sparkles];
const GRADIENTS = [
  'from-blue-500 to-cyan-500',
  'from-navy-600 to-blue-500',
  'from-teal-500 to-emerald-500',
  'from-sky-500 to-indigo-500',
];

export default function DomainsSection() {
  const { t } = useLanguage();

  return (
    <section id="domains" className="section-anchor py-20 sm:py-24 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">{t.domains.sectionLabel}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            {t.domains.sectionTitle}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {t.domains.cards.map((card, i) => {
            const Icon = ICONS[i] ?? FolderKanban;
            return (
              <div
                key={i}
                className="card-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 hover:border-primary-200 hover:shadow-lift"
              >
                {/* Top gradient bar */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${GRADIENTS[i] ?? GRADIENTS[0]} opacity-0 transition-opacity group-hover:opacity-100`} />

                {/* Hover glow */}
                <div className={`absolute -top-12 -end-12 h-32 w-32 rounded-full bg-gradient-to-br ${GRADIENTS[i] ?? GRADIENTS[0]} opacity-0 blur-2xl transition-opacity group-hover:opacity-10`} aria-hidden="true" />

                <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${GRADIENTS[i] ?? GRADIENTS[0]} text-white shadow-soft transition-transform group-hover:scale-110`}>
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <h3 className="relative mt-5 text-base font-semibold text-navy-800 leading-snug">
                  {card.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-slate-600 text-justify">
                  {card.description}
                </p>
                <ArrowUpRight className="absolute bottom-6 end-6 h-4 w-4 text-slate-300 transition-all group-hover:text-primary-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
