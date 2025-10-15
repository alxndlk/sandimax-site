import React from "react";
import styles from "./Spinner.module.css";
import Image from "next/image";
import { SpinnerProps } from "@/src/lib/types/types";

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <Image
      src="/icons/loading.gif"
      className={styles.spinner}
      style={{ width: size, height: size }}
      width={128}
      height={128}
      alt="Loading..."
    />
  );
};

export default Spinner;
