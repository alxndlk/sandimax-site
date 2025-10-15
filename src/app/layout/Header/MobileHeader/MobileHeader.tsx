/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useRef } from "react";
import styles from "./MobileHeader.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLockBodyScroll } from "@/src/hooks/useLockBodyScroll";
import { MobileHeaderProps, NavLink } from "@/src/lib/types/types";
import SpinnerMask from "@/src/app/components/ui/SpinnerMask/SpinnerMask";
import { links, socialLinks } from "@/src/lib/nav";
import { useAuthorDiscount } from "@/src/hooks/useAuthorDiscount";
import { setColorTheme } from "@/src/utils/themeSchema";

const MobileHeader: React.FC<MobileHeaderProps> = ({
  isOpen,
  onClose,
  theme,
}) => {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = React.useState(false);
  const discount = useAuthorDiscount();

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const containerClass = setColorTheme(styles, theme, "mobileHeaderContainer");
  const mobileProfileText = setColorTheme(styles, theme, "mobileProfileText");
  const linksClass = setColorTheme(styles, theme, "link");
  const iconsClass = setColorTheme(styles, theme, "icons");

  return (
    <div
      className={styles.main}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      onClick={() => onClose()}
    >
      {loading && <SpinnerMask />}
      <div
        className={containerClass}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.navBlock}>
          <div className={linksClass}>
            {Object.values(links).map((link: NavLink) => (
              <div key={link.name} className={styles.linkBlock}>
                <Link
                  href={link.route}
                  className={linksClass}
                  onClick={() => {
                    setLoading(true);
                    router.push(link.route);
                  }}
                  target={link.route.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    link.route.startsWith("http") ? "noopener noreferrer" : ""
                  }
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>

          <div className={iconsClass}>
            {Object.values(socialLinks).map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href || ""}
                  className={styles.iconSize}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.createElement(link.icon)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MobileHeader);
