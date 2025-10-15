export interface Section {
  h1: string;
  paragraphs?: string[];
  list?: string[];
}

export const cookies_content: Section[] = [
  {
    h1: "Scope & Overview",
    paragraphs: [
      "This Cookie Policy applies to Sandimax websites, web apps, and product pages (“Sites”), as well as embedded web views in certain apps. Because Sandimax ships multiple products with different features, the exact technologies and purposes can vary by product and by features you choose to enable.",
      "Where a product has unique behavior (e.g., account sign-in, cloud sync, widgets, or storefront), an in-product or page-level notice may supplement this Policy.",
    ],
  },

  {
    h1: "Definitions: Cookies & Similar Technologies",
    paragraphs: [
      "Cookies are small data files stored in your browser or device. They enable core operations, improve user experience, perform analytics, and support secure transactions.",
      "We may also use **Local Storage** / **Session Storage**, **IndexedDB**, and limited **Device Fingerprinting** strictly for security and anti-fraud—not for behavioral ads.",
      "These technologies typically do not directly identify you, but some may be considered personal data under laws such as GDPR or CCPA/CPRA.",
    ],
    list: [
      "**Local/Session Storage & IndexedDB:** used for functionality (e.g., cache, license or preference persistence, offline assets).",
      "**Device Fingerprinting (limited):** security/anti-abuse only (e.g., rate-limiting, anomalous patterns), with safeguards.",
    ],
  },

  {
    h1: "Categories of Cookies We May Use",
    paragraphs: [
      "We classify technologies by purpose. Some are essential to the operation of our Sites or web-based features within products. Presence of each category can vary by product and your settings.",
    ],
    list: [
      "**Strictly necessary:** fundamental to site/app operation (session/security, payments, licensing, CSRF protection, consent state). **Retention:** session cookies usually expire on browser close; persistent items may last up to **12 months** or until you delete them.",
      "**Functional (optional):** quality-of-life features such as remembering preferences, last-used view, or language. Enabled to the extent you opt in and as a product requires.",
      "**Analytics (consent-based):** privacy-respecting aggregate metrics for stability and UX improvement. Enabled only after consent where required and configurable where provided. Typical storage duration is up to **26 months**.",
      "**Performance/cache:** client-side caching (e.g., IndexedDB) to speed up repeat loads and enable limited offline use.",
    ],
  },

  {
    h1: "Examples of Technologies & Providers",
    paragraphs: [
      "Exact providers can change over time and differ per product. The following are common examples; refer to the product/page notice for a current list where applicable.",
    ],
    list: [
      "**Payments (e.g., Stripe):** session integrity, fraud prevention, and checkout cookies/scripts.",
      "**Hosting/CDN (e.g., Vercel, AWS CloudFront/S3):** performance, secure delivery, edge caching.",
      "**Email/Notifications (e.g., Resend):** transactional messages (no ad tracking).",
      "**Analytics/Crash (consent-based):** privacy-respecting telemetry for reliability (disabled by default where law requires consent).",
    ],
  },

  {
    h1: "Cookie Consent & Controls",
    paragraphs: [
      "Where required by GDPR/ePrivacy/CPRA, we present a Cookie Banner on first visit. Your choices determine which non-essential categories load.",
    ],
    list: [
      "Options typically include **accept all**, **reject non-essential**, or **customize by category** (where available).",
      "You can later update or withdraw consent via our cookie settings (if provided) or by clearing cookies and site data in your browser.",
      "**Important:** Disabling certain items can impair functionality (e.g., secure login, license validation, checkout).",
    ],
  },

  {
    h1: "Legal Basis for Using Cookies",
    list: [
      "**Legitimate interests:** essential security, licensing, fraud prevention, and core platform stability.",
      "**Consent:** analytics, functional, and other non-essential categories, where required.",
      "**Contractual necessity:** session/payment cookies that facilitate transactions you request.",
    ],
  },

  {
    h1: "Do Not Track & Global Privacy Control",
    paragraphs: [
      "Where technically feasible, we honor browser or platform privacy preferences (e.g., Global Privacy Control). Some essential processing may still occur to provide the services you request.",
    ],
  },

  {
    h1: "Your Rights & Choices",
    paragraphs: [
      "Depending on your jurisdiction, you may have rights regarding data collected via cookies and similar technologies.",
    ],
    list: [
      "**GDPR (EU/EEA/UK):** access, rectification, erasure; object or restrict processing; withdraw consent at any time; lodge a complaint with your local DPA.",
      "**CCPA/CPRA (California):** right to know and delete cookie-derived personal data; right to opt out of sale/sharing (Sandimax does **not** sell personal data); right to non-discrimination.",
      "You can manage cookie preferences via our banner/settings (where provided) and your browser’s controls.",
    ],
  },

  {
    h1: "Security of Cookie-Derived Data",
    paragraphs: [
      "We apply technical and organizational safeguards appropriate to the risk.",
    ],
    list: [
      "Secure **HTTPS/TLS** transport and hardened headers.",
      "Least-privilege access and audit where applicable.",
      "Use of compliant, privacy-focused third-party tools.",
      "No system is 100% secure—review and adjust your cookie settings for enhanced privacy.",
    ],
  },

  {
    h1: "Retention & Deletion",
    paragraphs: [
      "Retention varies by category and provider. You can delete cookies and site data at any time via your browser settings. For local storage and IndexedDB, clear site data from your browser’s privacy menu.",
    ],
    list: [
      "Session cookies: removed when you close the browser or end a session.",
      "Persistent cookies/Local Storage/IndexedDB: can last until expiry or manual deletion; typical ranges are **1–12 months** for cookies; cache databases may persist longer unless cleared.",
    ],
  },

  {
    h1: "Policy Updates",
    paragraphs: [
      "We may update this Policy to reflect changes in technology, law, or our practices. The most current version is available at https://sandimax.com/cookies.",
      "Where legally required, we will notify users of material changes via a banner, on-site notice, or in-product message.",
    ],
  },

  {
    h1: "Feedback & Information",
    paragraphs: [
      "Any feedback you provide through our Sites or products may be used by Sandimax on an unrestricted basis. Information on our websites and in our apps is subject to change without notice. © 2025 Sandimax Team. All rights reserved. Website: sandimax.com.",
    ],
  },
];
