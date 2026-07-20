import type { PaintingCategory } from "@/types";

export type Locale = "en" | "fr" | "ar";

export type NavKey = "home" | "gallery" | "artists" | "about" | "contact";

export type CollectionSlug = "abstract" | "modern" | "landscape" | "portrait";

export type Translations = {
  meta: {
    siteName: string;
  };
  nav: Record<NavKey, string> & {
    main: string;
    mobile: string;
    openMenu: string;
  };
  language: {
    label: string;
    en: string;
    fr: string;
    ar: string;
  };
  common: {
    scroll: string;
    viewCollection: string;
    viewDetails: string;
    viewPainting: string;
    featured: string;
    loading: string;
    loadingCollection: string;
    breadcrumbGallery: string;
    all: string;
    paymentCod: string;
    copyright: string;
  };
  categories: Record<PaintingCategory, string>;
  availability: {
    available: string;
    sold: string;
    reserved: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      ctaGallery: string;
      ctaArtists: string;
    };
    collections: {
      label: string;
      title: string;
      description: string;
      items: Record<
        CollectionSlug,
        { title: string; description: string }
      >;
    };
    artworks: {
      label: string;
      title: string;
      description: string;
    };
    about: {
      label: string;
      title: string;
      p1: string;
      p2: string;
    };
    why: {
      label: string;
      title: string;
      items: Array<{ title: string; description: string }>;
    };
    testimonials: {
      label: string;
      title: string;
      items: Array<{ review: string; name: string; location: string }>;
    };
    faq: {
      label: string;
      title: string;
      items: Array<{ question: string; answer: string }>;
    };
    newsletter: {
      label: string;
      title: string;
      description: string;
      placeholder: string;
      submit: string;
      success: string;
      emailLabel: string;
    };
  };
  gallery: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    filter: {
      label: string;
      countOne: string;
      countMany: string;
      aria: string;
      empty: string;
    };
  };
  painting: {
    descriptions: Record<PaintingCategory, string>;
    medium: string;
    dimensions: string;
    year: string;
    category: string;
    acquire: string;
    acquireDescription: string;
    orderCta: string;
    notOrderable: string;
    artistSection: string;
    aboutArtist: string;
    shipping: {
      label: string;
      title: string;
      items: Array<{ title: string; description: string }>;
    };
    returns: {
      title: string;
      body: string;
    };
    related: {
      label: string;
      title: string;
    };
  };
  order: {
    modal: {
      label: string;
      title: string;
      subtitle: string;
      close: string;
    };
    summary: {
      label: string;
      title: string;
      artist: string;
      price: string;
      paintingId: string;
    };
    form: {
      fullName: string;
      phone: string;
      email: string;
      deliveryCity: string;
      deliveryAddress: string;
      notes: string;
      notesPlaceholder: string;
      submit: string;
      successTitle: string;
      successP1: string;
      successP2: string;
    };
    validation: {
      fullNameRequired: string;
      fullNameShort: string;
      phoneRequired: string;
      phoneInvalid: string;
      emailRequired: string;
      emailInvalid: string;
      cityRequired: string;
      addressRequired: string;
      addressShort: string;
    };
    steps: {
      title: string;
      items: string[];
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contact: string;
    follow: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    cta: string;
  };
  artists: Record<
    string,
    {
      location: string;
      bio: string;
    }
  >;
};
