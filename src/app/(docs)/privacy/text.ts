export interface Section {
  h1: string;
  paragraphs?: string[];
  list?: string[];
}

export const privacy_content: Section[] = [
  {
    h1: "Scope & Who We Are",
    paragraphs: [
      "This Privacy Policy applies to Sandimax websites, apps, and services (“Products”). Because Sandimax publishes multiple Products with different features, the specific data collected and how it is used can vary by Product and by feature you choose to enable.",
      "Where a Product has unique behavior (e.g., accounts, cloud sync, widgets, content uploads, or purchases), an in-app or product-specific notice (a “Product Notice”) may provide additional detail that supplements this Policy.",
    ],
  },

  {
    h1: "Information We Collect (Varies by Product & Feature)",
    paragraphs: [
      "Sandimax follows a data-minimization approach. We only collect what is necessary to deliver requested functionality, comply with law, maintain security, and improve reliability. The categories below describe what may be collected depending on the Product and which features you enable.",
    ],
    list: [
      "**Device & Technical data (core):** anonymized or pseudonymized device signals used for functionality, diagnostics, and security. Examples may include: OS version, app version, device model/name, language/region, IP-derived country, timestamps, crash/error logs, performance metrics.",
      "**Purchases & Licensing (if applicable):** transaction identifiers, license keys, receipt validation artifacts, and entitlement state to deliver paid features. **Payment method data is processed by our payment provider (e.g., Stripe) and is not stored by Sandimax.**",
      "**Account data (if a Product supports accounts):** identifiers, display name, and optional profile or settings needed to provide sync or multi-device features. Some Products do not require or support accounts at all.",
      "**Cloud sync & storage (if enabled):** items you choose to sync (e.g., preferences, content metadata, documents, media). Scope is limited to what the Product needs to function.",
      "**Content uploads (if provided by the Product):** media and metadata you choose to submit for sharing, publication, collaboration, or backup. Product Notices explain visibility, review/moderation, and deletion options.",
      "**Widgets/Extensions/Background features (if used):** data strictly necessary to render the widget/extension or perform its background job (e.g., refresh timestamps, cached elements).",
      "**Location/Photos/Camera/Microphone/Contacts/Calendars (only if you explicitly grant access):** used solely to power the feature that requested permission. Access can be revoked in system settings.",
      "**Analytics (consent-based where required):** privacy-respecting metrics to understand stability and usability. Enabled only after consent where required by law and configurable where provided.",
    ],
  },

  {
    h1: "How We Use Information",
    paragraphs: [
      "We use information only for legitimate purposes tied to the Product you use and features you enable.",
    ],
    list: [
      "Operate and improve core functionality, performance, accessibility, and security.",
      "Provide purchases, license validation, entitlement recovery, and restore functionality.",
      "Offer optional cloud sync, multi-device continuity, and backups (if you opt in).",
      "Deliver widgets/extensions/background tasks you enable.",
      "Provide content publishing or collaboration where the Product supports it.",
      "Detect, investigate, and prevent abuse, fraud, or violations of terms.",
      "Comply with legal obligations and enforce our agreements.",
    ],
  },

  {
    h1: "What We Do Not Do",
    list: [
      "No behavioral profiling for advertising.",
      "No sale of personal data to third parties.",
      "No access to sensitive device features without your explicit permission.",
    ],
  },

  {
    h1: "Legal Bases (GDPR where applicable)",
    paragraphs: [
      "For users in the EEA/UK/CH, our processing typically relies on:",
    ],
    list: [
      "**Legitimate interests:** security, stability, licensing, product improvement with safeguards.",
      "**Contractual necessity:** processing purchases, delivering entitlements, providing requested features.",
      "**Consent:** optional analytics, certain cloud/sync features, and any access to sensors or personal content where required.",
    ],
  },

  {
    h1: "Third-Party Processors & Infrastructure",
    paragraphs: [
      "We use reputable providers to host infrastructure and process limited data on our behalf. The exact services may differ by Product and over time.",
    ],
    list: [
      "Cloud & Hosting (e.g., AWS, Vercel): website/app hosting, storage, secure delivery.",
      "Payments (e.g., Stripe): payment authorization, receipts, and billing metadata.",
      "Email/Notifications (e.g., Resend or similar): transactional messages, if applicable.",
      "Analytics/Crash (privacy-respecting, consent-based where required): stability metrics and diagnostics.",
      "We execute appropriate agreements (e.g., DPAs) and apply technical/organizational measures with providers.",
    ],
  },

  {
    h1: "Product Notices & Per-Feature Disclosures",
    paragraphs: [
      "Some Products include additional on-boarding cards, Settings pages, or inline explanations that clarify exactly what a feature stores, syncs, or transmits. If this Policy and a Product Notice differ, the Product Notice governs for that Product or feature.",
    ],
    list: [
      "Examples: account creation & deletion, cloud sync scope, content visibility and moderation, widget data refresh behavior, device permission prompts, and per-feature retention.",
    ],
  },

  {
    h1: "Data Minimization, Retention & Deletion",
    paragraphs: [
      "We collect the minimum necessary to operate the Product. Retention depends on the category and your settings. When data is no longer needed, we delete or anonymize it.",
    ],
    list: [
      "Session/diagnostic logs: shortest feasible periods to troubleshoot reliability and security.",
      "Licensing/purchase records: retained as required for compliance, refunds, audits, and entitlement support.",
      "Cloud/synced data: retained while the feature or account remains active; deleted upon your request or when you remove content.",
      "Backups: data in backups is deleted on a rolling schedule per provider policy.",
    ],
  },

  {
    h1: "International Transfers",
    paragraphs: [
      "Data may be processed in locations where Sandimax or our processors operate. We apply safeguards such as Standard Contractual Clauses (SCCs) or equivalent mechanisms where required.",
    ],
  },

  {
    h1: "Your Rights & Controls",
    paragraphs: [
      "Your available rights and controls depend on your jurisdiction and the Product you use.",
    ],
    list: [
      "Access/Export: view or export a copy of your data where supported.",
      "Rectification: update inaccurate information.",
      "Deletion: delete local/cloud data where supported or reset the Product.",
      "Restriction/Objection: where applicable under GDPR.",
      "Consent withdrawal: toggle off optional analytics/sync or revoke OS-level permissions (e.g., Location, Photos).",
      "You can find product-specific controls in Settings within the Product or on the Product page of our website.",
    ],
  },

  {
    h1: "Security",
    paragraphs: [
      "We use commercially reasonable safeguards including TLS encryption in transit, access controls, least-privilege, logging, and continuous monitoring. No system is 100% secure. You should review your in-app settings and device permissions to align with your privacy preferences.",
    ],
  },

  {
    h1: "Children’s Privacy",
    paragraphs: [
      "Our Products are not directed to children under 13. We do not knowingly collect personal data from children. If a Product targets an older minimum age due to platform policies or regional law, the higher minimum applies.",
    ],
  },

  {
    h1: "Do Not Track & Global Privacy Control",
    paragraphs: [
      "Where feasible, we honor applicable browser or platform privacy preferences. Some functionality relies on essential processing that cannot operate without minimal technical data.",
    ],
  },

  {
    h1: "Changes to This Policy",
    paragraphs: [
      "We may update this Policy to reflect changes in technology, law, or our practices. The latest version will always be available at https://sandimax.com/privacy. Where legally required, we will provide notice (e.g., in-app prompt, banner, or Product page). Continued use of the Product after an update constitutes acceptance of the revised Policy.",
    ],
  },

  {
    h1: "Feedback & Information",
    paragraphs: [
      "Any feedback you provide through our websites or Products may be used by Sandimax on an unrestricted basis. The information contained in our apps and on our websites is subject to change without notice. © 2025 Sandimax Team. All rights reserved. Website: sandimax.com.",
    ],
  },
];
