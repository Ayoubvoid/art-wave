import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PaintingDetailView } from "@/components/gallery/painting-detail-view";
import { en } from "@/lib/i18n/locales/en";
import { PAINTINGS } from "@/lib/paintings-data";
import {
  getPaintingBySlug,
  getPaintingDescription,
} from "@/lib/painting-utils";

type PaintingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PAINTINGS.map((painting) => ({
    slug: painting.slug,
  }));
}

export async function generateMetadata({
  params,
}: PaintingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const painting = getPaintingBySlug(slug);

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
  const painting = getPaintingBySlug(slug);

  if (!painting) {
    notFound();
  }

  return <PaintingDetailView painting={painting} />;
}
