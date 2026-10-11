import { useLanguage } from '@/i18n/context';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white py-10">
      <div className="absolute inset-0 bg-mesh opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-primary-600 text-white font-bold text-sm shadow-soft">
              ML
            </div>
            <div className="text-sm leading-relaxed">
              <span className="font-semibold text-navy-800 block">{t.footer.name}</span>
              <span className="text-slate-500">{t.footer.portfolioMention}</span>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            © {year} {t.footer.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
