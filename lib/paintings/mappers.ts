import type { Painting } from "@/types";

import type { PaintingInput } from "@/lib/paintings/repository";

export function paintingToInput(painting: Painting): PaintingInput {
  return {
    title: painting.title,
    artist: painting.artist,
    category: painting.category,
    price: painting.price,
    currency: painting.currency,
    dimensions: painting.dimensions,
    medium: painting.medium,
    year: painting.year,
    description: painting.description,
    availability: painting.availability,
    featured: painting.featured,
    image: painting.image,
    images: painting.images,
    metaTitle: painting.metaTitle,
    metaDescription: painting.metaDescription,
    slug: painting.slug,
  };
}
