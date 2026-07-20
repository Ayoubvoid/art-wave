import type { Locale } from "@/lib/i18n/types";

export const LOCALES: Locale[] = ["en", "fr", "ar"];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_STORAGE_KEY = "art-wave-locale";

export const LOCALE_META: Record<
  Locale,
  { flag: string; nativeName: string; dir: "ltr" | "rtl" }
> = {
  en: { flag: "🇬🇧", nativeName: "English", dir: "ltr" },
  fr: { flag: "🇫🇷", nativeName: "Français", dir: "ltr" },
  ar: { flag: "🇲🇦", nativeName: "العربية", dir: "rtl" },
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
