import Image from "next/image";
import Link from "next/link";
import { Eye, Pencil, Plus } from "lucide-react";

import { AdminPaintingActions } from "@/components/admin/admin-painting-actions";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { listPaintings } from "@/lib/paintings/service";

function formatUpdatedAt(iso: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

export default async function AdminPaintingsPage() {
  const paintings = await listPaintings();

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs tracking-widest text-zinc-500 uppercase">Catalog</p>
          <h1 className="font-heading mt-1 text-3xl text-zinc-900">Paintings</h1>
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

      <div className="mt-8 overflow-x-auto border border-zinc-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs tracking-wide text-zinc-500 uppercase">
            <tr>
              <th className="px-4 py-3 font-medium">Artwork</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Featured</th>
              <th className="px-4 py-3 font-medium">Updated</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paintings.map((painting) => (
              <tr key={painting.id} className="border-b border-zinc-100 last:border-0">
                <td className="px-4 py-4">
                  <div className="flex min-w-[220px] items-center gap-3">
                    <div className="relative size-14 shrink-0 overflow-hidden bg-zinc-100">
                      <Image
                        src={painting.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">{painting.title}</p>
                      <p className="text-zinc-500">{painting.artist}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-zinc-700">{painting.category}</td>
                <td className="px-4 py-4 text-zinc-700">{formatPrice(painting.price)}</td>
                <td className="px-4 py-4 capitalize text-zinc-700">
                  {painting.availability}
                </td>
                <td className="px-4 py-4 text-zinc-700">
                  {painting.featured ? "Yes" : "No"}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-zinc-600">
                  {formatUpdatedAt(painting.updatedAt)}
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/gallery/${painting.slug}`}
                      className="inline-flex size-9 items-center justify-center border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                      aria-label={`View ${painting.title}`}
                    >
                      <Eye className="size-4" />
                    </Link>
                    <Link
                      href={`/admin/paintings/${painting.id}/edit`}
                      className="inline-flex size-9 items-center justify-center border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                      aria-label={`Edit ${painting.title}`}
                    >
                      <Pencil className="size-4" />
                    </Link>
                    <AdminPaintingActions painting={painting} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {paintings.length === 0 && (
          <p className="px-4 py-16 text-center text-sm text-zinc-500">
            No paintings yet. Add your first work to populate the public gallery.
          </p>
        )}
      </div>
    </div>
  );
}
