import type { Painting, PaintingAvailability, PaintingCategory } from "@/types";

export type PaintingInput = {
  title: string;
  artist: string;
  category: PaintingCategory;
  price: number;
  currency: string;
  dimensions: string;
  medium: string;
  year: number;
  description: string;
  availability: PaintingAvailability;
  featured: boolean;
  image: string;
  images: string[];
  metaTitle: string;
  metaDescription: string;
  slug?: string;
};

export interface PaintingRepository {
  findAll(): Promise<Painting[]>;
  findById(id: string): Promise<Painting | null>;
  findBySlug(slug: string): Promise<Painting | null>;
  create(input: PaintingInput): Promise<Painting>;
  update(id: string, input: PaintingInput): Promise<Painting>;
  delete(id: string): Promise<Painting | null>;
}
