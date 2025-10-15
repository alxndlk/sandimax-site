import { FaGithub, FaReddit, FaDiscord } from "react-icons/fa6";
import { LinkItem, NavigationHeaderLinks, Section } from "./types/types";
import { config } from "@/config";

export const links = {
  home: { name: "Home", route: "/", description: "Go to the homepage" },
  terms: {
    name: "Terms of Service",
    route: "/terms",
    label: "Terms of Service",
    description: "Review the rules and conditions for using our services",
  },
  privacy: {
    name: "Privacy Policy",
    route: "/privacy",
    label: "Privacy Policy",
    description: "Learn how we collect, use, and protect your information",
  },
  refund: {
    name: "Refund Policy",
    route: "/refund",
    label: "Refund Policy",
    description: "Understand our refund process and eligibility criteria",
  },
  cookie: {
    name: "Cookie Policy",
    route: "/cookies",
    label: "Cookie Policy",
    description: "Understand how we use cookies on our website",
  },
  subprocessors: {
    name: "Subprocessors",
    route: "/subprocessors",
    label: "Subprocessors",
    description: "View our list of subprocessors and their roles",
  },
} as const;

export const socialLinks = {
  reddit: {
    name: "Reddit Community",
    href: `https://www.reddit.com/r/${config.metadata.applicationName}/`,
    icon: FaReddit,
    description: "Join our community on Reddit",
  },
  discord: {
    name: "Discord Community",
    href: "https://discord.com/invite/ksxrdnETuc",
    icon: FaDiscord,
    description: "Join our Discord server",
  },
  github: {
    name: "GitHub Profile",
    href: "https://github.com/alxndlk",
    icon: FaGithub,
    description: "Check out our GitHub profile",
  },
} satisfies Record<string, LinkItem>;

export const ADMINISTRATION_LINKS = {
  telegram: {
    name: "Developer Telegram",
    href: "https://t.me/alxndlk",
    description: "Contact us on Telegram",
    label: "Administration",
  },
  email: {
    name: "Developer Email",
    href: "mailto:livik059@gmail.com",
    description: "Contact us via Email",
    label: "Administration",
  },
} satisfies Record<string, LinkItem>;

export const SOCIALS = [
  { name: "Explore Socials", values: socialLinks },
  { name: "Administration Links", values: ADMINISTRATION_LINKS },
] satisfies Section[];

export const NAVIGATION_LINKS_HEADER = {
  home: { name: "Overview", route: "/" },
  socials: { name: "Socials", values: SOCIALS },
} satisfies NavigationHeaderLinks;
