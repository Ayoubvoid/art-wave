"use client";

import Image from "next/image";

import { FadeIn } from "@/components/home/fade-in";
import { useLanguage } from "@/components/providers/language-provider";
import { ABOUT_IMAGE } from "@/lib/home-data";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[var(--aw-background)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
        <FadeIn direction="up">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--aw-secondary)] lg:aspect-[3/4]">
            <Image
              src={ABOUT_IMAGE}
              alt={t.home.about.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-lg lg:max-w-none">
            <p className="text-label mb-4 text-[var(--aw-accent)]">
              {t.home.about.label}
            </p>
            <h2 className="font-heading text-3xl tracking-tight text-[var(--aw-primary)] md:text-4xl lg:text-5xl">
              {t.home.about.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed sm:mt-8 md:text-lg">
              <p>{t.home.about.p1}</p>
              <p>{t.home.about.p2}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
