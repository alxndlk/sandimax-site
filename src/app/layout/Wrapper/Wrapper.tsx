"use client";

import styles from "./Wrapper.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { WrapperProps } from "@/src/lib/types/types";
import React from "react";

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  blackHeader,
  footerTheme,
  headerText,
}) => {
  return (
    <div className={styles.wrapper}>
      <Header blackHeader={blackHeader} headerText={headerText} />
      {children}
      <Footer theme={footerTheme} />
    </div>
  );
};
