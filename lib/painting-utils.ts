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

const DESCRIPTION_TEMPLATES: Record<Painting["category"], string> = {
  Abstract:
    "This original abstract painting captures emotion through bold composition and refined color harmony, making it an exceptional centerpiece for contemporary interiors.",
  Landscape:
    "This original landscape painting invites the viewer into a world of light and atmosphere, offering a serene focal point for refined living spaces.",
  Portrait:
    "This original portrait reveals depth and character through masterful technique, creating an intimate and compelling presence in any collection.",
  Modern:
    "This original modern painting balances structure and expression with contemporary sophistication, ideal for collectors who value bold yet refined art.",
  Nature:
    "This original nature-inspired work celebrates organic beauty and tactile richness, bringing calm and vitality to elegant interiors.",
  Minimalist:
    "This original minimalist painting distills form to its essential harmony, offering quiet luxury and contemplative beauty for discerning spaces.",
};

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

export function getPaintingDescription(painting: Painting): string {
  return DESCRIPTION_TEMPLATES[painting.category];
}
