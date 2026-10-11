import { createContext, useContext } from 'react';
import type { LanguageCode, Translations } from './types';
import { fr } from './fr';
import { en } from './en';
import { de } from './de';
import { ar } from './ar';

export const translations: Record<LanguageCode, Translations> = { fr, en, de, ar };

export const languageNames: Record<LanguageCode, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
  ar: 'العربية',
};

export interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  setLang: () => {},
  t: fr,
});

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  return ctx;
}
