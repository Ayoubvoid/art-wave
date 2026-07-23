"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";

import { isAdminAuthenticated } from "@/lib/admin/auth";
import type { PaintingAvailability, PaintingCategory } from "@/types";
import {
  createPainting,
  deletePainting,
  duplicatePainting,
  getPaintingById,
  setPaintingAvailability,
  setPaintingFeatured,
  updatePainting,
} from "@/lib/paintings/service";
import { ORDER_STATUSES } from "@/lib/orders/constants";
import {
  deleteOrder,
  updateOrderStatus,
} from "@/lib/orders/service";
import type { PaintingInput } from "@/lib/paintings/repository";
import type { OrderStatus } from "@/types";

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    throw new Error("Unauthorized");
  }
}

function revalidatePublicPaintingPaths(slug?: string) {
  revalidatePath("/");
  revalidatePath("/gallery");
  revalidatePath("/admin");
  revalidatePath("/admin/paintings");
  if (slug) {
    revalidatePath(`/gallery/${slug}`);
  }
}

function parsePaintingForm(formData: FormData): PaintingInput {
  const imagesRaw = String(formData.get("images") ?? "[]");
  let images: string[] = [];
  try {
    const parsed = JSON.parse(imagesRaw) as unknown;
    if (Array.isArray(parsed)) {
      images = parsed.filter((item): item is string => typeof item === "string");
    }
  } catch {
    images = imagesRaw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  const featuredValue = String(formData.get("featured") ?? "no");

  return {
    title: String(formData.get("title") ?? ""),
    artist: String(formData.get("artist") ?? ""),
    category: String(formData.get("category") ?? "Abstract") as PaintingCategory,
    price: Number(formData.get("price") ?? 0),
    currency: String(formData.get("currency") ?? "USD"),
    dimensions: String(formData.get("dimensions") ?? ""),
    medium: String(formData.get("medium") ?? ""),
    year: Number(formData.get("year") ?? new Date().getFullYear()),
    description: String(formData.get("description") ?? ""),
    availability: String(
      formData.get("availability") ?? "available"
    ) as PaintingAvailability,
    featured: featuredValue === "yes",
    image: String(formData.get("image") ?? ""),
    images,
    metaTitle: String(formData.get("metaTitle") ?? ""),
    metaDescription: String(formData.get("metaDescription") ?? ""),
    slug: String(formData.get("slug") ?? "").trim() || undefined,
  };
}

export async function savePaintingAction(formData: FormData) {
  await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();
  const input = parsePaintingForm(formData);

  if (!input.title || !input.artist || !input.image) {
    redirect(
      id
        ? `/admin/paintings/${id}/edit?error=missing-fields`
        : "/admin/paintings/new?error=missing-fields"
    );
  }

  if (id) {
    const updated = await updatePainting(id, input);
    revalidatePublicPaintingPaths(updated.slug);
    redirect(`/admin/paintings/${id}/edit?saved=1`);
  }

  const created = await createPainting(input);
  revalidatePublicPaintingPaths(created.slug);
  redirect(`/admin/paintings/${created.id}/edit?saved=1`);
}

export async function deletePaintingAction(id: string) {
  await requireAdmin();
  const removed = await deletePainting(id);
  revalidatePublicPaintingPaths(removed?.slug);
  redirect("/admin/paintings");
}

export async function duplicatePaintingAction(id: string) {
  await requireAdmin();
  const created = await duplicatePainting(id);
  revalidatePublicPaintingPaths(created.slug);
  redirect(`/admin/paintings/${created.id}/edit?saved=1`);
}

export async function toggleFeaturedAction(id: string) {
  await requireAdmin();
  const painting = await getPaintingById(id);
  if (!painting) {
    return;
  }
  const updated = await setPaintingFeatured(id, !painting.featured);
  revalidatePublicPaintingPaths(updated.slug);
  revalidatePath("/admin/paintings");
}

export async function setFeaturedAction(id: string, featured: boolean) {
  await requireAdmin();
  const updated = await setPaintingFeatured(id, featured);
  revalidatePublicPaintingPaths(updated.slug);
  revalidatePath("/admin/paintings");
}

export async function setAvailabilityAction(
  id: string,
  availability: PaintingAvailability
) {
  await requireAdmin();
  const updated = await setPaintingAvailability(id, availability);
  revalidatePublicPaintingPaths(updated.slug);
  revalidatePath("/admin/paintings");
}

export async function uploadPaintingImagesAction(formData: FormData) {
  await requireAdmin();

  const paintingId = String(formData.get("paintingId") ?? "draft");
  const files = formData
    .getAll("files")
    .filter((item): item is File => item instanceof File);

  if (files.length === 0) {
    return { error: "No files selected", urls: [] as string[] };
  }

  const uploadDir = path.join(
    process.cwd(),
    "public",
    "uploads",
    "paintings",
    paintingId
  );
  await fs.mkdir(uploadDir, { recursive: true });

  const urls: string[] = [];

  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      continue;
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const filename = `${Date.now()}-${safeName}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(uploadDir, filename), buffer);
    urls.push(`/uploads/paintings/${paintingId}/${filename}`);
  }

  return { urls };
}

export async function updateOrderStatusAction(id: string, status: string) {
  await requireAdmin();
  if (!ORDER_STATUSES.includes(status as OrderStatus)) {
    throw new Error("Invalid status");
  }
  await updateOrderStatus(id, status as OrderStatus);
  revalidatePath("/admin");
  revalidatePath("/admin/orders");
}

export async function deleteOrderAction(id: string) {
  await requireAdmin();
  await deleteOrder(id);
  revalidatePath("/admin");
  revalidatePath("/admin/orders");
}
