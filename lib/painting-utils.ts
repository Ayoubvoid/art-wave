import type { Painting } from "@/types";

const GALLERY_DETAIL_IMAGES = [
  "https://images.unsplash.com/photo-1518998053901-0410a354d9ce?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499781350541-7783f6c6edb8?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80&auto=format&fit=crop",
];

export function getPaintingGalleryImages(painting: Painting): string[] {
  if (painting.images.length > 0) {
    const extras = painting.images.filter((url) => url !== painting.image);
    return [painting.image, ...extras].slice(0, 6);
  }

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
  if (painting.description.trim()) {
    return painting.description.trim();
  }
  return descriptions[painting.category];
}
