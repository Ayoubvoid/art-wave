"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { CategoryFilter } from "@/components/gallery/category-filter";
import { PaintingCard } from "@/components/gallery/painting-card";
import { FadeIn } from "@/components/home/fade-in";
import { useLanguage } from "@/components/providers/language-provider";
import {
  getCategoryFromSlug,
  PAINTING_CATEGORIES,
} from "@/lib/paintings/categories";
import type { Painting, PaintingCategory } from "@/types";

type GalleryContentProps = {
  paintings: Painting[];
};

export function GalleryContent({ paintings }: GalleryContentProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("collection");
  const { t } = useLanguage();

  const initialCategory = categoryParam
    ? getCategoryFromSlug(categoryParam) ?? "All"
    : "All";

  const [activeCategory, setActiveCategory] = useState<
    PaintingCategory | "All"
  >(initialCategory);

  const filteredPaintings = useMemo(() => {
    if (activeCategory === "All") {
      return paintings;
    }

    return paintings.filter((painting) => painting.category === activeCategory);
  }, [activeCategory, paintings]);

  return (
    <>
      <CategoryFilter
        categories={PAINTING_CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        resultCount={filteredPaintings.length}
      />

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {filteredPaintings.length === 0 ? (
            <p className="py-16 text-center text-sm text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)] sm:py-20">
              {t.gallery.filter.empty}
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
              {filteredPaintings.map((painting, index) => (
                <FadeIn key={painting.id} delay={Math.min(index * 0.04, 0.4)}>
                  <PaintingCard painting={painting} priority={index < 3} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
