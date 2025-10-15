export interface Section {
  h1: string;
  paragraphs?: string[];
  list?: string[];
}

export const refund_content: Section[] = [
  {
    h1: "Eligibility for Refund",
    paragraphs: [
      "Sandimax offers a 14-day money-back guarantee from the date of purchase for eligible products, unless a different period is stated on the product page or required by storefront policy or applicable law.",
      "Eligibility depends on the purchase channel and product type (one-time license vs. subscription). Storefront-specific rules (e.g., App Store, third-party marketplaces) may override this Policy.",
    ],
    list: [
      "Your request must be submitted within fourteen (14) calendar days of the original purchase date.",
      "For marketplace purchases (e.g., App Store), refund requests must be made through that storefront’s refund process.",
      "For direct purchases from Sandimax, use the online Refund Request form in our Refund Center.",
      "We may ask for limited information to verify the purchase (e.g., order ID/receipt, amount, date, last 4 digits of card, or device/license details).",
    ],
  },

  {
    h1: "Method and Processing of Refunds",
    paragraphs: [
      "Payments for direct purchases are processed securely by our payment provider (e.g., Stripe, including Apple Pay and major cards).",
    ],
    list: [
      "If approved, refunds are issued to the **original payment method** only.",
      "We do **not** refund to alternative methods or different accounts.",
      "Processing times depend on your financial institution and typically take **3–10 business days** after approval.",
      "No refund handling or processing fees are charged by Sandimax (your bank or storefront may have its own rules).",
    ],
  },

  {
    h1: "License & Access After Refund",
    paragraphs: [
      "When a refund is granted for a one-time license or subscription, associated entitlements are revoked.",
    ],
    list: [
      "License keys may be deactivated and prior activations invalidated.",
      "Cloud or online features tied to the refunded purchase may be disabled.",
      "You must uninstall or discontinue use of paid features covered by the refunded license.",
    ],
  },

  {
    h1: "Cases Where Refunds May Not Be Granted",
    list: [
      "Requests submitted **after** the stated refund window (e.g., after 14 days) unless required by law or storefront policy.",
      "Violations of Terms of Use (e.g., unlawful use, reverse engineering, redistribution, resale, or circumventing licensing).",
      "Abuse of the refund program (e.g., repeated refund cycles, fraudulent behavior, false identity, payment disputes/chargebacks used in place of our process).",
      "If an account (where applicable) is suspended or banned for policy breaches or fraud.",
      "Products or features explicitly marked as non-refundable (where clearly disclosed at purchase).",
    ],
  },

  {
    h1: "Special Considerations",
    paragraphs: [
      "Because Sandimax ships multiple products across platforms, some rules vary by product or channel.",
    ],
    list: [
      "One-time licenses: unless stated otherwise on the product page, the 14-day guarantee applies.",
      "Subscriptions: refunds may be prorated or limited by the storefront or billing period; cancellations stop future charges but do not retroactively refund elapsed periods unless stated or required by law.",
      "Marketplace/App Store purchases: follow that platform’s refund workflow; Sandimax cannot override decisions made by the storefront.",
      "Pre-orders, beta/early access, or discounted/bundle offers may have specific terms shown at checkout.",
      "Where required by law (e.g., EU consumer rules), statutory rights apply in full.",
    ],
  },

  {
    h1: "How to Submit a Refund Request",
    paragraphs: ["Choose the path that matches your purchase channel."],
    list: [
      "**Direct purchases from Sandimax:** submit your request via the **Refund Center** on our website (provide order ID/receipt and brief reason—optional).",
      "**App Store / marketplaces:** use the respective storefront’s **refund process** as described in its help center.",
      "We aim to review direct requests within **3 business days** (subject to volume). You’ll receive status updates in the Refund Center.",
    ],
  },

  {
    h1: "Your Statutory Rights",
    paragraphs: [
      "Nothing in this Policy limits your rights under applicable consumer protection laws. If specific statutory refund rights apply in your jurisdiction (e.g., EU Consumer Rights Directive), those rights are respected in full.",
    ],
  },

  {
    h1: "Anti-Fraud & Verification",
    paragraphs: [
      "To protect users and our platform, we employ anti-fraud measures and may request limited additional details solely to verify purchase authenticity and eligibility.",
    ],
    list: [
      "Submitting inaccurate information, forged documents, or initiating chargebacks in parallel with a refund request may lead to denial and account/license restrictions where applicable.",
      "We reserve the right to interpret and apply this Policy reasonably, consistent with law and storefront requirements.",
    ],
  },

  {
    h1: "Policy Updates",
    paragraphs: [
      "We may update this Refund Policy to reflect changes in law, storefront requirements, or our practices. The most current version is available on our website. Continued use of our products after updates indicates acceptance of the revised terms.",
    ],
  },

  {
    h1: "Feedback & Information",
    paragraphs: [
      "Any feedback you provide through our websites or products may be used by Sandimax on an unrestricted basis. Information on our websites and in our apps is subject to change without notice. © 2025 Sandimax Team. All rights reserved. Website: sandimax.com.",
    ],
  },
];
