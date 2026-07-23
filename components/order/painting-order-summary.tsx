"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { formatPrice } from "@/lib/format-price";
import type { Painting } from "@/types";

type PaintingOrderSummaryProps = {
  painting: Painting;
};

export function PaintingOrderSummary({ painting }: PaintingOrderSummaryProps) {
  const { t } = useLanguage();

  return (
    <div className="border border-[var(--border)] bg-[var(--aw-secondary)]/50 p-5 sm:p-6">
      <p className="text-label text-[var(--aw-accent)]">{t.order.summary.label}</p>
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
            {t.order.summary.title}
          </dt>
          <dd className="text-end font-medium text-[var(--aw-primary)]">
            {painting.title}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
            {t.order.summary.artist}
          </dt>
          <dd className="text-end text-[var(--aw-primary)]">{painting.artist}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
            {t.order.summary.price}
          </dt>
          <dd className="text-end font-medium text-[var(--aw-accent)]">
            {formatPrice(painting.price, painting.currency)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
            {t.order.summary.paintingId}
          </dt>
          <dd className="text-end text-[var(--aw-primary)]">{painting.id}</dd>
        </div>
      </dl>
      <p className="text-label mt-4 text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)]">
        {t.common.paymentCod}
      </p>
    </div>
  );
}
