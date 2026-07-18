import Image from "next/image";

import { FadeIn } from "@/components/home/fade-in";
import { ABOUT_IMAGE } from "@/lib/home-data";

export function AboutSection() {
  return (
    <section className="bg-[var(--aw-background)] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <FadeIn direction="up">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--aw-secondary)] lg:aspect-[3/4]">
            <Image
              src={ABOUT_IMAGE}
              alt="Artist studio with paintings"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-lg lg:max-w-none">
            <p className="text-label mb-4 text-[var(--aw-accent)]">Our Mission</p>
            <h2 className="font-heading text-3xl tracking-tight text-[var(--aw-primary)] md:text-4xl lg:text-5xl">
              Curating Exceptional Art
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed md:text-lg">
              <p>
                Art Wave is a destination for collectors and art lovers seeking
                paintings of extraordinary quality. We connect discerning
                buyers with talented artists from around the world, offering a
                seamless experience rooted in trust and taste.
              </p>
              <p>
                Every work in our gallery is selected with care — chosen not
                only for its visual impact, but for the story it tells and the
                emotion it evokes. We believe art should transform spaces and
                inspire lives.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
