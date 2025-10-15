"use client";

import React, { useState, useRef } from "react";
import styles from "./Main.module.css";
import { FiCheck, FiLink } from "react-icons/fi";
import { config } from "@/config";
import { cookies_content } from "../../(docs)/cookies/text";
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
            <h1>{config.sandimax.baseName} Cookie Policy</h1>
            <p>
              This Cookie Policy (“Policy”) describes how{" "}
              {config.sandimax.baseName} (“{config.sandimax.baseName}”, “we”,
              “us”, or “our”) uses cookies and related technologies in
              connection with your access to and use of our website, available
              at{" "}
              <a
                href={config.sandimax.baseURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {config.sandimax.baseURL}
              </a>{" "}
              (the “Website”). This Policy should be read together with our
              Privacy Policy, which explains how we process personal data.
              <br />
              <br />
              By continuing to browse or use our Website, you consent to our use
              of cookies and similar technologies as described here, unless you
              opt out or adjust your browser settings as described below.
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.container_text}>
              {cookies_content.map((section, idx) => (
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
