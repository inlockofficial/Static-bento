"use strict";

const CONFIG = {

  /* ═══════════════════════════════════════
     CREATOR INFO
  ═══════════════════════════════════════ */
  creator: {
    name:         { en: "Layla Hassan",         ar: "ليلى حسان",              fr: "Layla Hassan"              },
    title:        { en: "UGC Creator & Brand Storyteller", ar: "مبدعة محتوى وراوية قصص العلامات التجارية", fr: "Créatrice UGC & Conteuse de Marque" },
    bio:          { en: "I craft authentic, scroll-stopping content that converts. Specializing in lifestyle, beauty & tech verticals with a Gen-Z-first creative lens.",
                    ar: "أصنع محتوى أصيلاً يوقف التمرير ويحقق التحويل. متخصصة في قطاعات نمط الحياة والجمال والتكنولوجيا.",
                    fr: "Je crée du contenu authentique qui arrête le scroll et convertit. Spécialisée en lifestyle, beauté & tech."  },
    initials:     "LH",
    profileImage: null,           // Set to an image URL or leave null for initials
    availability: { en: "Open to Projects",         ar: "متاحة للمشاريع",         fr: "Disponible pour des projets" },
    location:     { en: "Dubai, UAE 🌍",             ar: "دبي، الإمارات 🌍",       fr: "Dubaï, EAU 🌍"              },
    responseTime: { en: "Replies within 2 hrs",      ar: "ترد خلال ساعتين",        fr: "Répond généralement en 2h"  },
  },

  /* ═══════════════════════════════════════
     PORTFOLIO CATEGORIES
  ═══════════════════════════════════════ */
  portfolio: [
    {
      category:    { en: "Lifestyle & Vlog",   ar: "نمط الحياة والفلوج",          fr: "Lifestyle & Vlog"      },
      description: { en: "Day-in-the-life content, morning routines & city walks",
                     ar: "محتوى يوم في حياتي، روتين الصباح والمشي في المدينة",
                     fr: "Contenu quotidien, routines matinales & balades"         },
      icon:        "🎬",
      accent:      "#FCA5A5",
      accentDark:  "#dc2626",
      count:       { en: "42 Videos",  ar: "٤٢ مقطع",  fr: "42 Vidéos"  },
      tags:        { en: ["TikTok", "Reels", "Shorts"], ar: ["تيك توك", "ريلز", "شورتس"], fr: ["TikTok", "Reels", "Shorts"] },
    },
    {
      category:    { en: "Beauty & Skincare",  ar: "الجمال والعناية بالبشرة",     fr: "Beauté & Soins"        },
      description: { en: "Unboxings, tutorials & honest product reviews",
                     ar: "فتح العلب، دروس تعليمية ومراجعات صادقة للمنتجات",
                     fr: "Unboxings, tutoriels & avis honnêtes sur les produits"   },
      icon:        "✨",
      accent:      "#a5b4fc",
      accentDark:  "#4f46e5",
      count:       { en: "67 Videos",  ar: "٦٧ مقطع",  fr: "67 Vidéos"  },
      tags:        { en: ["Skincare", "Makeup", "Haircare"], ar: ["بشرة", "مكياج", "شعر"], fr: ["Soin", "Maquillage", "Cheveux"] },
    },
    {
      category:    { en: "Tech & Gadgets",     ar: "التقنية والأجهزة",            fr: "Tech & Gadgets"        },
      description: { en: "App reviews, unboxings, setup tours & comparisons",
                     ar: "مراجعات تطبيقات، فتح علب وجولات الإعداد",
                     fr: "Avis d'apps, unboxings, tours de setup & comparatifs"    },
      icon:        "📱",
      accent:      "#86efac",
      accentDark:  "#16a34a",
      count:       { en: "29 Videos",  ar: "٢٩ مقطع",  fr: "29 Vidéos"  },
      tags:        { en: ["iOS", "Android", "Wearables"], ar: ["آيفون", "أندرويد", "أجهزة"], fr: ["iOS", "Android", "Wearables"] },
    },
  ],

  /* ═══════════════════════════════════════
     STATS
  ═══════════════════════════════════════ */
  stats: [
    {
      label: { en: "Avg. Engagement", ar: "متوسط التفاعل",   fr: "Engagement Moy."    },
      value: "8.4%",
      icon:  "📈",
      sub:   { en: "above industry avg",   ar: "أعلى من المتوسط",   fr: "au-dessus du secteur" },
    },
    {
      label: { en: "Happy Clients",  ar: "عملاء سعداء",       fr: "Clients Satisfaits" },
      value: "130+",
      icon:  "🤝",
      sub:   { en: "brands & agencies",    ar: "علامات ووكالات",    fr: "marques & agences"    },
    },
  ],

  /* ═══════════════════════════════════════
     WHY ME
  ═══════════════════════════════════════ */
  whyMe: {
    label:     { en: "Why Me?",             ar: "لماذا أنا؟",          fr: "Pourquoi moi ?"      },
    text:      { en: "I don't just create content — I create desire. Every frame is engineered for retention, every hook tested for scroll-stopping power, every CTA optimized for conversion.",
                 ar: "لا أصنع محتوى فحسب — أصنع الرغبة. كل إطار مصمم للاحتفاظ بالمشاهد، وكل خطاف مُختبر لوقف التمرير.",
                 fr: "Je ne crée pas que du contenu — je crée le désir. Chaque image est conçue pour la rétention, chaque accroche testée, chaque CTA optimisé."  },
    highlight: { en: "content → conversion",  ar: "محتوى → تحويل",    fr: "contenu → conversion" },
  },

  /* ═══════════════════════════════════════
     SERVICES
  ═══════════════════════════════════════ */
  services: {
    label: { en: "Services",  ar: "الخدمات",  fr: "Services" },
    items: [
      { name: { en: "Raw UGC Footage",          ar: "لقطات UGC خام",           fr: "Séquences UGC brutes"   } },
      { name: { en: "Edited Short-form Videos", ar: "مقاطع قصيرة محررة",       fr: "Vidéos courtes montées" } },
      { name: { en: "Static Photo Content",     ar: "محتوى صور ثابتة",         fr: "Contenu photo statique" } },
      { name: { en: "Script & Storyboard",      ar: "نص وستوريبورد",           fr: "Script & Storyboard"    } },
      { name: { en: "Brand Whitelisting",       ar: "قائمة العلامة البيضاء",   fr: "Whitelisting de marque" } },
      { name: { en: "Rush Delivery (48h)",      ar: "تسليم سريع (٤٨ ساعة)",   fr: "Livraison express (48h)" } },
    ],
  },

  /* ═══════════════════════════════════════
     TESTIMONIAL
  ═══════════════════════════════════════ */
  testimonial: {
    quote: {
      en: "Layla delivered exactly what our brand needed — authentic content that felt native to TikTok and converted 3× better than our studio ads.",
      ar: "ليلى قدمت بالضبط ما احتاجته علامتنا التجارية — محتوى أصيل يبدو طبيعياً على تيك توك وحقق تحويلاً أفضل بثلاثة أضعاف.",
      fr: "Layla a livré exactement ce dont notre marque avait besoin — un contenu authentique qui a converti 3× mieux que nos pubs studio.",
    },
    author: {
      en: "Sarah K. — Head of Marketing, GlowLab",
      ar: "سارة ك. — رئيسة التسويق، GlowLab",
      fr: "Sarah K. — Directrice Marketing, GlowLab",
    },
    avatar: "SK",
  },

  /* ═══════════════════════════════════════
     CALL TO ACTION
  ═══════════════════════════════════════ */
  cta: {
    title:      { en: "Let's Build Something Iconic.",      ar: "لنبني شيئاً أسطورياً.",          fr: "Créons quelque chose d'iconique."  },
    subtitle:   { en: "Ready to create content that actually moves product?",
                  ar: "هل أنت مستعد لإنشاء محتوى يحرك المنتج فعلاً؟",
                  fr: "Prêt à créer du contenu qui vend vraiment?"                               },
    buttonText: { en: "Work With Me →",  ar: "← اعمل معي",  fr: "Travaillez avec moi →"          },
    email:      "hello@laylahassan.com",
    note:       { en: "Typically replies within 2 hours",
                  ar: "تستجيب عادةً في غضون ساعتين",
                  fr: "Répond généralement en 2 heures"                                          },
  },

  /* ═══════════════════════════════════════
     SOCIAL LINKS
  ═══════════════════════════════════════ */
  social: {
    title: { en: "Find Me Online",    ar: "تجدني على الإنترنت",  fr: "Retrouvez-moi en ligne" },
    links: [
      { platform: "TikTok",    handle: "@laylahassan",  url: "#", icon: "🎵" },
      { platform: "Instagram", handle: "@layla.ugc",    url: "#", icon: "📸" },
      { platform: "YouTube",   handle: "LaylaCreates",  url: "#", icon: "▶️" },
    ],
  },

};
