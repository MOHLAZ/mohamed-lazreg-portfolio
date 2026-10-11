import { Award } from 'lucide-react';
import { useLanguage } from '@/i18n/context';

const GRADIENTS = [
  'from-blue-500 to-cyan-500',
  'from-navy-600 to-blue-500',
  'from-teal-500 to-emerald-500',
  'from-sky-500 to-indigo-500',
  'from-blue-600 to-sky-500',
  'from-navy-500 to-primary-500',
];

export default function CertificationsSection() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="section-anchor py-20 sm:py-24 bg-mesh">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">{t.certifications.sectionLabel}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-navy-800">
            {t.certifications.sectionTitle}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.certifications.groups.map((group, i) => (
            <div
              key={i}
              className="card-lift group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lift"
            >
              <div className={`absolute -top-10 -end-10 h-28 w-28 rounded-full bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} opacity-0 blur-2xl transition-opacity group-hover:opacity-10`} aria-hidden="true" />

              <div className="relative flex items-center gap-3 mb-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} text-white shadow-soft`}>
                  <Award className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-semibold text-navy-800">{group.category}</h3>
              </div>
              <ul className="relative space-y-2.5">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600 rounded-lg bg-slate-50/50 px-3 py-2">
                    <span className={`mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} shrink-0`} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
