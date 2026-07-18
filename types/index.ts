export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Collection = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  price: number;
  image: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: "badge-check" | "globe" | "sparkles";
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  review: string;
  initials: string;
};
