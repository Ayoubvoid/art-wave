"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import { Copy, Eye, Pencil, Search, Star, Trash2 } from "lucide-react";

import {
  deletePaintingAction,
  duplicatePaintingAction,
  setAvailabilityAction,
  setFeaturedAction,
} from "@/lib/admin/actions";
import { PAINTING_CATEGORIES } from "@/lib/paintings/categories";
import { formatPrice } from "@/lib/format-price";
import type { Painting, PaintingAvailability } from "@/types";
import { cn } from "@/lib/utils";

type PaintingsManagerProps = {
  paintings: Painting[];
};

const availabilityOptions: (PaintingAvailability | "all")[] = [
  "all",
  "available",
  "reserved",
  "sold",
];

function formatUpdatedAt(iso: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

export function PaintingsManager({ paintings }: PaintingsManagerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [availability, setAvailability] = useState<string>("all");
  const [featured, setFeatured] = useState<string>("all");
  const [pending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return paintings.filter((painting) => {
      if (category !== "all" && painting.category !== category) {
        return false;
      }
      if (availability !== "all" && painting.availability !== availability) {
        return false;
      }
      if (featured === "yes" && !painting.featured) {
        return false;
      }
      if (featured === "no" && painting.featured) {
        return false;
      }
      if (!q) {
        return true;
      }
      return (
        painting.title.toLowerCase().includes(q) ||
        painting.artist.toLowerCase().includes(q) ||
        painting.slug.toLowerCase().includes(q)
      );
    });
  }, [paintings, query, category, availability, featured]);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto_auto] lg:items-end">
          <div>
            <label className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
              Search
            </label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, artist, slug…"
                className="h-11 w-full border border-zinc-300 ps-10 pe-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
              />
            </div>
          </div>
          <FilterSelect
            label="Category"
            value={category}
            onChange={setCategory}
            options={[
              { value: "all", label: "All categories" },
              ...PAINTING_CATEGORIES.map((item) => ({
                value: item,
                label: item,
              })),
            ]}
          />
          <FilterSelect
            label="Availability"
            value={availability}
            onChange={setAvailability}
            options={availabilityOptions.map((item) => ({
              value: item,
              label: item === "all" ? "All statuses" : item,
            }))}
          />
          <FilterSelect
            label="Featured"
            value={featured}
            onChange={setFeatured}
            options={[
              { value: "all", label: "All" },
              { value: "yes", label: "Featured" },
              { value: "no", label: "Not featured" },
            ]}
          />
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Showing {filtered.length} of {paintings.length} paintings
        </p>
      </div>

      <div className="space-y-4">
        {filtered.map((painting) => (
          <article
            key={painting.id}
            className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm sm:p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-0 gap-4">
                <div className="relative size-24 shrink-0 overflow-hidden bg-zinc-100 sm:size-28">
                  <Image
                    src={painting.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-heading text-xl text-zinc-900">
                      {painting.title}
                    </h2>
                    {painting.featured ? (
                      <span className="inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-0.5 text-[10px] font-medium tracking-wide text-amber-800 uppercase">
                        <Star className="size-3" aria-hidden />
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-zinc-600">{painting.artist}</p>
                  <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-4">
                    <div>
                      <dt className="text-zinc-500">Category</dt>
                      <dd>{painting.category}</dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">Price</dt>
                      <dd>{formatPrice(painting.price, painting.currency)}</dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">Status</dt>
                      <dd className="capitalize">{painting.availability}</dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">Updated</dt>
                      <dd className="text-xs sm:text-sm">
                        {formatUpdatedAt(painting.updatedAt)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
                <ActionLink href={`/gallery/${painting.slug}`} label="View">
                  <Eye className="size-4" />
                </ActionLink>
                <ActionLink
                  href={`/admin/paintings/${painting.id}/edit`}
                  label="Edit"
                >
                  <Pencil className="size-4" />
                </ActionLink>
                <ActionButton
                  disabled={pending}
                  label="Duplicate"
                  onClick={() =>
                    startTransition(() => duplicatePaintingAction(painting.id))
                  }
                >
                  <Copy className="size-4" />
                </ActionButton>
                <ActionButton
                  disabled={pending}
                  label={painting.featured ? "Unfeature" : "Feature"}
                  onClick={() =>
                    startTransition(() =>
                      setFeaturedAction(painting.id, !painting.featured)
                    )
                  }
                >
                  <Star className="size-4" />
                </ActionButton>
                {(["available", "reserved", "sold"] as const).map((status) => (
                  <ActionButton
                    key={status}
                    disabled={pending || painting.availability === status}
                    label={`Mark ${status}`}
                    onClick={() =>
                      startTransition(() =>
                        setAvailabilityAction(painting.id, status)
                      )
                    }
                    className={cn(
                      painting.availability === status &&
                        "border-zinc-900 bg-zinc-900 text-white"
                    )}
                  >
                    <span className="text-[10px] uppercase">{status.slice(0, 3)}</span>
                  </ActionButton>
                ))}
                <ActionButton
                  disabled={pending}
                  label="Delete"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Delete “${painting.title}”? This cannot be undone.`
                      )
                    ) {
                      startTransition(() => deletePaintingAction(painting.id));
                    }
                  }}
                  className="border-red-200 text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="size-4" />
                </ActionButton>
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 ? (
          <p className="rounded-lg border border-dashed border-zinc-300 bg-white px-4 py-16 text-center text-sm text-zinc-500">
            No paintings match your filters.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="min-w-[160px]">
      <label className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
        {label}
      </label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 w-full border border-zinc-300 bg-white px-3 text-sm capitalize outline-none focus:ring-2 focus:ring-zinc-900"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="capitalize">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ActionLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      className="inline-flex size-10 items-center justify-center border border-zinc-300 text-zinc-700 transition-colors hover:bg-zinc-50"
    >
      {children}
    </Link>
  );
}

function ActionButton({
  label,
  onClick,
  disabled,
  children,
  className,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex h-10 min-w-10 items-center justify-center border border-zinc-300 px-2 text-zinc-700 transition-colors hover:bg-zinc-50 disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}
