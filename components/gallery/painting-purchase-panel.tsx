"use client";

import { useState } from "react";

import { AvailabilityBadge } from "@/components/gallery/availability-badge";
import { OrderRequestModal } from "@/components/order/order-request-modal";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import type { Painting } from "@/types";

type PaintingPurchasePanelProps = {
  painting: Painting;
};

export function PaintingPurchasePanel({ painting }: PaintingPurchasePanelProps) {
  const [orderOpen, setOrderOpen] = useState(false);
  const isOrderable = painting.availability === "available";

  return (
    <>
      <aside className="border border-[var(--border)] bg-[var(--aw-secondary)]/60 p-8 lg:p-10">
        <p className="text-label text-[var(--aw-accent)]">Acquire This Work</p>

        <p className="mt-4 font-heading text-3xl text-[var(--aw-primary)] lg:text-4xl">
          {formatPrice(painting.price)}
        </p>

        <div className="mt-4">
          <AvailabilityBadge availability={painting.availability} />
        </div>

        <p className="mt-6 text-sm leading-relaxed text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)]">
          Request this original painting with Cash on Delivery. Our team will
          contact you to confirm your order and arrange secure delivery.
        </p>

        <div className="mt-8">
          <Button
            type="button"
            disabled={!isOrderable}
            onClick={() => setOrderOpen(true)}
            className="h-14 w-full rounded-none bg-[var(--aw-primary)] text-sm font-medium tracking-widest uppercase text-white hover:bg-[color-mix(in_srgb,var(--aw-primary)_85%,var(--aw-accent))] disabled:opacity-50"
          >
            Order This Painting
          </Button>
          {!isOrderable && (
            <p className="mt-3 text-xs text-[color-mix(in_srgb,var(--aw-primary)_55%,transparent)]">
              This painting is not currently available for order.
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
