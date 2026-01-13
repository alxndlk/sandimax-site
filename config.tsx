export const config = {
  terms_date_confirm: new Date("2025-08-18"),
  privacy_date_confirm: new Date("2025-08-18"),
  debug: true,
  metadata: {
    title: "Sandimax — Thoughtfully Crafted Software",
    description:
      "Sandimax Team builds elegant, high-performance software with a focus on design, performance, and the little details that matter.",
    keywords: [
      "Sandimax",
      "Sandimax Team",
      "software development",
      "indie developers",
      "digital products",
      "design-driven apps",
      "creative tools",
      "thoughtful UX",
      "minimalist software",
    ],
    authors: [{ name: "Sandimax Team", url: "https://sandimax.com" }],
    creator: "Sandimax Team",
    applicationName: "Sandimax",
    referrer: "origin-when-cross-origin",

    openGraph: {
      title: "Sandimax — Software Built with Care",
      description:
        "We’re Sandimax — an independent dev team crafting high-quality digital products with precision and purpose.",
      url: "https://sandimax.team",
      siteName: "Sandimax",
      images: [
        {
          url: "https://sandimax.team/og-image.png",
          width: 1200,
          height: 630,
          alt: "Sandimax Team — Software Developers",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  },
  locora: {
    baseURL: "https://locora.app/",
    baseName: "Locora",
    downloadURL: "",
  },
  sandimax: {
    baseURL: "https://sandimax.com/",
    baseName: "Sandimax",
  },
  copier: {
    baseURL: "https://trycopier.app/",
    baseName: "Copier",
    downloadURL: "https://apps.apple.com/app/copier",
  },
  wallper: {
    baseURL: "https://wallper.app/",
    baseName: "Wallper",
    downloadURL:
      "https://github.com/alxndlk/wallper-app/releases/download/Release/Wallper.dmg",
  },
};
