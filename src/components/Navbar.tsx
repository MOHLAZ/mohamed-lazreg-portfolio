import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/i18n/context';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#profile', label: t.nav.profile },
    { href: '#domains', label: t.nav.domains },
    { href: '#experiences', label: t.nav.experiences },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#education', label: t.nav.education },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#languages', label: t.nav.languages },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-soft border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3" aria-label={t.navAriaLabel}>
        <a href="#profile" className="flex items-center gap-2.5 shrink-0 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-primary-600 text-white font-bold text-sm shadow-soft transition-transform group-hover:scale-105">
            ML
          </div>
          <span className="hidden sm:block font-semibold text-navy-800 text-sm">{t.profile.name}</span>
        </a>

        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary-600 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary-500 after:transition-all hover:after:w-1/2"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <button
            className="lg:hidden flex items-center justify-center rounded-xl p-2 text-navy-700 hover:bg-navy-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden glass border-t border-slate-200/60 animate-fade-in-down">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
