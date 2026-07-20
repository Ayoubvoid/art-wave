"use client";

import Image from "next/image";
import Link from "next/link";

import { AvailabilityBadge } from "@/components/gallery/availability-badge";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import type { Painting } from "@/types";

type PaintingCardProps = {
  painting: Painting;
  priority?: boolean;
};

export function PaintingCard({ painting, priority = false }: PaintingCardProps) {
  const { t } = useLanguage();

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--aw-secondary)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <Image
          src={painting.image}
          alt={painting.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3 sm:p-4">
          <AvailabilityBadge
            availability={painting.availability}
            className="backdrop-blur-sm"
          />
          {painting.featured && (
            <span className="text-label border border-white/30 bg-[var(--aw-primary)]/80 px-3 py-1.5 text-white backdrop-blur-sm">
              {t.common.featured}
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-label text-[var(--aw-accent)]">
          {t.categories[painting.category]}
        </p>
        <h2 className="font-heading mt-2 text-xl text-[var(--aw-primary)] lg:text-2xl">
          {painting.title}
        </h2>
        <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--aw-primary)_60%,transparent)]">
          {painting.artist}
        </p>
        <p className="mt-3 text-xs tracking-wide text-[color-mix(in_srgb,var(--aw-primary)_50%,transparent)]">
          {painting.dimensions} · {painting.medium}
        </p>
        <p className="mt-4 text-base font-medium tracking-wide text-[var(--aw-accent)]">
          {formatPrice(painting.price)}
        </p>

        <Button
          render={
            <Link
              href={`/gallery/${painting.slug}`}
              className="mt-6 inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-none border border-[var(--aw-primary)] bg-transparent text-xs font-medium tracking-widest uppercase text-[var(--aw-primary)] transition-colors hover:bg-[var(--aw-primary)] hover:text-white"
            />
          }
        >
          {t.common.viewPainting}
        </Button>
      </div>
    </article>
  );
}
