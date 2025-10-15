"use client";

import React, { useState, useRef } from "react";
import styles from "./Main.module.css";
import { FiCheck, FiLink } from "react-icons/fi";
import { config } from "@/config";
import { refund_content } from "../../(docs)/refund/text";
import { HighlightedText } from "@/src/utils/HighlightedText";

const Main = () => {
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  const CopyLinkButton = ({ idx }: { idx: number }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      const link = `${window.location.origin}${window.location.pathname}#section-${idx}`;
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    };

    return (
      <button
        onClick={handleCopy}
        className={styles.anchor}
        aria-label="Copy link"
      >
        {copied ? <FiCheck color="green" /> : <FiLink />}
      </button>
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.header}>
            <h1>{config.sandimax.baseName} Refund Policy</h1>
            <p>
              At {config.sandimax.baseName}, we’re committed to thoughtful,
              high-quality products and a fair experience. We understand there
              may be situations where you wish to request a refund. This Refund
              Policy explains when and how refunds may be issued, in line with
              applicable consumer protection laws and our internal procedures.
              <br />
              <br />
              This Policy applies to purchases made through our official
              channels and storefronts (including product pages at{" "}
              <a
                href={config.sandimax.baseURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {config.sandimax.baseURL.replace(/\/$/, "")}
              </a>
              ) and supplements our Terms of Use. Some platforms (e.g., app
              marketplaces) may impose their own refund rules, which will govern
              where applicable.
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.container_text}>
              {refund_content.map((section, idx) => (
                <div key={idx} className={styles.paragraph}>
                  <h1
                    id={`section-${idx}`}
                    ref={(el) => {
                      headingsRef.current[idx] = el;
                    }}
                    className={styles.heading}
                  >
                    {section.h1}
                    <CopyLinkButton idx={idx} />
                  </h1>

                  {section.paragraphs?.map((p, i) => (
                    <p key={i}>
                      <HighlightedText text={p} />
                    </p>
                  ))}

                  {section.list && (
                    <ul className={styles.list}>
                      {section.list?.map((item, i) => (
                        <li key={i}>
                          <HighlightedText text={item} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
