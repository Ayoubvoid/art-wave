import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import {
  getPaintingStats,
  getRecentPaintings,
} from "@/lib/paintings/service";

export default async function AdminDashboardPage() {
  const stats = await getPaintingStats();
  const recent = await getRecentPaintings(5);

  const cards = [
    { label: "Total Paintings", value: stats.total },
    { label: "Available", value: stats.available },
    { label: "Reserved", value: stats.reserved },
    { label: "Sold", value: stats.sold },
    { label: "Featured", value: stats.featured },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
            Store overview
          </p>
          <h1 className="font-heading mt-1 text-3xl text-zinc-900">Dashboard</h1>
        </div>
        <Button
          render={
            <Link
              href="/admin/paintings/new"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-none bg-zinc-900 px-5 text-sm text-white hover:bg-zinc-800"
            />
          }
        >
          <Plus className="size-4" aria-hidden />
          Add New Painting
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs tracking-wide text-zinc-500 uppercase">
              {card.label}
            </p>
            <p className="font-heading mt-2 text-4xl text-zinc-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-heading text-2xl text-zinc-900">Recent paintings</h2>
            <Link
              href="/admin/paintings"
              className="text-sm text-zinc-600 underline-offset-4 hover:underline"
            >
              View all
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-zinc-100">
            {recent.map((painting) => (
              <li key={painting.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <div className="relative size-16 shrink-0 overflow-hidden bg-zinc-100">
                  <Image
                    src={painting.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/admin/paintings/${painting.id}/edit`}
                    className="font-medium text-zinc-900 hover:underline"
                  >
                    {painting.title}
                  </Link>
                  <p className="text-sm text-zinc-500">{painting.artist}</p>
                  <p className="mt-1 text-sm text-zinc-700">
                    {formatPrice(painting.price, painting.currency)} ·{" "}
                    <span className="capitalize">{painting.availability}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="font-heading text-2xl text-zinc-900">Quick actions</h2>
          <div className="mt-6 flex flex-col gap-3">
            <QuickLink href="/admin/paintings/new" label="Add a new painting" />
            <QuickLink href="/admin/paintings" label="Manage inventory" />
            <QuickLink href="/admin/categories" label="Browse categories" />
            <QuickLink href="/gallery" label="View public gallery" />
          </div>
        </section>
      </div>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 items-center border border-zinc-300 px-4 text-sm text-zinc-800 transition-colors hover:bg-zinc-50"
    >
      {label}
    </Link>
  );
}
