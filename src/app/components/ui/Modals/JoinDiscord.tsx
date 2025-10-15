"use client";

import React, { useEffect, useRef, useCallback } from "react";
import styles from "./JoinDiscord.module.css";
import { socialLinks } from "@/src/lib/nav";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { config } from "@/config";

const JoinDiscord = ({ onClose, online_count, member_count }) => {
  const dialogRef = useRef(null);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose?.();
    },
    [onClose]
  );

  useEffect(() => {
    const prev = document.body.style.overflow;
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  if (config.debug) {
    console.log("Discord status:", { online_count, member_count });
  }

  return (
    <div className={styles.wrapper} aria-hidden={false}>
      <div
        className={styles.backdropCatcher}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      <div
        className={styles.window}
        role="dialog"
        aria-modal="true"
        aria-labelledby="discord-modal-title"
        ref={dialogRef}
      >
        <div className={styles.content}>
          <button
            className={styles.close}
            aria-label="Close"
            onClick={() => onClose?.()}
          >
            ✕
          </button>

          <div className={styles.imageContainer}>
            <Image
              src="/icons/sandimax.png"
              alt="Discord Logo"
              width={512}
              height={512}
              className={styles.image}
            />
          </div>

          <div className={styles.container__text}>
            <h1 id="discord-modal-title" className={styles.title}>
              Sandimax{" "}
              <MdVerified
                color="var(--blue-color)"
                className={styles.verifiedIcon}
                size={20}
              />
            </h1>
            <div className={styles.badge}>10% discount for joining</div>
            <p className={styles.subtitle}>
              Get 10% off for your first purchase. Claim your reward by joining
              Discord.
            </p>

            <div className={styles.status}>
              <p>
                <span className={styles.green} aria-hidden="true"></span>
                {online_count} Online
              </p>
              <p>
                <span className={styles.gray} aria-hidden="true"></span>
                {member_count} Members
              </p>
            </div>

            <div className={styles.buttons}>
              <a
                href={socialLinks.discord.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDiscord;
