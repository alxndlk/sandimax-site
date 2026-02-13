import { FiAlertCircle, FiCheckCircle, FiInfo } from "react-icons/fi";
import { SectionItem } from "./src/lib/types/types";
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
    items: [
      { label: "Callendarly", href: "https://callendarly.com", external: true },
      { label: "Copier", href: "https://trycopier.app", external: true },
      { label: "Wallper", href: "https://wallper.app", external: true },
    ],
  },
];
