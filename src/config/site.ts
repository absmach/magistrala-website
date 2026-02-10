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

export interface UseCaseChallenge {
  icon: string;
  title: string;
  desc: string;
}

export interface UseCaseApplication {
  icon: string;
  title: string;
  desc: string;
}

export interface UseCase {
  title: string;
  slug: string;
  summary: string;
  description: string;
  icon: string;
  benefits: string[];
  solution?: string;
  challenges?: {
    title: string;
    subtitle: string;
    items: UseCaseChallenge[];
  };
  dashboard?: {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
  };
  applications?: {
    title: string;
    subtitle: string;
    items: UseCaseApplication[];
  };
  howItWorks?: {
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
}

export const USE_CASES: readonly UseCase[] = [
  {
    title: 'Smart Water Metering',
    slug: 'smart-water-metering',
    summary: 'Real-time visibility into water networks — enabling faster leak detection, fraud prevention and reduced non-revenue water.',
    description:
      'Magistrala ingests continuous telemetry from water meters and pressure sensors, applies real-time analytics, and triggers automated alerts so teams can act faster. Connect meters and sensors via MQTT gateways over NB-IoT, LoRaWAN, or cellular. Real-time analytics detect anomalies, leaks, and unusual consumption patterns. Automated alerts trigger workflows to field teams, SCADA, and notification systems.',
    icon: 'utilities',
    benefits: [
      'Real-time anomaly detection and leak localization',
      'Automated alerting and incident workflows',
      'Integration with SCADA, ticketing and notification systems',
      'Scalable, protocol-agnostic ingestion (MQTT, CoAP, HTTP)',
    ],
    solution: "Magistrala ingests continuous telemetry from water meters and pressure sensors, applies real-time analytics, and triggers automated alerts so teams can act faster.",
    challenges: {
      title: 'The Challenge',
      subtitle: 'Water utilities face growing pressure to reduce losses and operate efficiently. Legacy metering results in delayed detection and significant revenue loss.',
      items: [
        { icon: 'fas fa-eye-slash', title: 'Limited Visibility', desc: 'No continuous visibility into consumption and pressure across the network.' },
        { icon: 'fas fa-clock', title: 'Slow Response', desc: 'Issues found only after customer complaints or billing discrepancies.' },
        { icon: 'fas fa-dollar-sign', title: 'Revenue Impact', desc: 'Significant water and revenue losses due to undetected leaks and tampering.' },
      ],
    },
    dashboard: {
      title: 'Real-Time Water Network Dashboard',
      subtitle: 'Monitor consumption, pressure, and anomalies across your entire water network from a single pane of glass.',
      image: '/screenshots/smart-water.png',
      alt: 'Magistrala smart water metering dashboard',
    },
    applications: {
      title: 'Key Applications',
      subtitle: 'Comprehensive monitoring and control across the water distribution lifecycle.',
      items: [
        { icon: 'fas fa-tachometer-alt', title: 'Consumption Monitoring', desc: 'Real-time tracking of water consumption patterns across all connected meters.' },
        { icon: 'fas fa-search-location', title: 'Leak Detection', desc: 'Automated anomaly detection to identify and localize leaks before they escalate.' },
        { icon: 'fas fa-chart-line', title: 'Demand Forecasting', desc: 'Predictive analytics for water demand planning and resource allocation.' },
        { icon: 'fas fa-bell', title: 'Alert Management', desc: 'Configurable alarms for pressure drops, tampering, and unusual usage patterns.' },
      ],
    },
    howItWorks: {
      subtitle: 'Magistrala connects your water infrastructure end-to-end — from field sensors to operations teams — with a fully automated data pipeline.',
      steps: [
        { title: 'Ingest', desc: 'Water meters and pressure sensors publish telemetry via MQTT gateways over NB-IoT, LoRaWAN, or cellular networks.' },
        { title: 'Normalize', desc: 'Protocol adapters translate device payloads into a unified format, regardless of manufacturer or connectivity.' },
        { title: 'Analyze', desc: 'The rules engine applies anomaly detection algorithms to identify leaks, unusual consumption, and pressure drops in real time.' },
        { title: 'Act', desc: 'Automated alerts trigger workflows to SCADA systems, field team ticketing, SMS notifications, and dashboards.' },
      ],
    },
  },
  {
    title: 'Smart City Solutions',
    slug: 'smart-city',
    summary: 'Build intelligent urban infrastructure with connected sensors and devices. Optimize traffic, energy, waste management, and public services.',
    description:
      'Modern cities face unprecedented challenges: traffic congestion, energy inefficiency, waste management issues, and the need for enhanced public safety. Magistrala enables adaptive traffic signals, smart parking, intelligent street lighting, optimized waste collection, integrated surveillance, and smart grid integration. Data-driven results improve city operations and citizen quality of life through real-time monitoring and automation.',
    icon: 'buildings',
    benefits: [
      'Adaptive traffic management reducing congestion by up to 25%',
      'Smart parking and street lighting with 30-50% cost savings',
      'Optimized waste collection routes based on real-time data',
      'Integrated public safety and emergency response systems',
    ],
    solution: "",
    dashboard: {
      title: 'City Operations Dashboard',
      subtitle: 'Unified visibility into every connected asset — from streetlights to waste bins — in a single command center.',
      image: '/screenshots/smart-city.png',
      alt: 'Magistrala smart city operations dashboard',
    },
    applications: {
      title: 'Key Applications',
      subtitle: 'Transform every aspect of urban infrastructure with connected IoT solutions.',
      items: [
        { icon: 'fas fa-lightbulb', title: 'Street Lighting', desc: 'Intelligent lighting that adapts to weather conditions and foot traffic.' },
        { icon: 'fas fa-trash-alt', title: 'Waste Management', desc: 'Optimized collection routes based on real-time bin fill levels.' },
        { icon: 'fas fa-shield-alt', title: 'Public Safety', desc: 'Integrated surveillance and emergency response coordination systems.' },
        { icon: 'fas fa-bolt', title: 'Energy Grid', desc: 'Smart grid integration for efficient energy distribution and monitoring.' },
      ],
    },
    howItWorks: {
      subtitle: 'Magistrala unifies diverse urban sensors into a single platform — enabling city-wide automation and data-driven decision making.',
      steps: [
        { title: 'Connect', desc: 'Streetlights, waste bins, traffic sensors, and environmental monitors connect over LoRaWAN, NB-IoT, or Wi-Fi.' },
        { title: 'Aggregate', desc: 'Multi-protocol ingestion normalizes data from thousands of heterogeneous devices into a unified data model.' },
        { title: 'Automate', desc: 'Smart rules trigger actions — dimming lights based on traffic, rerouting waste trucks, or escalating safety alerts.' },
        { title: 'Visualize', desc: 'City operators monitor real-time dashboards and historical trends to optimize services and reduce costs.' },
      ],
    },
  },
  {
    title: 'Industrial Gateway Integration',
    slug: 'industrial-gateway',
    summary: 'Connect legacy industrial equipment to the cloud — enabling predictive maintenance, remote monitoring, and operational efficiency.',
    description:
      'Manufacturing facilities rely on legacy equipment using proprietary protocols like Modbus, OPC-UA, and BACnet. Magistrala seamlessly connects these systems to the cloud with protocol translation, edge computing, and centralized management. Process data locally for real-time decision making, detect equipment failures before they happen using ML models at the edge, and minimize unplanned outages through proactive maintenance.',
    icon: 'industrial',
    benefits: [
      'Protocol translation for Modbus, OPC-UA, Profinet, BACnet',
      'Edge computing for real-time decision making and reduced latency',
      'Predictive maintenance with ML models at the edge',
      'Secure connectivity with TLS/mTLS encryption and RBAC',
    ],
    solution: "",
    dashboard: {
      title: 'Industrial Monitoring Dashboard',
      subtitle: 'Centralized monitoring of connected gateways, equipment health, and production metrics.',
      image: '/screenshots/industrial-gateway.png',
      alt: 'Magistrala industrial gateway monitoring dashboard',
    },
    applications: {
      title: 'Key Applications',
      subtitle: 'Bridge the gap between legacy equipment and modern cloud infrastructure.',
      items: [
        { icon: 'fas fa-cogs', title: 'Protocol Translation', desc: 'Seamless conversion between Modbus, OPC-UA, BACnet, and cloud-native protocols.' },
        { icon: 'fas fa-tools', title: 'Predictive Maintenance', desc: 'ML-driven failure prediction to minimize unplanned downtime.' },
        { icon: 'fas fa-server', title: 'Edge Processing', desc: 'Local data processing for real-time decision making with reduced latency.' },
        { icon: 'fas fa-lock', title: 'Secure Connectivity', desc: 'End-to-end encryption with TLS/mTLS and role-based access control.' },
      ],
    },
    howItWorks: {
      subtitle: 'Magistrala bridges legacy industrial protocols to the cloud — enabling predictive maintenance and real-time operational intelligence.',
      steps: [
        { title: 'Translate', desc: 'Edge gateways convert Modbus, OPC-UA, BACnet, and Profinet data into cloud-native MQTT or HTTP messages.' },
        { title: 'Process at the Edge', desc: 'Local compute filters, aggregates, and applies ML models before sending data to the cloud — reducing latency and bandwidth.' },
        { title: 'Monitor', desc: 'Centralized dashboards track equipment health, production metrics, and environmental conditions across all facilities.' },
        { title: 'Predict', desc: 'ML-driven analytics detect early signs of equipment degradation, triggering maintenance workflows before failures occur.' },
      ],
    },
  },
] as const;

export const SUCCESS_STORIES = [
  {
    company: "Intel",
    logo: "/img/logos/intel.png",
    description:
      'Magistrala powers real-time metering on the edge for Intel, integrated with EdgeX Foundry under the Linux Foundation.',
    testimonial: 'Magistrala provided the flexibility and performance we needed for edge-based metering at scale.',
    link: 'https://www.intel.com/content/www/us/en/developer/articles/technical/view-metering-in-action-on-edge-middleware-platforms.html',
    linkText: 'Read the case study',
  },
  {
    company: "Ericsson",
    logo: "/img/logos/ericsson.png",
    description:
      'Ericsson uses Magistrala for orchestration of IoT slices through edge and cloud microservice platforms.',
    testimonial: 'With Magistrala, we achieved seamless orchestration of IoT slices across edge and cloud environments.',
    link: 'https://www.researchgate.net/publication/334265054_Enabling_the_Orchestration_of_IoT_Slices_through_Edge_and_Cloud_Microservice_Platforms',
    linkText: 'Read the paper',
  },
  {
    company: "Target",
    logo: "/img/logos/target.png",
    description:
      'Target uses Magistrala as the substrate of their IoT platform, deployed in-cloud and on the edge within their stores.',
    testimonial: 'Magistrala enabled us to build a robust IoT platform that scales from cloud to every store.',
    link: 'https://youtu.be/VenSmkpzC8w?t=1988',
    linkText: 'Watch the talk',
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
