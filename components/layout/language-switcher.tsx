"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { LOCALE_META, LOCALES } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="text-label flex min-h-11 min-w-11 items-center gap-2 border border-[var(--border)] px-3 py-2 transition-colors hover:border-[var(--aw-primary)] sm:px-4"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.language.label}
      >
        <span aria-hidden>{LOCALE_META[locale].flag}</span>
        <span className="hidden sm:inline">{LOCALE_META[locale].nativeName}</span>
        <ChevronDown className="size-3.5 opacity-60" aria-hidden />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.language.label}
          className="absolute end-0 z-50 mt-2 min-w-[11rem] border border-[var(--border)] bg-[var(--aw-background)] py-1 shadow-lg"
        >
          {LOCALES.map((code) => {
            const meta = LOCALE_META[code];
            const isActive = code === locale;

            return (
              <li key={code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(code as Locale);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full min-h-11 items-center gap-3 px-4 py-2.5 text-start text-sm transition-colors hover:bg-[var(--aw-secondary)]",
                    isActive && "bg-[var(--aw-secondary)]/80 font-medium"
                  )}
                >
                  <span aria-hidden>{meta.flag}</span>
                  <span>{meta.nativeName}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
