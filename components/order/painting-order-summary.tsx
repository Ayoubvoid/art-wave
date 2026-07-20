import { formatPrice } from "@/lib/format-price";
import type { Painting } from "@/types";

type PaintingOrderSummaryProps = {
  painting: Painting;
};

export function PaintingOrderSummary({ painting }: PaintingOrderSummaryProps) {
  return (
    <div className="border border-[var(--border)] bg-[var(--aw-secondary)]/50 p-6">
      <p className="text-label text-[var(--aw-accent)]">Selected Painting</p>
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
            Title
          </dt>
          <dd className="text-right font-medium text-[var(--aw-primary)]">
            {painting.title}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
            Artist
          </dt>
          <dd className="text-right text-[var(--aw-primary)]">
            {painting.artist}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
            Price
          </dt>
          <dd className="text-right font-medium text-[var(--aw-accent)]">
            {formatPrice(painting.price)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
            Painting ID
          </dt>
          <dd className="text-right text-[var(--aw-primary)]">{painting.id}</dd>
        </div>
      </dl>
      <p className="text-label mt-4 text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
        Payment: Cash on Delivery
      </p>
    </div>
  );
}
