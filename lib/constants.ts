import type { NavKey } from "@/lib/i18n/types";

export const SITE_NAME = "Art Wave";

export const SITE_DESCRIPTION =
  "Discover timeless paintings from talented artists around the world. A modern online gallery for premium art.";

export const NAV_LINKS: { href: string; key: NavKey }[] = [
  { href: "/", key: "home" },
  { href: "/gallery", key: "gallery" },
  { href: "/gallery", key: "artists" },
  { href: "/#about", key: "about" },
  { href: "/#contact", key: "contact" },
];

export const FOOTER_QUICK_LINKS: { href: string; key: NavKey }[] = [
  { href: "/gallery", key: "gallery" },
  { href: "/gallery", key: "artists" },
  { href: "/#about", key: "about" },
  { href: "/#contact", key: "contact" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "Twitter", href: "#" },
] as const;

export const CONTACT_INFO = {
  email: "hello@artwave.com",
  phone: "+1 (555) 123-4567",
  address: "123 Gallery Lane, New York, NY",
} as const;
