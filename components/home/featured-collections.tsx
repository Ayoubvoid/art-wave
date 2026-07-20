"use client";

import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/home/fade-in";
import { SectionHeader } from "@/components/home/section-header";
import { useLanguage } from "@/components/providers/language-provider";
import { FEATURED_COLLECTIONS } from "@/lib/home-data";
import type { CollectionSlug } from "@/lib/i18n/types";

export function FeaturedCollections() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--aw-background)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label={t.home.collections.label}
            title={t.home.collections.title}
            description={t.home.collections.description}
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {FEATURED_COLLECTIONS.map((collection, index) => {
            const copy =
              t.home.collections.items[collection.slug as CollectionSlug];

            return (
              <FadeIn key={collection.slug} delay={index * 0.08}>
                <Link
                  href={`/gallery?collection=${collection.slug}`}
                  className="group block"
                >
                  <article className="relative aspect-[4/5] overflow-hidden bg-[var(--aw-secondary)] sm:aspect-[3/4]">
                    <Image
                      src={collection.image}
                      alt={copy.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--aw-primary)]/80 via-[var(--aw-primary)]/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                      <h3 className="font-heading text-2xl text-white sm:text-3xl lg:text-4xl">
                        {copy.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                        {copy.description}
                      </p>
                      <span className="text-label mt-5 inline-block text-[var(--aw-accent)] transition-transform duration-300 group-hover:translate-x-1">
                        {t.common.viewCollection}
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
