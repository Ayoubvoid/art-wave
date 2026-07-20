import Link from "next/link";
import { notFound } from "next/navigation";

import { PaintingForm } from "@/components/admin/painting-form";
import { getPaintingById } from "@/lib/paintings/service";

type EditPaintingPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
};

export default async function EditPaintingPage({
  params,
  searchParams,
}: EditPaintingPageProps) {
  const { id } = await params;
  const { saved } = await searchParams;
  const painting = await getPaintingById(id);

  if (!painting) {
    notFound();
  }

  return (
    <div>
      <p className="text-xs tracking-widest text-zinc-500 uppercase">Edit artwork</p>
      <h1 className="font-heading mt-1 text-3xl text-zinc-900">{painting.title}</h1>
      {saved ? (
        <p className="mt-2 text-sm text-emerald-700">Changes saved successfully.</p>
      ) : (
        <p className="mt-2 text-sm text-zinc-600">
          Updates are reflected on the public site immediately after saving.
        </p>
      )}

      <div className="mt-8 border border-zinc-200 bg-white p-6 sm:p-8">
        <PaintingForm painting={painting} uploadId={painting.id} />
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link
          href="/admin/paintings"
          className="text-zinc-600 underline-offset-4 hover:underline"
        >
          Back to paintings
        </Link>
        <Link
          href={`/gallery/${painting.slug}`}
          className="text-zinc-600 underline-offset-4 hover:underline"
        >
          View on website
        </Link>
      </div>
    </div>
  );
}
