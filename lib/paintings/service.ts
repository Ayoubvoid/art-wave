import type { Painting, PaintingAvailability } from "@/types";

import { getPaintingRepository } from "@/lib/paintings/json-painting-repository";
import { paintingToInput } from "@/lib/paintings/mappers";
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

export async function getRecentPaintings(limit = 5): Promise<Painting[]> {
  const all = await listPaintings();
  return all.slice(0, limit);
}

export async function getPaintingStats() {
  const all = await listPaintings();
  return {
    total: all.length,
    available: all.filter((p) => p.availability === "available").length,
    reserved: all.filter((p) => p.availability === "reserved").length,
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

export async function duplicatePainting(id: string): Promise<Painting> {
  const painting = await getPaintingRepository().findById(id);
  if (!painting) {
    throw new Error("Painting not found");
  }

  const input = paintingToInput(painting);
  return getPaintingRepository().create({
    ...input,
    title: `${painting.title} (Copy)`,
    slug: undefined,
    featured: false,
    availability: "available",
  });
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
    ...paintingToInput(painting),
    availability,
  });
}

export async function setPaintingFeatured(
  id: string,
  featured: boolean
): Promise<Painting> {
  const painting = await getPaintingRepository().findById(id);
  if (!painting) {
    throw new Error("Painting not found");
  }

  return getPaintingRepository().update(id, {
    ...paintingToInput(painting),
    featured,
  });
}

export async function togglePaintingFeatured(id: string): Promise<Painting> {
  const painting = await getPaintingRepository().findById(id);
  if (!painting) {
    throw new Error("Painting not found");
  }

  return setPaintingFeatured(id, !painting.featured);
}
