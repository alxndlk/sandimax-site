"use client";

import React, { useState, useRef } from "react";
import styles from "./Main.module.css";
import { FiCheck, FiLink } from "react-icons/fi";
import { config } from "@/config";
import { privacy_content } from "../../(docs)/privacy/text";
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
            <h1>{config.sandimax.baseName} Privacy Policy</h1>
            <p>
              {config.sandimax.baseName} is committed to your privacy. Read this
              Privacy Policy for a clear explanation of how we collect, use,
              disclose, and store your information.
              <br />
              <br />
              {config.sandimax.baseName} products do not generally require user
              accounts. To review or manage privacy options, use the relevant
              product’s privacy settings (where available) or read the latest
              policy at{" "}
              <a
                href={`${config.sandimax.baseURL}privacy`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {new URL(`${config.sandimax.baseURL}privacy`).host + "/privacy"}
              </a>
              .
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.container_text}>
              {privacy_content.map((section, idx) => (
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
