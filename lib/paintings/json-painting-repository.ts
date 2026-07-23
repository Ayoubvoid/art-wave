import { promises as fs } from "fs";
import path from "path";

import type { Painting } from "@/types";

import { ensureUniqueSlug, slugifyTitle } from "@/lib/paintings/slug";
import type { PaintingInput, PaintingRepository } from "@/lib/paintings/repository";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "paintings.json");

function nowIso(): string {
  return new Date().toISOString();
}

function normalizePainting(raw: Painting): Painting {
  return {
    ...raw,
    description: raw.description ?? "",
    images: raw.images ?? [],
    currency: raw.currency ?? "USD",
    metaTitle: raw.metaTitle ?? "",
    metaDescription: raw.metaDescription ?? "",
    updatedAt: raw.updatedAt ?? nowIso(),
  };
}

async function readStore(): Promise<Painting[]> {
  try {
    const content = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(content) as Painting[];
    return parsed.map(normalizePainting);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      await fs.mkdir(DATA_DIR, { recursive: true });
      await fs.writeFile(DATA_FILE, "[]\n", "utf8");
      return [];
    }
    throw error;
  }
}

async function writeStore(paintings: Painting[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, `${JSON.stringify(paintings, null, 2)}\n`, "utf8");
}

function nextId(paintings: Painting[]): string {
  const max = paintings.reduce((acc, item) => {
    const numeric = Number.parseInt(item.id, 10);
    return Number.isFinite(numeric) ? Math.max(acc, numeric) : acc;
  }, 0);
  return String(max + 1);
}

export class JsonPaintingRepository implements PaintingRepository {
  async findAll(): Promise<Painting[]> {
    const paintings = await readStore();
    return paintings.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }

  async findById(id: string): Promise<Painting | null> {
    const paintings = await readStore();
    return paintings.find((painting) => painting.id === id) ?? null;
  }

  async findBySlug(slug: string): Promise<Painting | null> {
    const paintings = await readStore();
    return paintings.find((painting) => painting.slug === slug) ?? null;
  }

  async create(input: PaintingInput): Promise<Painting> {
    const paintings = await readStore();
    const slugSet = new Set(paintings.map((p) => p.slug));
    const baseSlug = slugifyTitle(input.slug?.trim() || input.title);
    const slug = ensureUniqueSlug(baseSlug, slugSet);

    const painting: Painting = {
      id: nextId(paintings),
      slug,
      title: input.title.trim(),
      artist: input.artist.trim(),
      category: input.category,
      price: input.price,
      currency: input.currency.trim() || "USD",
      dimensions: input.dimensions.trim(),
      medium: input.medium.trim(),
      year: input.year,
      description: input.description.trim(),
      availability: input.availability,
      featured: input.featured,
      image: input.image,
      images: input.images.filter(Boolean),
      metaTitle: input.metaTitle.trim(),
      metaDescription: input.metaDescription.trim(),
      updatedAt: nowIso(),
    };

    paintings.push(painting);
    await writeStore(paintings);
    return painting;
  }

  async update(id: string, input: PaintingInput): Promise<Painting> {
    const paintings = await readStore();
    const index = paintings.findIndex((painting) => painting.id === id);

    if (index === -1) {
      throw new Error("Painting not found");
    }

    const existing = paintings[index];
    const slugSet = new Set(
      paintings.filter((p) => p.id !== id).map((p) => p.slug)
    );
    const baseSlug = slugifyTitle(input.slug?.trim() || input.title);
    const slug = ensureUniqueSlug(baseSlug, slugSet, existing.slug);

    const updated: Painting = {
      ...existing,
      slug,
      title: input.title.trim(),
      artist: input.artist.trim(),
      category: input.category,
      price: input.price,
      currency: input.currency.trim() || "USD",
      dimensions: input.dimensions.trim(),
      medium: input.medium.trim(),
      year: input.year,
      description: input.description.trim(),
      availability: input.availability,
      featured: input.featured,
      image: input.image,
      images: input.images.filter(Boolean),
      metaTitle: input.metaTitle.trim(),
      metaDescription: input.metaDescription.trim(),
      updatedAt: nowIso(),
    };

    paintings[index] = updated;
    await writeStore(paintings);
    return updated;
  }

  async delete(id: string): Promise<Painting | null> {
    const paintings = await readStore();
    const index = paintings.findIndex((painting) => painting.id === id);

    if (index === -1) {
      return null;
    }

    const [removed] = paintings.splice(index, 1);
    await writeStore(paintings);
    return removed;
  }
}

let repositoryInstance: JsonPaintingRepository | null = null;

export function getPaintingRepository(): PaintingRepository {
  if (!repositoryInstance) {
    repositoryInstance = new JsonPaintingRepository();
  }
  return repositoryInstance;
}
