import { Suspense } from "react";

import { GalleryContent } from "@/components/gallery/gallery-content";
import { GalleryHero } from "@/components/gallery/gallery-hero";
import { GalleryFallback } from "@/components/gallery/gallery-fallback";
import { listPaintings } from "@/lib/paintings/service";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const paintings = await listPaintings();

  return (
    <>
      <GalleryHero />
      <Suspense fallback={<GalleryFallback />}>
        <GalleryContent paintings={paintings} />
      </Suspense>
    </>
  );
}
