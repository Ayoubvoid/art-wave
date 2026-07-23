"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { AvailabilityBadge } from "@/components/gallery/availability-badge";
import { PaintingDetailSections } from "@/components/gallery/painting-detail-sections";
import { PaintingImageGallery } from "@/components/gallery/painting-image-gallery";
import { PaintingPurchasePanel } from "@/components/gallery/painting-purchase-panel";
import { useLanguage } from "@/components/providers/language-provider";
import {
  getPaintingDescription,
  getPaintingGalleryImages,
} from "@/lib/painting-utils";
import { formatPrice } from "@/lib/format-price";
import type { Painting } from "@/types";

const ease = [0.22, 1, 0.36, 1] as const;

type PaintingDetailViewProps = {
  painting: Painting;
  relatedPaintings: Painting[];
};

export function PaintingDetailView({
  painting,
  relatedPaintings,
}: PaintingDetailViewProps) {
  const { t } = useLanguage();
  const images = getPaintingGalleryImages(painting);
  const description = getPaintingDescription(painting, t.painting.descriptions);

  return (
    <>
      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-xs tracking-wide text-[color-mix(in_srgb,var(--aw-primary)_50%,transparent)] uppercase sm:mb-10"
          >
            <Link
              href="/gallery"
              className="transition-colors hover:text-[var(--aw-primary)]"
            >
              {t.common.breadcrumbGallery}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--aw-primary)]">{painting.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <PaintingImageGallery images={images} title={painting.title} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="lg:py-2"
            >
              <p className="text-label text-[var(--aw-accent)]">
                {t.categories[painting.category]}
              </p>
              <h1 className="font-heading mt-3 text-3xl tracking-tight text-[var(--aw-primary)] sm:text-4xl md:text-5xl">
                {painting.title}
              </h1>
              <p className="mt-3 text-base text-[color-mix(in_srgb,var(--aw-primary)_70%,transparent)] sm:text-lg">
                {painting.artist}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6 sm:gap-4">
                <p className="text-lg font-medium tracking-wide text-[var(--aw-accent)] sm:text-xl">
                  {formatPrice(painting.price, painting.currency)}
                </p>
                <AvailabilityBadge availability={painting.availability} />
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-[var(--border)] py-6 text-sm sm:mt-8 sm:gap-x-6 sm:py-8">
                <div>
                  <dt className="text-label text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
                    {t.painting.medium}
                  </dt>
                  <dd className="mt-1 text-[var(--aw-primary)]">
                    {painting.medium}
                  </dd>
                </div>
                <div>
                  <dt className="text-label text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
                    {t.painting.dimensions}
                  </dt>
                  <dd className="mt-1 text-[var(--aw-primary)]">
                    {painting.dimensions}
                  </dd>
                </div>
                <div>
                  <dt className="text-label text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
                    {t.painting.year}
                  </dt>
                  <dd className="mt-1 text-[var(--aw-primary)]">
                    {painting.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-label text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
                    {t.painting.category}
                  </dt>
                  <dd className="mt-1 text-[var(--aw-primary)]">
                    {t.categories[painting.category]}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-base leading-relaxed sm:mt-8 md:text-lg">
                {description}
              </p>

              <div className="mt-8 sm:mt-10">
                <PaintingPurchasePanel painting={painting} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PaintingDetailSections
        painting={painting}
        relatedPaintings={relatedPaintings}
      />
    </>
  );
}
