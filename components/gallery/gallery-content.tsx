"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { CategoryFilter } from "@/components/gallery/category-filter";
import { PaintingCard } from "@/components/gallery/painting-card";
import { FadeIn } from "@/components/home/fade-in";
import {
  getCategoryFromSlug,
  PAINTING_CATEGORIES,
  PAINTINGS,
} from "@/lib/paintings-data";
import type { PaintingCategory } from "@/types";

export function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("collection");

  const initialCategory = categoryParam
    ? getCategoryFromSlug(categoryParam) ?? "All"
    : "All";

  const [activeCategory, setActiveCategory] = useState<
    PaintingCategory | "All"
  >(initialCategory);

  const filteredPaintings = useMemo(() => {
    if (activeCategory === "All") {
      return PAINTINGS;
    }

    return PAINTINGS.filter((painting) => painting.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <CategoryFilter
        categories={PAINTING_CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        resultCount={filteredPaintings.length}
      />

      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {filteredPaintings.length === 0 ? (
            <p className="py-20 text-center text-sm text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
              No paintings found in this category.
            </p>
          ) : (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {filteredPaintings.map((painting, index) => (
                <FadeIn key={painting.id} delay={Math.min(index * 0.04, 0.4)}>
                  <PaintingCard
                    painting={painting}
                    priority={index < 3}
                  />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
