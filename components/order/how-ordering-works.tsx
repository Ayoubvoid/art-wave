import { ORDER_STEPS } from "@/lib/order-constants";

export function HowOrderingWorks() {
  return (
    <div className="border-t border-[var(--border)] pt-8">
      <h3 className="font-heading text-xl text-[var(--aw-primary)]">
        How Ordering Works
      </h3>
      <ol className="mt-5 space-y-4">
        {ORDER_STEPS.map((step, index) => (
          <li key={step} className="flex gap-4 text-sm leading-relaxed">
            <span className="text-label flex size-8 shrink-0 items-center justify-center border border-[var(--border)] text-[var(--aw-accent)]">
              {index + 1}
            </span>
            <span className="pt-1">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
