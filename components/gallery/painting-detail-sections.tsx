"use client";

import {
  Globe,
  Package,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { PaintingCard } from "@/components/gallery/painting-card";
import { FadeIn } from "@/components/home/fade-in";
import { useLanguage } from "@/components/providers/language-provider";
import { getArtistProfile } from "@/lib/artists-data";
import type { Painting } from "@/types";

const shippingIcons = [Globe, Package, ShieldCheck, Truck];

type PaintingDetailSectionsProps = {
  painting: Painting;
  relatedPaintings: Painting[];
};

export function PaintingDetailSections({
  painting,
  relatedPaintings,
}: PaintingDetailSectionsProps) {
  const { t } = useLanguage();
  const artist = getArtistProfile(painting.artist, t.artists);

  return (
    <div className="border-t border-[var(--border)] bg-[var(--aw-background)]">
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="text-label mb-4 text-[var(--aw-accent)]">
              {t.painting.artistSection}
            </p>
            <h2 className="font-heading text-3xl text-[var(--aw-primary)] md:text-4xl">
              {t.painting.aboutArtist} {artist.name}
            </h2>
            <div className="mt-6 border border-[var(--border)] bg-[var(--aw-secondary)]/40 p-6 sm:mt-8 sm:p-8 lg:p-10">
              <p className="text-label text-[var(--aw-accent)]">
                {artist.location}
              </p>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                {artist.bio}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--aw-secondary)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="text-label mb-4 text-center text-[var(--aw-accent)]">
              {t.painting.shipping.label}
            </p>
            <h2 className="font-heading text-center text-3xl text-[var(--aw-primary)] md:text-4xl">
              {t.painting.shipping.title}
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {t.painting.shipping.items.map((item, index) => {
              const Icon = shippingIcons[index] ?? Globe;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <article className="text-center">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--aw-background)]">
                      <Icon
                        className="size-6 text-[var(--aw-accent)]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-heading mt-5 text-lg text-[var(--aw-primary)] sm:mt-6 sm:text-xl">
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

      <section className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="flex items-start gap-4">
              <RotateCcw
                className="mt-1 size-6 shrink-0 text-[var(--aw-accent)]"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="font-heading text-2xl text-[var(--aw-primary)] md:text-3xl">
                  {t.painting.returns.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed">
                  {t.painting.returns.body}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {relatedPaintings.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[var(--aw-secondary)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="text-label mb-4 text-[var(--aw-accent)]">
                {t.painting.related.label}
              </p>
              <h2 className="font-heading text-3xl text-[var(--aw-primary)] md:text-4xl">
                {t.painting.related.title}
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-10">
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
