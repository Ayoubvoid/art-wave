"use client";

import { useState } from "react";

import { AvailabilityBadge } from "@/components/gallery/availability-badge";
import { OrderRequestModal } from "@/components/order/order-request-modal";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import type { Painting } from "@/types";

type PaintingPurchasePanelProps = {
  painting: Painting;
};

export function PaintingPurchasePanel({ painting }: PaintingPurchasePanelProps) {
  const { t } = useLanguage();
  const [orderOpen, setOrderOpen] = useState(false);
  const isOrderable = painting.availability === "available";

  return (
    <>
      <aside className="border border-[var(--border)] bg-[var(--aw-secondary)]/60 p-6 sm:p-8 lg:p-10">
        <p className="text-label text-[var(--aw-accent)]">{t.painting.acquire}</p>

        <p className="mt-4 font-heading text-3xl text-[var(--aw-primary)] lg:text-4xl">
          {formatPrice(painting.price)}
        </p>

        <div className="mt-4">
          <AvailabilityBadge availability={painting.availability} />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)] sm:mt-6">
          {t.painting.acquireDescription}
        </p>

        <div className="mt-6 sm:mt-8">
          <Button
            type="button"
            disabled={!isOrderable}
            onClick={() => setOrderOpen(true)}
            className="h-14 min-h-[44px] w-full rounded-none bg-[var(--aw-primary)] text-sm font-medium tracking-widest uppercase text-white hover:bg-[color-mix(in_srgb,var(--aw-primary)_85%,var(--aw-accent))] disabled:opacity-50"
          >
            {t.painting.orderCta}
          </Button>
          {!isOrderable && (
            <p className="mt-3 text-xs text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
              {t.painting.notOrderable}
            </p>
          )}
        </div>
      </aside>

      <OrderRequestModal
        painting={painting}
        open={orderOpen}
        onOpenChange={setOrderOpen}
      />
    </>
  );
}
