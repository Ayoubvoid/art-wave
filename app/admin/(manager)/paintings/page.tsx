import Link from "next/link";
import { Plus } from "lucide-react";

import { PaintingsManager } from "@/components/admin/paintings-manager";
import { Button } from "@/components/ui/button";
import { listPaintings } from "@/lib/paintings/service";

export default async function AdminPaintingsPage() {
  const paintings = await listPaintings();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">Inventory</p>
          <h1 className="font-heading mt-1 text-3xl text-zinc-900">Paintings</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">
            Search, filter, and manage every artwork in your store. Changes publish
            instantly to the public website.
          </p>
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

      <PaintingsManager paintings={paintings} />
    </div>
  );
}
