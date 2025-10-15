import { useEffect, useState } from "react";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export function useAuthorDiscount(cookieName: string = "discount") {
  const [discount, setDiscount] = useState<{
    code: string;
    percent: number;
  } | null>(null);

  useEffect(() => {
    const raw = getCookie(cookieName);
    if (raw) {
      const [code, percent] = raw.split(":");
      setDiscount({ code, percent: Number(percent) });

      console.log(`✅ Discount code applied: ${code} (${percent}%)`);
    }
  }, [cookieName]);

  return discount;
}
