import {
  Globe,
  Package,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { PaintingCard } from "@/components/gallery/painting-card";
import { FadeIn } from "@/components/home/fade-in";
import { getArtistProfile } from "@/lib/artists-data";
import type { Painting } from "@/types";

type PaintingDetailSectionsProps = {
  painting: Painting;
  relatedPaintings: Painting[];
};

const shippingItems = [
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "Insured delivery to collectors internationally.",
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description: "Museum-grade crating and protective materials.",
  },
  {
    icon: ShieldCheck,
    title: "Certificate of Authenticity",
    description: "Included with every original painting.",
  },
  {
    icon: Truck,
    title: "Estimated Delivery",
    description: "Typically 2–4 weeks after purchase confirmation.",
  },
];

export function PaintingDetailSections({
  painting,
  relatedPaintings,
}: PaintingDetailSectionsProps) {
  const artist = getArtistProfile(painting.artist);

  return (
    <div className="border-t border-[var(--border)] bg-[var(--aw-background)]">
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="text-label mb-4 text-[var(--aw-accent)]">The Artist</p>
            <h2 className="font-heading text-3xl text-[var(--aw-primary)] md:text-4xl">
              About {artist.name}
            </h2>
            <div className="mt-8 border border-[var(--border)] bg-[var(--aw-secondary)]/40 p-8 lg:p-10">
              <p className="text-label text-[var(--aw-accent)]">{artist.location}</p>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                {artist.bio}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--aw-secondary)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-label mb-4 text-center text-[var(--aw-accent)]">
              Delivery
            </p>
            <h2 className="font-heading text-center text-3xl text-[var(--aw-primary)] md:text-4xl">
              Shipping Information
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {shippingItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <article className="text-center">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--aw-background)]">
                      <Icon
                        className="size-6 text-[var(--aw-accent)]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-heading mt-6 text-xl text-[var(--aw-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="flex items-start gap-4">
              <RotateCcw
                className="mt-1 size-6 shrink-0 text-[var(--aw-accent)]"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="font-heading text-2xl text-[var(--aw-primary)] md:text-3xl">
                  Returns
                </h2>
                <p className="mt-4 text-base leading-relaxed">
                  Original artworks are final sale. If your piece arrives
                  damaged, contact us within 48 hours of delivery with photos.
                  Our team will arrange inspection and repair or replacement in
                  accordance with our collector guarantee.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {relatedPaintings.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--aw-secondary)] px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-label mb-4 text-[var(--aw-accent)]">
                You May Also Like
              </p>
              <h2 className="font-heading text-3xl text-[var(--aw-primary)] md:text-4xl">
                Related Paintings
              </h2>
            </FadeIn>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {relatedPaintings.map((related, index) => (
                <FadeIn key={related.id} delay={index * 0.06}>
                  <PaintingCard painting={related} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
