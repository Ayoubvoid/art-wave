import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PaintingDetailView } from "@/components/gallery/painting-detail-view";
import { en } from "@/lib/i18n/locales/en";
import { getPaintingDescription } from "@/lib/painting-utils";
import {
  getPaintingBySlug,
  getRelatedPaintings,
  listPaintings,
} from "@/lib/paintings/service";

export const dynamic = "force-dynamic";

type PaintingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const paintings = await listPaintings();
  return paintings.map((painting) => ({
    slug: painting.slug,
  }));
}

export async function generateMetadata({
  params,
}: PaintingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const painting = await getPaintingBySlug(slug);

  if (!painting) {
    return {
      title: "Painting Not Found",
    };
  }

  const description = `${painting.title} by ${painting.artist} — an original ${painting.category.toLowerCase()} painting available through Art Wave. ${getPaintingDescription(painting, en.painting.descriptions)}`;

  return {
    title: `${painting.title} | Art Wave`,
    description,
    openGraph: {
      title: `${painting.title} | Art Wave`,
      description,
      images: [{ url: painting.image }],
    },
  };
}

export default async function PaintingPage({ params }: PaintingPageProps) {
  const { slug } = await params;
  const painting = await getPaintingBySlug(slug);

  if (!painting) {
    notFound();
  }

  const relatedPaintings = await getRelatedPaintings(painting);

  return (
    <PaintingDetailView
      painting={painting}
      relatedPaintings={relatedPaintings}
    />
  );
}
