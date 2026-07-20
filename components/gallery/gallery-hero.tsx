"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function GalleryHero() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[var(--border)] bg-[var(--aw-secondary)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-label mb-4 text-[var(--aw-accent)]">
          {t.gallery.hero.eyebrow}
        </p>
        <h1 className="font-heading text-3xl tracking-tight text-[var(--aw-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
          {t.gallery.hero.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:mt-6 md:text-lg">
          {t.gallery.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
