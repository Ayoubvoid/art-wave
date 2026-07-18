import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/home/fade-in";
import { SectionHeader } from "@/components/home/section-header";
import { FEATURED_COLLECTIONS } from "@/lib/home-data";

export function FeaturedCollections() {
  return (
    <section className="bg-[var(--aw-background)] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label="Collections"
            title="Featured Collections"
            description="Explore curated categories, each offering a distinct perspective on contemporary and classical painting."
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {FEATURED_COLLECTIONS.map((collection, index) => (
            <FadeIn key={collection.slug} delay={index * 0.08}>
              <Link
                href={`/gallery?collection=${collection.slug}`}
                className="group block"
              >
                <article className="relative aspect-[4/5] overflow-hidden bg-[var(--aw-secondary)] sm:aspect-[3/4]">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--aw-primary)]/80 via-[var(--aw-primary)]/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                    <h3 className="font-heading text-3xl text-white lg:text-4xl">
                      {collection.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                      {collection.description}
                    </p>
                    <span className="text-label mt-6 inline-block text-[var(--aw-accent)] transition-transform duration-300 group-hover:translate-x-1">
                      View Collection
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
