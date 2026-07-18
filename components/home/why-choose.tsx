import { BadgeCheck, Globe, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/home/fade-in";
import { SectionHeader } from "@/components/home/section-header";
import { WHY_CHOOSE_FEATURES } from "@/lib/home-data";
import type { Feature } from "@/types";

const iconMap = {
  "badge-check": BadgeCheck,
  globe: Globe,
  sparkles: Sparkles,
} as const;

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = iconMap[feature.icon];

  return (
    <article className="group flex flex-col items-center px-6 py-10 text-center transition-transform duration-500 hover:-translate-y-1 lg:px-10 lg:py-14">
      <div className="flex size-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--aw-background)] transition-colors duration-300 group-hover:border-[var(--aw-accent)]">
        <Icon className="size-6 text-[var(--aw-accent)]" strokeWidth={1.5} />
      </div>
      <h3 className="font-heading mt-8 text-2xl text-[var(--aw-primary)]">
        {feature.title}
      </h3>
      <p className="mt-4 max-w-xs text-sm leading-relaxed md:text-base">
        {feature.description}
      </p>
    </article>
  );
}

export function WhyChoose() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--aw-secondary)] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            label="The Art Wave Promise"
            title="Why Choose Art Wave"
          />
        </FadeIn>

        <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[var(--border)]">
          {WHY_CHOOSE_FEATURES.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <FeatureCard feature={feature} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
