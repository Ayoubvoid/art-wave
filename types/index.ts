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

export type PaintingCategory =
  | "Abstract"
  | "Landscape"
  | "Portrait"
  | "Modern"
  | "Nature"
  | "Minimalist";

export type PaintingAvailability = "available" | "sold" | "reserved";

export type Painting = {
  id: string;
  slug: string;
  title: string;
  artist: string;
  category: PaintingCategory;
  price: number;
  dimensions: string;
  medium: string;
  year: number;
  availability: PaintingAvailability;
  featured: boolean;
  image: string;
  description: string;
  images: string[];
  updatedAt: string;
};

export type OrderRequestFormValues = {
  fullName: string;
  phone: string;
  email: string;
  deliveryCity: string;
  deliveryAddress: string;
  notes: string;
};

export type OrderRequestField = keyof OrderRequestFormValues;

export type OrderRequestFieldErrors = Partial<
  Record<Exclude<OrderRequestField, "notes">, string>
>;
