import type { Artwork, Collection, Feature, Testimonial } from "@/types";

export const FEATURED_COLLECTIONS: Collection[] = [
  {
    slug: "abstract",
    title: "Abstract",
    description: "Bold forms and expressive color for the contemporary collector.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "modern",
    title: "Modern",
    description: "Clean lines and refined compositions from today's visionaries.",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "landscape",
    title: "Landscape",
    description: "Sweeping vistas and natural beauty captured on canvas.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "portrait",
    title: "Portrait",
    description: "Intimate studies of character, emotion, and human expression.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80&auto=format&fit=crop",
  },
];

export const FEATURED_ARTWORKS: Artwork[] = [
  {
    id: "1",
    title: "Ethereal Horizon",
    artist: "Elena Vasquez",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Silent Contemplation",
    artist: "Marcus Chen",
    price: 3850,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Golden Fields",
    artist: "Sofia Laurent",
    price: 5100,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Urban Reflections",
    artist: "James Okonkwo",
    price: 2900,
    image:
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Ocean Whisper",
    artist: "Marie Dubois",
    price: 6400,
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Crimson Dawn",
    artist: "David Park",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Whispers of Spring",
    artist: "Anna Kowalski",
    price: 4750,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "Midnight Blue",
    artist: "Thomas Berg",
    price: 5600,
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80&auto=format&fit=crop",
  },
];

export const WHY_CHOOSE_FEATURES: Feature[] = [
  {
    title: "Authentic Artwork",
    description:
      "Every piece is verified and sourced directly from established artists and trusted studios.",
    icon: "badge-check",
  },
  {
    title: "Worldwide Delivery",
    description:
      "Museum-grade packaging and insured shipping to collectors across the globe.",
    icon: "globe",
  },
  {
    title: "Curated Artists",
    description:
      "Our selection team handpicks emerging and renowned talent for exceptional quality.",
    icon: "sparkles",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Catherine Whitmore",
    location: "London, UK",
    review:
      "Art Wave transformed my living space. The curation feels personal, and every piece arrived impeccably packaged.",
    initials: "CW",
  },
  {
    id: "2",
    name: "Michael Torres",
    location: "San Francisco, USA",
    review:
      "A refined buying experience from start to finish. The gallery quality online is unmatched.",
    initials: "MT",
  },
  {
    id: "3",
    name: "Isabelle Moreau",
    location: "Paris, France",
    review:
      "I discovered artists I would never have found elsewhere. Art Wave is now my first destination for collecting.",
    initials: "IM",
  },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&q=85&auto=format&fit=crop";

export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=900&q=80&auto=format&fit=crop";
