import Link from "next/link";

import { PaintingForm } from "@/components/admin/painting-form";

export default function NewPaintingPage() {
  return (
    <div>
      <p className="text-xs tracking-widest text-zinc-500 uppercase">New artwork</p>
      <h1 className="font-heading mt-1 text-3xl text-zinc-900">Add painting</h1>
      <p className="mt-2 text-sm text-zinc-600">
        New entries appear on the public gallery as soon as you save.
      </p>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
        <PaintingForm uploadId="draft" />
      </div>

      <p className="mt-6 text-sm">
        <Link href="/admin/paintings" className="text-zinc-600 underline-offset-4 hover:underline">
          Back to paintings
        </Link>
      </p>
    </div>
  );
}
