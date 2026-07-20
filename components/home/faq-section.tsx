"use client";

import { FadeIn } from "@/components/home/fade-in";
import { SectionHeader } from "@/components/home/section-header";
import { useLanguage } from "@/components/providers/language-provider";

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[var(--border)] bg-[var(--aw-background)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeader
            label={t.home.faq.label}
            title={t.home.faq.title}
            align="center"
          />
        </FadeIn>

        <dl className="mt-10 space-y-6 sm:mt-12">
          {t.home.faq.items.map((item, index) => (
            <FadeIn key={item.question} delay={index * 0.06}>
              <div className="border border-[var(--border)] bg-[var(--aw-secondary)]/40 p-6 sm:p-8">
                <dt className="font-heading text-lg text-[var(--aw-primary)] sm:text-xl">
                  {item.question}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed sm:text-base">
                  {item.answer}
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
