import { FadeIn } from "@/components/home/fade-in";
import { SectionHeader } from "@/components/home/section-header";
import { TESTIMONIALS } from "@/lib/home-data";

export function Testimonials() {
  return (
    <section className="bg-[var(--aw-background)] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label="Collectors"
            title="What Our Collectors Say"
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:gap-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <blockquote className="flex h-full flex-col border border-[var(--border)] bg-[var(--aw-secondary)]/50 p-8 lg:p-10">
                <p className="flex-1 text-base leading-relaxed italic md:text-lg">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                <footer className="mt-8 flex items-center gap-4 border-t border-[var(--border)] pt-8">
                  <div
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--aw-primary)] text-sm font-medium tracking-wide text-white"
                    aria-hidden
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <cite className="not-italic">
                      <p className="text-sm font-medium text-[var(--aw-primary)]">
                        {testimonial.name}
                      </p>
                      <p className="mt-0.5 text-xs text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
                        {testimonial.location}
                      </p>
                    </cite>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
