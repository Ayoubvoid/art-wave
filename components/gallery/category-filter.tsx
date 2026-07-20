"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
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
  const { t } = useLanguage();
  const options: (PaintingCategory | "All")[] = ["All", ...categories];

  const countLabel =
    resultCount === 1 ? t.gallery.filter.countOne : t.gallery.filter.countMany;

  return (
    <div className="border-b border-[var(--border)] bg-[var(--aw-background)] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div>
            <p className="text-label text-[var(--aw-primary)]">
              {t.gallery.filter.label}
            </p>
            <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
              {resultCount} {countLabel}
            </p>
          </div>

          <div
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:justify-end lg:overflow-visible"
            role="group"
            aria-label={t.gallery.filter.aria}
          >
            {options.map((category) => {
              const isActive = activeCategory === category;
              const label =
                category === "All" ? t.common.all : t.categories[category];

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  aria-pressed={isActive}
                  className={cn(
                    "text-label shrink-0 border px-4 py-3 transition-all duration-300 sm:px-5",
                    isActive
                      ? "border-[var(--aw-primary)] bg-[var(--aw-primary)] text-white"
                      : "border-[var(--border)] bg-transparent text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)] hover:border-[var(--aw-primary)] hover:text-[var(--aw-primary)]"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
