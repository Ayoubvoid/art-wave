"use client";

import { BadgeCheck, Globe, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/home/fade-in";
import { SectionHeader } from "@/components/home/section-header";
import { useLanguage } from "@/components/providers/language-provider";

const icons = [BadgeCheck, Globe, Sparkles];

export function WhyChoose() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-[var(--border)] bg-[var(--aw-secondary)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label={t.home.why.label}
            title={t.home.why.title}
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[var(--border)]">
          {t.home.why.items.map((feature, index) => {
            const Icon = icons[index] ?? BadgeCheck;

            return (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <article className="group flex flex-col items-center px-4 py-8 text-center transition-transform duration-500 hover:-translate-y-1 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
                  <div className="flex size-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--aw-background)] transition-colors duration-300 group-hover:border-[var(--aw-accent)]">
                    <Icon className="size-6 text-[var(--aw-accent)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading mt-6 text-xl text-[var(--aw-primary)] sm:mt-8 sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed sm:mt-4 md:text-base">
                    {feature.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
