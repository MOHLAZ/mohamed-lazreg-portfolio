import { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import type { LanguageCode } from '@/i18n/types';
import { languageNames, useLanguage } from '@/i18n/context';

const LANGS: LanguageCode[] = ['fr', 'en', 'de', 'ar'];

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 text-sm font-medium text-navy-700 transition-all hover:border-primary-300 hover:bg-primary-50 hover:shadow-soft"
        aria-label="Language selector"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4 text-primary-500" />
        <span className="uppercase font-semibold">{lang}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute end-0 mt-2 w-48 rounded-2xl border border-slate-200 bg-white py-2 shadow-lift z-50 animate-fade-in-down">
          {LANGS.map((code) => (
            <button
              key={code}
              onClick={() => {
                setLang(code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-primary-50 ${
                lang === code ? 'font-semibold text-primary-600' : 'text-slate-600'
              }`}
            >
              <span>{languageNames[code]}</span>
              {lang === code && <Check className="h-4 w-4 text-primary-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
