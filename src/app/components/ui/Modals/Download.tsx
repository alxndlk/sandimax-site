"use client";

import React, { useEffect, useRef, useCallback } from "react";
import styles from "./Download.module.css";
import { links } from "@/src/lib/nav";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

const Download = ({ onClose, version, size }) => {
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
              src="/disk.webp"
              alt="Discord Logo"
              width={512}
              height={512}
              className={styles.image}
            />
          </div>

          <div className={styles.container__text}>
            <h1 id="discord-modal-title" className={styles.title}>
              Wallper.dmg{" "}
              <MdVerified
                color="var(--blue-color)"
                className={styles.verifiedIcon}
                size={20}
              />
            </h1>
            <div className={styles.badges}>
              <div className={styles.badge}>v{version} Release</div>
              <div className={styles.badge__blue}>{size} MB</div>
            </div>
            <p className={styles.subtitle}>
              Download Wallper for macOS. Requires macOS 14.0 or later. Any chip
              (Intel or Apple Silicon) is supported.
            </p>

            <div className={styles.buttons}>
              <a
                href={links.download_app.route}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Download Wallper
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
