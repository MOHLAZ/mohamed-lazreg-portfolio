import { useState, useEffect, useCallback } from 'react';
import { LanguageContext } from '@/i18n/context';
import type { LanguageCode } from '@/i18n/types';
import { translations } from '@/i18n/context';

interface LanguageProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = 'portfolio-lang';

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLangState] = useState<LanguageCode>('fr');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (saved && ['fr', 'en', 'de', 'ar'].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang]);

  const setLang = useCallback((code: LanguageCode) => {
    setLangState(code);
    localStorage.setItem(STORAGE_KEY, code);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}
