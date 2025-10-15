export interface Section {
  h1: string;
  paragraphs?: string[];
  list?: string[];
}

export const subprocessor_content: Section[] = [
  {
    h1: "What is a Subprocessor?",
    paragraphs: [
      "A subprocessor is a third-party data processor engaged by Sandimax that has, or may have, access to certain personal data processed on behalf of users. This access is strictly limited to what is necessary to provide specific services (e.g., infrastructure hosting, payment processing, email delivery, analytics).",
      "Each subprocessor is contractually obligated to comply with applicable data protection laws (e.g., GDPR, CCPA/CPRA) and to implement appropriate technical and organizational measures for confidentiality, integrity, and security."
    ]
  },

  {
    h1: "List of Subprocessors",
    paragraphs: [
      "Depending on the Sandimax product and features you use, some or all of the following providers may be involved. Providers can vary by region and over time."
    ],
    list: [
      "Amazon Web Services, Inc. (USA/EU) — Cloud infrastructure, storage, compute, CDN edge.",
      "Vercel Inc. (USA/EU) — Website/app hosting, edge network, CDN.",
      "Stripe, Inc. (USA/EU) — Payment processing, billing metadata, receipts.",
      "Resend, Inc. (USA) — Transactional email delivery (e.g., purchase confirmations).",
      "Google LLC (USA/EU) — Privacy-respecting analytics (if consented) and crash/telemetry where applicable.",
      "GitHub, Inc. (USA) — Binary distribution and downloads (for select releases).",
      "Note: All subprocessors are reviewed and bound by appropriate Data Processing Agreements (DPAs) and/or Standard Contractual Clauses (SCCs), where applicable."
    ]
  },

  {
    h1: "Data Transfers Outside the EU",
    paragraphs: [
      "When data is transferred outside of the EEA/UK, we ensure adequate safeguards are in place."
    ],
    list: [
      "Standard Contractual Clauses (SCCs) approved by the European Commission (and UK addendum where required).",
      "Participation/certification under frameworks such as the EU–U.S. Data Privacy Framework (where applicable).",
      "Technical and organizational measures, including encryption in transit and at rest, access controls, and logging."
    ]
  },

  {
    h1: "How We Evaluate Subprocessors",
    list: [
      "Security posture review and industry certifications (e.g., ISO 27001, SOC 2) where applicable.",
      "Assessment of privacy compliance (e.g., GDPR, CCPA/CPRA) and data localization options.",
      "Contractual controls: DPAs, SCCs, confidentiality, sub-subprocessing restrictions, and incident notification duties.",
      "Ongoing risk monitoring aligned with service criticality and data sensitivity."
    ]
  },

  {
    h1: "Updates to This List",
    paragraphs: [
      "We may update this list as our infrastructure or services evolve."
    ],
    list: [
      "We will publish updates on this page and adjust the effective date.",
      "Where required by law or contract, we will provide advance notice to affected customers.",
      "We recommend reviewing this page periodically for the latest information."
    ]
  },

  {
    h1: "Feedback & Information",
    paragraphs: [
      "Any feedback you provide through our websites or products may be used by Sandimax on an unrestricted basis. Information on our websites and in our apps is subject to change without notice. © 2025 Sandimax Team. All rights reserved. Website: sandimax.com."
    ]
  }
];
