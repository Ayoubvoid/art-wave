import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
      <p className="text-label mb-4 text-[var(--aw-accent)]">404</p>
      <h1 className="font-heading text-4xl text-[var(--aw-primary)] md:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <Button
        render={
          <Link
            href="/"
            className="mt-10 inline-flex h-11 items-center rounded-none bg-[var(--aw-primary)] px-8 text-sm font-medium tracking-wide text-[var(--aw-background)] transition-colors hover:bg-[color-mix(in_srgb,var(--aw-primary)_85%,var(--aw-accent))]"
          />
        }
      >
        Return Home
      </Button>
    </div>
  );
}
