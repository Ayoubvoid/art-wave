"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import {
  CONTACT_INFO,
  FOOTER_QUICK_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import type { NavKey } from "@/lib/i18n/types";

const socialIcons: Record<string, ReactNode> = {
  Instagram: (
    <span className="text-label text-[0.65rem] leading-none">In</span>
  ),
  Pinterest: (
    <span className="text-label text-[0.65rem] leading-none">Pi</span>
  ),
  Twitter: (
    <span className="text-label text-[0.65rem] leading-none">X</span>
  ),
};

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const navLabel = (key: NavKey) => t.nav[key];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--aw-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-heading text-2xl tracking-tight text-[var(--aw-primary)] transition-opacity hover:opacity-80 sm:text-3xl"
            >
              {t.meta.siteName}
            </Link>
            <p className="mt-5 text-sm leading-[1.85] text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)] sm:mt-6">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-label mb-6 text-[var(--aw-primary)] sm:mb-8">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-sm tracking-wide text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)] transition-colors duration-300 hover:text-[var(--aw-primary)]"
                  >
                    {navLabel(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label mb-6 text-[var(--aw-primary)] sm:mb-8">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)] sm:space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex min-h-10 items-center transition-colors duration-300 hover:text-[var(--aw-primary)]"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>

            <h3 className="text-label mb-4 mt-10 text-[var(--aw-primary)] sm:mt-12">
              {t.footer.follow}
            </h3>
            <div className="flex gap-3 sm:gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--aw-background)] text-[var(--aw-primary)] transition-all duration-300 hover:border-[var(--aw-accent)] hover:text-[var(--aw-accent)]"
                >
                  {socialIcons[social.label]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-8 sm:mt-20 lg:mt-24">
          <p className="text-center text-xs tracking-widest text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)] uppercase">
            &copy; {year} {t.meta.siteName}. {t.common.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
