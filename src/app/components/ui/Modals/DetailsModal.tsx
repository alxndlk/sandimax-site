"use client";

import styles from "../home-page/Main.module.css";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "../../../../store/ModalStore";
import { useEffect, useState } from "react";
import VideoMeta from "../VideoMeta/VideoMeta";
import Spinner from "../Spinner/Spinner";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type DeviceModalProps = {
  showCloseButton?: boolean;
  videoID?: string | null;
};

interface VideoMeta {
  id: string;
  age: string;
  author: string;
  author_name?: string;
  createdAt: string;
  duration: number;
  isPublic: boolean;
  likes: number;
  name: string;
  resolution: string;
  sizeMB: number;
  status: string;
}

const Details = ({ showCloseButton, videoID }: DeviceModalProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<VideoMeta>(null);

  const KEY_TO_FETCH = (videoID ?? "")
    .trim()
    .replace(/\.(mp4|avi|mov|mkv)$/i, "");

  console.log(KEY_TO_FETCH);

  const fetchVideoMeta = async (KEY_TO_FETCH) => {
    const response = await fetch(`/api/video-meta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ KEY_TO_FETCH }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch video meta");
    }
    const data = await response.json();
    setLoading(false);
    return setData(data);
  };

  useEffect(() => {
    fetchVideoMeta(KEY_TO_FETCH);
  }, [KEY_TO_FETCH]);

  const { close } = useModalStore();

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
          <h2>Видео-мета информация.</h2>
          <p>
            Вся информация о видео, включая название, описание, теги и другие
            метаданные, будет отображаться здесь.
          </p>
        </motion.div>

        <motion.div
          className={styles.delails_modal_body}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {loading ? (
            <div className={styles.loading_container}>
              <Spinner size={32} />
            </div>
          ) : (
            <VideoMeta data={data} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Details;
