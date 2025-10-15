import { ReactNode } from "react";
import type { IconType } from "react-icons";
import { links, socialLinks } from "../nav";

export type SpinnerProps = {
  size?: 24 | 50 | 100 | 48 | 32 | 64 | number;
  color?: string;
};

export type WrapperProps = {
  children: ReactNode;
  footerLarge?: boolean;
  blackHeader?: boolean;
  footerTheme?: "white" | "black";
  headerText?: string;
  openDownload?: boolean;
};

export type MobileHeaderProps = {
  isOpen: boolean;
  onClose: () => void;
  theme?: "black" | "white";
};

export type AppRouteLink = {
  name: string;
  route: string;
  label?: string;
  description?: string;
  stripeSession?: boolean | undefined;
};

export type ExternalNavLink = {
  name: string;
  href: string;
  icon?: IconType;
  description?: string;
  stripeSession?: boolean | undefined;
  route?: string;
};

export type NavLink = AppRouteLink | ExternalNavLink;
export type LinksMap = typeof links;
export type SocialLinksMap = typeof socialLinks;

export type HeaderViewProps = {
  blackHeader?: boolean;

  isMobileHeader: boolean;
  openMobile: () => void;
  closeMobile: () => void;

  links: LinksMap;

  onGo: (href: string) => void;
  headerText?: string;
  theme?: "black" | "white";
};

export type HoverMenuProps = {
  open: string | null;
  setOpen: React.Dispatch<React.SetStateAction<string | null>>;
  menuData: Section[];
  theme: "black" | "white";
};

export type Item = { label: string; href: string; external?: boolean };
export type NavSection = { name: string; values: Record<string, unknown> };

export type NavProps = {
  hovered: string | null;
  onHoverChange: (key: string | null) => void;
  setMenuData: React.Dispatch<React.SetStateAction<object | null>>;
  theme: "black" | "white";
};

export type LinkItem = {
  name: string;
  href: string;
  description?: string;
  label?: string;
  icon?: IconType;
};

export type SectionItemProps = {
  label: string;
  href: string;
  external?: boolean;
  stripeSession?: boolean | undefined;
};

export type Section = {
  name: string;
  values: Record<string, LinkItem>;
};

export type SectionItem = {
  title: string;
  items: SectionItemProps[];
  stripeSession?: boolean | undefined;
};

export type NavRoute = { name: string; route: string };
export type NavGroup = { name: string; values: Section[] };
export type NavigationHeaderLink = NavRoute | NavGroup;
export type NavigationHeaderLinks = Record<string, NavigationHeaderLink>;
export type FaqItem = { q: string; a: string };

export type SecondaryButtonProps = {
  text: string;
  icon?: string;
  iconPosition?: "left" | "right";
  popupMessage?: string;
  popupButton?: string;
  iconSize?: number;
  iconColor?: string;
  buttonSize?: number;
  fontSize?: number;
  fontWeight?: 400 | 500 | 600 | 700;
  onClick?: () => void;
  widthButton?: string;
  paddingButton?: string;
  type?: "submit" | "reset" | "button" | undefined;
  formAction?: (formData: FormData) => void | Promise<void>;
  loading?: boolean;
  buttonColor?: string;
  textColor?: string;
};

export type PrimaryButtonProps = {
  text: string;
  icon?: string;
  iconPosition?: "left" | "right";
  popupMessage?: string;
  popupButton?: string;
  iconSize?: number;
  iconColor?: string;
  buttonSize?: number;
  fontSize?: number;
  fontWeight?: 400 | 500 | 600 | 700;
  onClick?: () => void;
  widthButton?: string;
  paddingButton?: string;
  type?: "submit" | "reset" | "button" | undefined;
  formAction?: (formData: FormData) => void | Promise<void>;
  loading?: boolean;
};

export type NavLinks = keyof typeof links;
