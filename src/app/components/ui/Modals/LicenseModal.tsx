"use client";

import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "../../../../store/ModalStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import styles from "../../Home/Main.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const checkLicenseKeys = () => {
  const keys = localStorage.getItem("license_keys");
  return keys ? JSON.parse(keys) : [];
};

interface LicenseModalProps {
  showCloseButton?: boolean;
  checkLicenseKey?: true;
}

const LicenseModal = ({ showCloseButton }: LicenseModalProps) => {
  const { close } = useModalStore();
  const [licenseKeys, setLicenseKeys] = useState<string[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    const keys = checkLicenseKeys();
    setLicenseKeys(keys);
  }, []);

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);

    setTimeout(() => {
      setCopiedKey(null);
    }, 1000);

    toast.success("License key copied!", {
      position: "bottom-right",
      icon: null,
      style: {
        fontSize: "14px",
        backgroundColor: "#2ca76f4b",
        color: "#fff",
        border: "1px solid #44ffaa4b",
        height: "36px",
        padding: "8px",
        borderRadius: "6px",
        fontWeight: "500",
        backdropFilter: "blur(30px) saturate(180%)",
      },
    });
  };

  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        className={styles.license_modal}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {showCloseButton && (
          <motion.button
            className={styles.close}
            onClick={close}
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaXmark size={12} />
          </motion.button>
        )}

        <motion.div
          className={styles.license_modal_header}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <h2>My License Keys</h2>
          <p>
            You can buy our product license key on the main page. After the
            successful purchase — you will reach them here.
          </p>
        </motion.div>

        <motion.div
          className={styles.license_modal_body}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {licenseKeys.length > 0 ? (
            licenseKeys.map((key, index) => (
              <div key={index} className={styles.license_key}>
                <div className={styles.key}>{key}</div>
                <motion.button
                  className={styles.copy}
                  onClick={() => handleCopy(key)}
                  whileTap={{ scale: 0.95 }}
                >
                  {copiedKey === key ? "Copied!" : "Copy"}
                </motion.button>
              </div>
            ))
          ) : (
            <div className={styles.dont_have}>
              You do not have any license keys yet.
            </div>
          )}
        </motion.div>

        <motion.div
          className={styles.buttons_modal}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <PrimaryButton
            text="Get Started"
            icon="FaChevronRight"
            iconPosition="right"
            popupButton="D"
            iconSize={8}
            buttonSize={36}
            fontSize={12}
            iconColor="#70757e"
            onClick={() => {
              router.push("/download");
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LicenseModal;
