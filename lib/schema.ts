const DOMAIN =
  process.env.NEXT_PUBLIC_SITE_URL || "https://magistrala.absmach.eu";
const PUBLISHER_ID = `${DOMAIN}/#publisher`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": PUBLISHER_ID,
  name: "Abstract Machines",
  legalName: "Abstract Machines SAS",
  url: DOMAIN,
  logo: {
    "@type": "ImageObject",
    url: `${DOMAIN}/logos/abstract-machines.svg`,
    width: 200,
    height: 50,
  },
  sameAs: [
    "https://github.com/absmach",
    "https://twitter.com/absmach",
    "https://www.linkedin.com/company/abstract-machines",
    "https://www.youtube.com/@abstractmachines",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "141 Quai de Valmy",
    addressLocality: "Paris",
    postalCode: "75010",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@absmach.eu",
    contactType: "customer service",
    availableLanguage: ["English", "French"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Magistrala",
  url: DOMAIN,
  description:
    "Open-source IoT platform for cloud and edge with multi-protocol support",
  publisher: {
    "@id": PUBLISHER_ID,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${DOMAIN}/docs?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Magistrala",
  alternateName: ["Mainflux"],
  description:
    "Magistrala is an open-source IoT platform with multi-protocol support (MQTT, CoAP, HTTP, WebSocket), device management, fine-grained RBAC via SpiceDB, and pluggable storage backends. Built for cloud and edge deployments.",
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "IoT Platform",
  operatingSystem: "Linux, Docker, Kubernetes",
  softwareVersion: "1.0",
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  url: DOMAIN,
  downloadUrl: "https://github.com/absmach/magistrala",
  releaseNotes: "https://github.com/absmach/magistrala/releases",
  screenshot: [
    {
      "@type": "ImageObject",
      url: `${DOMAIN}/screenshots/dashboard-1.png`,
      caption: "Magistrala Dashboard",
    },
    {
      "@type": "ImageObject",
      url: `${DOMAIN}/screenshots/rules-engine-1.png`,
      caption: "Rules Engine",
    },
  ],
  featureList: [
    "Multi-protocol messaging (MQTT, CoAP, HTTP, WebSocket)",
    "Fine-grained RBAC via SpiceDB",
    "Multi-tenancy with domain isolation",
    "Pluggable message brokers (NATS, Kafka, RabbitMQ)",
    "Docker and Kubernetes ready",
    "Industrial protocol support (OPC-UA, Modbus, BACnet)",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Free Tier",
      price: "0",
      priceCurrency: "USD",
      description: "100 clients, 100K messages/month",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Professional",
      price: "199",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "199",
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
      description: "5,000 clients, 5M messages/month",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      description: "Custom limits, dedicated support",
      availability: "https://schema.org/InStock",
      url: `${DOMAIN}/contact`,
    },
  ],
  author: {
    "@id": PUBLISHER_ID,
  },
  maintainer: {
    "@id": PUBLISHER_ID,
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Magistrala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Magistrala is an open-source IoT platform developed by Abstract Machines, headquartered in Paris, France. It provides multi-protocol messaging (MQTT, CoAP, HTTP, WebSocket), fine-grained RBAC via SpiceDB, multi-tenancy, and pluggable storage backends. Licensed under Apache 2.0, it's designed for both cloud and edge deployments.",
      },
    },
    {
      "@type": "Question",
      name: "What protocols does Magistrala support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Magistrala supports MQTT, CoAP, HTTP, and WebSocket protocols out of the box. It also integrates with industrial protocols like OPC-UA, Modbus, BACnet, and Profinet through EdgeX Foundry integration. Protocol adapters handle translation automatically, allowing devices to communicate using their native protocols.",
      },
    },
    {
      "@type": "Question",
      name: "Is Magistrala open source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Magistrala is fully open-source under the Apache 2.0 license. The source code is available on GitHub at github.com/absmach/magistrala. You can self-host it or use the managed cloud service provided by Abstract Machines.",
      },
    },
    {
      "@type": "Question",
      name: "How does Magistrala handle authorization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Magistrala implements fine-grained Role-Based Access Control (RBAC) using SpiceDB, which follows Google's Zanzibar authorization model. Permissions can be set at user, group, domain, client, and channel scope, with policies evaluated securely at runtime.",
      },
    },
    {
      "@type": "Question",
      name: "What message brokers does Magistrala support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Magistrala integrates with NATS, Apache Kafka, and RabbitMQ as central message brokers. It also supports pluggable MQTT brokers via mProxy. Both TLS and mTLS encryption are fully supported for secure communication.",
      },
    },
    {
      "@type": "Question",
      name: "What is the relationship between Magistrala and Mainflux?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Magistrala is the current name of the platform. It was formerly known as Mainflux. Both names refer to the same open-source IoT platform developed by Abstract Machines.",
      },
    },
  ],
};

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Combined schema for homepage
export const homepageSchemas = [
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  faqSchema,
];
