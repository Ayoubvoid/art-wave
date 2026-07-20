"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import {
  deletePaintingAction,
  setAvailabilityAction,
  toggleFeaturedAction,
} from "@/lib/admin/actions";
import type { Painting } from "@/types";

type AdminPaintingActionsProps = {
  painting: Painting;
};

export function AdminPaintingActions({ painting }: AdminPaintingActionsProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const nextAvailability =
    painting.availability === "sold" ? "available" : "sold";

  return (
    <div className="flex flex-wrap gap-2">
      <form
        action={() =>
          startTransition(async () => {
            await toggleFeaturedAction(painting.id);
            router.refresh();
          })
        }
      >
        <button
          type="submit"
          disabled={pending}
          className="h-9 border border-zinc-300 px-2.5 text-xs whitespace-nowrap text-zinc-700 hover:bg-zinc-50 disabled:opacity-50"
        >
          {painting.featured ? "Unfeature" : "Feature"}
        </button>
      </form>
      <form
        action={() =>
          startTransition(async () => {
            await setAvailabilityAction(painting.id, nextAvailability);
            router.refresh();
          })
        }
      >
        <button
          type="submit"
          disabled={pending}
          className="h-9 border border-zinc-300 px-2.5 text-xs whitespace-nowrap text-zinc-700 hover:bg-zinc-50 disabled:opacity-50"
        >
          Mark {nextAvailability}
        </button>
      </form>
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          if (
            !window.confirm(
              `Delete “${painting.title}”? This cannot be undone.`
            )
          ) {
            return;
          }

          startTransition(async () => {
            await deletePaintingAction(painting.id);
          });
        }}
        className="h-9 border border-red-200 px-2.5 text-xs whitespace-nowrap text-red-700 hover:bg-red-50 disabled:opacity-50"
      >
        Delete
      </button>
    </div>
  );
}
