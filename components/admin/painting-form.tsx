"use client";

import Image from "next/image";
import { useState } from "react";

import { savePaintingAction, uploadPaintingImagesAction } from "@/lib/admin/actions";
import { PAINTING_CATEGORIES } from "@/lib/paintings/categories";
import { Button } from "@/components/ui/button";
import type { Painting, PaintingAvailability } from "@/types";

const availabilityOptions: PaintingAvailability[] = [
  "available",
  "sold",
  "reserved",
];

const labelClass =
  "block text-xs font-medium tracking-wide text-zinc-600 uppercase";
const inputClass =
  "mt-2 w-full border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900";

type PaintingFormProps = {
  painting?: Painting;
  uploadId: string;
};

export function PaintingForm({ painting, uploadId }: PaintingFormProps) {
  const [primaryImage, setPrimaryImage] = useState(painting?.image ?? "");
  const [extraImages, setExtraImages] = useState(
    (painting?.images ?? []).join("\n")
  );
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

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

    if (result.error) {
      setUploadMessage(result.error);
      return;
    }

    if (result.urls.length > 0) {
      if (!primaryImage) {
        setPrimaryImage(result.urls[0]);
        const rest = result.urls.slice(1);
        if (rest.length) {
          setExtraImages((prev) =>
            [prev, ...rest].filter(Boolean).join("\n").trim()
          );
        }
      } else {
        setExtraImages((prev) =>
          [prev, ...result.urls].filter(Boolean).join("\n").trim()
        );
      }
      setUploadMessage(`${result.urls.length} image(s) uploaded.`);
    }
  }

  return (
    <form action={savePaintingAction} className="space-y-8">
      {painting ? <input type="hidden" name="id" value={painting.id} /> : null}

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Painting title" name="title" defaultValue={painting?.title} required />
        <Field label="Artist" name="artist" defaultValue={painting?.artist} required />
        <div>
          <label className={labelClass} htmlFor="category">
            Category
          </label>
          <select
            id="category"
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
        </div>
        <Field
          label="Price (USD)"
          name="price"
          type="number"
          min={0}
          step={1}
          defaultValue={painting?.price ?? ""}
          required
        />
        <Field
          label="Dimensions"
          name="dimensions"
          defaultValue={painting?.dimensions}
          placeholder={'36" × 48"'}
          required
        />
        <Field
          label="Medium"
          name="medium"
          defaultValue={painting?.medium}
          required
        />
        <Field
          label="Year"
          name="year"
          type="number"
          min={1900}
          max={2100}
          defaultValue={painting?.year ?? new Date().getFullYear()}
          required
        />
        <Field
          label="URL slug (optional)"
          name="slug"
          defaultValue={painting?.slug}
          placeholder="auto-generated-from-title"
        />
        <div>
          <label className={labelClass} htmlFor="availability">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            defaultValue={painting?.availability ?? "available"}
            className={inputClass}
          >
            {availabilityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          defaultValue={painting?.description}
          className={`${inputClass} min-h-[120px] resize-y`}
          placeholder="Optional custom description for the painting detail page."
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="image">
            Primary image URL
          </label>
          <input
            id="image"
            name="image"
            value={primaryImage}
            onChange={(event) => setPrimaryImage(event.target.value)}
            required
            className={inputClass}
            placeholder="/uploads/paintings/... or https://..."
          />
          {primaryImage ? (
            <div className="relative mt-3 aspect-[4/3] max-w-xs overflow-hidden bg-zinc-100">
              <Image
                src={primaryImage}
                alt="Primary preview"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="images">
            Additional image URLs (one per line)
          </label>
          <textarea
            id="images"
            name="images"
            rows={6}
            value={extraImages}
            onChange={(event) => setExtraImages(event.target.value)}
            className={`${inputClass} min-h-[140px] resize-y`}
            placeholder="/uploads/paintings/extra-1.jpg"
          />
        </div>
      </div>

      <div className="border border-dashed border-zinc-300 bg-zinc-50 p-5">
        <p className="text-sm font-medium text-zinc-900">Upload images</p>
        <p className="mt-1 text-sm text-zinc-600">
          Files are saved under <code className="text-xs">public/uploads/paintings/</code> for local development.
        </p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          disabled={uploading}
          className="mt-4 block w-full text-sm text-zinc-700 file:mr-4 file:border-0 file:bg-zinc-900 file:px-4 file:py-2 file:text-sm file:text-white"
        />
        {uploadMessage ? (
          <p className="mt-2 text-sm text-zinc-600">{uploadMessage}</p>
        ) : null}
      </div>

      <label className="inline-flex items-center gap-2 text-sm text-zinc-800">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={painting?.featured}
          className="size-4 border-zinc-400"
        />
        Feature on homepage
      </label>

      <div className="flex flex-wrap gap-3 border-t border-zinc-200 pt-6">
        <Button type="submit" className="h-11 rounded-none bg-zinc-900 px-6 text-white">
          {painting ? "Save changes" : "Create painting"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  required,
  type = "text",
  placeholder,
  min,
  max,
  step,
}: {
  label: string;
  name: string;
  defaultValue?: string | number;
  required?: boolean;
  type?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        className={inputClass}
      />
    </div>
  );
}
