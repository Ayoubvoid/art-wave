"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FolderTree,
  LayoutDashboard,
  LogOut,
  Palette,
  Settings,
  ShoppingBag,
} from "lucide-react";

import { cn } from "@/lib/utils";

const mainNav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/paintings", label: "Paintings", icon: Palette },
  { href: "/admin/categories", label: "Categories", icon: FolderTree },
  {
    href: "/admin/orders",
    label: "Orders",
    icon: ShoppingBag,
    badge: "Coming Soon",
  },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f6f5f3] text-zinc-900 lg:flex">
      <aside className="border-b border-zinc-800/10 bg-[#141414] text-zinc-100 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-64 lg:shrink-0 lg:flex-col lg:border-b-0 lg:border-r">
        <div className="border-b border-white/10 px-5 py-6">
          <Link href="/admin" className="block">
            <span className="font-heading text-2xl tracking-tight text-white">
              Art Wave
            </span>
            <span className="mt-1 block text-xs tracking-[0.2em] text-zinc-400 uppercase">
              Store Manager
            </span>
          </Link>
        </div>

        <nav className="flex gap-1 overflow-x-auto px-3 py-4 lg:flex-1 lg:flex-col lg:overflow-visible lg:px-3 lg:py-6">
          {mainNav.map((item) => {
            const Icon = item.icon;
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex min-h-11 shrink-0 items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors lg:w-full",
                  active
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                )}
              >
                <Icon className="size-4 shrink-0" aria-hidden />
                <span className="whitespace-nowrap">{item.label}</span>
                {item.badge ? (
                  <span className="ms-auto hidden rounded bg-white/10 px-2 py-0.5 text-[10px] tracking-wide text-zinc-300 uppercase lg:inline">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <form method="POST" action="/api/admin/logout">
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center gap-3 rounded-md px-3 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              <LogOut className="size-4" aria-hidden />
              Logout
            </button>
          </form>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
