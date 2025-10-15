"use client";

import { loadStripe } from "@stripe/stripe-js";

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = PUBLISHABLE_KEY ? loadStripe(PUBLISHABLE_KEY) : null;

type Discount = { code: string; percent?: number } | null;

export async function startCheckout(discount: Discount) {
  if (!stripePromise) {
    console.error("Stripe publishable key is missing");
    throw new Error("Payment is temporarily unavailable.");
  }

  const metadata = {
    license_uuid: crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
    user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    locale: navigator.language,
    device_type: /Mobi|Android/i.test(navigator.userAgent)
      ? "mobile"
      : "desktop",
    referrer: document.referrer || "direct",
    discount_code: discount?.code ?? null,
    discount_percent: discount?.percent ?? null,
  };

  const res = await fetch("/api/checkout_session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ metadata, discountCode: discount?.code ?? null }),
  });

  if (!res.ok) {
    const t = await res.text().catch(() => "");
    throw new Error(`Failed to create checkout session. ${t}`);
  }

  const data = await res.json();
  const sessionId: string | undefined = data?.sessionId;
  if (!sessionId) throw new Error("No sessionId returned from server.");

  const stripe = await stripePromise;
  const { error } = await stripe!.redirectToCheckout({ sessionId });
  if (error) throw error;
}
