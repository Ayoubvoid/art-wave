import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/home/fade-in";
import { SectionHeader } from "@/components/home/section-header";
import { Button } from "@/components/ui/button";
import { FEATURED_ARTWORKS } from "@/lib/home-data";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
}

export function FeaturedArtworks() {
  return (
    <section className="bg-[var(--aw-secondary)] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label="Gallery"
            title="Featured Artworks"
            description="A selection of exceptional pieces from our current collection, chosen for their beauty, craftsmanship, and emotional resonance."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {FEATURED_ARTWORKS.map((artwork, index) => (
            <FadeIn key={artwork.id} delay={index * 0.05}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[var(--aw-background)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 space-y-1">
                  <h3 className="font-heading text-xl text-[var(--aw-primary)]">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-[color-mix(in_srgb,var(--aw-primary)_60%,transparent)]">
                    {artwork.artist}
                  </p>
                  <p className="pt-1 text-sm font-medium tracking-wide text-[var(--aw-accent)]">
                    {formatPrice(artwork.price)}
                  </p>
                </div>

                <Button
                  render={
                    <Link
                      href={`/gallery/${artwork.id}`}
                      className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-none border border-[var(--aw-primary)] bg-transparent text-xs font-medium tracking-widest uppercase text-[var(--aw-primary)] transition-colors hover:bg-[var(--aw-primary)] hover:text-white"
                    />
                  }
                >
                  View Details
                </Button>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
