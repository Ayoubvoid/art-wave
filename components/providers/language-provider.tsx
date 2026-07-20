"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { getTranslations } from "@/lib/i18n";
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_META,
  LOCALE_STORAGE_KEY,
} from "@/lib/i18n/config";
import type { Locale, Translations } from "@/lib/i18n/types";

type LanguageContextValue = {
  locale: Locale;
  t: Translations;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isLocale(stored)) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const t = useMemo(() => getTranslations(locale), [locale]);
  const dir = LOCALE_META[locale].dir;

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.body.classList.toggle("aw-rtl", dir === "rtl");
  }, [locale, dir, mounted]);

  const value = useMemo(
    () => ({ locale, t, dir, setLocale }),
    [locale, t, dir, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

export function useTranslations() {
  return useLanguage().t;
}
