/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "./Nav";
import HoverMenu from "./HoverMenu";
import MobileHeader from "@/src/app/layout/Header/MobileHeader/MobileHeader";
import { HeaderViewProps, Section } from "@/src/lib/types/types";
import { Icons } from "@/icons";

const HeaderView: React.FC<HeaderViewProps> = ({
  blackHeader,
  openMobile,
  closeMobile,
  headerText = "Sandimax",
  theme,
}) => {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [menuData, setMenuData] = React.useState<Section[] | null>(null);
  const [rotate, setRotate] = React.useState<number>(180);
  const [isMobileHeader, setIsMobileHeader] = React.useState(false);
  const [isSandimaxHeader, setIsSandimaxHeader] = React.useState(false);

  const handleRotate = () => {
    setRotate((prev) => prev + 180);
  };

  return (
    <motion.header
      className={
        !openMenu && !isMobileHeader && !isSandimaxHeader
          ? styles.header
          : styles.active_header
      }
    >
      <MobileHeader
        isOpen={isMobileHeader}
        onClose={closeMobile}
        theme={blackHeader ? "black" : "white"}
      />

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link
            href="/"
            className={styles.logo}
            {...(blackHeader && { style: { color: "#000" } })}
          >
            {headerText}
          </Link>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div
            className={styles.mobile_icon}
            onClick={openMobile}
            aria-label="Open Menu"
          >
            {Icons.chevrons.up({
              size: 20,
              onClick: () => (
                handleRotate(), setIsMobileHeader((prev) => !prev)
              ),
              style: {
                transform: `rotate(${rotate}deg)`,
                transition: "transform 0.2s ease-in-out",
              },
              color: theme === "black" ? "#000" : "#fff",
            })}
          </div>
          <Nav
            hovered={openMenu}
            onHoverChange={setOpenMenu}
            setMenuData={setMenuData}
            theme={blackHeader ? "black" : "white"}
          />
        </motion.div>
      </motion.div>
      <HoverMenu
        open={openMenu}
        setOpen={setOpenMenu}
        menuData={menuData}
        theme={blackHeader ? "black" : "white"}
      />
    </motion.header>
  );
};

export default HeaderView;
