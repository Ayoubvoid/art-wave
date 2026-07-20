import type { Translations } from "@/lib/i18n/types";

export const fr: Translations = {
  meta: { siteName: "Art Wave" },
  nav: {
    home: "Accueil",
    gallery: "Galerie",
    artists: "Artistes",
    about: "À propos",
    contact: "Contact",
    main: "Navigation principale",
    mobile: "Navigation mobile",
    openMenu: "Ouvrir le menu",
  },
  language: {
    label: "Langue",
    en: "Anglais",
    fr: "Français",
    ar: "Arabe",
  },
  common: {
    scroll: "Défiler",
    viewCollection: "Voir la collection",
    viewDetails: "Voir les détails",
    viewPainting: "Voir l'œuvre",
    featured: "En vedette",
    loading: "Chargement",
    loadingCollection: "Chargement de la collection…",
    breadcrumbGallery: "Galerie",
    all: "Tout",
    paymentCod: "Paiement : à la livraison",
    copyright: "Tous droits réservés.",
  },
  categories: {
    Abstract: "Abstrait",
    Landscape: "Paysage",
    Portrait: "Portrait",
    Modern: "Moderne",
    Nature: "Nature",
    Minimalist: "Minimaliste",
  },
  availability: {
    available: "Disponible",
    sold: "Vendu",
    reserved: "Réservé",
  },
  home: {
    hero: {
      eyebrow: "Art fin sélectionné",
      title: "Là où l'art rencontre l'émotion",
      subtitle:
        "Découvrez des peintures soigneusement sélectionnées, signées par des artistes talentueux du monde entier.",
      ctaGallery: "Explorer la galerie",
      ctaArtists: "Rencontrer nos artistes",
    },
    collections: {
      label: "Collections",
      title: "Collections en vedette",
      description:
        "Explorez des catégories sélectionnées, chacune offrant une perspective distincte sur la peinture contemporaine et classique.",
      items: {
        abstract: {
          title: "Abstrait",
          description:
            "Formes audacieuses et couleur expressive pour le collectionneur contemporain.",
        },
        modern: {
          title: "Moderne",
          description:
            "Lignes épurées et compositions raffinées des visionnaires d'aujourd'hui.",
        },
        landscape: {
          title: "Paysage",
          description: "Vastes horizons et beauté naturelle capturés sur toile.",
        },
        portrait: {
          title: "Portrait",
          description:
            "Études intimes du caractère, de l'émotion et de l'expression humaine.",
        },
      },
    },
    artworks: {
      label: "Galerie",
      title: "Œuvres en vedette",
      description:
        "Une sélection de pièces exceptionnelles de notre collection actuelle, choisies pour leur beauté, leur savoir-faire et leur résonance émotionnelle.",
    },
    about: {
      label: "Notre mission",
      title: "Sélectionner l'art d'exception",
      p1: "Art Wave est une destination pour les collectionneurs et les amateurs d'art en quête de peintures d'une qualité remarquable. Nous mettons en relation des acheteurs exigeants avec des artistes talentueux du monde entier.",
      p2: "Chaque œuvre de notre galerie est choisie avec soin — non seulement pour son impact visuel, mais aussi pour l'histoire qu'elle raconte et l'émotion qu'elle suscite.",
    },
    why: {
      label: "La promesse Art Wave",
      title: "Pourquoi choisir Art Wave",
      items: [
        {
          title: "Œuvres authentiques",
          description:
            "Chaque pièce est vérifiée et provient directement d'artistes établis et d'ateliers de confiance.",
        },
        {
          title: "Livraison mondiale",
          description:
            "Emballage de qualité muséale et expédition assurée vers les collectionneurs du monde entier.",
        },
        {
          title: "Artistes sélectionnés",
          description:
            "Notre équipe choisit des talents émergents et reconnus pour une qualité exceptionnelle.",
        },
      ],
    },
    testimonials: {
      label: "Collectionneurs",
      title: "Ce que disent nos collectionneurs",
      items: [
        {
          review:
            "Art Wave a transformé mon intérieur. La sélection est personnelle et chaque œuvre est arrivée parfaitement emballée.",
          name: "Catherine Whitmore",
          location: "Londres, Royaume-Uni",
        },
        {
          review:
            "Une expérience d'achat raffinée du début à la fin. La qualité de galerie en ligne est incomparable.",
          name: "Michael Torres",
          location: "San Francisco, États-Unis",
        },
        {
          review:
            "J'ai découvert des artistes que je n'aurais jamais trouvés ailleurs. Art Wave est ma première destination pour collectionner.",
          name: "Isabelle Moreau",
          location: "Paris, France",
        },
      ],
    },
    faq: {
      label: "Assistance",
      title: "Questions fréquentes",
      items: [
        {
          question: "Comment acheter une peinture ?",
          answer:
            "Parcourez la galerie, ouvrez une œuvre qui vous plaît et soumettez une demande de commande. Notre équipe vous contactera pour confirmer les détails. Paiement à la livraison.",
        },
        {
          question: "Toutes les peintures sont-elles originales ?",
          answer:
            "Oui. Chaque œuvre sur Art Wave est une peinture originale, sélectionnée et vendue directement par notre galerie.",
        },
        {
          question: "Livrez-vous à l'international ?",
          answer:
            "Oui. Nous proposons une livraison mondiale avec emballage sécurisé et certificat d'authenticité.",
        },
        {
          question: "Quelle est votre politique de retour ?",
          answer:
            "Les œuvres originales sont des ventes finales. Si votre pièce arrive endommagée, contactez-nous dans les 48 heures suivant la livraison.",
        },
      ],
    },
    newsletter: {
      label: "Newsletter",
      title: "Restez inspiré",
      description:
        "Recevez des sélections, des portraits d'artistes et des aperçus exclusifs dans votre boîte mail.",
      placeholder: "Votre adresse e-mail",
      submit: "S'abonner",
      success: "Merci pour votre inscription. Nous vous contacterons bientôt.",
      emailLabel: "Adresse e-mail",
    },
  },
  gallery: {
    hero: {
      eyebrow: "Acheter de l'art original",
      title: "Peintures originales",
      subtitle:
        "Explorez une collection sélectionnée de peintures originales disponibles à l'achat. Chaque œuvre est choisie pour apporter une beauté intemporelle à votre espace.",
    },
    filter: {
      label: "Filtrer par catégorie",
      countOne: "peinture disponible",
      countMany: "peintures disponibles",
      aria: "Filtrer les peintures par catégorie",
      empty: "Aucune peinture trouvée dans cette catégorie.",
    },
  },
  painting: {
    descriptions: {
      Abstract:
        "Cette peinture abstraite originale capture l'émotion par une composition audacieuse et une harmonie de couleurs raffinée, idéale comme pièce maîtresse d'intérieurs contemporains.",
      Landscape:
        "Cette peinture de paysage originale invite à un univers de lumière et d'atmosphère, offrant un point focal serein pour des espaces de vie raffinés.",
      Portrait:
        "Ce portrait original révèle profondeur et caractère par une technique maîtrisée, créant une présence intime et captivante.",
      Modern:
        "Cette peinture moderne originale équilibre structure et expression avec une sophistication contemporaine.",
      Nature:
        "Cette œuvre inspirée de la nature célèbre la beauté organique et une richesse tactile, apportant calme et vitalité.",
      Minimalist:
        "Cette peinture minimaliste originale distille la forme à l'essentiel, offrant un luxe discret et une beauté contemplative.",
    },
    medium: "Technique",
    dimensions: "Dimensions",
    year: "Année",
    category: "Catégorie",
    acquire: "Acquérir cette œuvre",
    acquireDescription:
      "Demandez cette peinture originale avec paiement à la livraison. Notre équipe vous contactera pour confirmer votre commande.",
    orderCta: "Commander cette peinture",
    notOrderable: "Cette peinture n'est pas disponible à la commande pour le moment.",
    artistSection: "L'artiste",
    aboutArtist: "À propos de",
    shipping: {
      label: "Livraison",
      title: "Informations de livraison",
      items: [
        {
          title: "Livraison mondiale",
          description: "Livraison assurée pour les collectionneurs internationaux.",
        },
        {
          title: "Emballage sécurisé",
          description: "Caisses de qualité muséale et matériaux de protection.",
        },
        {
          title: "Certificat d'authenticité",
          description: "Inclus avec chaque peinture originale.",
        },
        {
          title: "Délai estimé",
          description: "Généralement 2 à 4 semaines après confirmation.",
        },
      ],
    },
    returns: {
      title: "Retours",
      body: "Les œuvres originales sont des ventes finales. Si votre pièce arrive endommagée, contactez-nous dans les 48 heures suivant la livraison avec des photos.",
    },
    related: {
      label: "Vous aimerez aussi",
      title: "Peintures associées",
    },
  },
  order: {
    modal: {
      label: "Demande de commande",
      title: "Commander cette peinture",
      subtitle: "Complétez le formulaire ci-dessous. Paiement à la livraison.",
      close: "Fermer le formulaire",
    },
    summary: {
      label: "Peinture sélectionnée",
      title: "Titre",
      artist: "Artiste",
      price: "Prix",
      paintingId: "ID de l'œuvre",
    },
    form: {
      fullName: "Nom complet",
      phone: "Numéro de téléphone",
      email: "Adresse e-mail",
      deliveryCity: "Ville de livraison",
      deliveryAddress: "Adresse de livraison",
      notes: "Notes (facultatif)",
      notesPlaceholder: "Instructions de livraison ou questions (facultatif)",
      submit: "Envoyer la demande",
      successTitle: "Merci pour votre demande de commande.",
      successP1:
        "Notre équipe Art Wave vous contactera prochainement pour confirmer votre commande et les détails de livraison.",
      successP2: "Le paiement s'effectuera à la livraison (paiement à la livraison).",
    },
    validation: {
      fullNameRequired: "Le nom complet est requis.",
      fullNameShort: "Veuillez saisir votre nom complet.",
      phoneRequired: "Le numéro de téléphone est requis.",
      phoneInvalid: "Veuillez saisir un numéro de téléphone valide.",
      emailRequired: "L'adresse e-mail est requise.",
      emailInvalid: "Veuillez saisir une adresse e-mail valide.",
      cityRequired: "La ville de livraison est requise.",
      addressRequired: "L'adresse de livraison est requise.",
      addressShort: "Veuillez saisir une adresse de livraison complète.",
    },
    steps: {
      title: "Comment commander",
      items: [
        "Soumettez votre demande de commande.",
        "Notre équipe vous contacte.",
        "Nous confirmons les détails de livraison.",
        "Votre peinture est emballée en toute sécurité.",
        "Vous payez à la réception de la peinture.",
      ],
    },
  },
  footer: {
    tagline:
      "Une galerie en ligne sélectionnée célébrant des peintures exceptionnelles et les artistes qui les créent.",
    quickLinks: "Liens rapides",
    contact: "Contact",
    follow: "Suivez-nous",
  },
  notFound: {
    code: "404",
    title: "Page introuvable",
    description:
      "La page que vous recherchez a peut-être été déplacée ou n'existe plus.",
    cta: "Retour à l'accueil",
  },
  artists: {
    "Elena Vasquez": {
      location: "Barcelone, Espagne",
      bio: "Elena Vasquez est reconnue pour ses compositions abstraites lumineuses qui équilibrent structure et spontanéité.",
    },
    "Marcus Chen": {
      location: "Vancouver, Canada",
      bio: "Marcus Chen crée des œuvres figuratives contemplatives ancrées dans une technique classique et une sensibilité contemporaine.",
    },
    "Sofia Laurent": {
      location: "Provence, France",
      bio: "Sofia Laurent peint des paysages vastes inspirés par la lumière et le terrain du sud de la France.",
    },
    "James Okonkwo": {
      location: "Londres, Royaume-Uni",
      bio: "James Okonkwo fusionne géométrie urbaine et texture expressive dans des compositions modernes.",
    },
    "Marie Dubois": {
      location: "Normandie, France",
      bio: "Marie Dubois capture la poésie de la terre et de la mer par une couleur riche et un geste fluide.",
    },
    "David Park": {
      location: "Séoul, Corée du Sud",
      bio: "David Park explore des formes abstraites audacieuses, entre tradition du color field et surfaces émotionnelles.",
    },
    "Anna Kowalski": {
      location: "Cracovie, Pologne",
      bio: "Anna Kowalski se spécialise dans les paysages pastoraux célébrant les saisons et la lumière naturelle.",
    },
    "Thomas Berg": {
      location: "Copenhague, Danemark",
      bio: "Thomas Berg crée des peintures minimalistes où l'espace négatif et les nuances tonales définissent l'émotion.",
    },
    "Yuki Tanaka": {
      location: "Kyoto, Japon",
      bio: "Yuki Tanaka explore le calme et l'équilibre à travers des compositions minimalistes.",
    },
    "Claire Morrison": {
      location: "Édimbourg, Écosse",
      bio: "Claire Morrison peint des scènes naturelles immersives avec une attention méticuleuse à l'atmosphère.",
    },
    "Luca Ferretti": {
      location: "Milan, Italie",
      bio: "Luca Ferretti produit des œuvres modernes alliant précision architecturale et expérimentation matérielle.",
    },
    "Amara Okafor": {
      location: "Lagos, Nigeria",
      bio: "Amara Okafor est célébrée pour des portraits puissants qui honorent l'individualité et le récit culturel.",
    },
  },
};
