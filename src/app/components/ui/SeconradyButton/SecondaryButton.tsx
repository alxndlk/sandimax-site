import React, { JSX } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaApple,
  FaAppStore,
} from "react-icons/fa";
import styles from "./SecondaryButton.module.css";
import { PiUserList } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import Spinner from "../Spinner/Spinner";
import { SecondaryButtonProps } from "@/src/lib/types/types";

export const SecondaryButton = ({
  text,
  icon,
  iconPosition,
  iconSize,
  iconColor,
  buttonSize,
  fontSize,
  fontWeight,
  onClick,
  widthButton = "100%",
  paddingButton,
  type,
  formAction,
  loading,
  buttonColor,
  textColor,
}: SecondaryButtonProps) => {
  const iconsMap: { [key: string]: JSX.Element } = {
    FaChevronRight: <FaChevronRight size={iconSize} color={iconColor} />,
    FaChevronLeft: <FaChevronLeft size={iconSize} color={iconColor} />,
    FaAppStore: <FaAppStore size={iconSize} color={iconColor} />,
    FaApple: <FaApple size={iconSize} color={iconColor} />,
    PiUserList: <PiUserList size={iconSize} color={iconColor} />,
    GoArrowUpRight: <GoArrowUpRight size={iconSize} color={iconColor} />,
  };

  const IconComponent = icon ? iconsMap[icon] : null;

  return (
    <button
      className={styles.secondaryButton}
      onClick={onClick}
      type={type}
      formAction={formAction}
      style={{
        height: buttonSize,
        fontSize: fontSize,
        fontWeight: fontWeight,
        width: loading ? "max-content" : widthButton,
        padding: loading ? "12.5px" : paddingButton,
        backgroundColor: buttonColor,
        color: textColor,
      }}
    >
      {loading ? (
        <Spinner color="#000" size={16} />
      ) : (
        <>
          {iconPosition === "left" && IconComponent}
          <span>{text}</span>
          {iconPosition === "right" && IconComponent}
        </>
      )}
    </button>
  );
};
