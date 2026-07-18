"use client";

import { cn } from "@/lib/utils";
import type { PaintingCategory } from "@/types";

type CategoryFilterProps = {
  categories: PaintingCategory[];
  activeCategory: PaintingCategory | "All";
  onCategoryChange: (category: PaintingCategory | "All") => void;
  resultCount: number;
};

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  resultCount,
}: CategoryFilterProps) {
  const options: (PaintingCategory | "All")[] = ["All", ...categories];

  return (
    <div className="border-b border-[var(--border)] bg-[var(--aw-background)] px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-label text-[var(--aw-primary)]">Filter by Category</p>
            <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
              {resultCount} {resultCount === 1 ? "painting" : "paintings"} available
            </p>
          </div>

          <div
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:justify-end lg:overflow-visible"
            role="group"
            aria-label="Filter paintings by category"
          >
            {options.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  aria-pressed={isActive}
                  className={cn(
                    "text-label shrink-0 border px-5 py-2.5 transition-all duration-300",
                    isActive
                      ? "border-[var(--aw-primary)] bg-[var(--aw-primary)] text-white"
                      : "border-[var(--border)] bg-transparent text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)] hover:border-[var(--aw-primary)] hover:text-[var(--aw-primary)]"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
