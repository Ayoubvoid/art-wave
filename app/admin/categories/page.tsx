import Link from "next/link";

import { PAINTING_CATEGORIES } from "@/lib/paintings/categories";
import { listPaintings } from "@/lib/paintings/service";

export default async function AdminCategoriesPage() {
  const paintings = await listPaintings();

  const counts = PAINTING_CATEGORIES.map((category) => ({
    category,
    total: paintings.filter((p) => p.category === category).length,
    available: paintings.filter(
      (p) => p.category === category && p.availability === "available"
    ).length,
  }));

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">Catalog</p>
        <h1 className="font-heading mt-1 text-3xl text-zinc-900">Categories</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Overview of painting categories used across your store. Assign categories
          when adding or editing paintings.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {counts.map((item) => (
          <div
            key={item.category}
            className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <h2 className="font-heading text-2xl text-zinc-900">{item.category}</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Total paintings</dt>
                <dd className="font-medium">{item.total}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Available</dt>
                <dd className="font-medium">{item.available}</dd>
              </div>
            </dl>
            <Link
              href={`/admin/paintings?category=${encodeURIComponent(item.category)}`}
              className="mt-4 inline-flex text-sm text-zinc-700 underline-offset-4 hover:underline"
            >
              View in paintings
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
