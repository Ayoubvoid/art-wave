import Link from "next/link";
import type { ReactNode } from "react";

import {
  CONTACT_INFO,
  FOOTER_QUICK_LINKS,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/constants";

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

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--aw-secondary)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 md:grid-cols-3 md:gap-12 lg:gap-16">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-heading text-3xl tracking-tight text-[var(--aw-primary)] transition-opacity hover:opacity-80"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-6 text-sm leading-[1.8] text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)]">
              A curated online gallery celebrating exceptional paintings and the
              artists who create them.
            </p>
          </div>

          <div>
            <h3 className="text-label mb-8 text-[var(--aw-primary)]">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm tracking-wide text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)] transition-colors duration-300 hover:text-[var(--aw-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label mb-8 text-[var(--aw-primary)]">
              Contact
            </h3>
            <ul className="space-y-4 text-sm leading-relaxed text-[color-mix(in_srgb,var(--aw-primary)_65%,transparent)]">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="transition-colors duration-300 hover:text-[var(--aw-primary)]"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>

            <h3 className="text-label mb-5 mt-12 text-[var(--aw-primary)]">
              Follow Us
            </h3>
            <div className="flex gap-4">
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

        <div className="mt-20 border-t border-[var(--border)] pt-10 lg:mt-24">
          <p className="text-center text-xs tracking-widest text-[color-mix(in_srgb,var(--aw-primary)_45%,transparent)] uppercase">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
