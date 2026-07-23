"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

import { savePaintingAction, uploadPaintingImagesAction } from "@/lib/admin/actions";
import { STORE_CURRENCIES } from "@/lib/admin/store-currencies";
import { PAINTING_CATEGORIES } from "@/lib/paintings/categories";
import { slugifyTitle } from "@/lib/paintings/slug";
import { Button } from "@/components/ui/button";
import type { Painting, PaintingAvailability } from "@/types";

const labelClass =
  "block text-xs font-medium tracking-wide text-zinc-500 uppercase";
const inputClass =
  "mt-2 w-full border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900";

const availabilityOptions: PaintingAvailability[] = [
  "available",
  "reserved",
  "sold",
];

type PaintingFormProps = {
  painting?: Painting;
  uploadId: string;
};

export function PaintingForm({ painting, uploadId }: PaintingFormProps) {
  const [title, setTitle] = useState(painting?.title ?? "");
  const [slug, setSlug] = useState(painting?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(painting?.slug));
  const [coverUrl, setCoverUrl] = useState(painting?.image ?? "");
  const [gallery, setGallery] = useState<string[]>(() => {
    if (!painting) {
      return [];
    }
    const extras = painting.images.filter((url) => url !== painting.image);
    return painting.image ? [painting.image, ...extras] : extras;
  });
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!slugTouched && title.trim()) {
      setSlug(slugifyTitle(title));
    }
  }, [title, slugTouched]);

  const extraImages = useMemo(
    () => gallery.filter((url) => url !== coverUrl),
    [gallery, coverUrl]
  );

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;
    if (!fileList?.length) {
      return;
    }

    setUploading(true);
    setUploadMessage(null);

    const formData = new FormData();
    formData.set("paintingId", uploadId);
    for (const file of Array.from(fileList)) {
      formData.append("files", file);
    }

    const result = await uploadPaintingImagesAction(formData);
    setUploading(false);
    event.target.value = "";

    if (result.error) {
      setUploadMessage(result.error);
      return;
    }

    if (result.urls.length > 0) {
      setGallery((prev) => [...prev, ...result.urls]);
      if (!coverUrl) {
        setCoverUrl(result.urls[0]);
      }
      setUploadMessage(`${result.urls.length} image(s) uploaded.`);
    }
  }

  function removeImage(url: string) {
    setGallery((prev) => prev.filter((item) => item !== url));
    if (coverUrl === url) {
      setCoverUrl("");
    }
  }

  return (
    <form action={savePaintingAction} className="space-y-10">
      {painting ? <input type="hidden" name="id" value={painting.id} /> : null}
      <input type="hidden" name="image" value={coverUrl} />
      <input type="hidden" name="images" value={JSON.stringify(extraImages)} />

      <section className="space-y-5">
        <SectionHeading title="General" />
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Painting title">
            <input
              name="title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="Slug">
            <input
              name="slug"
              value={slug}
              onChange={(event) => {
                setSlugTouched(true);
                setSlug(event.target.value);
              }}
              className={inputClass}
              placeholder="auto-generated-from-title"
            />
          </Field>
          <Field label="Artist">
            <input
              name="artist"
              required
              defaultValue={painting?.artist}
              className={inputClass}
            />
          </Field>
          <Field label="Category">
            <select
              name="category"
              defaultValue={painting?.category ?? "Abstract"}
              className={inputClass}
            >
              {PAINTING_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Price">
            <input
              name="price"
              type="number"
              min={0}
              step={1}
              required
              defaultValue={painting?.price ?? ""}
              className={inputClass}
            />
          </Field>
          <Field label="Currency">
            <select
              name="currency"
              defaultValue={painting?.currency ?? "USD"}
              className={inputClass}
            >
              {STORE_CURRENCIES.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Year">
            <input
              name="year"
              type="number"
              min={1900}
              max={2100}
              required
              defaultValue={painting?.year ?? new Date().getFullYear()}
              className={inputClass}
            />
          </Field>
          <Field label="Medium">
            <input
              name="medium"
              required
              defaultValue={painting?.medium}
              className={inputClass}
            />
          </Field>
          <Field label="Dimensions" className="md:col-span-2">
            <input
              name="dimensions"
              required
              defaultValue={painting?.dimensions}
              placeholder={'36" × 48"'}
              className={inputClass}
            />
          </Field>
        </div>
      </section>

      <section className="space-y-3">
        <SectionHeading title="Description" />
        <textarea
          name="description"
          rows={8}
          defaultValue={painting?.description}
          className={`${inputClass} min-h-[180px] resize-y leading-relaxed`}
          placeholder="Write a rich description for collectors — materials, mood, provenance, and display notes."
        />
      </section>

      <section className="space-y-4">
        <SectionHeading title="Images" />
        <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-5">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            disabled={uploading}
            className="block w-full text-sm text-zinc-700 file:mr-4 file:border-0 file:bg-zinc-900 file:px-4 file:py-2 file:text-sm file:text-white"
          />
          {uploadMessage ? (
            <p className="mt-2 text-sm text-zinc-600">{uploadMessage}</p>
          ) : null}
        </div>

        {gallery.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((url) => (
              <div
                key={url}
                className="relative overflow-hidden border border-zinc-200 bg-white"
              >
                <div className="relative aspect-[4/3] bg-zinc-100">
                  <Image src={url} alt="" fill className="object-cover" sizes="240px" />
                </div>
                <div className="flex flex-wrap gap-2 p-3">
                  <button
                    type="button"
                    onClick={() => setCoverUrl(url)}
                    className={`h-9 px-3 text-xs uppercase tracking-wide ${
                      coverUrl === url
                        ? "bg-zinc-900 text-white"
                        : "border border-zinc-300 text-zinc-700"
                    }`}
                  >
                    {coverUrl === url ? "Cover image" : "Set cover"}
                  </button>
                  <button
                    type="button"
                    onClick={() => removeImage(url)}
                    className="inline-flex size-9 items-center justify-center border border-red-200 text-red-700"
                    aria-label="Remove image"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-zinc-500">
            Upload one or more images, then choose a cover image for the gallery.
          </p>
        )}
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <SectionHeading title="Status" />
          <select
            name="availability"
            defaultValue={painting?.availability ?? "available"}
            className={inputClass}
          >
            {availabilityOptions.map((option) => (
              <option key={option} value={option} className="capitalize">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-3">
          <SectionHeading title="Featured" />
          <select
            name="featured"
            defaultValue={painting?.featured ? "yes" : "no"}
            className={inputClass}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeading title="SEO" />
        <Field label="Meta title">
          <input
            name="metaTitle"
            defaultValue={painting?.metaTitle}
            placeholder={title ? `${title} | Art Wave` : "Painting title | Art Wave"}
            className={inputClass}
          />
        </Field>
        <Field label="Meta description">
          <textarea
            name="metaDescription"
            rows={4}
            defaultValue={painting?.metaDescription}
            className={`${inputClass} min-h-[100px] resize-y`}
            placeholder="Short summary for search engines and social previews."
          />
        </Field>
      </section>

      <div className="border-t border-zinc-200 pt-6">
        <Button
          type="submit"
          disabled={!coverUrl}
          className="h-11 rounded-none bg-zinc-900 px-8 text-white disabled:opacity-50"
        >
          {painting ? "Save changes" : "Create painting"}
        </Button>
        {!coverUrl ? (
          <p className="mt-2 text-sm text-amber-700">
            Add at least one image and set a cover before saving.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function SectionHeading({ title }: { title: string }) {
  return <h2 className="font-heading text-xl text-zinc-900">{title}</h2>;
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}
