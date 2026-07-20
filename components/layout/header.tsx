"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import type { NavKey } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    !href.includes("#") &&
    (pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-label relative inline-flex min-h-11 items-center transition-colors duration-300",
        isActive
          ? "text-[var(--aw-primary)]"
          : "text-[color-mix(in_srgb,var(--aw-primary)_60%,transparent)] hover:text-[var(--aw-primary)]"
      )}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1 start-0 h-px w-full bg-[var(--aw-accent)]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, dir } = useLanguage();

  const navLabel = (key: NavKey) => t.nav[key];
  const sheetSide = dir === "rtl" ? "left" : "right";
  const menuMotionX = dir === "rtl" ? -16 : 16;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--aw-background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-xl tracking-tight text-[var(--aw-primary)] transition-opacity hover:opacity-80 sm:text-2xl"
        >
          {t.meta.siteName}
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher className="hidden sm:block" />

          <nav
            className="hidden items-center gap-8 lg:flex xl:gap-10"
            aria-label={t.nav.main}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={`${link.key}-${link.href}`}
                href={link.href}
                label={navLabel(link.key)}
              />
            ))}
          </nav>

          <LanguageSwitcher className="sm:hidden" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-11 lg:hidden"
                  aria-label={t.nav.openMenu}
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side={sheetSide} className="w-full max-w-sm px-6 sm:px-8">
              <SheetHeader>
                <SheetTitle className="font-heading text-start text-2xl">
                  {t.meta.siteName}
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-10 flex flex-col gap-6"
                aria-label={t.nav.mobile}
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={`${link.key}-${link.href}`}
                    initial={{ opacity: 0, x: menuMotionX }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-heading block min-h-11 py-1 text-2xl text-[var(--aw-primary)] transition-opacity hover:opacity-70 sm:text-3xl"
                    >
                      {navLabel(link.key)}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
