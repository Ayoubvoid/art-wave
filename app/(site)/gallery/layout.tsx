import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Original Paintings",
  description:
    "Explore a curated collection of original paintings available for purchase. Every artwork is carefully selected to bring timeless beauty into your space.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
