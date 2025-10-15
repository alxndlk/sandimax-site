"use client";

import React, { useState, useRef } from "react";
import styles from "./Main.module.css";
import { FiCheck, FiLink } from "react-icons/fi";
import { config } from "@/config";
import { subprocessor_content } from "../../(docs)/subprocessors/text";
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
            <h1>{config.sandimax.baseName} Subprocessors</h1>
            <p>
              At {config.sandimax.baseName} (“we”, “us”, or “our”), we’re
              committed to transparency about how data is handled across our
              websites and products. This includes disclosing the third-party
              service providers we engage
              <strong> (“subprocessors”) </strong> to operate and support our
              applications and related online services available at{" "}
              <a
                href={config.sandimax.baseURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {config.sandimax.baseURL.replace(/\/$/, "")}
              </a>
              .
              <br />
              <br />
              This page lists subprocessors that may process limited personal
              data on our behalf to help us deliver secure, reliable, and
              performant experiences, and to meet legal obligations. Provider
              coverage can vary by product, region, and the features you enable.
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.container_text}>
              {subprocessor_content.map((section, idx) => (
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
