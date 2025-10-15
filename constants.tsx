import { FiAlertCircle, FiCheckCircle, FiInfo } from "react-icons/fi";
import {
  Card,
  FaqItem,
  ScrollTextProps,
  SectionItem,
  Tile,
} from "./src/lib/types/types";
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaPeopleRobbery, FaPlaceOfWorship } from "react-icons/fa6";
import { TbArrowGuide, TbBuildingAirport } from "react-icons/tb";
import { IoShareOutline } from "react-icons/io5";
import { IoIosApps } from "react-icons/io";
import { links, socialLinks } from "./src/lib/nav";
import { config } from "./config";

export const download_app_src: string = "/icons/download.png";

/**
 * Icons used throughout the app
 * Each icon includes aria-hidden for accessibility
 */

export const ICONS = {
  success: <FiCheckCircle aria-hidden />,
  error: <FiAlertCircle aria-hidden />,
  info: <FiInfo aria-hidden />,
  Planning: () => <LuCalendarCheck2 size={64} />,
  Places: () => <FaPlaceOfWorship size={64} />,
  Guides: () => <TbArrowGuide size={64} />,
  Culture: () => <FaPeopleRobbery size={64} />,
  Sharing: () => <IoShareOutline size={64} />,
  Airports: () => <TbBuildingAirport size={64} />,
  LocalApps: () => <IoIosApps size={64} />,
  download: "/icons/download.png",
  home_screen: "/images/home_screen.png",
} as const;

/**
 * Footer text items with links to terms and privacy
 * Each item is a string, with terms and privacy dynamically inserted
 */

export const footerText = [
  `${config.sandimax.baseName} is an independent software team crafting premium digital products and tools.`,
  "Use of our products may require a compatible device, the latest app version, and an internet connection for downloads, updates, activation, license validation, and certain online features.",
  "Licensing is personal unless otherwise stated. Usage limits (e.g., number of devices, simultaneous activations, or seat transfers) may vary by product and license type.",
  "Features, availability, languages, and content can vary by region and may change over time as we improve our products.",
  "Service quality may depend on your device capabilities, OS version, storage availability, and network conditions.",
  "Some capabilities may require the latest OS updates, supported hardware (e.g., GPU/codec support), and a stable network connection.",
  "Third-party providers (payments, hosting/CDN, analytics, email/notifications, distribution platforms, etc.) operate under their own terms and privacy policies.",
  "Network activity while using our products may incur data charges from your internet or mobile provider.",
  "We may offer optional cloud sync or remote services in certain products; availability and data retention rules may differ by product and region.",
  "Where required by law, non-essential analytics and cookies are used only with your consent and can be managed via product or browser settings.",
  "Crash reports and diagnostics, when enabled, are used to improve stability and performance; these can often be turned off in settings where applicable.",
  "Beta, preview, or experimental features may be unstable, may change without notice, and may be discontinued at any time.",
  "Trial versions (where offered) may be time-limited or feature-limited and are intended for evaluation only.",
  "Refunds, cancellations, and exchanges (where applicable) are governed by the store or payment provider used for purchase and any product-specific terms.",
  "Licenses may include device binding or activation checks to prevent abuse and ensure compliance with license terms.",
  "We may update products automatically or prompt you to update to maintain compatibility, security, and feature parity.",
  "Online features may be subject to maintenance windows, outages, or rate limits; availability is not guaranteed.",
  "Backups: you’re responsible for maintaining backups of your content and configuration unless a product explicitly provides backup features.",
  "User-submitted content (if a product supports it) may be subject to review, moderation, and removal in line with product guidelines and applicable law.",
  "We do not engage in behavioral advertising or sell personal data. See our Privacy Policy for details on data handling and your rights.",
  "Security: we apply commercially reasonable safeguards; however, no system is 100% secure. Use strong passwords, keep software updated, and manage permissions carefully.",
  "Open-source components may be used and are licensed under their respective licenses; acknowledgments are provided where required.",
  "Trademarks and brand names belong to their respective owners; use does not imply endorsement.",
  "Export control and sanctions laws may apply to the use and distribution of our software; you are responsible for compliance in your jurisdiction.",
  "Accessibility: we aim to support inclusive design and continue improving accessibility across products.",
  "Children’s use of our products should comply with local laws and platform age requirements; our products are not directed to children under 13.",
  "We may change product features, pricing, and availability over time; continued use after changes indicates acceptance.",
  "Feedback you provide may be used to improve our products and services without obligation to you.",
  `By using ${config.sandimax.baseName} products or websites, you agree to the ${links.terms.name} and ${links.privacy.name}.`,
  "For product-specific notices (e.g., accounts, cloud sync, content uploads, analytics defaults), refer to the in-app settings or the product page on our website.",
];

/**
 * Footer sections with titles and links
 * Each section includes a title and an array of items with labels and hrefs
 * Links to external sites include an external flag for proper handling
 */

export const sections: SectionItem[] = [
  {
    title: "Legal",
    items: [
      { label: links.privacy.label, href: links.privacy.route },
      { label: links.terms.label, href: links.terms.route },
      { label: links.refund.label, href: links.refund.route },
      { label: links.cookie.label, href: links.cookie.route },
      { label: links.subprocessors.label, href: links.subprocessors.route },
    ],
  },
  {
    title: "Community",
    items: Object.values(socialLinks).map((s) => ({
      label: s.name,
      href: s.href,
      external: true,
    })),
  },
  {
    title: "Applications",
    items: [{ label: "Wallper", href: "https://wallper.app", external: true }],
  },
];

/**
 * FAQ items with questions and answers
 * Each item includes a question and a detailed answer
 * Answers may include links to relevant sections or external resources
 */

export const faqs: FaqItem[] = [
  {
    q: "What is Locora?",
    a: "Locora is a lightweight travel companion that logs your trips, greets you when you arrive in a new city, and builds simple stats across devices. It focuses on clarity and privacy-first defaults — you decide what to share and when. The core experience is designed to be fast, distraction-free, and useful both during travel and after, when you review where you’ve been.",
  },
  {
    q: "Is Locora really free?",
    a: "Yes. The core app is free to download and use indefinitely. We may introduce optional add-ons (for example, advanced editing tools or premium data packs) as in-app purchases handled by the App Store. You can keep using the free version without buying anything, and any future purchases will be tied to your Apple ID.",
  },
  {
    q: "How does TestFlight work?",
    a: "TestFlight lets you try pre-release builds before they hit the App Store. Features in beta may change, be removed, or occasionally break; this helps us test performance and reliability across devices. Your feedback directly shapes what ships publicly, so early testers often see fixes and improvements land fastest.",
  },
  {
    q: "What data does Locora use?",
    a: "With your permission, Locora may use precise and background location to detect arrivals and compute city/country/day counts. Location is processed with power efficiency in mind and can be disabled at any time in iOS Settings → Privacy & Security → Location Services. If you turn location off, the app still works, but automatic welcomes and some stats won’t be available.",
  },
  {
    q: "Can I edit public pages?",
    a: "A Creator Plan is planned to allow edits to curated public pages (e.g., adding verified tips or improving city info). All payments for this plan, if/when launched, will be processed exclusively via the App Store, and attribution to your username may appear on public edits and histories. We reserve the right to review and revert changes for quality, safety, and accuracy.",
  },
];

/**
 * Icons for the accessibility showcase features
 * Each icon is imported from react-icons and used in the feature list
 */

export const ScrollText: ScrollTextProps[] = [
  { title: "Explore the world", subtitle: "smart, curated city guides." },
  { title: "Plan in minutes", subtitle: "prices, SIM/eSIM, transport info." },
  { title: "Find great spots", subtitle: "food, sights, and hidden gems." },
  { title: "Travel like a local", subtitle: "culture tips and key phrases." },
  { title: "Share your trip", subtitle: "collaborative lists and plans." },
];

/**
 * Tiles for the magazine grid in the towns showcase
 * Each tile includes an image path and optional alt text
 */

export const Tiles: Tile[] = [
  { img: "/cities_view/1.jpg" },
  { img: "/cities_view/2.jpg" },
  { img: "/cities_view/3.jpg" },
  { img: "/cities_view/4.jpg" },
  { img: "/cities_view/5.jpg" },
  { img: "/cities_view/6.jpg" },
  { img: "/cities_view/5.jpg" },
  { img: "/cities_view/7.jpg" },
  { img: "/cities_view/8.jpg" },
];

/**
 * Cards for the feature showcase section
 * Each card includes a kicker, headline, body, and optional title and cta
 */

export const cards: Card[] = [
  {
    kicker: "App Store Available",
    headline: "Use for Free",
    cta: { label: "Try for free*", href: "#download" },
    body: "Start your travel log and city welcomes for free. Extras will come via App Store purchases.",
  },
  {
    kicker: "Early access",
    headline: "TestFlight",
    title: "",
    body: "Try pre-release builds first. Features may change; your feedback helps.",
  },
  {
    kicker: "Coming soon",
    headline: "Creator Plan",
    title: "",
    body: "Edit public city pages and add tips. Managed via App Store; cancel anytime in Apple ID.",
  },
];

/**
 * Text for the accessibility showcase section
 * Includes a title and an array of features with ids, labels, and icons
 */

export const AccessibilityShowcaseText = {
  title: "Read, listen, and play Apple News on your favorite devices.",
};

/**
 * Features for the accessibility showcase section
 * Each feature includes an id, label, and icon component
 */

export const AccessibilityShowcaseFeatures = [
  {
    id: "Planning",
    label: "Planning",
    Icon: ICONS.Planning,
  },
  {
    id: "Guides",
    label: "Guides",
    Icon: ICONS.Guides,
  },
  {
    id: "Places",
    label: "Places",
    Icon: ICONS.Places,
  },
  {
    id: "Culture",
    label: "Culture",
    Icon: ICONS.Culture,
  },
  {
    id: "Airports",
    label: "Airports",
    Icon: ICONS.Airports,
  },
  {
    id: "Local Apps",
    label: "Local Apps",
    Icon: ICONS.LocalApps,
  },
];

export const TownsShowcaseText = {
  title: "Explore any city easily with Locora.",
  subtitle:
    "Explore a curated world of cities in one place. From iconic skylines to hidden streets, Locora highlights the must-see spots, local flavors, and moments that define each destination. Dive into vivid visuals, quick tips, and smart picks — then save places to plan your perfect day, online or offline.",
};

export const basePrice = 9.99;
type Feature = { text: string; available: boolean };

export const FreeArray: Feature[] = [
  { text: "18 Wallpapers", available: true },
  { text: "Full macOS app experience", available: true },
  { text: "Auto-start wallpapers", available: true },
  { text: "No custom uploads", available: false },
  { text: "No access to user gallery", available: false },
  { text: "Full settings experience", available: false },
];

export const ProArray: Feature[] = [
  { text: "600+ 4K live wallpapers", available: true },
  { text: "Everything in Free", available: true },
  { text: "Access to community gallery", available: true },
  { text: "Upload your own videos", available: true },
  { text: "Use on up to 3 Macs", available: true },
  { text: "Lifetime updates — no subscription", available: true },
];

export const FeatureTable = [
  {
    title: "Payment",
    value: "One-time — own it forever",
    desc: "Pay once and keep it. No subscriptions or recurring fees. Your license includes lifetime updates.",
  },
  {
    title: "Video Quality",
    value: "True 4K / high-bitrate",
    desc: "Crisp detail and smooth gradients. Carefully tuned encodes for desktop visuals without banding.",
  },
  {
    title: "Library Size",
    value: "600+ curated videos",
    desc: "Hand-picked, constantly refined. Scenes designed to complement work, focus, and downtime.",
  },
  {
    title: "Multi-Monitor",
    value: "Independent or synced",
    desc: "Set a different wallpaper for each display, or keep everything in perfect sync across your setup.",
  },
  {
    title: "Devices",
    value: "Up to 3 Macs",
    desc: "Use your license on your personal machines. Switching devices is easy — you stay in control.",
  },
  {
    title: "Custom Uploads",
    value: "Drag & drop your videos",
    desc: "Make any of your videos a live wallpaper. Add, remove, or reorder at any time.",
  },
  {
    title: "Battery",
    value: "Optimized, low impact",
    desc: "Adaptive frame rate, intelligent pausing, and efficient decoding for notebooks and long sessions.",
  },
  {
    title: "Performance",
    value: "Metal + AVFoundation",
    desc: "A native macOS pipeline built for stability and low CPU. Smooth playback, responsive UI.",
  },
  {
    title: "Offline",
    value: "Works without internet",
    desc: "Download once, enjoy anywhere. Local cache keeps your wallpapers available on the go.",
  },
  {
    title: "Cache Control",
    value: "Clear / manage storage",
    desc: "See how much space is used and clear it with one click. Keep your drive tidy.",
  },
  {
    title: "Moderation",
    value: "Reviewed community",
    desc: "Community uploads are reviewed before they appear. Quality first, always.",
  },
  {
    title: "Support",
    value: "Priority email & Discord",
    desc: "Fast, human support from the team that builds the app. Tips, fixes, and feature guidance.",
  },
];
