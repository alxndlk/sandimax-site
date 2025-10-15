export interface Section {
  h1: string;
  paragraphs?: string[];
  list?: string[];
}

export const terms_content: Section[] = [
  {
    h1: "Introduction, Scope & Acceptance",
    paragraphs: [
      "These Terms of Service (the “Terms”) govern your access to and use of Sandimax products and services, including websites, applications (e.g., macOS/iOS), APIs, documentation, and any related software, features, content, and services (collectively, the “Service”). The Service is operated by Sandimax (“Sandimax,” “we,” “us,” or “our”).",
      "By installing, accessing, or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms and by policies referenced herein (including the Privacy Policy and Cookie Policy). If you do not agree, you must not use the Service.",
      "If you accept these Terms on behalf of an organization, you represent and warrant that you have authority to bind that organization; in such case, “you” and “your” refer to that organization. These Terms apply to the maximum extent permitted by applicable consumer protection laws, which remain unaffected where they cannot be waived.",
    ],
  },

  {
    h1: "Eligibility",
    paragraphs: [
      "The Service is intended solely for individuals who are 13 years of age or older. By accessing or using the Service, you represent and warrant that:",
    ],
    list: [
      "You are at least 13 years old.",
      "You are legally competent to enter into a binding contract.",
      "If you are between 13 and the age of majority in your jurisdiction, you have obtained parental or legal guardian consent.",
      "We do not knowingly collect personal information from children under 13; if we learn we have done so, we will take reasonable steps to delete it.",
    ],
  },

  {
    h1: "Licensing, Purchases & Payment",
    paragraphs: [
      "Upon successful purchase or activation (whether one-time license or subscription, depending on the product), Sandimax grants you a limited, non-exclusive, non-transferable, revocable license to install and use the applicable application according to the license scope disclosed at checkout or on the product page.",
    ],
    list: [
      "**Usage scope:** Unless otherwise stated, personal licenses allow use on a limited number of personal devices under your control (e.g., up to three (3) devices). Exact limits vary by product and license type.",
      "**Restrictions:** You agree not to copy, distribute, sublicense, lease, or resell the software; circumvent license or activation restrictions; share license credentials with unauthorized parties; or reverse engineer, decompile, or attempt to derive source code except where permitted by law.",
      "**License revocation:** We may suspend or revoke a license without prior notice in cases of Terms violations, fraudulent or abusive usage, chargeback/ dispute, or risks to the security and integrity of the Service.",
      "**Payments & processors:** Payments for direct purchases are handled by our payment provider(s) (e.g., Stripe). Storefronts (e.g., App Store) apply their own payment terms and policies.",
      "**Refunds:** Refund windows and methods depend on the product and purchase channel. For direct purchases, see our Refund Center; for storefront purchases, use the storefront’s refund process. Statutory rights remain unaffected.",
    ],
  },

  {
    h1: "Accounts, Sync & Cloud Features (Where Applicable)",
    paragraphs: [
      "Some products may support or require accounts, multi-device sync, or cloud features. Where offered, these features are optional unless explicitly required for operation, and described in the product notices or settings.",
    ],
    list: [
      "You are responsible for safeguarding account credentials and for all activity under your account.",
      "Cloud/sync features store only the data necessary to provide the feature and are subject to applicable privacy and security measures.",
      "We may limit or discontinue accounts or cloud features for security, abuse prevention, or legal compliance.",
    ],
  },

  {
    h1: "User Content & Conduct (Varies by Product)",
    paragraphs: [
      "Some products may allow you to submit or publish content (e.g., media uploads, gallery items, text, or metadata). Content stored locally and not submitted remains private to your device.",
    ],
    list: [
      "**Public submissions:** You retain ownership of your IP. You grant Sandimax a non-exclusive, worldwide, royalty-free, sublicensable license to host, store, reproduce, display, resize, distribute, and otherwise use your submissions in connection with the Service. Submissions may be reviewed or moderated; we may reject, block, or remove content at our discretion.",
      "**Private/local content:** We generally do not access private items stored solely on your device. You are responsible for compliance with applicable laws and third-party rights.",
      "**Prohibited content:** No pornographic/NSFW material where disallowed; no unlawful content; no hate, harassment, or incitement of violence; no violations of IP or privacy; no malware or attempts to disrupt the Service.",
      "You must not use the Service to break laws, violate rights, or interfere with the operation of the Service or other users’ access.",
    ],
  },

  {
    h1: "Service Availability & Modifications",
    list: [
      "We may modify, suspend, or discontinue any portion of the Service at any time, with or without notice.",
      "We may introduce new features or discontinue existing functionality.",
      "Community/gallery or other shared features may be limited or removed temporarily or permanently.",
      "Maintenance, updates, and migrations may affect availability. We do not guarantee uninterrupted or error-free operation.",
    ],
  },

  {
    h1: "Third-Party Services & Links",
    paragraphs: [
      "The Service may integrate third-party services (e.g., payments, hosting/CDN, analytics, email, distribution). Those services are provided under their own terms and privacy policies. Sandimax is not responsible for third-party content, terms, or practices.",
    ],
  },

  {
    h1: "Privacy & Cookie Policies",
    paragraphs: [
      "Your use of the Service is governed by our Privacy Policy and Cookie Policy, which explain how we collect, use, and protect information, and how you can manage preferences and permissions.",
    ],
  },

  {
    h1: "Intellectual Property",
    paragraphs: [
      "All content in the Service (software, code, designs, interfaces, logos, trademarks, and visuals) is the property of Sandimax or its licensors. No rights or licenses are granted except as expressly provided in these Terms.",
    ],
    list: [
      "You may not copy, modify, create derivative works, or distribute the Service or any part thereof.",
      "You may not reverse-engineer or attempt to extract source code except where permitted by law.",
    ],
  },

  {
    h1: "Disclaimer of Warranties",
    paragraphs: [
      "The Service is provided on an “as is” and “as available” basis, without warranty of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, title, or non-infringement.",
    ],
    list: [
      "We do not guarantee the Service will be uninterrupted, timely, secure, or error-free.",
      "We do not guarantee that content or features will be available at all times.",
      "Your use of the Service is at your sole risk.",
    ],
  },

  {
    h1: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Sandimax and its affiliates, officers, employees, licensors, and service providers are not liable for certain categories of damages or losses.",
    ],
    list: [
      "No liability for indirect, incidental, special, punitive, exemplary, or consequential damages.",
      "No liability for loss of data, content, revenue, profits, goodwill, or business opportunities.",
      "No liability for incompatibility with third-party systems or software, or for unauthorized access to or alteration of your content.",
      "Nothing herein limits or excludes liability that cannot be limited or excluded under applicable law.",
    ],
  },

  {
    h1: "Governing Law & Dispute Resolution",
    paragraphs: [
      "These Terms are governed by the laws specified on our website’s legal/Imprint page or product-specific notice. Where not specified, they are governed by the laws of Ukraine, without regard to conflict-of-law principles. If you are in the EU/EEA/UK or another jurisdiction with mandatory consumer protections, you retain all rights under such laws.",
      "Before initiating formal proceedings, please use the contact method provided on our website; we will make reasonable efforts to resolve disputes amicably.",
    ],
  },

  {
    h1: "Changes to These Terms",
    list: [
      "We may update these Terms to reflect changes in practices, laws, or the Service.",
      "All changes will be posted on our Terms page.",
      "Material changes may be communicated via website or in-product notices.",
      "Continued use of the Service after the effective date constitutes acceptance of the updated Terms.",
    ],
  },

  {
    h1: "Termination",
    list: [
      "You may stop using the Service at any time.",
      "We may suspend or terminate your license and/or access for violations of these Terms, fraud/abuse, or security risks.",
      "We may remove public content that violates policy.",
      "We may revoke access to updates or online services if misuse is detected.",
      "Termination does not limit our right to pursue legal remedies.",
    ],
  },

  {
    h1: "Feedback & Information",
    paragraphs: [
      "Any feedback you provide through our websites or products shall be deemed non-confidential, and Sandimax may use such information on an unrestricted basis. Information on our websites and in our apps is subject to change without notice. © 2025 Sandimax Team. All rights reserved. Website: sandimax.com.",
    ],
  },
];
