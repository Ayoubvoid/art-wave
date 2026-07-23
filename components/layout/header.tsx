"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  lightOnDark,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  lightOnDark?: boolean;
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
        lightOnDark
          ? isActive
            ? "text-white"
            : "text-white/75 hover:text-white"
          : isActive
            ? "text-[var(--aw-primary)]"
            : "text-[color-mix(in_srgb,var(--aw-primary)_60%,transparent)] hover:text-[var(--aw-primary)]"
      )}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className={cn(
            "absolute -bottom-1 start-0 h-px w-full",
            lightOnDark ? "bg-[var(--aw-accent)]" : "bg-[var(--aw-accent)]"
          )}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t, dir } = useLanguage();

  const isHome = pathname === "/";
  const lightOnDark = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const navLabel = (key: NavKey) => t.nav[key];
  const sheetSide = dir === "rtl" ? "left" : "right";
  const menuMotionX = dir === "rtl" ? -16 : 16;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out",
        lightOnDark
          ? "border-white/10 bg-transparent backdrop-blur-[2px]"
          : scrolled
            ? "border-[color-mix(in_srgb,var(--border)_70%,transparent)] bg-white/88 shadow-[0_4px_24px_rgba(17,17,17,0.06)] backdrop-blur-xl"
            : "border-transparent bg-white/25 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "font-heading text-xl tracking-tight transition-opacity hover:opacity-80 sm:text-2xl",
            lightOnDark ? "text-white" : "text-[var(--aw-primary)]"
          )}
        >
          {t.meta.siteName}
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher
            className={cn(
              "hidden sm:block",
              lightOnDark &&
                "[&_button]:border-white/25 [&_button]:text-white [&_button]:hover:border-white/50"
            )}
          />

          <nav
            className="hidden items-center gap-8 lg:flex xl:gap-10"
            aria-label={t.nav.main}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={`${link.key}-${link.href}`}
                href={link.href}
                label={navLabel(link.key)}
                lightOnDark={lightOnDark}
              />
            ))}
          </nav>

          <LanguageSwitcher
            className={cn(
              "sm:hidden",
              lightOnDark &&
                "[&_button]:border-white/25 [&_button]:text-white [&_button]:hover:border-white/50"
            )}
          />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "size-11 lg:hidden",
                    lightOnDark && "text-white hover:bg-white/10 hover:text-white"
                  )}
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
