"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { AvailabilityBadge } from "@/components/gallery/availability-badge";
import { PaintingDetailSections } from "@/components/gallery/painting-detail-sections";
import { PaintingImageGallery } from "@/components/gallery/painting-image-gallery";
import { PaintingPurchasePanel } from "@/components/gallery/painting-purchase-panel";
import {
  getPaintingDescription,
  getPaintingGalleryImages,
  getRelatedPaintings,
} from "@/lib/painting-utils";
import { formatPrice } from "@/lib/format-price";
import type { Painting } from "@/types";

const ease = [0.22, 1, 0.36, 1] as const;

type PaintingDetailViewProps = {
  painting: Painting;
};

export function PaintingDetailView({ painting }: PaintingDetailViewProps) {
  const images = getPaintingGalleryImages(painting);
  const description = getPaintingDescription(painting);
  const relatedPaintings = getRelatedPaintings(painting);

  return (
    <>
      <section className="px-6 py-12 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 text-xs tracking-wide text-[color-mix(in_srgb,var(--aw-primary)_50%,transparent)] uppercase"
          >
            <Link href="/gallery" className="transition-colors hover:text-[var(--aw-primary)]">
              Gallery
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--aw-primary)]">{painting.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
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
              className="lg:py-4"
            >
              <p className="text-label text-[var(--aw-accent)]">
                {painting.category}
              </p>
              <h1 className="font-heading mt-3 text-4xl tracking-tight text-[var(--aw-primary)] md:text-5xl">
                {painting.title}
              </h1>
              <p className="mt-3 text-lg text-[color-mix(in_srgb,var(--aw-primary)_70%,transparent)]">
                {painting.artist}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="text-xl font-medium tracking-wide text-[var(--aw-accent)]">
                  {formatPrice(painting.price)}
                </p>
                <AvailabilityBadge availability={painting.availability} />
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[var(--border)] py-8 text-sm">
                <div>
                  <dt className="text-label text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
                    Medium
                  </dt>
                  <dd className="mt-1 text-[var(--aw-primary)]">
                    {painting.medium}
                  </dd>
                </div>
                <div>
                  <dt className="text-label text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
                    Dimensions
                  </dt>
                  <dd className="mt-1 text-[var(--aw-primary)]">
                    {painting.dimensions}
                  </dd>
                </div>
                <div>
                  <dt className="text-label text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
                    Year
                  </dt>
                  <dd className="mt-1 text-[var(--aw-primary)]">
                    {painting.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-label text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
                    Category
                  </dt>
                  <dd className="mt-1 text-[var(--aw-primary)]">
                    {painting.category}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-base leading-relaxed md:text-lg">
                {description}
              </p>

              <div className="mt-10">
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
