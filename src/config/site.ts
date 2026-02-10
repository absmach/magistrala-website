export const SITE = {
  title: "Magistrala — Open Source IoT Platform for Cloud & Edge",
  description:
    "Magistrala is a secure, scalable open-source IoT platform for cloud and edge computing. Manage devices, connect industrial protocols, and enable real-time IoT data flows with MQTT, CoAP, and HTTP support.",
  url: "https://magistrala.absmach.eu",
  author: "Abstract Machines",
  keywords:
    "Magistrala, IoT platform, cloud IoT, edge computing, MQTT, CoAP, device management, real-time IoT, open-source IoT, industrial IoT",
} as const;

export const SOCIAL = {
  twitter: "https://twitter.com/absmach",
  linkedin: "https://www.linkedin.com/company/abstract-machines/",
  github: "https://github.com/absmach/magistrala",
  youtube: "https://www.youtube.com/@AbstractMachines",
  matrix: "https://matrix.to/#/#absmach:matrix.org",
} as const;

export const CONTACT = {
  email: "info@absmach.eu",
  address: {
    street: "141 Quai de Valmy",
    city: "Paris",
    postal: "75010",
    country: "France",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const CTA_BUTTONS = {
  primary: {
    label: "Try Magistrala",
    href: "https://cloud.magistrala.absmach.eu",
  },
  secondary: {
    label: "Contact Us",
    href: "mailto:info@absmach.eu",
  },
  docs: {
    label: "Read the Docs",
    href: "/docs",
  },
} as const;

export const PARTNERS = [
  { name: "Target", src: "/img/partners/target.png", height: 70 },
  { name: "Greennet", src: "/img/partners/greennet.png", height: 40 },
  { name: "EU Commission", src: "/img/partners/eu.png", height: 70 },
  { name: "Telefonica", src: "/img/partners/telefonica.png", height: 40 },
  { name: "TU Eindhoven", src: "/img/partners/tue.png", height: 40 },
  { name: "TNO", src: "/img/partners/tno.png", height: 50 },
  { name: "PARC", src: "/img/partners/parc.png", height: 40 },
  { name: "VTT", src: "/img/partners/vtt.png", height: 50 },
  { name: "ETF Belgrade", src: "/img/partners/etf.png", height: 70 },
  { name: "Fujitsu", src: "/img/partners/fujitsu.png", height: 70 },
] as const;

export type FeatureVisual =
  | { type: "screenshots"; images: { src: string; alt: string }[] }
  | { type: "protocols" }
  | { type: "rbac" };

export interface Feature {
  title: string;
  description: string;
  icon: string;
  visual: FeatureVisual;
}

export const FEATURES: readonly Feature[] = [
  {
    title: "Multi-Protocol Messaging",
    description:
      "Connect devices over MQTT, CoAP, HTTP, and WebSocket. Protocol adapters handle translation so your devices speak whatever language they need to.",
    icon: "protocols",
    visual: { type: "protocols" },
  },
  {
    title: "Visual Dashboards",
    description:
      "Build real-time and historical dashboards with drag-and-drop widgets. Monitor alarms, track entities, and visualize data without writing code.",
    icon: "dashboard",
    visual: {
      type: "screenshots",

      images: [
        {
          src: "/screenshots/dashboard-1.png",
          alt: "Dashboard with map",
        },
        {
          src: "/screenshots/dashboard-2.png",
          alt: "Magistrala dashboard overview with charts and usage metrics",
        },
      ],
    },
  },
  {
    title: "Rules Engine",
    description:
      "Process messages, generate alarms, send notifications, and route data to external storage. Define logic visually or through the API.",
    icon: "rules",
    visual: {
      type: "screenshots",

      images: [
        {
          src: "/screenshots/rules-engine-2.png",
          alt: "Output options",
        },
        {
          src: "/screenshots/rules-engine-1.png",
          alt: "Visual rules engine pipeline with code editor",
        },
      ],
    },
  },
  {
    title: "Alarm Management",
    description:
      "Generate alarms from rules, assign severity levels, track acknowledgment, and manage resolution workflows across your entire fleet.",
    icon: "alarms",
    visual: {
      type: "screenshots",

      images: [
        {
          src: "/screenshots/alarms-2.png",
          alt: "Alarm table with severity, status, and assignee columns",
        },
        {
          src: "/screenshots/alarms-1.png",
          alt: "Alarm details",
        },
        {
          src: "/screenshots/alarms-3.png",
          alt: "Alarms rule",
        },
      ],
    },
  },
  {
    title: "Multitenancy with Domains",
    description:
      "Isolate tenants by default using domains. Each domain gets its own users, devices, channels, and access policies out of the box.",
    icon: "tenancy",
    visual: {
      type: "screenshots",

      images: [
        {
          src: "/screenshots/domains-1.png",
          alt: "Domains cards",
        },
        {
          src: "/screenshots/domains-2.png",
          alt: "domain-view",
        },
      ],
    },
  },
  {
    title: "Role-Based Access Control",
    description:
      "Fine-grained permissions at user, group, domain, client, and channel level. Backed by a distributed authorization engine compatible with SpiceDB.",
    icon: "security",
    visual: { type: "rbac" },
  },
  {
    title: "Reports & PDF Export",
    description:
      "Generate reports from your IoT data. Upload custom HTML/CSS templates and export styled PDFs for compliance and stakeholder reporting.",
    icon: "reports",
    visual: {
      type: "screenshots",

      images: [
        {
          src: "/screenshots/reports-2.png",
          alt: "Create report interface",
        },
        {
          src: "/screenshots/reports-1.png",
          alt: "Report pdf",
        },
      ],
    },
  },
  {
    title: "Personal Access Tokens",
    description:
      "Issue PATs to grant external users and applications scoped access to specific entities without sharing credentials.",
    icon: "tokens",
    visual: {
      type: "screenshots",

      images: [
        {
          src: "/screenshots/pat-1.png",
          alt: "PAT to send messages to channel",
        },
      ],
    },
  },
] as const;

export interface UseCase {
  title: string;
  slug: string;
  summary: string;
  description: string;
  icon: string;
  benefits: string[];
}

export const USE_CASES: readonly UseCase[] = [
  {
    title: "Smart Water Metering",
    slug: "smart-water-metering",
    summary:
      "Monitor water consumption in real time, detect leaks early, and generate threshold-based alarms for anomalies.",
    description:
      "Deploy Magistrala to collect meter readings over MQTT and CoAP from distributed water sensors. Use the rules engine to normalize SenML payloads, store data in TimescaleDB, and trigger alarms when consumption exceeds thresholds. Dashboards give operators a live view of flow rates across districts, while PDF reports satisfy regulatory requirements.",
    icon: "utilities",
    benefits: [
      "Real-time leak detection through threshold alarms",
      "SenML payload processing via visual rules engine",
      "Multi-district monitoring with domain isolation",
      "Automated compliance reports in PDF",
    ],
  },
  {
    title: "Industrial Equipment Monitoring",
    slug: "industrial-equipment-monitoring",
    summary:
      "Track equipment health, predict failures, and reduce downtime on the factory floor.",
    description:
      "Connect PLCs and edge gateways to Magistrala using Sparkplug MQTT or OPC-UA adapters. Ingest vibration, temperature, and pressure telemetry at scale. The rules engine evaluates conditions in real time and generates severity-graded alarms. Maintenance teams get notified before failures occur, and historical dashboards reveal long-term trends.",
    icon: "industrial",
    benefits: [
      "Sparkplug MQTT and OPC-UA protocol support",
      "Severity-graded alarms for maintenance teams",
      "Historical trend analysis via dashboards",
      "Edge-to-cloud data pipeline with NATS or Kafka",
    ],
  },
  {
    title: "Smart Building Management",
    slug: "smart-building-management",
    summary:
      "Manage HVAC, lighting, occupancy, and energy across multi-site facilities from a single platform.",
    description:
      "Magistrala's multitenancy model maps naturally to building portfolios. Each building gets its own domain with isolated users, devices, and dashboards. Facility managers monitor energy consumption, occupancy patterns, and environmental conditions. RBAC ensures building operators only access their own sites while corporate teams see the aggregate view.",
    icon: "buildings",
    benefits: [
      "One domain per building for natural tenant isolation",
      "RBAC separates operator and corporate access",
      "Energy and occupancy dashboards per site",
      "Cross-building analytics for portfolio managers",
    ],
  },
  {
    title: "Fleet & Asset Tracking",
    slug: "fleet-asset-tracking",
    summary:
      "Track vehicles and mobile assets with GPS telemetry, geofencing alarms, and route analytics.",
    description:
      "Connect GPS trackers over MQTT or HTTP and ingest location data into Magistrala. The rules engine evaluates geofence boundaries and triggers alarms when assets leave designated zones. Group hierarchies model depots and regions. PATs allow third-party logistics partners to access specific asset data without full platform credentials.",
    icon: "industrial",
    benefits: [
      "Geofence-based alarms via rules engine",
      "Group hierarchies for depots and regions",
      "PATs for secure third-party data sharing",
      "Route replay and analytics dashboards",
    ],
  },
  {
    title: "Agricultural Monitoring",
    slug: "agricultural-monitoring",
    summary:
      "Monitor soil moisture, weather stations, and irrigation systems across distributed farmland.",
    description:
      "Agricultural sensors often operate in low-bandwidth environments. Magistrala's CoAP and MQTT support handles constrained devices. The rules engine triggers irrigation schedules based on soil moisture thresholds. Domain isolation separates farm operators, and dashboards give agronomists field-level visibility into conditions affecting crop yield.",
    icon: "utilities",
    benefits: [
      "CoAP support for low-bandwidth field sensors",
      "Automated irrigation triggers from soil data",
      "Per-farm domain isolation for multi-tenant deployments",
      "Field-level dashboards for agronomists",
    ],
  },
  {
    title: "Energy Grid Monitoring",
    slug: "energy-grid-monitoring",
    summary:
      "Monitor distributed energy resources, detect grid faults, and balance load across substations.",
    description:
      "Utility companies use Magistrala to ingest telemetry from smart meters, inverters, and transformer sensors. The platform's pluggable storage lets operators choose InfluxDB for high-frequency time-series data. Rules engine chains process grid events, escalate faults, and trigger automated responses. RBAC ensures field crews and control room operators have appropriate access levels.",
    icon: "utilities",
    benefits: [
      "InfluxDB integration for high-frequency telemetry",
      "Automated fault escalation via rules engine",
      "RBAC for field crews vs control room access",
      "Substation-level dashboards with alarm overlays",
    ],
  },
] as const;

export const SUCCESS_STORIES = [
  {
    company: "Intel",
    logo: "/img/logos/intel.png",
    description:
      "Magistrala powers real-time metering on the edge for Intel, integrated with EdgeX Foundry under the Linux Foundation.",
    link: "https://www.intel.com/content/www/us/en/developer/articles/technical/view-metering-in-action-on-edge-middleware-platforms.html",
    linkText: "Read the case study",
  },
  {
    company: "Ericsson",
    logo: "/img/logos/ericsson.png",
    description:
      "Ericsson uses Magistrala for orchestration of IoT slices through edge and cloud microservice platforms.",
    link: "https://www.researchgate.net/publication/334265054_Enabling_the_Orchestration_of_IoT_Slices_through_Edge_and_Cloud_Microservice_Platforms",
    linkText: "Read the paper",
  },
  {
    company: "Target",
    logo: "/img/logos/target.png",
    description:
      "Target uses Magistrala as the substrate of their IoT platform, deployed in-cloud and on the edge within their stores.",
    link: "https://youtu.be/VenSmkpzC8w?t=1988",
    linkText: "Watch the talk",
  },
] as const;

export const PRICING_PLANS = [
  {
    name: "Trial",
    subtitle: "Free early access",
    price: "Free",
    features: [
      "Up to 3 users",
      "5 dashboards",
      "10 clients",
      "10 channels",
      "2 groups",
      "10,000 messages",
      "Basic support",
    ],
    cta: {
      label: "Sign Up",
      href: "https://cloud.magistrala.absmach.eu/register",
    },
    highlighted: false,
  },
  {
    name: "Enterprise",
    subtitle: "For large-scale deployments",
    price: "Contact Us",
    features: [
      "Multitenant support",
      "Custom user limits",
      "Custom dashboards",
      "Custom clients & channels",
      "Custom groups",
      "Custom message volume",
      "Premium support",
    ],
    cta: { label: "Contact Us", href: "mailto:info@absmach.eu" },
    highlighted: true,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is Magistrala cloud-hosted or self-hosted?",
    answer:
      "Both. You can use our managed cloud platform or run your own instance with the open-source version. Docker and Kubernetes deployments are production-ready out of the box.",
  },
  {
    question: "Can I use Magistrala as an open-source project?",
    answer:
      "Yes. Magistrala is released under the Apache 2.0 license, allowing personal and commercial use. You can modify, extend, and redistribute the platform freely.",
  },
  {
    question: "What happens when I exceed message or client limits?",
    answer:
      "The platform gracefully rejects excess messages or blocks new connections depending on your plan. You can upgrade instantly and new resources apply dynamically without downtime.",
  },
  {
    question: "Is role-based access control (RBAC) supported?",
    answer:
      "Yes. Magistrala supports RBAC with granular permissions at user, group, domain, client, and channel level. The authorization engine is compatible with Google Zanzibar backends like SpiceDB.",
  },
  {
    question: "Which message brokers does Magistrala support?",
    answer:
      "Magistrala integrates with NATS, Kafka, and RabbitMQ. It also supports WebSocket and HTTP protocols, with TLS and mTLS for secure connections.",
  },
  {
    question: "Can I integrate with external MQTT brokers?",
    answer:
      "Yes. Magistrala supports integration with external MQTT brokers using protocol adapters and bridge configurations, compatible with Mosquitto, EMQX, and others.",
  },
] as const;

export const STRUCTURED_DATA = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Abstract Machines",
    url: "https://absmach.eu",
    logo: "https://magistrala.absmach.eu/img/logos/Magistrala_logo_landscape_black.svg",
    description:
      "IoT infrastructure and security company specializing in open-source IoT platforms",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      postalCode: CONTACT.address.postal,
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT.email,
      contactType: "Customer Service",
    },
    sameAs: [SOCIAL.twitter, SOCIAL.linkedin, SOCIAL.github, SOCIAL.youtube],
  },
  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Magistrala IoT Platform",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, Docker, Kubernetes",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    description:
      "Complete open-source IoT platform for cloud and edge computing with support for MQTT, CoAP, HTTP and other protocols",
    license: "https://www.apache.org/licenses/LICENSE-2.0",
    url: "https://magistrala.absmach.eu",
    downloadUrl: "https://github.com/absmach/magistrala",
    author: {
      "@type": "Organization",
      name: "Abstract Machines",
    },
  },
} as const;
