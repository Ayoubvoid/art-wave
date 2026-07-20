"use client";

import { FormEvent, useState } from "react";

import { FadeIn } from "@/components/home/fade-in";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-[var(--aw-primary)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="text-label mb-4 text-[var(--aw-accent)]">
            {t.home.newsletter.label}
          </p>
          <h2 className="font-heading text-3xl tracking-tight text-white md:text-4xl lg:text-5xl">
            {t.home.newsletter.title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/70">
            {t.home.newsletter.description}
          </p>

          {submitted ? (
            <p
              className="mt-10 text-sm tracking-wide text-[var(--aw-accent)]"
              role="status"
            >
              {t.home.newsletter.success}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {t.home.newsletter.emailLabel}
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder={t.home.newsletter.placeholder}
                autoComplete="email"
                className="h-12 min-h-[44px] flex-1 border border-white/20 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[var(--aw-accent)] focus:ring-1 focus:ring-[var(--aw-accent)]"
              />
              <Button
                type="submit"
                className="h-12 min-h-[44px] rounded-none bg-[var(--aw-accent)] px-8 text-sm font-medium tracking-wide text-[var(--aw-primary)] hover:bg-[color-mix(in_srgb,var(--aw-accent)_90%,white)]"
              >
                {t.home.newsletter.submit}
              </Button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
