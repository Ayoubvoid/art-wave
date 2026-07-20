import Link from "next/link";

import { AvailabilityBadge } from "@/components/gallery/availability-badge";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import type { Painting } from "@/types";

type PaintingPurchasePanelProps = {
  painting: Painting;
};

export function PaintingPurchasePanel({ painting }: PaintingPurchasePanelProps) {
  const isPurchasable = painting.availability === "available";

  return (
    <aside className="border border-[var(--border)] bg-[var(--aw-secondary)]/60 p-8 lg:p-10">
      <p className="text-label text-[var(--aw-accent)]">Acquire This Work</p>

      <p className="mt-4 font-heading text-3xl text-[var(--aw-primary)] lg:text-4xl">
        {formatPrice(painting.price)}
      </p>

      <div className="mt-4">
        <AvailabilityBadge availability={painting.availability} />
      </div>

      <p className="mt-6 text-sm leading-relaxed text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)]">
        Original artwork sold directly through Art Wave. Each piece includes
        documentation of authenticity and white-glove delivery coordination.
      </p>

      <div className="mt-8 space-y-3">
        <Button
          type="button"
          disabled={!isPurchasable}
          className="h-14 w-full rounded-none bg-[var(--aw-primary)] text-sm font-medium tracking-widest uppercase text-white hover:bg-[color-mix(in_srgb,var(--aw-primary)_85%,var(--aw-accent))] disabled:opacity-50"
        >
          Add to Cart
        </Button>

        <Button
          render={
            <Link
              href="/contact"
              className="inline-flex h-14 w-full items-center justify-center rounded-none border border-[var(--aw-primary)] bg-transparent text-sm font-medium tracking-widest uppercase text-[var(--aw-primary)] transition-colors hover:bg-[var(--aw-primary)] hover:text-white"
            />
          }
        >
          Contact About This Painting
        </Button>
      </div>
    </aside>
  );
}
