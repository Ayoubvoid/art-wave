import { ar } from "@/lib/i18n/locales/ar";
import { en } from "@/lib/i18n/locales/en";
import { fr } from "@/lib/i18n/locales/fr";
import type { Locale, Translations } from "@/lib/i18n/types";

const dictionaries: Record<Locale, Translations> = {
  en,
  fr,
  ar,
};

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale];
}

export { en, fr, ar };
