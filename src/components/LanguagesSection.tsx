import { Languages as LanguagesIcon, BadgeCheck, Star } from 'lucide-react';
import { useLanguage } from '@/i18n/context';
import type { LanguageCard } from '@/i18n/types';

const GRADIENTS = [
  'from-teal-500 to-emerald-500',
  'from-blue-500 to-cyan-500',
  'from-navy-600 to-blue-500',
  'from-sky-500 to-indigo-500',
];

function LangCard({ card, index }: { card: LanguageCard; index: number }) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  return (
    <div className="card-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lift">
      <div className={`absolute -top-10 -end-10 h-28 w-28 rounded-full bg-gradient-to-br ${gradient} opacity-0 blur-2xl transition-opacity group-hover:opacity-10`} aria-hidden="true" />

      <div className="relative flex items-center gap-3 mb-4">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-soft transition-transform group-hover:scale-105`}>
          <LanguagesIcon className="h-5.5 w-5.5" strokeWidth={1.7} />
        </div>
        <h3 className="text-base font-semibold text-navy-800">{card.name}</h3>
      </div>
      <div className="relative space-y-2.5">
        {card.level && (
          <div className="flex items-center gap-2.5 text-sm text-slate-600 rounded-lg bg-slate-50/50 px-3 py-2">
            <Star className="h-4 w-4 text-amber-400 shrink-0" />
            <span className="font-medium text-slate-500">{card.levelLabel}:</span>
            <span className="font-medium text-slate-700">{card.level}</span>
          </div>
        )}
        {card.certs.length > 0 && (
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <BadgeCheck className="h-4 w-4 text-success-500" />
              {card.certsLabel}:
            </p>
            {card.certs.map((cert, i) => (
              <p key={i} className="ps-6 text-sm text-slate-700 rounded-lg bg-success-50/50 px-3 py-2 border border-success-100/50">
                {cert}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function LanguagesSection() {
  const { t } = useLanguage();

  return (
    <section id="languages" className="section-anchor py-20 sm:py-24 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">{t.languages.sectionLabel}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            {t.languages.sectionTitle}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.languages.cards.map((card, i) => (
            <LangCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
