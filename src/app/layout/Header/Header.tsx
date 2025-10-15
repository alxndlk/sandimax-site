"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { links } from "@/src/lib/nav";
import HeaderView from "../../components/ui/Header/HeaderView";

type HeaderProps = {
  blackHeader?: boolean;
  headerText?: string;
};

const HeaderContainer: React.FC<HeaderProps> = ({
  blackHeader,
  headerText,
}) => {
  const [isMobileHeader, setMobileHeader] = useState(false);

  const router = useRouter();

  const go = (href: string) => router.push(href);
  const openMobile = () => setMobileHeader(true);
  const closeMobile = () => setMobileHeader(false);

  return (
    <HeaderView
      blackHeader={blackHeader}
      isMobileHeader={isMobileHeader}
      openMobile={openMobile}
      closeMobile={closeMobile}
      links={links}
      onGo={go}
      theme={blackHeader ? "black" : "white"}
      headerText={headerText}
    />
  );
};

export default HeaderContainer;
