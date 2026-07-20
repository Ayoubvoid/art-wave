import type { Painting, PaintingAvailability } from "@/types";

import { getPaintingRepository } from "@/lib/paintings/json-painting-repository";
import type { PaintingInput } from "@/lib/paintings/repository";

export async function listPaintings(): Promise<Painting[]> {
  return getPaintingRepository().findAll();
}

export async function getPaintingBySlug(
  slug: string
): Promise<Painting | undefined> {
  const painting = await getPaintingRepository().findBySlug(slug);
  return painting ?? undefined;
}

export async function getPaintingById(
  id: string
): Promise<Painting | undefined> {
  const painting = await getPaintingRepository().findById(id);
  return painting ?? undefined;
}

export async function getRelatedPaintings(
  painting: Painting,
  limit = 4
): Promise<Painting[]> {
  const all = await listPaintings();
  return all
    .filter(
      (item) =>
        item.category === painting.category && item.slug !== painting.slug
    )
    .slice(0, limit);
}

export async function getFeaturedPaintings(limit = 8): Promise<Painting[]> {
  const all = await listPaintings();
  return all.filter((p) => p.featured).slice(0, limit);
}

export async function getPaintingStats() {
  const all = await listPaintings();
  return {
    total: all.length,
    available: all.filter((p) => p.availability === "available").length,
    sold: all.filter((p) => p.availability === "sold").length,
    featured: all.filter((p) => p.featured).length,
  };
}

export async function createPainting(input: PaintingInput): Promise<Painting> {
  return getPaintingRepository().create(input);
}

export async function updatePainting(
  id: string,
  input: PaintingInput
): Promise<Painting> {
  return getPaintingRepository().update(id, input);
}

export async function deletePainting(id: string): Promise<Painting | null> {
  return getPaintingRepository().delete(id);
}

export async function setPaintingAvailability(
  id: string,
  availability: PaintingAvailability
): Promise<Painting> {
  const painting = await getPaintingRepository().findById(id);
  if (!painting) {
    throw new Error("Painting not found");
  }

  return getPaintingRepository().update(id, {
    title: painting.title,
    artist: painting.artist,
    category: painting.category,
    price: painting.price,
    dimensions: painting.dimensions,
    medium: painting.medium,
    year: painting.year,
    description: painting.description,
    availability,
    featured: painting.featured,
    image: painting.image,
    images: painting.images,
    slug: painting.slug,
  });
}

export async function togglePaintingFeatured(id: string): Promise<Painting> {
  const painting = await getPaintingRepository().findById(id);
  if (!painting) {
    throw new Error("Painting not found");
  }

  return getPaintingRepository().update(id, {
    title: painting.title,
    artist: painting.artist,
    category: painting.category,
    price: painting.price,
    dimensions: painting.dimensions,
    medium: painting.medium,
    year: painting.year,
    description: painting.description,
    availability: painting.availability,
    featured: !painting.featured,
    image: painting.image,
    images: painting.images,
    slug: painting.slug,
  });
}
