import type { Translations } from "@/lib/i18n/types";

export const ar: Translations = {
  meta: { siteName: "Art Wave" },
  nav: {
    home: "الرئيسية",
    gallery: "المعرض",
    artists: "الفنانون",
    about: "من نحن",
    contact: "اتصل بنا",
    main: "التنقل الرئيسي",
    mobile: "التنقل على الجوال",
    openMenu: "فتح القائمة",
  },
  language: {
    label: "اللغة",
    en: "الإنجليزية",
    fr: "الفرنسية",
    ar: "العربية",
  },
  common: {
    scroll: "تمرير",
    viewCollection: "عرض المجموعة",
    viewDetails: "عرض التفاصيل",
    viewPainting: "عرض اللوحة",
    featured: "مميز",
    loading: "جاري التحميل",
    loadingCollection: "جاري تحميل المجموعة…",
    breadcrumbGallery: "المعرض",
    all: "الكل",
    paymentCod: "الدفع: نقداً عند التسليم",
    copyright: "جميع الحقوق محفوظة.",
  },
  categories: {
    Abstract: "تجريدي",
    Landscape: "منظر طبيعي",
    Portrait: "بورتريه",
    Modern: "حديث",
    Nature: "طبيعة",
    Minimalist: "بسيط",
  },
  availability: {
    available: "متاح",
    sold: "مباع",
    reserved: "محجوز",
  },
  home: {
    hero: {
      eyebrow: "فن راقٍ مختار",
      title: "حيث يلتقي الفن بالعاطفة",
      subtitle:
        "اكتشف لوحات مختارة بعناية من فنانين موهوبين حول العالم.",
      ctaGallery: "استكشف المعرض",
      ctaArtists: "تعرف على فنانينا",
    },
    collections: {
      label: "المجموعات",
      title: "مجموعات مميزة",
      description:
        "استكشف فئات مختارة، كل منها يقدم رؤية فريدة للفن المعاصر والكلاسيكي.",
      items: {
        abstract: {
          title: "تجريدي",
          description: "أشكال جريئة وألوان معبرة للجامع المعاصر.",
        },
        modern: {
          title: "حديث",
          description: "خطوط نقية وتكوينات راقية من رؤى الفنانين المعاصرين.",
        },
        landscape: {
          title: "منظر طبيعي",
          description: "آفاق واسعة وجمال طبيعي موثق على القماش.",
        },
        portrait: {
          title: "بورتريه",
          description: "دراسات حميمة للشخصية والعاطفة والتعبير الإنساني.",
        },
      },
    },
    artworks: {
      label: "المعرض",
      title: "أعمال مميزة",
      description:
        "مجموعة مختارة من قطع استثنائية في مجموعتنا الحالية، لجمالها وحرفيتها وصدىها العاطفي.",
    },
    about: {
      label: "مهمتنا",
      title: "تنسيق فن استثنائي",
      p1: "Art Wave وجهة للجامعين وعشاق الفن الباحثين عن لوحات ذات جودة فائقة. نربط المشترين المميزين بفنانين موهوبين حول العالم.",
      p2: "كل عمل في معرضنا يُختار بعناية — ليس فقط لتأثيره البصري، بل للقصة التي يرويها والعاطفة التي يثيرها.",
    },
    why: {
      label: "وعد Art Wave",
      title: "لماذا Art Wave",
      items: [
        {
          title: "أعمال أصلية",
          description:
            "كل قطعة موثقة ومصدرها مباشرة من فنانين واستوديوهات موثوقة.",
        },
        {
          title: "توصيل عالمي",
          description:
            "تغليف بمعايير المتاحف وشحن مؤمّن للجامعين حول العالم.",
        },
        {
          title: "فنانون مختارون",
          description: "فريقنا يختار مواهب ناشئة ومرموقة لجودة استثنائية.",
        },
      ],
    },
    testimonials: {
      label: "الجامعون",
      title: "ماذا يقول جامعونا",
      items: [
        {
          review:
            "Art Wave غيّر مساحة معيشتي. التنسيق شخصي وكل قطعة وصلت بتغليف متقن.",
          name: "Catherine Whitmore",
          location: "لندن، المملكة المتحدة",
        },
        {
          review:
            "تجربة شراء راقية من البداية إلى النهاية. جودة المعرض عبر الإنترنت لا مثيل لها.",
          name: "Michael Torres",
          location: "سان Francisco، الولايات المتحدة",
        },
        {
          review:
            "اكتشفت فنانين لم أكن لأجدهم في مكان آخر. Art Wave أصبح وجهتي الأولى للاقتناء.",
          name: "Isabelle Moreau",
          location: "باريس، فرنسا",
        },
      ],
    },
    faq: {
      label: "الدعم",
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "كيف أشتري لوحة؟",
          answer:
            "تصفح المعرض، افتح اللوحة التي تعجبك، وأرسل طلب طلب. سيتواصل فريقنا معك للتأكيد. الدفع نقداً عند التسليم.",
        },
        {
          question: "هل كل اللوحات أصلية؟",
          answer:
            "نعم. كل عمل على Art Wave لوحة أصلية، مختارة وتُ sold مباشرة عبر معرضنا.",
        },
        {
          question: "هل تشحنون دولياً؟",
          answer:
            "نعم. نوفر شحن عالمي مع تغليف آمن وشهادة أصالة.",
        },
        {
          question: "ما سياسة الإرجاع؟",
          answer:
            "الأعمال الأصلية بيع نهائي. إذا وصلت القطعة تالفة، تواصل معنا خلال 48 ساعة من التسليم.",
        },
      ],
    },
    newsletter: {
      label: "النشرة",
      title: "ابقَ ملهمًا",
      description:
        "استلم selections مختارة، profiles فنانين، وpreviews حصرية في بريدك.",
      placeholder: "بريدك الإلكتروني",
      submit: "اشتراك",
      success: "شكراً لاشتراكك. سنتواصل معك قريباً.",
      emailLabel: "البريد الإلكتروني",
    },
  },
  gallery: {
    hero: {
      eyebrow: "شراء فن أصلي",
      title: "لوحات أصلية",
      subtitle:
        "استكشف مجموعة مختارة من لوحات أصلية available للشراء. كل عمل chosen لجلب جمال خالد لمساحتك.",
    },
    filter: {
      label: "تصفية حسب الفئة",
      countOne: "لوحة متاحة",
      countMany: "لوحات متاحة",
      aria: "تصفية اللوحات حسب الفئة",
      empty: "لم يُعثر على لوحات في هذه الفئة.",
    },
  },
  painting: {
    descriptions: {
      Abstract:
        "هذه اللوحة التجريدية الأصلية ت capture العاطفة عبر composition ج bold وتناغم لوني refined، مما يجعلها centerpiece استثنائياً للinteriors المعاصرة.",
      Landscape:
        "هذه اللوحة المنظر الطبيعي الأصلية تدعو الم viewer إلى عالم من الضوء والatmosphere.",
      Portrait:
        "هذا البورتريه الأصلي يكشف depth وcharacter عبر technique متقنة.",
      Modern:
        "هذه اللوحة الحديثة الأصلية توازن بين structure وexpression ب sophistication معاصرة.",
      Nature:
        "هذا العمل الم inspired بالطبيعة ي celebrate الجمال organic و richness tactile.",
      Minimalist:
        "هذه اللوحة minimalist الأصلية ت distill الشكل إلى harmony essential.",
    },
    medium: "الوسط",
    dimensions: "الأبعاد",
    year: "السنة",
    category: "الفئة",
    acquire: "اقتنِ هذا العمل",
    acquireDescription:
      "اطلب هذه اللوحة الأصلية مع الدفع نقداً عند التسليم. سيتواصل فريقنا لتأكيد طلبك.",
    orderCta: "اطلب هذه اللوحة",
    notOrderable: "هذه اللوحة غير متاحة للطلب حالياً.",
    artistSection: "الفنان",
    aboutArtist: "عن",
    shipping: {
      label: "التوصيل",
      title: "معلومات الشحن",
      items: [
        {
          title: "شحن عالمي",
          description: "توصيل مؤمن للجامعين دولياً.",
        },
        {
          title: "تغليف آمن",
          description: "crating بmuseum-grade ومواد حماية.",
        },
        {
          title: "شهادة أصالة",
          description: "م included مع كل لوحة أصلية.",
        },
        {
          title: "مدة التسليم المتوقعة",
          description: "عادة 2–4 أسابيع بعد تأكيد الشراء.",
        },
      ],
    },
    returns: {
      title: "الإرجاع",
      body: "الأعمال الأصلية بيع نهائي. إذا وصلت القطعة تالفة، تواصل معنا خلال 48 ساعة مع ص photos.",
    },
    related: {
      label: "قد يعجبك أيضاً",
      title: "لوحات ذات صلة",
    },
  },
  order: {
    modal: {
      label: "طلب شراء",
      title: "اطلب هذه اللوحة",
      subtitle: "أكمل النموذج أدناه. الدفع نقداً عند التسليم.",
      close: "إغلاق نموذج الطلب",
    },
    summary: {
      label: "اللوحة المختارة",
      title: "العنوان",
      artist: "الفنان",
      price: "السعر",
      paintingId: "معرف اللوحة",
    },
    form: {
      fullName: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      deliveryCity: "مدينة التسليم",
      deliveryAddress: "عنوان التسليم",
      notes: "ملاحظات (اختياري)",
      notesPlaceholder: "تعليمات التسليم أو أسئلة (اختياري)",
      submit: "إرسال طلب الشراء",
      successTitle: "شكراً لطلبك.",
      successP1:
        "سيتواصل فريق Art Wave معك قريباً لتأكيد طلبك وتفاصيل التسليم.",
      successP2: "الدفع يتم عند التسليم (نقداً عند التسليم).",
    },
    validation: {
      fullNameRequired: "الاسم الكامل مطلوب.",
      fullNameShort: "يرجى إدخال اسمك الكامل.",
      phoneRequired: "رقم الهاتف مطلوب.",
      phoneInvalid: "يرجى إدخال رقم هاتف صالح.",
      emailRequired: "البريد الإلكتروني مطلوب.",
      emailInvalid: "يرجى إدخال بريد إلكتروني صالح.",
      cityRequired: "مدينة التسليم مطلوبة.",
      addressRequired: "عنوان التسليم مطلوب.",
      addressShort: "يرجى إدخال عنوان تسليم كامل.",
    },
    steps: {
      title: "كيفية الطلب",
      items: [
        "أرسل طلب الشراء.",
        "يتواصل فريقنا معك.",
        "نؤكد تفاصيل التسليم.",
        "تُغلف لوحتك ب securely.",
        "تدفع عند استلام اللوحة.",
      ],
    },
  },
  footer: {
    tagline:
      "معرض online curated ي celebrate لوحات استثنائية والفنانين who يخلقونها.",
    quickLinks: "روابط سريعة",
    contact: "اتصل",
    follow: "تابعنا",
  },
  notFound: {
    code: "404",
    title: "الصفحة غير موجودة",
    description: "الصفحة التي تبحث عنها ربما نُقلت أو لم تعد موجودة.",
    cta: "العودة للرئيسية",
  },
  artists: {
    "Elena Vasquez": {
      location: "برشلونة، إسبانيا",
      bio: "Elena Vasquez معروفة ب compositions تجريدية luminous توازن بين structure و spontaneity.",
    },
    "Marcus Chen": {
      location: "فancouver، كندا",
      bio: "Marcus Chen يخلق أعمال figurative contemplative rooted في technique كلاسيكية.",
    },
    "Sofia Laurent": {
      location: "بروvence، فرنسا",
      bio: "Sofia Laurent ترسم landscapes expansive inspired بضوء جنوب فرنسا.",
    },
    "James Okonkwo": {
      location: "لندن، المملكة المتحدة",
      bio: "James Okonkwo ي merge geometry urban و texture expressive.",
    },
    "Marie Dubois": {
      location: "نormandie، فرنسا",
      bio: "Marie Dubois capture شعر الأرض والبحر ب color غنية.",
    },
    "David Park": {
      location: "سoul، كorea",
      bio: "David Park يعمل في forms abstract bold.",
    },
    "Anna Kowalski": {
      location: "Kraków، بولندا",
      bio: "Anna Kowalski specialize في landscapes pastoral.",
    },
    "Thomas Berg": {
      location: "Copenhagen، الدنmark",
      bio: "Thomas Berg يخلق paintings minimalist restrained.",
    },
    "Yuki Tanaka": {
      location: "Kyoto، اليابان",
      bio: "Yuki Tanaka ي explore stillness و balance.",
    },
    "Claire Morrison": {
      location: "Edinburgh، Scotland",
      bio: "Claire Morrison ترسم scenes natural immersive.",
    },
    "Luca Ferretti": {
      location: "Milan، إيطاليا",
      bio: "Luca Ferretti ينتج works modern ب precision architectural.",
    },
    "Amara Okafor": {
      location: "Lagos، Nigeria",
      bio: "Amara Okafor celebrated ل portrait work powerful.",
    },
  },
};
