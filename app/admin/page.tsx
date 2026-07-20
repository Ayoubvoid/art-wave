import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getPaintingStats } from "@/lib/paintings/service";

export default async function AdminDashboardPage() {
  const stats = await getPaintingStats();

  const cards = [
    { label: "Total Paintings", value: stats.total },
    { label: "Available", value: stats.available },
    { label: "Sold", value: stats.sold },
    { label: "Featured", value: stats.featured },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs tracking-widest text-zinc-500 uppercase">Overview</p>
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs tracking-wide text-zinc-500 uppercase">
              {card.label}
            </p>
            <p className="font-heading mt-2 text-4xl text-zinc-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-medium text-zinc-900">Quick actions</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Manage your catalog, update availability, and feature works for the homepage.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/admin/paintings"
            className="inline-flex h-10 items-center border border-zinc-300 px-4 text-sm hover:bg-zinc-50"
          >
            View all paintings
          </Link>
          <Link
            href="/gallery"
            className="inline-flex h-10 items-center border border-zinc-300 px-4 text-sm hover:bg-zinc-50"
          >
            View public gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
