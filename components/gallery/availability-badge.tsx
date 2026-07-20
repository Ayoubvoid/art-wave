"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "@/components/providers/language-provider";
import type { PaintingAvailability } from "@/types";

const availabilityKeys: Record<
  PaintingAvailability,
  "available" | "sold" | "reserved"
> = {
  available: "available",
  sold: "sold",
  reserved: "reserved",
};

const availabilityStyles = {
  available: {
    className:
      "border-[var(--aw-accent)]/30 bg-[var(--aw-accent)]/10 text-[var(--aw-primary)]",
  },
  sold: {
    className:
      "border-[var(--border)] bg-[var(--aw-secondary)] text-[color-mix(in_srgb,var(--aw-primary)_50%,transparent)]",
  },
  reserved: {
    className:
      "border-[var(--aw-primary)]/20 bg-[var(--aw-primary)]/5 text-[var(--aw-primary)]",
  },
} as const;

type AvailabilityBadgeProps = {
  availability: PaintingAvailability;
  className?: string;
};

export function AvailabilityBadge({
  availability,
  className,
}: AvailabilityBadgeProps) {
  const t = useTranslations();
  const key = availabilityKeys[availability];
  const badge = availabilityStyles[availability];

  return (
    <span
      className={cn(
        "text-label inline-flex border px-3 py-1.5",
        badge.className,
        className
      )}
    >
      {t.availability[key]}
    </span>
  );
}
