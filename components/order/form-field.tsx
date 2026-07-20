import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function FormField({
  id,
  label,
  error,
  required = false,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={id}
        className="text-label text-[color-mix(in_srgb,var(--aw-primary)_70%,transparent)]"
      >
        {label}
        {required && (
          <span className="text-[var(--aw-accent)]" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-[#b42318]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const formInputClassName =
  "h-12 w-full border border-[var(--border)] bg-[var(--aw-background)] px-4 text-sm text-[var(--aw-primary)] outline-none transition-colors placeholder:text-[color-mix(in_srgb,var(--aw-primary)_40%,transparent)] focus:border-[var(--aw-accent)] focus:ring-1 focus:ring-[var(--aw-accent)]";

export const formTextareaClassName =
  "min-h-28 w-full resize-y border border-[var(--border)] bg-[var(--aw-background)] px-4 py-3 text-sm text-[var(--aw-primary)] outline-none transition-colors placeholder:text-[color-mix(in_srgb,var(--aw-primary)_40%,transparent)] focus:border-[var(--aw-accent)] focus:ring-1 focus:ring-[var(--aw-accent)]";
