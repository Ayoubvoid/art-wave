"use client";

import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/home/fade-in";
import { SectionHeader } from "@/components/home/section-header";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import type { Painting } from "@/types";

type FeaturedArtworksProps = {
  paintings: Painting[];
};

export function FeaturedArtworks({ paintings }: FeaturedArtworksProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--aw-secondary)] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label={t.home.artworks.label}
            title={t.home.artworks.title}
            description={t.home.artworks.description}
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {paintings.map((painting, index) => (
            <FadeIn key={painting.id} delay={index * 0.05}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[var(--aw-background)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 space-y-1">
                  <h3 className="font-heading text-xl text-[var(--aw-primary)]">
                    {painting.title}
                  </h3>
                  <p className="text-sm text-[color-mix(in_srgb,var(--aw-primary)_60%,transparent)]">
                    {painting.artist}
                  </p>
                  <p className="pt-1 text-sm font-medium tracking-wide text-[var(--aw-accent)]">
                    {formatPrice(painting.price)}
                  </p>
                </div>

                <Button
                  render={
                    <Link
                      href={`/gallery/${painting.slug}`}
                      className="mt-5 inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-none border border-[var(--aw-primary)] bg-transparent text-xs font-medium tracking-widest uppercase text-[var(--aw-primary)] transition-colors hover:bg-[var(--aw-primary)] hover:text-white"
                    />
                  }
                >
                  {t.common.viewDetails}
                </Button>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
