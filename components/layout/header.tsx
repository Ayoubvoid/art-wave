"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
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
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-label relative transition-colors duration-300",
        isActive
          ? "text-[var(--aw-primary)]"
          : "text-[color-mix(in_srgb,var(--aw-primary)_60%,transparent)] hover:text-[var(--aw-primary)]"
      )}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 h-px w-full bg-[var(--aw-accent)]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--aw-background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-2xl tracking-tight text-[var(--aw-primary)] transition-opacity hover:opacity-80"
        >
          {SITE_NAME}
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm px-8">
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-2xl">
                {SITE_NAME}
              </SheetTitle>
            </SheetHeader>
            <nav
              className="mt-12 flex flex-col gap-8"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-heading text-3xl text-[var(--aw-primary)] transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
