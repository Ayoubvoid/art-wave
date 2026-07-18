import type { Metadata } from "next";
import { Suspense } from "react";

import { GalleryContent } from "@/components/gallery/gallery-content";
import { GalleryHero } from "@/components/gallery/gallery-hero";

export const metadata: Metadata = {
  title: "Original Paintings",
  description:
    "Explore a curated collection of original paintings available for purchase. Every artwork is carefully selected to bring timeless beauty into your space.",
};

function GalleryFallback() {
  return (
    <div className="px-6 py-24 text-center lg:px-8">
      <p className="text-sm text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
        Loading collection…
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
