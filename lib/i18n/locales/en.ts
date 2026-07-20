import type { Translations } from "@/lib/i18n/types";

export const en: Translations = {
  meta: { siteName: "Art Wave" },
  nav: {
    home: "Home",
    gallery: "Gallery",
    artists: "Artists",
    about: "About",
    contact: "Contact",
    main: "Main navigation",
    mobile: "Mobile navigation",
    openMenu: "Open menu",
  },
  language: {
    label: "Language",
    en: "English",
    fr: "French",
    ar: "Arabic",
  },
  common: {
    scroll: "Scroll",
    viewCollection: "View Collection",
    viewDetails: "View Details",
    viewPainting: "View Painting",
    featured: "Featured",
    loading: "Loading",
    loadingCollection: "Loading collection…",
    breadcrumbGallery: "Gallery",
    all: "All",
    paymentCod: "Payment: Cash on Delivery",
    copyright: "All rights reserved.",
  },
  categories: {
    Abstract: "Abstract",
    Landscape: "Landscape",
    Portrait: "Portrait",
    Modern: "Modern",
    Nature: "Nature",
    Minimalist: "Minimalist",
  },
  availability: {
    available: "Available",
    sold: "Sold",
    reserved: "Reserved",
  },
  home: {
    hero: {
      eyebrow: "Curated Fine Art",
      title: "Where Art Meets Emotion",
      subtitle:
        "Discover carefully curated paintings from talented artists around the world.",
      ctaGallery: "Explore Gallery",
      ctaArtists: "Meet Our Artists",
    },
    collections: {
      label: "Collections",
      title: "Featured Collections",
      description:
        "Explore curated categories, each offering a distinct perspective on contemporary and classical painting.",
      items: {
        abstract: {
          title: "Abstract",
          description:
            "Bold forms and expressive color for the contemporary collector.",
        },
        modern: {
          title: "Modern",
          description:
            "Clean lines and refined compositions from today's visionaries.",
        },
        landscape: {
          title: "Landscape",
          description: "Sweeping vistas and natural beauty captured on canvas.",
        },
        portrait: {
          title: "Portrait",
          description:
            "Intimate studies of character, emotion, and human expression.",
        },
      },
    },
    artworks: {
      label: "Gallery",
      title: "Featured Artworks",
      description:
        "A selection of exceptional pieces from our current collection, chosen for their beauty, craftsmanship, and emotional resonance.",
    },
    about: {
      label: "Our Mission",
      title: "Curating Exceptional Art",
      p1: "Art Wave is a destination for collectors and art lovers seeking paintings of extraordinary quality. We connect discerning buyers with talented artists from around the world, offering a seamless experience rooted in trust and taste.",
      p2: "Every work in our gallery is selected with care — chosen not only for its visual impact, but for the story it tells and the emotion it evokes. We believe art should transform spaces and inspire lives.",
    },
    why: {
      label: "The Art Wave Promise",
      title: "Why Choose Art Wave",
      items: [
        {
          title: "Authentic Artwork",
          description:
            "Every piece is verified and sourced directly from established artists and trusted studios.",
        },
        {
          title: "Worldwide Delivery",
          description:
            "Museum-grade packaging and insured shipping to collectors across the globe.",
        },
        {
          title: "Curated Artists",
          description:
            "Our selection team handpicks emerging and renowned talent for exceptional quality.",
        },
      ],
    },
    testimonials: {
      label: "Collectors",
      title: "What Our Collectors Say",
      items: [
        {
          review:
            "Art Wave transformed my living space. The curation feels personal, and every piece arrived impeccably packaged.",
          name: "Catherine Whitmore",
          location: "London, UK",
        },
        {
          review:
            "A refined buying experience from start to finish. The gallery quality online is unmatched.",
          name: "Michael Torres",
          location: "San Francisco, USA",
        },
        {
          review:
            "I discovered artists I would never have found elsewhere. Art Wave is now my first destination for collecting.",
          name: "Isabelle Moreau",
          location: "Paris, France",
        },
      ],
    },
    faq: {
      label: "Support",
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How do I purchase a painting?",
          answer:
            "Browse the gallery, open a painting you love, and submit an order request. Our team will contact you to confirm details. Payment is Cash on Delivery.",
        },
        {
          question: "Are all paintings original?",
          answer:
            "Yes. Every artwork on Art Wave is an original painting, curated and sold directly through our gallery.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes. We offer worldwide shipping with secure packaging and a certificate of authenticity.",
        },
        {
          question: "What is your returns policy?",
          answer:
            "Original artworks are final sale. If your piece arrives damaged, contact us within 48 hours of delivery.",
        },
      ],
    },
    newsletter: {
      label: "Newsletter",
      title: "Stay Inspired",
      description:
        "Receive curated selections, artist features, and exclusive previews delivered to your inbox.",
      placeholder: "Your email address",
      submit: "Subscribe",
      success: "Thank you for subscribing. We'll be in touch soon.",
      emailLabel: "Email address",
    },
  },
  gallery: {
    hero: {
      eyebrow: "Shop Original Art",
      title: "Original Paintings",
      subtitle:
        "Explore a curated collection of original paintings available for purchase. Every artwork is carefully selected to bring timeless beauty into your space.",
    },
    filter: {
      label: "Filter by Category",
      countOne: "painting available",
      countMany: "paintings available",
      aria: "Filter paintings by category",
      empty: "No paintings found in this category.",
    },
  },
  painting: {
    descriptions: {
      Abstract:
        "This original abstract painting captures emotion through bold composition and refined color harmony, making it an exceptional centerpiece for contemporary interiors.",
      Landscape:
        "This original landscape painting invites the viewer into a world of light and atmosphere, offering a serene focal point for refined living spaces.",
      Portrait:
        "This original portrait reveals depth and character through masterful technique, creating an intimate and compelling presence in any collection.",
      Modern:
        "This original modern painting balances structure and expression with contemporary sophistication, ideal for collectors who value bold yet refined art.",
      Nature:
        "This original nature-inspired work celebrates organic beauty and tactile richness, bringing calm and vitality to elegant interiors.",
      Minimalist:
        "This original minimalist painting distills form to its essential harmony, offering quiet luxury and contemplative beauty for discerning spaces.",
    },
    medium: "Medium",
    dimensions: "Dimensions",
    year: "Year",
    category: "Category",
    acquire: "Acquire This Work",
    acquireDescription:
      "Request this original painting with Cash on Delivery. Our team will contact you to confirm your order and arrange secure delivery.",
    orderCta: "Order This Painting",
    notOrderable: "This painting is not currently available for order.",
    artistSection: "The Artist",
    aboutArtist: "About",
    shipping: {
      label: "Delivery",
      title: "Shipping Information",
      items: [
        {
          title: "Worldwide Shipping",
          description: "Insured delivery to collectors internationally.",
        },
        {
          title: "Secure Packaging",
          description: "Museum-grade crating and protective materials.",
        },
        {
          title: "Certificate of Authenticity",
          description: "Included with every original painting.",
        },
        {
          title: "Estimated Delivery",
          description: "Typically 2–4 weeks after purchase confirmation.",
        },
      ],
    },
    returns: {
      title: "Returns",
      body: "Original artworks are final sale. If your piece arrives damaged, contact us within 48 hours of delivery with photos. Our team will arrange inspection and repair or replacement in accordance with our collector guarantee.",
    },
    related: {
      label: "You May Also Like",
      title: "Related Paintings",
    },
  },
  order: {
    modal: {
      label: "Order Request",
      title: "Order This Painting",
      subtitle: "Complete the form below. Payment is Cash on Delivery.",
      close: "Close order form",
    },
    summary: {
      label: "Selected Painting",
      title: "Title",
      artist: "Artist",
      price: "Price",
      paintingId: "Painting ID",
    },
    form: {
      fullName: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      deliveryCity: "Delivery City",
      deliveryAddress: "Delivery Address",
      notes: "Optional Notes",
      notesPlaceholder: "Delivery instructions or questions (optional)",
      submit: "Submit Order Request",
      successTitle: "Thank you for your order request.",
      successP1:
        "Our Art Wave team will contact you shortly to confirm your order and delivery details.",
      successP2: "Payment will be made upon delivery (Cash on Delivery).",
    },
    validation: {
      fullNameRequired: "Full name is required.",
      fullNameShort: "Please enter your full name.",
      phoneRequired: "Phone number is required.",
      phoneInvalid: "Please enter a valid phone number.",
      emailRequired: "Email address is required.",
      emailInvalid: "Please enter a valid email address.",
      cityRequired: "Delivery city is required.",
      addressRequired: "Delivery address is required.",
      addressShort: "Please enter a complete delivery address.",
    },
    steps: {
      title: "How Ordering Works",
      items: [
        "Submit your order request.",
        "Our team contacts you.",
        "We confirm your delivery details.",
        "Your painting is securely packaged.",
        "You pay when the painting is delivered.",
      ],
    },
  },
  footer: {
    tagline:
      "A curated online gallery celebrating exceptional paintings and the artists who create them.",
    quickLinks: "Quick Links",
    contact: "Contact",
    follow: "Follow Us",
  },
  notFound: {
    code: "404",
    title: "Page Not Found",
    description:
      "The page you are looking for may have been moved or no longer exists.",
    cta: "Return Home",
  },
  artists: {
    "Elena Vasquez": {
      location: "Barcelona, Spain",
      bio: "Elena Vasquez is known for luminous abstract compositions that balance structure with spontaneity. Her work has been exhibited across Europe and is held in private collections worldwide.",
    },
    "Marcus Chen": {
      location: "Vancouver, Canada",
      bio: "Marcus Chen creates contemplative figurative works rooted in classical technique and contemporary sensibility. His portraits explore identity, memory, and quiet human connection.",
    },
    "Sofia Laurent": {
      location: "Provence, France",
      bio: "Sofia Laurent paints expansive landscapes inspired by the light and terrain of southern France. Her atmospheric canvases evoke serenity and timeless natural beauty.",
    },
    "James Okonkwo": {
      location: "London, UK",
      bio: "James Okonkwo merges urban geometry with expressive texture in modern compositions that reflect the rhythm of contemporary city life.",
    },
    "Marie Dubois": {
      location: "Normandy, France",
      bio: "Marie Dubois captures the poetry of land and sea through rich color and fluid brushwork. Her nature-inspired paintings invite calm reflection.",
    },
    "David Park": {
      location: "Seoul, South Korea",
      bio: "David Park works in bold abstract forms, drawing on color field traditions while pushing toward dynamic, emotionally charged surfaces.",
    },
    "Anna Kowalski": {
      location: "Kraków, Poland",
      bio: "Anna Kowalski specializes in pastoral landscapes that celebrate seasonal change and the subtle drama of natural light.",
    },
    "Thomas Berg": {
      location: "Copenhagen, Denmark",
      bio: "Thomas Berg creates restrained minimalist paintings where negative space and precise tonal shifts define the emotional core of each piece.",
    },
    "Yuki Tanaka": {
      location: "Kyoto, Japan",
      bio: "Yuki Tanaka explores stillness and balance through minimalist compositions influenced by Japanese aesthetics and modern European painting.",
    },
    "Claire Morrison": {
      location: "Edinburgh, Scotland",
      bio: "Claire Morrison paints immersive natural scenes with meticulous attention to atmosphere, from woodland light to delicate botanical studies.",
    },
    "Luca Ferretti": {
      location: "Milan, Italy",
      bio: "Luca Ferretti produces modern works that combine architectural precision with expressive material experimentation.",
    },
    "Amara Okafor": {
      location: "Lagos, Nigeria",
      bio: "Amara Okafor is celebrated for powerful portrait work that honors individuality and cultural narrative through refined oil technique.",
    },
  },
};
