import { cn } from "@/lib/utils";
import type { PaintingAvailability } from "@/types";

export const availabilityStyles = {
  available: {
    label: "Available",
    className:
      "border-[var(--aw-accent)]/30 bg-[var(--aw-accent)]/10 text-[var(--aw-primary)]",
  },
  sold: {
    label: "Sold",
    className:
      "border-[var(--border)] bg-[var(--aw-secondary)] text-[color-mix(in_srgb,var(--aw-primary)_50%,transparent)]",
  },
  reserved: {
    label: "Reserved",
    className:
      "border-[var(--aw-primary)]/20 bg-[var(--aw-primary)]/5 text-[var(--aw-primary)]",
  },
} as const satisfies Record<
  PaintingAvailability,
  { label: string; className: string }
>;

type AvailabilityBadgeProps = {
  availability: PaintingAvailability;
  className?: string;
};

export function AvailabilityBadge({
  availability,
  className,
}: AvailabilityBadgeProps) {
  const badge = availabilityStyles[availability];

  return (
    <span
      className={cn(
        "text-label inline-flex border px-3 py-1.5",
        badge.className,
        className
      )}
    >
      {badge.label}
    </span>
  );
}
