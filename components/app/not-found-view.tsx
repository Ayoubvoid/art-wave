"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function NotFoundView() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[calc(100vh-5rem)] sm:px-6">
      <p className="text-label mb-4 text-[var(--aw-accent)]">{t.notFound.code}</p>
      <h1 className="font-heading text-3xl text-[var(--aw-primary)] sm:text-4xl md:text-5xl">
        {t.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed sm:text-base">
        {t.notFound.description}
      </p>
      <Button
        render={
          <Link
            href="/"
            className="mt-10 inline-flex h-12 min-h-[44px] items-center rounded-none bg-[var(--aw-primary)] px-8 text-sm font-medium tracking-wide text-[var(--aw-background)] transition-colors hover:bg-[color-mix(in_srgb,var(--aw-primary)_85%,var(--aw-accent))]"
          />
        }
      >
        {t.notFound.cta}
      </Button>
    </div>
  );
}
