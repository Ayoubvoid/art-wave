"use client";

import { FadeIn } from "@/components/home/fade-in";
import { SectionHeader } from "@/components/home/section-header";
import { useLanguage } from "@/components/providers/language-provider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--aw-background)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label={t.home.testimonials.label}
            title={t.home.testimonials.title}
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3 lg:gap-10">
          {t.home.testimonials.items.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <blockquote className="flex h-full flex-col border border-[var(--border)] bg-[var(--aw-secondary)]/50 p-6 sm:p-8 lg:p-10">
                <p className="flex-1 text-base leading-relaxed italic md:text-lg">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                <footer className="mt-6 flex items-center gap-4 border-t border-[var(--border)] pt-6 sm:mt-8 sm:pt-8">
                  <div
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--aw-primary)] text-sm font-medium tracking-wide text-white"
                    aria-hidden
                  >
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <cite className="not-italic">
                      <p className="text-sm font-medium text-[var(--aw-primary)]">
                        {testimonial.name}
                      </p>
                      <p className="mt-0.5 text-xs text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
                        {testimonial.location}
                      </p>
                    </cite>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
