import type { Painting } from "@/types";

import { PAINTINGS } from "@/lib/paintings-data";

const GALLERY_DETAIL_IMAGES = [
  "https://images.unsplash.com/photo-1518998053901-0410a354d9ce?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499781350541-7783f6c6edb8?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80&auto=format&fit=crop",
];

export function getPaintingBySlug(slug: string): Painting | undefined {
  return PAINTINGS.find((painting) => painting.slug === slug);
}

export function getRelatedPaintings(
  painting: Painting,
  limit = 4
): Painting[] {
  return PAINTINGS.filter(
    (item) =>
      item.category === painting.category && item.slug !== painting.slug
  ).slice(0, limit);
}

export function getPaintingGalleryImages(painting: Painting): string[] {
  const index = Number.parseInt(painting.id, 10) || 0;
  const extras = [
    GALLERY_DETAIL_IMAGES[index % GALLERY_DETAIL_IMAGES.length],
    GALLERY_DETAIL_IMAGES[(index + 1) % GALLERY_DETAIL_IMAGES.length],
    GALLERY_DETAIL_IMAGES[(index + 2) % GALLERY_DETAIL_IMAGES.length],
  ];

  return [painting.image, ...extras.filter((url) => url !== painting.image)].slice(
    0,
    4
  );
}

export function getPaintingDescription(
  painting: Painting,
  descriptions: Record<Painting["category"], string>
): string {
  return descriptions[painting.category];
}
