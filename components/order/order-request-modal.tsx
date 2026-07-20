"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { OrderRequestForm } from "@/components/order/order-request-form";
import type { Painting } from "@/types";

type OrderRequestModalProps = {
  painting: Painting;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function OrderRequestModal({
  painting,
  open,
  onOpenChange,
}: OrderRequestModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[var(--aw-primary)]/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="presentation"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-request-title"
            className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden border border-[var(--border)] bg-[var(--aw-background)] shadow-2xl sm:max-h-[90vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[var(--border)] px-6 py-6 lg:px-8">
              <div>
                <p className="text-label text-[var(--aw-accent)]">Order Request</p>
                <h2
                  id="order-request-title"
                  className="font-heading mt-2 text-2xl text-[var(--aw-primary)] md:text-3xl"
                >
                  Order This Painting
                </h2>
                <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)]">
                  Complete the form below. Payment is Cash on Delivery.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex size-10 shrink-0 items-center justify-center border border-[var(--border)] text-[var(--aw-primary)] transition-colors hover:border-[var(--aw-primary)]"
                aria-label="Close order form"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 lg:px-8 lg:py-8">
              <OrderRequestForm
                key={`${painting.id}-${String(open)}`}
                painting={painting}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
