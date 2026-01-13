"use client";

import React from "react";
import styles from "./Main.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { config } from "@/config";
import { Icons } from "@/icons";
import { MdOutlineBlock } from "react-icons/md";

type AppItem = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  badge?: string;
  image?: string;
  tone: "blue" | "green" | "purple" | "indigo" | "pink" | "slate";
  backgroundImage?: string;
  compatibility: string[];
};

const FILTERS = ["All", "MacOS", "iOS"] as const;
type Filter = (typeof FILTERS)[number];
type Platform = Exclude<Filter, "All">;

const APPS: Record<Platform, AppItem[]> = {
  MacOS: [
    {
      id: "wallper",
      title: "Wallper",
      subtitle:
        "Bring your desktop to life with stunning dynamic wallpapers. Seamless performance, elegant control, and effortless customization — all in one place.",
      href: "https://wallper.app/",
      badge: "Open",
      tone: "indigo",
      image: "/logos/w.png",
      backgroundImage: "/wallper/wallper-bg.png",
      compatibility: ["Mac"],
    },
    {
      id: "copier",
      title: "Copier",
      subtitle:
        "Copier is a powerful clipboard manager for macOS. All your clipboard data is encrypted and synced securely across all your Apple devices via iCloud. One-time payment of $5, lifetime license.",
      href: "https://trycopier.app/",
      badge: "Open",
      tone: "blue",
      image: "/copier/logo.png",
      backgroundImage: "/copier/copier-background.png",
      compatibility: ["Mac"],
    },
  ],
  iOS: [
    {
      id: "locora",
      title: "Locora",
      subtitle:
        "Explore a curated world of cities in one place. From iconic skylines to hidden streets, Locora highlights the must-see spots, local flavors, and moments that define each destination.",
      href: "https://apps.apple.com/app/locora/id6448311058",
      badge: "Open",
      tone: "blue",
      image: "/logos/plane.png",
      backgroundImage: "/locora/locora-bg.png",
      compatibility: ["iPhone", "iPad"],
    },
  ],
};

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

const Main = () => {
  const [filter, setFilter] = React.useState<Filter>("All");

  const displayedApps = React.useMemo<AppItem[]>(() => {
    if (filter === "All") {
      return [...APPS.MacOS, ...APPS.iOS];
    }
    return APPS[filter as Platform];
  }, [filter]);

  return (
    <motion.section className={styles.main} initial="hidden" animate="visible">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Apps by Sandimax</h1>
          <p className={styles.subtitle}>
            An independent dev team crafting high-quality digital products with
            precision and purpose.
          </p>
        </header>

        <motion.div
          key={filter}
          className={styles.grid}
          variants={grid}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 10 }}
        >
          <div className={styles.content}>
            {}
            <div
              role="tablist"
              aria-label="Platforms"
              className={styles.filters}
            >
              {FILTERS.map((name) => (
                <button
                  key={name}
                  role="tab"
                  aria-selected={filter === name}
                  className={
                    filter === name ? styles.filterActive : styles.filter
                  }
                  onClick={() => setFilter(name)}
                >
                  {name}
                </button>
              ))}
            </div>

            {}
            {filter === "MacOS" && (
              <h2 className={styles.platformTitle}>
                MacOS Apps.{" "}
                <span className={styles.platformSubtitle}>
                  Keep your Mac organized.
                </span>
              </h2>
            )}
            {filter === "iOS" && (
              <h2 className={styles.platformTitle}>
                iOS Apps.{" "}
                <span className={styles.platformSubtitle}>
                  Enhance your iPhone experience.
                </span>
              </h2>
            )}
            {filter === "All" && (
              <h2 className={styles.platformTitle}>
                All Apps.{" "}
                <span className={styles.platformSubtitle}>
                  Discover our entire collection.
                </span>
              </h2>
            )}

            <div className={styles.cards}>
              {displayedApps.map((app) => (
                <motion.div
                  variants={card}
                  key={app.id}
                  className={styles.card}
                  id={app.id}
                >
                  {app.id === "locora" && (
                    <div className={styles.inDev}>
                      <MdOutlineBlock size={64} color="#ff2d55" />
                      <span className={styles.inDevText}>
                        In Development. Coming Soon.
                      </span>
                    </div>
                  )}

                  <div className={styles.compatibility}>
                    <h1>Compatibility</h1>
                    <p>{app.compatibility.join(", ")}</p>
                  </div>

                  <div className={styles.cardBody}>
                    <Image
                      className={styles.appBG}
                      src={app.backgroundImage}
                      alt="App background"
                      quality={100}
                      width={1080}
                      height={1920}
                    />
                    <div className={styles.card_header}>
                      <Image
                        className={styles.appImage}
                        src={app.image}
                        alt="App logo"
                        width={512}
                        height={512}
                        priority
                        quality={100}
                      />
                      <h2 className={styles.appTitle}>{app.title}</h2>
                    </div>
                    <p className={styles.appSubtitle}>{app.subtitle}</p>
                    {app.id !== "locora" && (
                      <div className={styles.card_footer}>
                        <a
                          href={config[app.id]?.downloadURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.appLink}
                        >
                          Download
                        </a>
                        <a
                          href={config[app.id]?.baseURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.appLinkSecondary}
                        >
                          Learn More <Icons.chevrons.right />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Main;
