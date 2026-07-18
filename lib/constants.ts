export const SITE_NAME = "Art Wave";

export const SITE_DESCRIPTION =
  "Discover timeless paintings from talented artists around the world. A modern online gallery for premium art.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Artists", href: "/artists" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Artists", href: "/artists" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

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
