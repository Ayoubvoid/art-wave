import type { PaintingCategory } from "@/types";

export const PAINTING_CATEGORIES: PaintingCategory[] = [
  "Abstract",
  "Landscape",
  "Portrait",
  "Modern",
  "Nature",
  "Minimalist",
];

export function getCategoryFromSlug(slug: string): PaintingCategory | null {
  const match = PAINTING_CATEGORIES.find(
    (category) => category.toLowerCase() === slug.toLowerCase()
  );
  return match ?? null;
}
