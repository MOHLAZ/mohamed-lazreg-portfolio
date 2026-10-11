import { FolderKanban, ClipboardList, Lightbulb, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/context';

const ICONS = [FolderKanban, ClipboardList, Lightbulb, Sparkles];
const GRADIENTS = [
  'from-blue-500 to-cyan-500',
  'from-navy-600 to-blue-500',
  'from-teal-500 to-emerald-500',
  'from-sky-500 to-indigo-500',
];

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-anchor py-20 sm:py-24 bg-mesh">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">{t.skills.sectionLabel}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            {t.skills.sectionTitle}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {t.skills.cards.map((card, i) => {
            const Icon = ICONS[i] ?? FolderKanban;
            return (
              <div
                key={i}
                className="card-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lift"
              >
                {/* Hover gradient glow */}
                <div className={`absolute -top-12 -end-12 h-32 w-32 rounded-full bg-gradient-to-br ${GRADIENTS[i] ?? GRADIENTS[0]} opacity-0 blur-2xl transition-opacity group-hover:opacity-10`} aria-hidden="true" />

                <div className="relative flex items-center gap-3.5 mb-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${GRADIENTS[i] ?? GRADIENTS[0]} text-white shadow-soft transition-transform group-hover:scale-105`}>
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-base font-semibold text-navy-800 leading-snug">
                    {card.title}
                  </h3>
                </div>
                <ul className="relative space-y-2.5">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600 rounded-lg bg-slate-50/50 px-3 py-2 transition-colors group-hover:bg-slate-50/80">
                      <span className={`mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br ${GRADIENTS[i] ?? GRADIENTS[0]} shrink-0`} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
