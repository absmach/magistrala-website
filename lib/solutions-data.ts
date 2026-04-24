import {
  Activity,
  AlertTriangle,
  BarChart3,
  Building2,
  Clock,
  CloudRain,
  DollarSign,
  Droplets,
  Eye,
  Factory,
  FileBarChart,
  Flame,
  Gauge,
  GitMerge,
  Layers,
  Leaf,
  LineChart,
  type LucideIcon,
  Map as MapIcon,
  Shield,
  ShieldAlert,
  Sprout,
  Thermometer,
  Timer,
  TrendingDown,
  Truck,
  Users,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

// ─── Common sub-structures ─────────────────────────────────────────────────

export interface ChallengeItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ApplicationItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface HowItWorksStep {
  title: string;
  desc: string;
}

// ─── Main Solution type ────────────────────────────────────────────────────

export interface Solution {
  title: string;
  slug: string;
  icon: LucideIcon;
  /** Short copy used in nav dropdown and listing cards */
  summary: string;
  /** Longer copy used in the detail page hero */
  description: string;
  /** Extended detail for the hero — what the solution covers and is designed to accomplish */
  heroDetail: string;
  /** Brief on why Magistrala is the right platform for this solution */
  whyMagistrala: string;
  /** Image used in the solution listing grid cards */
  image: string;
  /** Dashboard screenshots shown in the carousel on the detail page */
  dashboardScreenshots: { src: string; alt: string }[];
  /** Path to the full documentation page for this solution, if one exists */
  docsPath?: string;

  // Challenges ───────────────────────────────────────────────────────────
  challenges: {
    title: string;
    subtitle: string;
    items: [ChallengeItem, ChallengeItem, ChallengeItem];
  };

  // How it works (system flow) ───────────────────────────────────────────
  howItWorks: {
    subtitle: string;
    steps: [HowItWorksStep, HowItWorksStep, HowItWorksStep, HowItWorksStep];
  };

  // Applications ─────────────────────────────────────────────────────────
  applications: {
    title: string;
    subtitle: string;
    items: [ApplicationItem, ApplicationItem, ApplicationItem, ApplicationItem];
  };

  benefits: string[];

  // FAQ ──────────────────────────────────────────────────────────────────
  faq: { question: string; answer: string }[];

  // SEO ──────────────────────────────────────────────────────────────────
  metaDescription: string;
  keywords: string[];
}

// ─── Data ──────────────────────────────────────────────────────────────────

export const solutions: Solution[] = [
  // ── Smart Water Metering ───────────────────────────────────────────────
  {
    title: "Smart Water Metering",
    slug: "smart-water",
    icon: Droplets,
    summary:
      "Most utilities find out about burst pipes from tenant complaints, not their own systems. This pack connects your meters and sensors to a single platform, catches problems in seconds, and files the weekly compliance reports for you.",
    description:
      "The Smart Water Metering pack gives water utilities and facility managers a live view of their distribution networks. Flow, pressure, water quality, pump state, and tank levels all land in pre-built dashboards with detection rules and scheduled reports already wired up. When a pipe bursts at 2 AM, the alarm fires before the first tenant complaint.",
    heroDetail:
      "Seven detection rules watch the network around the clock — catching slow leaks, sudden bursts, water quality problems, and devices that go dark — with alerts delivered in seconds over email and the platform.",
    whyMagistrala:
      "Your existing field devices probably already speak MQTT or HTTP, so there's nothing to replace in the field. Raw readings and validated data stay in separate channels, so a sensor glitch never triggers a false alarm. One dashboard template covers any number of zones or customer accounts. Compliance reports go out automatically every week.",
    image: "/solutions/smart-water-metering.jpg",
    docsPath: "/docs/user-guide/solution-packs/smart-water-metering/",
    dashboardScreenshots: [
      {
        src: "/screenshots/solutions/smart-water-metering/kpi-dashboard.png",
        alt: "KPI Dashboard showing total consumption, network pressure, and water quality status",
      },
      {
        src: "/screenshots/solutions/smart-water-metering/consumption-dashboard.png",
        alt: "Consumption Analytics Dashboard with historical usage trends and peak demand periods",
      },
      {
        src: "/screenshots/solutions/smart-water-metering/networks-dashboard.png",
        alt: "Network Map Dashboard showing device locations and district metered areas",
      },
      {
        src: "/screenshots/solutions/smart-water-metering/alarms-dashboard.png",
        alt: "Alarm Monitoring Dashboard with active alarms by severity",
      },
      {
        src: "/screenshots/solutions/smart-water-metering/real-time-dashboard.png",
        alt: "Real-Time Monitoring Dashboard with live flow rate, pressure trend, and active alarms",
      },
      {
        src: "/screenshots/solutions/smart-water-metering/zone-monitoring-template.png",
        alt: "Zone Monitoring Template with per-zone flow, pressure, and tank level",
      },
      {
        src: "/screenshots/solutions/smart-water-metering/consumer-consumption-template.png",
        alt: "Customer Consumption Template with daily volume, flow rate, and hourly usage history",
      },
    ],

    challenges: {
      title: "Problems utilities deal with every day",
      subtitle:
        "The operational and financial costs of reactive water management are well documented. These are the specific pain points the solution pack addresses.",
      items: [
        {
          icon: AlertTriangle,
          title: "Finding out about bursts from tenants, not telemetry",
          desc: "Most utilities hear about burst pipes from a complaint call. By then, the damage is done. The alarm should fire first.",
        },
        {
          icon: TrendingDown,
          title: "A CFO who can't explain Non-Revenue Water losses",
          desc: "NRW of 20–40% is common in ageing networks. Without zone-level flow data, there's no way to know where the losses are.",
        },
        {
          icon: FileBarChart,
          title: "Water quality compliance reports assembled by hand",
          desc: "Pulling pH, turbidity, and TDS data from multiple systems every week, then formatting it for the regulator. Every single week.",
        },
      ],
    },
    howItWorks: {
      subtitle: "Four steps from field device to actionable insight",
      steps: [
        {
          title: "Ingest",
          desc: "Meters and sensors send readings over MQTT, HTTP, CoAP, or WebSocket. Every raw reading is saved immediately.",
        },
        {
          title: "Validate",
          desc: "Each reading is checked for plausibility before alarm logic runs. Impossible values are discarded. Only clean data moves forward.",
        },
        {
          title: "Detect",
          desc: "Rules watch the clean data continuously. Pressure drops while flow spikes? Leak alarm. Flow surges? Burst alarm. pH drifts? Quality alarm. Device goes quiet? Offline alarm.",
        },
        {
          title: "Report",
          desc: "Daily consumption, weekly network performance, and weekly water quality reports go out automatically. Long-term records write to PostgreSQL.",
        },
      ],
    },
    applications: {
      title: "Key Applications",
      subtitle: "Where utilities and property managers deploy smart metering",
      items: [
        {
          icon: Gauge,
          title: "Municipal distribution network monitoring",
          desc: "Flow, pressure, and quality at DMA boundaries. Leaks detected within minutes. NRW trends tracked monthly.",
        },
        {
          icon: Building2,
          title: "Multi-site commercial and residential property",
          desc: "Tenants see their own usage. Building managers get aggregate consumption and burst alarms. No network-level data exposure.",
        },
        {
          icon: Shield,
          title: "Water quality compliance for regulated supplies",
          desc: "Continuous WHO-threshold monitoring. Weekly compliance reports delivered automatically. Full audit trail in PostgreSQL.",
        },
        {
          icon: Wrench,
          title: "Pump station and storage tank management",
          desc: "Live pump state, energy draw, and tank levels. Spot inefficient pump cycles. Schedule refills before pressure drops.",
        },
      ],
    },
    benefits: [
      "Leak alarms fire within seconds of threshold breach - not hours after a tenant complaint",
      "Zone-level flow data identifies where NRW losses are occurring so rehabilitation spend goes to the right places",
      "Water quality compliance reports generate and deliver automatically every week, eliminating manual data assembly",
      "Device Health Monitor flags offline sensors within 10–20 minutes, preventing silent data gaps in regulatory records",
      "Tag-based templates scale a single dashboard definition across any number of zones or customer accounts without duplicating configuration",
    ],
    faq: [
      {
        question:
          "Our meters don't speak MQTT or HTTP. Can we still connect them?",
        answer:
          "Yes. Your meters don't need to support MQTT or HTTP directly. A gateway sitting between your field devices and the platform can handle the protocol translation — many gateways support NB-IoT, LoRa, OPC-UA, and other industrial protocols out of the box. Alternatively, Magistrala ships a [LoRa adapter](/docs/dev-guide/extensions/lora/) and an [OPC-UA adapter](/docs/dev-guide/extensions/opcua/) that connect those networks natively. Either way, data arrives in the same Raw Telemetry Channel and flows through the same processing and detection rules.",
      },
      {
        question:
          "Can the pack handle multiple pressure zones with different normal operating ranges?",
        answer:
          "Yes. The Leak Detection rule uses fixed thresholds by default (pressure < 2.5 bar for the warning condition), but you can deploy additional rule instances with zone-specific thresholds and assign each rule to the channel or group corresponding to that zone. The Zone Monitoring template supports per-zone pressure gauge scaling so operators see the correct normal range for their zone.",
      },
      {
        question:
          "How does the solution support Non-Revenue Water calculation?",
        answer:
          "The pack provides the metered volume data that NRW calculation requires: zone-level flow totals from the Consumption Analytics dashboard, daily consumption from the Daily Consumption Report, and long-term volume records from the PostgreSQL archive. NRW calculation itself requires comparing those figures against billing data from your customer management system - the pack's data exports and report outputs are designed to feed into that calculation rather than replace it.",
      },
      {
        question:
          "What happens if a device goes offline during a quality exceedance event?",
        answer:
          "The Device Health Monitor raises a Warning alarm (Severity 3) within 10–20 minutes of the last received message, regardless of what the last reading showed. If the device went offline while reporting an out-of-range pH or turbidity reading, the quality alarm remains active in the alarm log until it is acknowledged or cleared. The processed telemetry and alarm records in PostgreSQL provide a complete timeline of what was reported before the device went silent.",
      },
    ],
    metaDescription:
      "Monitor water flow, pressure, pH, turbidity, and tank levels in real time. Detect leaks and bursts within seconds, automate water quality compliance reports, and reduce Non-Revenue Water losses with Magistrala's Smart Water Metering solution pack.",
    keywords: [
      "smart water metering",
      "water utility IoT",
      "leak detection",
      "water quality monitoring",
      "magistrala water",
      "NRW reduction",
      "MQTT water meter",
    ],
  },

  // ── Smart City ──────────────────────────────────────────────────────────
  {
    title: "Smart City",
    slug: "smart-city",
    icon: Building2,
    summary:
      "Digitize urban infrastructure and unify civic command centers. Monitor traffic, energy, and public utilities from a single platform.",
    description:
      "Transform disconnected urban infrastructure into a unified, data-driven command center. The Smart City Solution Pack gives municipalities real-time visibility across traffic systems, street lighting, waste management, and public energy grids - all pre-wired, pre-configured, and ready to deploy.",
    heroDetail:
      "The Smart City Solution Pack is built for municipalities and city operators who need to move beyond manual monitoring and siloed systems. It addresses the complete urban IoT lifecycle - from device onboarding and multi-protocol data ingestion to real-time alerting, automated rule execution, and executive reporting. Whether managing traffic flows, optimizing street lighting, tracking waste fill-levels, or monitoring public energy grids, the pack provides pre-configured infrastructure to bring it all under one operational view - without months of integration work.",
    whyMagistrala:
      "Magistrala's open-source core provides the multi-protocol connectivity, per-device credential management, and rule-engine foundation that large-scale urban deployments demand. Its built-in multi-tenancy lets each city department manage their own data view, while open APIs ensure you're never locked into a proprietary ecosystem.",
    image: "/solutions/smart-city.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/smart-city.png",
        alt: "Smart City operations overview dashboard",
      },
      {
        src: "/screenshots/dashboard-1.png",
        alt: "Smart City live telemetry dashboard",
      },
      {
        src: "/screenshots/alarms-1.png",
        alt: "Smart City alarm management panel",
      },
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Smart City rules engine configuration",
      },
    ],

    challenges: {
      title: "Cities are drowning in disconnected data",
      subtitle:
        "Urban infrastructure generates enormous amounts of data - but fragmented systems mean operators can't act on it fast enough.",
      items: [
        {
          icon: Layers,
          title: "Fragmented Infrastructure",
          desc: "Traffic, lighting, waste, and energy systems run on separate platforms with no unified visibility, creating blind spots and duplicated efforts.",
        },
        {
          icon: Timer,
          title: "Slow Incident Response",
          desc: "Without real-time alerts, incidents like traffic accidents or infrastructure failures are discovered hours or days after the fact.",
        },
        {
          icon: DollarSign,
          title: "Escalating Operating Costs",
          desc: "Manual monitoring, fixed-schedule maintenance, and energy waste drive costs up with no data-driven path to reduce them.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From distributed sensors to a unified operations center - in one platform.",
      steps: [
        {
          title: "Connect",
          desc: "Traffic cameras, smart meters, environmental sensors, and lighting nodes connect over MQTT or HTTP using pre-configured client credentials.",
        },
        {
          title: "Stream",
          desc: "Telemetry flows into dedicated channels organized by infrastructure type - traffic, energy, waste, safety - with automatic normalization.",
        },
        {
          title: "Analyze",
          desc: "The rules engine evaluates incoming data in real time, triggering alerts for congestion, energy spikes, overflowing bins, or public safety incidents.",
        },
        {
          title: "Act",
          desc: "Operators receive alarms in the dashboard, automated notifications are dispatched, and optionally downstream actuators are triggered via outbound channels.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "What cities are running on this pack today",
      items: [
        {
          icon: MapIcon,
          title: "Adaptive Traffic Management",
          desc: "Real-time congestion monitoring with automated signal timing adjustments and incident alerts to reduce commute times.",
        },
        {
          icon: Zap,
          title: "Smart Street Lighting",
          desc: "Occupancy-based dimming schedules slash energy use. Faulty luminaires trigger maintenance tickets automatically.",
        },
        {
          icon: Truck,
          title: "Intelligent Waste Collection",
          desc: "Fill-level sensors route collection vehicles only to full bins, cutting collection kilometers by up to 40%.",
        },
        {
          icon: Shield,
          title: "Public Safety Monitoring",
          desc: "Environmental anomaly detection and infrastructure integrity alerts improve response times across city zones.",
        },
      ],
    },

    benefits: [
      "Reduce operational costs by up to 35% through optimized scheduling and predictive maintenance",
      "Cut incident response time from hours to minutes with real-time alerting",
      "Single pane of glass for all urban infrastructure - no more siloed dashboards",
      "Built-in multi-tenancy lets each city department manage their own view",
      "Open source core means no vendor lock-in - extend as your needs grow",
      "Enterprise-grade security with per-device credentials and role-based access control",
    ],

    faq: [
      {
        question:
          "Can Magistrala integrate with existing city management software?",
        answer:
          "Yes. Magistrala exposes REST and WebSocket APIs that integrate with GIS platforms, ERP systems, and city dashboards such as Esri ArcGIS and SAP. Webhook sinks push events directly to existing ticketing and dispatch systems without requiring replacement of front-end tools.",
      },
      {
        question: "How do you handle multi-tenancy across city departments?",
        answer:
          "Magistrala uses domain-level isolation backed by SpiceDB policies. Each department (traffic, utilities, waste) operates in its own domain with its own device groups, channels, and user roles. Cross-domain data sharing is configured explicitly through policy grants - departments see only what they are authorized to see.",
      },
      {
        question:
          "What happens if connectivity to the central platform is lost?",
        answer:
          "Edge gateway nodes buffer messages locally during connectivity gaps and replay them in order once the link is restored. Time-series data arrives with original device timestamps, so dashboards and rules engines reconstruct accurate event sequences without gaps.",
      },
      {
        question: "How quickly can the Smart City pack be deployed?",
        answer:
          "The pre-configured pack installs on Magistrala Cloud in minutes - clients, channels, rules, dashboards, and alarms are all included. Custom device types and additional integrations can be added incrementally without taking the core platform offline.",
      },
    ],

    metaDescription:
      "Deploy a full smart city IoT platform in minutes. The Magistrala Smart City Solution Pack includes pre-configured traffic, lighting, waste, and energy monitoring - ready out of the box.",
    keywords: [
      "smart city IoT",
      "urban IoT platform",
      "traffic monitoring",
      "smart street lighting",
      "city operations dashboard",
      "Magistrala smart city",
    ],
  },

  // ── Smart Energy ──────────────────────────────────────────────────────
  {
    title: "Smart Energy",
    slug: "smart-energy",
    icon: Zap,
    summary:
      "Balance loads and monitor renewable generation with sub-millisecond telemetry and automated alerts.",
    description:
      "Modernize energy infrastructure management with a pre-built IoT platform covering grid monitoring, renewable generation, load balancing, and demand response. The Smart Energy Pack delivers enterprise-grade telemetry and analytics without weeks of integration work.",
    heroDetail:
      "The Smart Energy Grid Pack is engineered for energy utilities, grid operators, and industrial energy managers who need real-time visibility across generation, transmission, and consumption. It spans the full grid intelligence stack - from sub-station telemetry and renewable output monitoring to load balancing automation and demand response event management. The pack is designed to integrate with existing infrastructure while adding modern IoT-grade data processing, alerting, and analytics capabilities.",
    whyMagistrala:
      "Magistrala's high-throughput message bus and persistent time-series store handle the sub-second telemetry volumes that energy grid monitoring demands, while the rules engine enables automated load control actions without any custom middleware development.",
    image: "/solutions/smart-energy.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/dashboard-1.png",
        alt: "Smart Energy grid operations dashboard",
      },
      {
        src: "/screenshots/dashboard-2.png",
        alt: "Energy generation and load analytics",
      },
      { src: "/screenshots/alarms-1.png", alt: "Energy grid alarm management" },
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Energy demand response rules engine",
      },
    ],

    challenges: {
      title: "The grid is more complex than ever",
      subtitle:
        "Distributed renewables, EV charging, and prosumer energy flows are pushing traditional grid management to its limits.",
      items: [
        {
          icon: Activity,
          title: "Grid Instability",
          desc: "Intermittent renewable generation creates unpredictable load imbalances that traditional SCADA systems can't detect and respond to fast enough.",
        },
        {
          icon: Eye,
          title: "Limited Visibility",
          desc: "Distribution networks lack sensor density, creating blind spots where faults develop undetected until customers report outages.",
        },
        {
          icon: BarChart3,
          title: "Rising Demand Volatility",
          desc: "EV adoption and heat pump growth are creating new demand peaks that existing capacity planning models weren't designed for.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From grid edge to operations center - real-time intelligence at every voltage level.",
      steps: [
        {
          title: "Measure",
          desc: "Smart meters, inverters, and grid sensors stream high-frequency power quality and energy flow data into Magistrala over MQTT or HTTP at configurable intervals.",
        },
        {
          title: "Normalize",
          desc: "Incoming telemetry is timestamped, normalized by channel type, and partitioned by asset group - generation, distribution, or consumption — for clean analytics.",
        },
        {
          title: "Alert",
          desc: "Pre-configured power quality rules detect voltage excursions, harmonics, overloads, and anomalous consumption patterns in real time, firing alarms before damage occurs.",
        },
        {
          title: "Respond",
          desc: "Operators receive actionable alarms via dashboard. Demand response rules can trigger downstream actuation — load shedding, storage dispatch, or curtailment signals.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "What energy operators are running on this pack",
      items: [
        {
          icon: Gauge,
          title: "Load Balancing & Demand Response",
          desc: "Automated demand response programs shed controllable loads during peak periods, reducing grid stress and avoiding costly peak tariff charges.",
        },
        {
          icon: Leaf,
          title: "Renewable Generation Monitoring",
          desc: "Real-time solar and wind generation tracking with curtailment alerts, yield forecasting, and performance benchmarking against irradiance data.",
        },
        {
          icon: Zap,
          title: "Grid Fault Detection",
          desc: "Voltage sag, swell, and harmonic distortion detection across distribution feeders, enabling rapid fault isolation before customer impact.",
        },
        {
          icon: BarChart3,
          title: "Energy Audit & Reporting",
          desc: "Automated daily and monthly energy balance reports for utility billing reconciliation, regulatory submission, and carbon accounting.",
        },
      ],
    },

    benefits: [
      "Detect and respond to grid faults in seconds, not minutes — reducing outage duration and SAIDI scores",
      "Increase renewable utilization with real-time generation-to-demand matching",
      "Cut energy audit costs with automated reporting replacing manual data gathering",
      "Enable demand response programs with rules-based load control — no custom integration needed",
      "Sub-second telemetry resolution captures power quality events traditional meters miss",
      "Multi-tenant architecture lets distribution companies serve multiple network operators from one platform",
    ],

    faq: [
      {
        question:
          "What grid protocols and device types does the Smart Energy pack support?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Smart meters and inverters using Modbus, IEC 61850, or DNP3 connect via an external protocol adapter that translates readings into one of the native protocols. New device types can be registered and mapped without redeploying the platform.",
      },
      {
        question: "How does demand response automation work?",
        answer:
          "Demand response rules monitor real-time load and generation data against configurable thresholds. When a threshold is breached, the rules engine triggers load-shedding commands, notifies dispatch operators, and logs the event for regulatory reporting — all without manual intervention.",
      },
      {
        question:
          "Can we monitor multiple grid zones or substations from one platform?",
        answer:
          "Yes. Magistrala's multi-tenant architecture lets you organize substations, feeders, and distributed energy resources into separate domains with their own access policies. A grid operator dashboard aggregates across all zones while individual domain views remain isolated.",
      },
      {
        question:
          "How is power quality event data handled for compliance reporting?",
        answer:
          "Sub-second telemetry resolution captures voltage sags, harmonics, and frequency deviations as they occur. Automated daily and monthly compliance reports are generated from raw event data, exportable in formats accepted by most regulatory submission portals.",
      },
    ],

    metaDescription:
      "Deploy smart grid monitoring and energy management in minutes. The Magistrala Smart Energy Pack includes pre-configured inverters, meters, demand response rules, and grid dashboards.",
    keywords: [
      "smart energy IoT",
      "grid monitoring platform",
      "demand response IoT",
      "renewable energy monitoring",
      "power quality monitoring",
      "Magistrala energy",
    ],
  },

  // ── Cold Storage ──────────────────────────────────────────────────────
  {
    title: "Cold Storage",
    slug: "cold-storage",
    icon: Thermometer,
    summary:
      "Ensure zero spoilage and strict regulatory compliance with continuous temperature and humidity monitoring.",
    description:
      "Protect perishable inventory and maintain cold chain compliance with a fully pre-configured monitoring platform. The Cold Chain Compliance Pack continuously tracks temperature, humidity, and door events across every zone — from warehouse cold rooms to refrigerated transport.",
    heroDetail:
      "The Cold Chain Compliance Pack is purpose-built for food manufacturers, pharmaceutical distributors, and logistics operators who face strict regulatory requirements around temperature-controlled storage and transport. It provides continuous monitoring of temperature, humidity, and access events across every zone in the cold chain — from production cold rooms and blast freezers to refrigerated trucks and last-mile delivery units. Automated exceedance alerts and HACCP-audit-ready reports are built directly into the pack, reducing the burden of manual compliance verification.",
    whyMagistrala:
      "Magistrala's reliable message delivery, persistent event store, and fine-grained alarm management give cold chain operators the evidence trail and real-time response capability that food safety regulations and pharmaceutical compliance frameworks require.",
    image: "/solutions/cold-storage.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/dashboard-2.png",
        alt: "Cold chain multi-zone monitoring dashboard",
      },
      {
        src: "/screenshots/alarms-1.png",
        alt: "Temperature exceedance alarm management",
      },
      {
        src: "/screenshots/reports-1.png",
        alt: "Cold chain compliance and audit reports",
      },
      {
        src: "/screenshots/rules-engine-2.png",
        alt: "Temperature threshold rules configuration",
      },
    ],

    challenges: {
      title: "Silent failures destroy perishable inventory",
      subtitle:
        "Cold chain failures are often discovered too late — after stock is spoiled, audits are failed, or regulators are already notified.",
      items: [
        {
          icon: AlertTriangle,
          title: "Silent Exceedances",
          desc: "Manual logging and periodic checks miss temperature exceedances that occur during off-hours, defrost cycles, or door events in busy operations.",
        },
        {
          icon: ShieldAlert,
          title: "Audit & Compliance Risk",
          desc: "Paper-based logs are incomplete, tampered, or simply missing when food safety regulators or pharmaceutical QA auditors arrive on site.",
        },
        {
          icon: DollarSign,
          title: "Reactive Spoilage Response",
          desc: "Without real-time alerts, equipment failures and temperature exceedances are only discovered after stock is already lost — often representing significant financial exposure.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "Continuous monitoring from sensor to audit-ready report — automated.",
      steps: [
        {
          title: "Monitor",
          desc: "Temperature and humidity loggers transmit readings every 1–15 minutes via MQTT or LoRaWAN. Door sensors fire events on open/close. All data flows into pre-defined cold chain channels.",
        },
        {
          title: "Alert",
          desc: "HACCP threshold rules evaluate every incoming reading. Warning alarms fire before critical limits are reached, giving operators time to intervene before stock is compromised.",
        },
        {
          title: "Escalate",
          desc: "Unacknowledged alarms escalate through configurable notification chains — site manager, quality manager, on-call technician — until the exceedance is addressed and logged.",
        },
        {
          title: "Report",
          desc: "Automated daily temperature logs and exceedance reports are generated from verified sensor data. Audit-ready PDF exports can be triggered on demand or scheduled automatically.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "Where the Cold Chain Pack is deployed today",
      items: [
        {
          icon: Thermometer,
          title: "HACCP Compliance Monitoring",
          desc: "Continuous, automated HACCP critical control point monitoring with timestamped, tamper-evident data ready for food safety audits.",
        },
        {
          icon: Truck,
          title: "Refrigerated Transport Tracking",
          desc: "In-transit temperature and location monitoring for refrigerated vehicles. Exceedance events are logged with GPS position for chain-of-custody records.",
        },
        {
          icon: Activity,
          title: "Equipment Health Monitoring",
          desc: "Compressor performance analysis and defrost cycle monitoring flag equipment degradation before it causes a catastrophic failure.",
        },
        {
          icon: FileBarChart,
          title: "Regulatory Reporting",
          desc: "Automated generation of regulatory-format temperature reports for food safety authorities, pharmaceutical QA, and retail audit programs.",
        },
      ],
    },

    benefits: [
      "Eliminate stock losses with real-time alerts before exceedances become spoilage events",
      "Pass food safety and pharmaceutical cold chain audits with automated, audit-ready data exports",
      "Reduce manual logging labor — sensors and automated reports replace paper-based processes entirely",
      "HACCP-compliant alert thresholds are pre-configured and can be customized per zone or product type",
      "Multi-site visibility from a single dashboard — manage warehouses, transport, and retail from one platform",
      "Full alarm acknowledgment tracking with responsible-party attribution for regulatory accountability",
    ],

    faq: [
      {
        question: "Which temperature sensor types and protocols are supported?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Cold chain loggers using proprietary wireless protocols (BLE, Zigbee, LoRaWAN) or wired buses (RS-485, 1-Wire) connect via an external protocol adapter or gateway. Sensors from major cold chain hardware vendors are supported this way without firmware changes.",
      },
      {
        question: "How does the system handle HACCP threshold breaches?",
        answer:
          "Pre-configured HACCP rules evaluate temperature readings in real time. When a threshold breach is detected, the platform immediately fires alerts to responsible parties via email, SMS, and webhook, logs the event with device ID and timestamp, and requires acknowledgment before clearing — maintaining a full audit trail.",
      },
      {
        question: "Can I manage cold chain monitoring across multiple sites?",
        answer:
          "Yes. Each facility, vehicle, or retail location is a separate domain with its own device groups, alert rules, and user roles. A central operations dashboard aggregates status across all sites, while site managers see only their own assets.",
      },
      {
        question: "How are compliance reports generated for audits?",
        answer:
          "Automated daily, weekly, and monthly reports are generated from raw sensor data and exported in PDF or CSV formats. Reports include exceedance summaries, acknowledgment records, and mean kinetic temperature calculations — ready for submission to food safety and pharmaceutical regulatory bodies.",
      },
    ],

    metaDescription:
      "Deploy cold chain monitoring and HACCP compliance infrastructure in minutes. The Magistrala Cold Chain Pack includes temperature sensors, compliance rules, and audit-ready reporting.",
    keywords: [
      "cold chain monitoring IoT",
      "HACCP compliance platform",
      "temperature monitoring system",
      "cold storage IoT",
      "food safety IoT",
      "Magistrala cold chain",
    ],
  },

  // ── Smart Farming ─────────────────────────────────────────────────────
  {
    title: "Smart Farming",
    slug: "smart-farming",
    icon: Sprout,
    summary:
      "Maximize agricultural yield via predictive models and real-time soil, weather, and crop analytics.",
    description:
      "Give farmers and agribusinesses the data infrastructure to make precision decisions on irrigation, fertilization, pest management, and harvest timing. The Precision Agriculture Pack connects field sensors to actionable dashboards with zero setup complexity.",
    heroDetail:
      "The Precision Agriculture Pack provides farmers and agribusinesses with the data infrastructure to make precision agronomic decisions at field scale. It connects soil moisture probes, microclimate weather stations, nutrient sensors, and irrigation controllers into a unified data platform with pre-built analytics for crop stress detection, irrigation scheduling, and yield prediction. The pack supports both open-field crops and controlled environment agriculture, scaling from single-farm deployments to large multi-site enterprise operations.",
    whyMagistrala:
      "Magistrala's open protocol support lets you connect any sensor brand or gateway technology without hardware replacement, while its edge-compatible architecture ensures farm operations continue even with the intermittent connectivity that is common in rural field environments.",
    image: "/solutions/smart-farming.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/dashboard-1.png",
        alt: "Precision agriculture field monitoring dashboard",
      },
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Irrigation automation rules configuration",
      },
      {
        src: "/screenshots/alarms-2.png",
        alt: "Crop stress and soil condition alarms",
      },
      {
        src: "/screenshots/reports-2.png",
        alt: "Seasonal yield and resource efficiency reports",
      },
    ],

    challenges: {
      title: "Guesswork is costing farms yield and water",
      subtitle:
        "Irrigation timing, pest management, and harvest decisions made without sensor data consistently underperform — and over-irrigating is both expensive and damaging.",
      items: [
        {
          icon: Droplets,
          title: "Water Waste",
          desc: "Calendar-based irrigation ignores actual soil moisture and evapotranspiration conditions, routinely over-irrigating by 20–40% and leaching nutrients.",
        },
        {
          icon: AlertTriangle,
          title: "Unpredictable Yields",
          desc: "Crop stress events — frost, heat, drought, disease pressure — go undetected until visible symptoms appear, when intervention is often already too late.",
        },
        {
          icon: Eye,
          title: "Manual Scouting Overhead",
          desc: "Labour-intensive manual monitoring across large farms can't achieve the sensor resolution needed for precision decisions.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From field sensors to automated irrigation and crop decisions.",
      steps: [
        {
          title: "Sense",
          desc: "Soil probes, weather stations, and microclimate sensors stream readings into Magistrala over LoRaWAN or MQTT at intervals configured per sensor type and crop stage.",
        },
        {
          title: "Contextualize",
          desc: "Incoming telemetry is tagged with field zone, crop type, and growth stage. Groups and channels structure the data for per-field analysis and cross-farm comparisons.",
        },
        {
          title: "Decide",
          desc: "Evapotranspiration and volumetric water content rules evaluate soil and weather data continuously. Frost risk, heat stress, and disease pressure indices fire alarms when thresholds are exceeded.",
        },
        {
          title: "Automate",
          desc: "Irrigation trigger rules dispatch control signals to valve controllers and pump systems. Alerts notify agronomists for interventions requiring human judgement.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "Precision agriculture use cases running on this pack",
      items: [
        {
          icon: Droplets,
          title: "Precision Irrigation",
          desc: "VWC-based irrigation scheduling replaces calendar timers with real soil data, reducing water use by 20–35% without yield impact.",
        },
        {
          icon: Activity,
          title: "Crop Stress Monitoring",
          desc: "Continuous tracking of heat stress, water deficit, and disease pressure indices allows proactive agronomic interventions before visible symptoms.",
        },
        {
          icon: CloudRain,
          title: "Frost & Weather Alerting",
          desc: "Microclimate frost risk alerts give operators a 2–4 hour warning window to activate frost protection measures for vulnerable crops.",
        },
        {
          icon: LineChart,
          title: "Seasonal Yield Analysis",
          desc: "Historical sensor data and yield correlations improve season-on-season decision quality for irrigation, nutrition, and harvest timing.",
        },
      ],
    },

    benefits: [
      "Reduce water consumption by 20–35% with soil moisture-based irrigation scheduling",
      "Detect frost, disease pressure, and heat stress events before visible crop damage occurs",
      "Eliminate manual scouting overhead with continuous automated field monitoring",
      "Improve yield predictability by correlating sensor data with historical crop performance",
      "Scale from pilot field to full farm without re-configuration — add sensors in minutes",
      "Comply with water use regulations and sustainability audits with automated water consumption reports",
    ],

    faq: [
      {
        question: "What types of agricultural sensors does the pack support?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Sensors using SDI-12, RS-485, or LoRaWAN connect via an external protocol adapter or gateway that forwards readings into one of the native protocols. Weather stations, leaf wetness sensors, and dendrometers from major agri-hardware vendors are supported this way.",
      },
      {
        question: "How does automated irrigation scheduling work?",
        answer:
          "Irrigation rules evaluate real-time soil moisture readings against configurable VWC thresholds for each field zone. When moisture drops below the target level, the rules engine opens the relevant valve controller and logs the irrigation event. Rain sensor inputs override scheduled runs automatically.",
      },
      {
        question: "Can I monitor multiple farms or fields from one platform?",
        answer:
          "Yes. Each farm, field, or crop zone is an isolated domain with its own sensors, rules, and dashboards. A farm manager sees their own operations while an agronomist account can be granted cross-farm read access for advisory purposes — all enforced by fine-grained RBAC.",
      },
      {
        question:
          "How does the platform help with water regulation compliance?",
        answer:
          "Automated water usage logs record every irrigation event with volume, duration, and zone data. Monthly reports are generated from this data and can be exported for submission to water authorities. Configurable water budget rules prevent over-allocation by blocking additional irrigation runs when seasonal limits are reached.",
      },
    ],

    metaDescription:
      "Deploy precision agriculture IoT infrastructure in minutes. The Magistrala Smart Farming Pack includes soil sensors, weather stations, irrigation automation rules, and crop monitoring dashboards.",
    keywords: [
      "precision agriculture IoT",
      "smart farming platform",
      "soil moisture monitoring",
      "irrigation automation IoT",
      "crop stress monitoring",
      "Magistrala agriculture",
    ],
  },

  // ── Oil & Gas Field Monitoring ────────────────────────────────────────────────
  {
    title: "Oil & Gas Field Monitoring",
    slug: "oil-gas",
    icon: Flame,
    summary:
      "Most wellhead incidents have warning signals before they escalate: H2S creeping toward the OSHA ceiling, pressure trending past the warning threshold, a tank filling while the transfer pump is stopped overnight. This pack connects wellhead sensors to a single monitoring platform and fires the alarm the moment a threshold is crossed.",
    description:
      "The Oil & Gas Field Monitoring pack gives upstream production teams real-time visibility across wellhead gateways, flow meters, pressure sensors, gas detectors, storage tank sensors, separator controllers, and pump controllers. Five detection rules cover the alarm categories that matter in upstream production: high wellhead and casing pressure, H2S and LEL gas hazards, low oil flow, rising water cut, and tank overfill protection. When H2S climbs past 5 ppm at an unmanned wellsite, the alarm fires before anyone on the next shift arrives on site.",
    heroDetail:
      "Five detection rules run continuously: high-pressure alerts catch wellhead and casing pressure excursions against configurable MAOP thresholds before blowout risk escalates; gas leak detection enforces OSHA H2S ceilings and LEL limits with severity-tiered alarms; well flow anomaly detection flags production declines and rising water cut; and tank overfill protection fires a critical alarm before crude reaches spill-risk levels. Pump and separator controls sit directly on the KPI dashboard so operators respond without switching screens. Three scheduled reports cover daily production, weekly operations, and monthly regulatory compliance.",
    whyMagistrala:
      "Field devices connect over MQTT with per-client credentials, so a compromised sensor does not expose the rest of the wellsite network. Raw telemetry and validated data flow through separate channels, keeping detection rules clear of corrupted sensor records. One Well Operator template scales to any number of wellheads without duplicating dashboard configuration.",
    image: "/solutions/oil-and-gas.jpg",
    docsPath: "/docs/user-guide/solution-packs/oil-gas-field-monitoring/",
    dashboardScreenshots: [
      {
        src: "/screenshots/solutions/oil-and-gas-monitoring/field-operations-dashboard.png",
        alt: "Field Operations KPI Dashboard showing daily oil production, wellhead pressure gauge, active alarm count, tank level, H2S reading, and pump control",
      },
      {
        src: "/screenshots/solutions/oil-and-gas-monitoring/real-time-monitoring-dashboard.png",
        alt: "Real-Time Well Monitoring Dashboard with live flow rate, wellhead pressure trend, H2S concentration, tank level, and LEL percentage",
      },
      {
        src: "/screenshots/solutions/oil-and-gas-monitoring/alarms-dashboard.png",
        alt: "Alarm Monitoring Dashboard with active alarm counts by severity and full alarm triage table",
      },
      {
        src: "/screenshots/solutions/oil-and-gas-monitoring/well-operator-dashboard.png",
        alt: "Well Operator dashboard showing per-well flow rate, wellhead pressure gauge, H2S level, flow rate trend, and tank level",
      },
      {
        src: "/screenshots/solutions/oil-and-gas-monitoring/field-manager-summary-dashboard.png",
        alt: "Field Manager Summary dashboard with daily oil production chart, active alarms, water cut, tank level, and gas flow",
      },
    ],

    challenges: {
      title: "Problems field operators deal with every shift",
      subtitle:
        "Wellhead incidents, gas hazards, and overfill events all have warning signals. The problem is having a system that catches them in time.",
      items: [
        {
          icon: ShieldAlert,
          title:
            "H2S above threshold at an unmanned wellsite with no one on site",
          desc: "An electrochemical H2S detector hitting the OSHA ceiling at an unmanned wellsite is a hazardous event with nobody there to respond. The alarm needs to fire before the next scheduled site visit.",
        },
        {
          icon: AlertTriangle,
          title: "A tank filling while the transfer pump is stopped overnight",
          desc: "When the transfer pump trips at midnight and nobody notices, crude keeps flowing into the tank. By morning the level is at 90% and the spill risk window is closing. An overfill warning at 85% gives enough time to act.",
        },
        {
          icon: TrendingDown,
          title:
            "Wellhead pressure trending toward MAOP between manual shift checks",
          desc: "Pressure excursions that develop between manual checks can reach critical levels before anyone looks at the gauge. Continuous monitoring catches the trend at 1800 psi before it reaches 2200.",
        },
      ],
    },

    howItWorks: {
      subtitle: "Four steps from wellhead sensor to actionable alarm",
      steps: [
        {
          title: "Ingest",
          desc: "Wellhead sensors and controllers publish SenML payloads over MQTT to the Raw Telemetry Channel using per-device credentials. Every reading is saved immediately.",
        },
        {
          title: "Validate",
          desc: "A data processing rule checks each incoming record against field safe ranges before alarm logic runs. Out-of-range sensor values are discarded before they reach detection rules.",
        },
        {
          title: "Detect",
          desc: "Five rules watch clean data continuously. Pressure above 1800 psi fires a warning; above 2200 psi fires a critical. H2S above 5 ppm triggers a gas hazard warning. Flow below 50 bbl/d with the pump running raises a production anomaly. Tank above 85% triggers an overfill warning.",
        },
        {
          title: "Report",
          desc: "Daily production, weekly operations summary, and monthly compliance reports go out automatically by email. Long-term production records write to PostgreSQL for regulatory reporting.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle:
        "Where upstream operators deploy the Oil & Gas Field Monitoring pack",
      items: [
        {
          icon: Gauge,
          title: "Wellhead production monitoring",
          desc: "Flow rate, gas-oil ratio, and water cut tracked continuously across producing wells. Daily production reports close the loop without manual data collection.",
        },
        {
          icon: ShieldAlert,
          title: "H2S safety compliance at unmanned sites",
          desc: "Continuous OSHA-threshold monitoring at wellheads and production facilities. Gas hazard alarms fire within seconds and reach on-call contacts by email before site personnel would detect the exposure manually.",
        },
        {
          icon: Activity,
          title: "Tank battery level management",
          desc: "Crude oil storage level monitored against two fill thresholds. Warning at 85% gives trucking schedulers a lead window before spill risk at 95%.",
        },
        {
          icon: Wrench,
          title: "Separator and pump operations",
          desc: "Separator temperature and pressure trended for process upsets. Transfer pump status displayed and controllable from the KPI dashboard without navigating to a separate control interface.",
        },
      ],
    },

    benefits: [
      "H2S and LEL alarms fire within seconds of OSHA threshold breach, giving operators time to respond before exposure risk escalates",
      "Wellhead pressure warnings at 1800 psi give time to investigate before the 2200 psi critical limit is reached",
      "Tank overfill warnings at 85% give trucking schedulers a practical lead window before the 95% critical alarm",
      "Device Health Monitor flags any silent field device within 10-20 minutes, protecting both safety coverage and regulatory data completeness",
      "Monthly compliance reports generate and deliver automatically, replacing manual production accounting assembly",
      "Per-client MQTT credentials isolate each field device so a compromised sensor cannot access others on the wellsite",
      "Tag-based Well Operator and Field Manager templates scale across multiple wells without duplicating configuration",
    ],

    faq: [
      {
        question:
          "How do we adjust pressure thresholds to match our well's MAOP?",
        answer:
          "Open the High Pressure Alert rule in the Rules page and edit the threshold constants. The defaults (1800 psi warning, 2200 psi critical for wellhead; 1700 psi for casing) are typical Permian Basin tight oil parameters. Replace them with the values from your well's specific Maximum Allowable Operating Pressure design specification. The change takes effect on the next incoming message with no restart required.",
      },
      {
        question: "Can the pack monitor multiple wells or field sites?",
        answer:
          "Yes. Each field site is a Magistrala domain with its own device clients, channels, and rules. The Well Operator and Field Manager Summary templates use tag-based device references, so deploying a new well means provisioning its clients and assigning a group, not duplicating template definitions. A central operations view can aggregate alarm counts across all sites while individual site data stays isolated.",
      },
      {
        question:
          "How are H2S safety alarms escalated when no one acknowledges them?",
        answer:
          "The Gas Leak Detection rule sends email notifications to configured recipients the moment the alarm fires. For escalation chains, add multiple recipients in the rule's email output. For SMS or Safety Management System integration, use the rule's webhook output to POST the event to your external system. The alarm stays open in the platform until it is acknowledged or the H2S reading returns below threshold.",
      },
      {
        question:
          "Do all sensors need to connect through the Wellhead Gateway, or can they connect directly?",
        answer:
          "Either works. Each device type has its own client credentials, so sensors can connect directly if they have MQTT capability. In most field deployments, all sensors route through the Wellhead Gateway: a single TLS connection handles the entire wellsite stream and the gateway can buffer readings during brief connectivity outages. Both approaches deliver identical telemetry to the Raw Telemetry Channel.",
      },
    ],

    metaDescription:
      "Monitor wellhead pressure, H2S gas concentration, oil flow rate, and tank levels in real time. Detect gas hazards and pressure excursions within seconds, protect against tank overfill, and automate production compliance reports with Magistrala's Oil & Gas Field Monitoring solution pack.",
    keywords: [
      "oil gas field monitoring IoT",
      "wellhead pressure monitoring",
      "H2S gas detection system",
      "upstream oil gas IoT",
      "tank overfill protection",
      "magistrala oil gas",
      "SenML wellhead telemetry",
    ],
  },

  // ── Smart Irrigation ──────────────────────────────────────────────────
  {
    title: "Smart Irrigation",
    slug: "smart-irrigation",
    icon: Sprout,
    summary:
      "Most farms find out about burst irrigation pipes from wet ground the next morning, not from an alarm. This pack connects your field sensors and actuators to a single platform, catches problems within seconds of threshold breach, and files your weekly soil health and water efficiency reports automatically.",
    description:
      "The Smart Irrigation pack gives farms and managed landscapes a live view of soil conditions, water flow, and tank levels across multiple field zones. Soil moisture sensors, weather stations, flow meters, smart valves, and a pump controller all land in pre-built dashboards with detection rules and scheduled reports already wired up. When soil moisture drops below the wilting threshold at 3 AM, the alarm fires and the email goes out before the crop is stressed.",
    heroDetail:
      "Six detection rules monitor the field around the clock — catching dry soil before crops reach wilting point, waterlogging before root damage sets in, pipe bursts before significant water is lost, and low tank levels before the pump runs dry. Valve and pump control sit directly on the dashboard so operators can respond without leaving the monitoring view.",
    whyMagistrala:
      "Your existing field sensors probably already speak one of our protocols, so there is nothing to replace in the field. All ten device types — soil sensors, weather stations, flow meters, valves, tank sensor, pump — connect to the same Telemetry Channel and flow through the same rules. One Zone Monitoring template scales to any number of irrigation zones without duplicating configuration. Soil health and water consumption reports go out automatically every week.",
    image: "/solutions/smart-irrigation.jpg",
    docsPath: "/docs/user-guide/solution-packs/smart-irrigation/",
    dashboardScreenshots: [
      {
        src: "/screenshots/solutions/smart-irrigation/field-operations-dashboard.png",
        alt: "Field Operations Dashboard with zone soil moisture gauges, flow charts, tank level, and valve control switches",
      },
      {
        src: "/screenshots/solutions/smart-irrigation/irrigation-analytics-dashboard.png",
        alt: "Irrigation Analytics Dashboard with 7-day soil moisture trends and daily water consumption by zone",
      },
      {
        src: "/screenshots/solutions/smart-irrigation/alarms-dashboard.png",
        alt: "Alarm Monitoring Dashboard with active alarm counts by severity and full alarm triage table",
      },
      {
        src: "/screenshots/solutions/smart-irrigation/zone-monitoring-template.png",
        alt: "Zone Monitoring Template showing per-zone soil moisture, flow rate, rainfall, and valve control",
      },
      {
        src: "/screenshots/solutions/smart-irrigation/zone-monitoring-template-dual.png",
        alt: "Zone Monitoring Template showing per-zone soil moisture, flow rate, rainfall, and valve control for both zones",
      },
      {
        src: "/screenshots/solutions/smart-irrigation/field-report-template.png",
        alt: "Field Report Template with soil moisture history, total water consumed, and device battery status",
      },
      {
        src: "/screenshots/solutions/smart-irrigation/field-report-template-dual.png",
        alt: "Field Report Template with soil moisture history, total water consumed, and device battery status for both zones",
      },
    ],

    challenges: {
      title: "Problems farms deal with every season",
      subtitle:
        "The agronomic and financial costs of reactive irrigation management add up. These are the specific pain points the solution pack addresses.",
      items: [
        {
          icon: AlertTriangle,
          title: "Finding out about burst pipes from wet ground, not telemetry",
          desc: "A burst irrigation pipe in the early hours drains the tank, wastes water, and can leave an entire zone unirrigated. The alarm should fire before the water is gone.",
        },
        {
          icon: BarChart3,
          title:
            "No visibility into how much water each zone is actually using",
          desc: "Without zone-level flow data, water budgets are estimates at best. Comparing consumption against scheduled volumes is a spreadsheet job done after the fact.",
        },
        {
          icon: Clock,
          title: "Soil health reports assembled manually every week",
          desc: "Pulling moisture and temperature readings from sensors, averaging them per zone, and formatting the output for the agronomist. Every single week, by hand.",
        },
      ],
    },

    howItWorks: {
      subtitle: "Four steps from field sensor to actionable decision",
      steps: [
        {
          title: "Ingest",
          desc: "Soil sensors, weather stations, flow meters, valves, and the pump controller publish SenML readings over MQTT, HTTP, CoAP, or WebSocket. Every raw reading is saved immediately to the Telemetry Channel.",
        },
        {
          title: "Detect",
          desc: "Six rules watch the incoming data continuously. Moisture drops below 35%? Dry soil warning. Flow spikes above 40 L/min? Pipe burst alarm. Tank below 25%? Refill warning. Rainfall above 2 mm? Schedule review alert.",
        },
        {
          title: "Control",
          desc: "Valve and pump switches on the Field Operations Dashboard send commands directly to actuators via the Commands Channel. Operators respond without leaving the monitoring view or opening a separate control interface.",
        },
        {
          title: "Report",
          desc: "Daily water consumption, weekly soil health, and monthly water efficiency reports go out automatically by email. Long-term moisture and volume trends feed into seasonal irrigation planning.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle:
        "Where farms and land managers deploy smart irrigation monitoring",
      items: [
        {
          icon: Leaf,
          title: "Arable farming and precision crop irrigation",
          desc: "Zone-level soil moisture drives irrigation decisions rather than fixed schedules. Dry soil alarms fire before crops are stressed. Daily volume reports close the loop on water spend.",
        },
        {
          icon: Gauge,
          title: "Vineyard and orchard water stress management",
          desc: "Soil moisture at canopy depth tells you when vines or trees are drawing on reserves. Irrigation runs only when needed. Waterlogging alarms prevent root rot during wet spells.",
        },
        {
          icon: MapIcon,
          title: "Multi-zone landscape and turf management",
          desc: "Golf courses, sports grounds, and municipal parks monitor each irrigation zone independently. Zone managers see only their assigned area. Pipe burst alarms prevent overnight water loss.",
        },
        {
          icon: Users,
          title: "Shared farmland and tenant irrigation accounts",
          desc: "Each farmer sees their own field's moisture history, water consumed, and device battery status through the Field Report template. Aggregate consumption and alarm data stay with the farm manager.",
        },
      ],
    },

    benefits: [
      "Dry soil alarms fire within seconds of threshold breach — before crop stress develops, not after a field inspection the next morning",
      "Pipe burst alarms trigger at 40 L/min, giving operators time to close the zone valve before the tank drains and the pump runs dry",
      "Zone-level total volume data closes the gap between water budget targets and actual consumption without manual data collection",
      "Weekly soil health reports aggregate daily average moisture and temperature per zone and deliver automatically — no manual data assembly",
      "Monthly water efficiency reports combine zone volume and pump energy into a single PDF for water cost and budget reconciliation",
      "Tag-based Zone Monitoring and Field Report templates scale to any number of zones or farmer accounts from a single template definition",
      "Valve and pump control from the Field Operations Dashboard reduces response time to soil or flow alarms without requiring a separate control system",
    ],

    faq: [
      {
        question:
          "Our soil sensors use a proprietary serial protocol. Can we still connect them?",
        answer:
          "Yes. The sensors do not need to speak MQTT or HTTP directly. A local gateway — an edge controller, industrial IoT gateway, or a Raspberry Pi running a small adapter — can read your sensors via their native interface and publish SenML payloads to the Telemetry Channel. Many commercial agriculture gateways support RS-485 Modbus, SDI-12, and other field bus protocols out of the box. As long as the gateway delivers correctly formatted SenML records, the detection rules and dashboards work identically to a native MQTT sensor.",
      },
      {
        question: "Can the pack handle more than two irrigation zones?",
        answer:
          "Yes. The solution ships with two zones (Zone A and Zone B), but the architecture scales to any number. Each additional zone needs its own device clients, a group for access control, and connections to the Telemetry and Commands channels. The Zone Monitoring template scales automatically — assign it to any group containing devices tagged with the correct zone device tags and it renders the right data without any template changes. Detection rules apply to all telemetry in the Telemetry Channel, so new zone devices are covered by the same rules immediately after connection.",
      },
      {
        question:
          "How often should devices publish readings for the alarms to be effective?",
        answer:
          "Detection rules evaluate each SenML message as it arrives, so alarm latency equals the device's publish interval. For soil moisture monitoring where conditions change gradually, publishing every 5–10 minutes is adequate. For flow meter and pipe burst detection where conditions can change in seconds, publishing every 30–60 seconds gives operators a window to respond before significant water is lost. Battery reporting is not time-sensitive — once per hour is sufficient for the Low Battery Alert to be useful without generating unnecessary network traffic.",
      },
      {
        question:
          "Can we use the pack with drip irrigation as well as sprinkler systems?",
        answer:
          "Yes. The pack is agnostic to the irrigation delivery method. Drip and sprinkler systems both use flow meters to report `flow_rate` and `total_volume`, so the High Flow Alert, daily consumption report, and Irrigation Analytics Dashboard work the same way for both. The main difference is the normal flow rate range: a drip system running at 2–5 L/min will have a lower typical `flow_rate` than a sprinkler running at 15–22 L/min. You may want to lower the pipe burst threshold in the High Flow Alert rule to match your drip system's actual flow profile — the default of 40 L/min is calibrated for sprinkler systems.",
      },
    ],

    metaDescription:
      "Monitor soil moisture, flow rate, tank level, and rainfall across multiple irrigation zones in real time. Detect dry soil, pipe bursts, and waterlogging within seconds with Magistrala's Smart Irrigation solution pack.",
    keywords: [
      "smart irrigation",
      "soil moisture monitoring",
      "irrigation IoT",
      "precision agriculture",
      "pipe burst detection",
      "water usage monitoring",
      "magistrala irrigation",
      "MQTT soil sensor",
    ],
  },

  // ── Air Quality Monitoring ─────────────────────────────────────────────
  {
    title: "Air Quality Monitoring",
    slug: "air-quality",
    icon: Wind,
    summary:
      "Track PM2.5, CO₂, and pollutants across zones to ensure regulatory compliance and protect public health.",
    description:
      "Deploy a comprehensive air quality monitoring network across indoor and outdoor environments. The Air Quality & Compliance Pack connects multi-pollutant sensors to real-time dashboards, automated regulatory reporting, and public health alert systems — pre-configured and ready in minutes.",
    heroDetail:
      "The Air Quality & Compliance Pack is designed for smart city operators, industrial environmental managers, and building facility teams who need continuous, defensible air quality data across distributed sensor networks. It monitors a full range of pollutants — PM2.5, PM10, CO₂, NO₂, O₃, and VOCs — in real time, with automatic exceedance detection and regulatory threshold alerting. The pack includes pre-built compliance reports formatted for standard environmental reporting frameworks, significantly reducing the manual effort of periodic regulatory audits.",
    whyMagistrala:
      "Magistrala's scalable message ingestion and persistent time-series storage provide the data fidelity and retention that regulatory compliance frameworks require, while the built-in rule engine automates the threshold monitoring that would otherwise demand custom application development.",
    image: "/solutions/air-quality.jpg",
    dashboardScreenshots: [
      {
        src: "/screenshots/dashboard-2.png",
        alt: "Air quality monitoring network dashboard",
      },
      {
        src: "/screenshots/alarms-2.png",
        alt: "Pollutant exceedance and health alert management",
      },
      {
        src: "/screenshots/reports-2.png",
        alt: "Regulatory air quality compliance reports",
      },
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Air quality threshold rules configuration",
      },
    ],

    challenges: {
      title: "Air quality risks are invisible until harm is done",
      subtitle:
        "Pollutant exposure impacts public health, productivity, and regulatory compliance — but without continuous monitoring, exceedances go undetected for hours or days.",
      items: [
        {
          icon: Eye,
          title: "Invisible Compliance Gaps",
          desc: "Manual sampling and infrequent measurement miss acute pollution events that breach regulatory limits, creating undetected compliance exposure for operators and municipalities.",
        },
        {
          icon: ShieldAlert,
          title: "Public Health Risk",
          desc: "Without real-time AQI monitoring, vulnerable populations — schools, hospitals, care homes — aren't notified during high-pollution events when protective action is needed.",
        },
        {
          icon: FileBarChart,
          title: "Manual Reporting Burden",
          desc: "Compiling regulatory submissions from manual sampling and disparate sensor logs is time-consuming, error-prone, and creates delays in compliance reporting.",
        },
      ],
    },

    howItWorks: {
      subtitle:
        "From sensor network to regulatory report — continuous and automated.",
      steps: [
        {
          title: "Measure",
          desc: "Multi-pollutant sensors stream PM2.5, PM10, CO₂, NO₂, O₃, and VOC readings at 1-minute intervals via MQTT into pre-built pollutant-specific channels.",
        },
        {
          title: "Contextualize",
          desc: "Readings are tagged with sensor location, zone type (indoor/outdoor/industrial), and correlated with meteorological data for dispersion context and regulatory categorization.",
        },
        {
          title: "Alert",
          desc: "WHO, EPA, and EU Air Quality Directive threshold rules fire alarms at configurable warning and limit values. AQI category transitions trigger real-time notifications to operators and public systems.",
        },
        {
          title: "Report",
          desc: "Automated daily summaries and monthly trend reports compile verified sensor data into regulatory-format exports. Industrial boundary exceedance logs are generated automatically for permit compliance.",
        },
      ],
    },

    applications: {
      title: "Key Applications",
      subtitle: "Air quality monitoring deployments using this pack",
      items: [
        {
          icon: Wind,
          title: "Urban AQI Networks",
          desc: "Dense sensor networks across city districts provide neighborhood-level air quality data for public information systems, smart city dashboards, and pollution mapping.",
        },
        {
          icon: Activity,
          title: "Indoor Air Quality Management",
          desc: "CO₂ and VOC monitoring in offices, schools, and public buildings drives HVAC automation and ventilation alerts to maintain healthy indoor environments.",
        },
        {
          icon: Factory,
          title: "Industrial Boundary Monitoring",
          desc: "Perimeter sensor networks at industrial facilities continuously monitor regulated pollutants, providing automated permit compliance evidence and exceedance alerts.",
        },
        {
          icon: GitMerge,
          title: "Regulatory Compliance Reporting",
          desc: "Automated generation of regulatory-format air quality reports for environmental agency submissions, reducing compliance administration overhead significantly.",
        },
      ],
    },

    benefits: [
      "Detect regulatory exceedances in real time — minutes after they occur, not days after manual review",
      "Protect public health with automated AQI alerts for sensitive locations like schools and hospitals",
      "Eliminate manual reporting labor with automated regulatory submission reports",
      "Deploy anywhere from urban ambient networks to industrial boundary monitoring with the same platform",
      "WHO, EPA, and EU Air Quality Directive thresholds are pre-configured and adjustable per jurisdiction",
      "Multi-tenant architecture lets environmental agencies manage multiple operator networks from one platform",
    ],

    faq: [
      {
        question:
          "What pollutants and sensor types does the Air Quality pack support?",
        answer:
          "Magistrala natively supports MQTT, HTTP, CoAP, and WebSocket. Air quality sensors reporting over MQTT connect directly. Sensors using Modbus or LoRaWAN connect via an external protocol adapter. PM2.5, PM10, NO2, O3, CO, SO2, VOC, and CO2 sensors from major vendors are supported this way, both indoors and outdoors.",
      },
      {
        question:
          "How are AQI thresholds configured for different regulatory standards?",
        answer:
          "WHO, US EPA, and EU Air Quality Directive thresholds are pre-configured as default rule templates. Each threshold set is adjustable per sensor, location, or jurisdiction. Regulatory standard updates can be applied by editing rule parameters without touching platform code.",
      },
      {
        question:
          "How does the platform handle multi-site monitoring networks?",
        answer:
          "Each monitoring station or network zone is organized as a Magistrala domain with its own sensors, rules, and access policies. Environmental agencies can manage multiple operator networks from a single platform while maintaining strict data isolation between clients.",
      },
      {
        question: "How are automated compliance reports generated?",
        answer:
          "Compliance reports are generated on a configurable daily, weekly, or monthly schedule from raw sensor data. Reports include hourly averages, exceedance counts, and station metadata in formats accepted by major regulatory submission portals. Data exports are available in CSV and JSON.",
      },
    ],

    metaDescription:
      "Deploy air quality monitoring and regulatory compliance infrastructure in minutes. The Magistrala Air Quality Pack includes multi-pollutant sensors, AQI rules, and automated compliance reporting.",
    keywords: [
      "air quality monitoring IoT",
      "AQI compliance platform",
      "PM2.5 sensor network",
      "indoor air quality monitoring",
      "environmental compliance IoT",
      "Magistrala air quality",
    ],
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
