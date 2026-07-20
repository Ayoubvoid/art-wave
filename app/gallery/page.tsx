"use client";

import { Suspense } from "react";

import { GalleryContent } from "@/components/gallery/gallery-content";
import { GalleryHero } from "@/components/gallery/gallery-hero";
import { useLanguage } from "@/components/providers/language-provider";

function GalleryFallback() {
  const { t } = useLanguage();

  return (
    <div className="px-4 py-20 text-center sm:px-6 sm:py-24">
      <p className="text-sm text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
        {t.common.loadingCollection}
      </p>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <Suspense fallback={<GalleryFallback />}>
        <GalleryContent />
      </Suspense>
    </>
  );
}
