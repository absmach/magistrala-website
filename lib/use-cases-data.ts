import {
  BarChart3,
  Bell,
  Building2,
  Clock,
  Cog,
  DollarSign,
  Droplets,
  Eye,
  Factory,
  Gauge,
  Lightbulb,
  Lock,
  type LucideIcon,
  Search,
  Server,
  Shield,
  TrafficCone,
  Trash2,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

export interface UseCaseChallenge {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface UseCaseApplication {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface UseCaseStep {
  title: string;
  desc: string;
}

export interface UseCaseFAQ {
  question: string;
  answer: string;
}

export interface UseCase {
  title: string;
  slug: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  benefits: string[];
  challenges: {
    title: string;
    subtitle: string;
    items: UseCaseChallenge[];
  };
  dashboard: {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
  };
  applications: {
    title: string;
    subtitle: string;
    items: UseCaseApplication[];
  };
  howItWorks: {
    subtitle: string;
    steps: UseCaseStep[];
  };
  faq: UseCaseFAQ[];
}

export const useCases: UseCase[] = [
  {
    title: "Smart Water Metering",
    slug: "smart-water-metering",
    icon: Droplets,
    summary:
      "Real-time visibility into water networks — enabling faster leak detection, fraud prevention and reduced non-revenue water.",
    description:
      "Water utilities globally lose between 20–40% of treated water to distribution network losses — a combination of physical leaks, unauthorized connections, and metering errors collectively called non-revenue water (NRW). Traditional fixed-schedule meter reading creates a 30-to-90-day gap between a leak occurring and its detection. During that window, a single failed joint in a transmission main can waste thousands of cubic meters while billing systems show nothing unusual. Pressure transients from pump starts and valve operations stress aging pipe joints, accelerating failures that compound across the network.\n\nMagistrala transforms this reactive model by connecting every meter, pressure logger, and flow sensor into a continuous data stream — giving operations teams real-time visibility into network behavior and enabling automatic, rule-based alerts before losses escalate. Devices connect via MQTT over NB-IoT, LoRaWAN, or cellular. The built-in rules engine evaluates telemetry in real time for minimum night flow anomalies, pressure wave signatures, and consumption outliers. When a threshold is breached, alerts fire automatically to SCADA systems, field-team ticketing, and SMS gateways — with GPS coordinates and anomaly context included.",
    benefits: [
      "Reduce non-revenue water by 15–30% within 12 months through continuous DMA monitoring and automated leak localization",
      "Cut average leak detection time from 45+ days (scheduled reading cycle) to under 4 hours",
      "Eliminate manual meter-reading routes — saving 2–3 FTE per 50,000 connections",
      "Achieve regulatory NRW reporting compliance with automated daily and monthly data exports",
    ],
    challenges: {
      title: "The Challenge",
      subtitle:
        "Water utilities face growing pressure to reduce losses and demonstrate sustainability. Legacy metering infrastructure creates multi-week blind spots between reads — enough time for a single burst main to waste hundreds of thousands of liters before anyone notices a problem.",
      items: [
        {
          icon: Eye,
          title: "No Continuous Visibility",
          desc: "Most distribution networks operate on 30-to-90-day reading cycles. Between reads, operators are blind to consumption patterns, pressure fluctuations, and early-stage leaks. Night-flow analysis — the most reliable leak indicator — is impossible without continuous, timestamped data from every district metered area simultaneously.",
        },
        {
          icon: Clock,
          title: "Slow Incident Response",
          desc: "When issues surface through customer complaints or billing anomalies, the leak or tampering event has typically been active for weeks. Repair teams face uncertain localization — digging at estimated positions rather than responding to a GPS-correlated alert. Average response times measured in days create exponential water loss curves.",
        },
        {
          icon: DollarSign,
          title: "Direct Revenue Loss",
          desc: "Industry benchmarks put global NRW costs at over $39 billion annually. For a mid-sized utility serving 500,000 connections, a 5% NRW reduction translates directly to avoided production, treatment, and energy costs — typically $2–4M per year. Undetected tampering and bypassed meters compound billing shortfalls every quarter.",
        },
      ],
    },
    dashboard: {
      title: "Real-Time Water Network Dashboard",
      subtitle:
        "Monitor consumption, pressure, and anomalies across your entire water network from a single pane of glass.",
      image: "/screenshots/smart-water.png",
      alt: "Magistrala smart water metering dashboard",
    },
    applications: {
      title: "Key Applications",
      subtitle:
        "Comprehensive monitoring and control across the water distribution lifecycle.",
      items: [
        {
          icon: Gauge,
          title: "Consumption Monitoring",
          desc: "Sub-hourly consumption profiles for every registered meter enable demand peak identification, growth scenario modelling, and tariff validation. Aggregated district metered area views support regulatory reporting with no manual data extraction.",
        },
        {
          icon: Search,
          title: "Leak Detection",
          desc: "Minimum night flow analysis runs continuously across all DMAs simultaneously. Statistical outlier detection flags zones where night consumption exceeds expected background — typically within 15 minutes of a leak exceeding 0.1 L/s. Burst events trigger immediate high-priority alerts with estimated location from pressure-sensor correlation.",
        },
        {
          icon: BarChart3,
          title: "Demand Forecasting",
          desc: "Historical consumption time-series combined with weather and calendar inputs feed short-term demand models used for pump scheduling and reservoir management. Accurate 24-hour forecasts reduce pumping energy costs by optimizing fill schedules against off-peak tariff windows.",
        },
        {
          icon: Bell,
          title: "Alert Management",
          desc: "Multi-step rule chains allow escalating alert paths: an anomaly triggers a field check request; if unacknowledged within a configured window, it escalates to operations management. Per-device sensitivity tuning and grouped notifications for spatially clustered events prevent alert fatigue.",
        },
      ],
    },
    howItWorks: {
      subtitle:
        "Magistrala connects water infrastructure end-to-end — from field sensors to operations teams — through a fully automated, real-time data pipeline that requires no custom middleware.",
      steps: [
        {
          title: "Ingest",
          desc: "Field meters and pressure loggers publish telemetry via MQTT through NB-IoT, LoRaWAN, or cellular gateways. Magistrala handles connection management, X.509 or pre-shared key authentication, and automatic reconnection. Each device is registered in the client registry with its DMA assignment and calibration coefficients, so every message arrives pre-tagged with network topology context.",
        },
        {
          title: "Normalize",
          desc: "Protocol adapters translate raw device payloads — which vary by manufacturer and firmware version — into a normalized SenML or JSON schema. Unit conversions, timestamp corrections, and manufacturer-specific encoding are resolved at the adapter layer so downstream analytics work against a consistent format regardless of hardware mix in the field.",
        },
        {
          title: "Analyze",
          desc: "The embedded IoT platform rules engine evaluates incoming telemetry against configurable thresholds and cross-device patterns in real time. Minimum night flow anomaly detection, pressure wave correlation for burst events, and consumption ratio comparisons against historical baseline all run as streaming evaluations — no data export to an external analytics platform required.",
        },
        {
          title: "Act",
          desc: "Triggered rules publish alerts to configurable sinks: SCADA webhooks, field-team ticketing systems, SMS gateways, and email. Alert payloads include device ID, GPS coordinates, anomaly type, severity score, and a direct link to the relevant dashboard — giving field crews everything needed to prioritize dispatch without a second lookup.",
        },
      ],
    },
    faq: [
      {
        question: "What connectivity options are supported for field meters?",
        answer:
          "Magistrala's ingestion layer accepts MQTT over NB-IoT, LoRaWAN (via ChirpStack or TTN integration), GPRS/LTE cellular, and wired Ethernet. Devices authenticate with pre-shared keys or X.509 certificates. Gateways can aggregate readings from local AMI meshes and forward over any available backhaul without requiring changes to meter firmware.",
      },
      {
        question: "Can Magistrala integrate with our existing SCADA system?",
        answer:
          "Yes. Magistrala exposes a webhook-based alert sink and a REST API for time-series data retrieval. Most SCADA platforms consume webhook POST calls or poll the Magistrala API directly. For OPC-UA-based SCADA systems, an adapter exposes Magistrala channels as OPC-UA nodes — keeping existing operator interfaces unchanged.",
      },
      {
        question: "How is access to meter data controlled across teams?",
        answer:
          "Magistrala implements fine-grained RBAC via SpiceDB, scoped to domains, groups, and individual channels. A field technician can be granted read-only access to their assigned DMA while a billing analyst has export access to consumption data but no alarm management permissions. All access changes are logged with full audit trails.",
      },
      {
        question:
          "What infrastructure is needed to deploy Magistrala for water metering?",
        answer:
          "A single-node Docker Compose deployment handles approximately 10,000 connected meters at 15-minute reporting intervals. For larger networks, Kubernetes deployment with horizontal scaling of the ingestion and rules engine services handles millions of messages per hour. Magistrala is also available as a managed cloud service, eliminating infrastructure management entirely.",
      },
    ],
  },
  {
    title: "Smart City Solutions",
    slug: "smart-city",
    icon: Building2,
    summary:
      "Build intelligent urban infrastructure with connected sensors and devices. Optimize traffic, energy, waste management, and public services.",
    description:
      "Modern cities manage tens of thousands of devices across domains that were designed to operate in complete isolation — traffic signals running on proprietary controllers, streetlights on legacy DALI networks, waste bins with no connectivity at all. When these systems can't share data, city operations become reactive: trucks run fixed routes regardless of bin fill levels, lights stay on a fixed schedule regardless of pedestrian activity, and traffic engineers wait for congestion to form before adjusting signal timing.\n\nMagistrala provides the IoT platform layer that unifies these fragmented systems without requiring hardware replacement. Multi-protocol ingestion connects devices over LoRaWAN, NB-IoT, Wi-Fi, and wired Ethernet through a single message broker. Domain isolation with fine-grained RBAC ensures that the traffic department's data is separated from waste management while still enabling cross-domain automation rules. Edge computing nodes process sensor data locally for sub-second actuator response — traffic signal adjustments happen at the edge, not after a round-trip to a central cloud. The result is an adaptive city infrastructure that responds to real conditions in real time, reduces operational costs, and generates the auditable data cities need for regulatory reporting and grant compliance.",
    benefits: [
      "Reduce traffic congestion by up to 25% with adaptive signal timing driven by real-time vehicle detection data",
      "Cut street lighting energy costs by 30–50% through motion and ambient light-triggered dimming schedules",
      "Optimize waste collection routes dynamically — eliminating unnecessary truck runs to bins that are less than 70% full",
      "Unify siloed city systems under a single device management and access control plane with full audit logging",
    ],
    challenges: {
      title: "The Challenge",
      subtitle:
        "Cities manage thousands of disconnected systems — from streetlights to waste bins — with no unified data layer, no interoperability, and no way to automate responses across domain boundaries.",
      items: [
        {
          icon: TrafficCone,
          title: "Fragmented Infrastructure",
          desc: "Siloed systems built over decades have no interoperability between traffic, lighting, waste, and public safety platforms. Each domain runs its own control software, its own vendor contracts, and its own data format. Integrating them requires custom middleware for every pairing — a maintenance burden that scales with the number of systems, not the number of integrations.",
        },
        {
          icon: Wind,
          title: "Operational Inefficiency",
          desc: "Fixed schedules waste resources regardless of actual conditions. Waste trucks run full routes even when bins are 20% full. Street lights burn at full intensity at 3 AM. Traffic signals cycle on timers set years ago for traffic patterns that have since shifted. The absence of real-time data makes intelligent automation impossible.",
        },
        {
          icon: DollarSign,
          title: "Rising Costs and Citizen Expectations",
          desc: "Growing urban populations strain municipal budgets while citizens expect higher service levels and visible sustainability commitments. Carbon reporting, energy auditing, and service-level agreements with concession operators all require granular, timestamped data that legacy systems simply cannot produce at the required frequency or fidelity.",
        },
      ],
    },
    dashboard: {
      title: "City Operations Dashboard",
      subtitle:
        "Unified visibility into every connected asset — from streetlights to waste bins — in a single command center.",
      image: "/screenshots/smart-city.png",
      alt: "Magistrala smart city operations dashboard",
    },
    applications: {
      title: "Key Applications",
      subtitle:
        "Transform every aspect of urban infrastructure with connected IoT solutions built on a single platform.",
      items: [
        {
          icon: Lightbulb,
          title: "Adaptive Street Lighting",
          desc: "Luminaires report energy consumption and fault status over LoRaWAN while dimming schedules respond to ambient light sensors and pedestrian motion detectors. Fault detection alerts maintenance teams with pole ID and GPS location — replacing patrol-based inspection with event-driven dispatch.",
        },
        {
          icon: Trash2,
          title: "Smart Waste Management",
          desc: "Ultrasonic fill-level sensors in bins publish readings every 4–6 hours. A route optimization rule triggers a collection request only when a bin exceeds a configurable threshold. Dynamic routing reduces fleet kilometres driven by 20–35% while maintaining service levels defined in city contracts.",
        },
        {
          icon: Shield,
          title: "Public Safety Integration",
          desc: "Environmental sensors, camera health monitors, and emergency call-point status feed into a unified alert plane. Cross-domain rules trigger coordinated responses — a public address alert correlated with camera activity and lighting changes — without manual coordination between control rooms.",
        },
        {
          icon: Zap,
          title: "Energy Grid Monitoring",
          desc: "Smart grid integration connects substation sensors and distributed energy resources (solar panels, EV charging points) to a centralized load dashboard. Real-time consumption data supports demand-response programmes and feeds directly into carbon accounting and ESG reporting workflows.",
        },
      ],
    },
    howItWorks: {
      subtitle:
        "Magistrala unifies diverse urban sensors into a single IoT platform — enabling city-wide automation, cross-domain data sharing, and data-driven decision making without replacing existing hardware.",
      steps: [
        {
          title: "Connect",
          desc: "Streetlights, waste bins, traffic sensors, and environmental monitors connect over LoRaWAN, NB-IoT, Wi-Fi, or wired Ethernet. Magistrala's multi-protocol adapter layer handles authentication and normalization at the point of ingestion, so new device types can be onboarded without changes to downstream systems.",
        },
        {
          title: "Aggregate",
          desc: "Multi-protocol ingestion normalizes data from thousands of heterogeneous devices into a unified message schema. Devices are organized into domain-isolated groups reflecting city department structure — traffic, utilities, waste, public safety — with RBAC policies controlling which departments can read or write to which channels.",
        },
        {
          title: "Automate",
          desc: "Smart rules evaluate cross-domain data and trigger actuator commands: dimming lights based on pedestrian count, rerouting waste trucks when fill levels change, adjusting traffic signal phases based on queue length data from upstream detectors. Rules run at the edge for time-critical actuations and in the cloud for complex multi-source logic.",
        },
        {
          title: "Visualize",
          desc: "City operators monitor real-time dashboards and historical trend data to identify inefficiencies, validate SLAs, and plan capital investment. Automated reports export data to council reporting systems, grant compliance portals, and ESG dashboards — eliminating manual data collection from department heads.",
        },
      ],
    },
    faq: [
      {
        question:
          "Can Magistrala integrate with our existing city management software?",
        answer:
          "Yes. Magistrala exposes REST and WebSocket APIs that integrate with GIS platforms, ERP systems, and city dashboards such as Esri ArcGIS, SAP, and custom operator interfaces. Webhook sinks push events directly to existing ticketing and dispatch systems without requiring replacement of front-end tools.",
      },
      {
        question: "How do you handle multi-tenancy across city departments?",
        answer:
          "Magistrala uses domain-level isolation backed by SpiceDB policies. Each department (traffic, utilities, waste) operates in its own domain with its own device groups, channels, and user roles. Cross-domain data sharing is configured explicitly through policy grants — departments see only what they're authorized to see.",
      },
      {
        question:
          "What happens if connectivity to the central platform is lost?",
        answer:
          "Edge gateway nodes continue local operation and buffer messages using store-and-forward during connectivity interruptions. Time-critical actuations (traffic signals, emergency lighting) execute from edge-cached rules without requiring a cloud round-trip. Buffered telemetry is replayed to the platform on reconnection in timestamp-correct order.",
      },
      {
        question: "Is Magistrala suitable for a phased city deployment?",
        answer:
          "Magistrala is designed for incremental adoption. A pilot deployment connecting a single district's streetlights and waste bins runs on a single-node instance. As additional domains onboard, the platform scales horizontally on Kubernetes. Domains, device groups, and access policies added during the pilot remain valid in the production-scale deployment.",
      },
    ],
  },
  {
    title: "Industrial Gateway Integration",
    slug: "industrial-gateway",
    icon: Factory,
    summary:
      "Connect legacy industrial equipment to the cloud — enabling predictive maintenance, remote monitoring, and operational efficiency.",
    description:
      "Manufacturing facilities and process plants have accumulated decades of automation investment: PLCs from the 1990s running Modbus RTU over RS-485, SCADA systems polling OPC-DA servers, proprietary fieldbus devices that predate TCP/IP entirely. These systems work reliably in isolation but are architecturally cut off from modern cloud infrastructure — creating a fundamental barrier to remote monitoring, data-driven maintenance, and operational analytics.\n\nMagistrala solves the industrial connectivity problem through protocol-translating edge gateways that sit between legacy fieldbus networks and the cloud, with no changes required to existing control systems. Gateway devices run Magistrala's edge agent, which polls Modbus registers or subscribes to OPC-UA nodes at configurable rates, converts readings into MQTT messages, applies local filtering and aggregation, then forwards normalized telemetry to the Magistrala platform over TLS. At the platform layer, device management handles certificate rotation, firmware update orchestration, and connection health monitoring across hundreds of gateways simultaneously. The rules engine runs ML-derived failure signatures as streaming evaluations — detecting vibration frequency shifts, thermal drift, and power factor degradation patterns that precede equipment failure by days or weeks. Maintenance workflows trigger automatically before failures occur, converting unplanned downtime into scheduled interventions.",
    benefits: [
      "Eliminate OT/IT data silos by translating Modbus, OPC-UA, BACnet, and Profinet into cloud-native MQTT without touching control system logic",
      "Reduce unplanned downtime by 40–60% through ML-driven predictive maintenance detecting failure signatures weeks in advance",
      "Cut edge-to-cloud bandwidth by 70–90% using local aggregation and threshold-triggered transmission on gateway nodes",
      "Enforce end-to-end security with TLS/mTLS on all connections, X.509 device certificates, and per-facility RBAC policies",
    ],
    challenges: {
      title: "The Challenge",
      subtitle:
        "Factories run on legacy equipment that speaks protocols the cloud has never heard of. Without a translation layer, operational data stays locked in fieldbus networks — making predictive maintenance, remote monitoring, and production analytics impossible.",
      items: [
        {
          icon: Lock,
          title: "Protocol Silos",
          desc: "Industrial equipment communicates over Modbus RTU/TCP, OPC-UA, Profinet, BACnet, and DNP3 — none of which integrate natively with cloud IoT platforms. Building one-off adapters per vendor is expensive, fragile, and impossible to maintain at scale across a multi-site estate with hundreds of different device models.",
        },
        {
          icon: Clock,
          title: "Reactive Maintenance",
          desc: "Without continuous monitoring, equipment failures are discovered only after production stops. The average unplanned downtime event in process manufacturing costs $260,000 per hour in lost output, labor, and restart costs. Maintenance teams operate on fixed calendar schedules or respond to breakdowns — neither approach uses the performance data the equipment is already generating.",
        },
        {
          icon: Server,
          title: "No Edge Intelligence",
          desc: "Sending raw PLC data to the cloud creates millisecond-level latency for time-critical decisions, bandwidth costs that scale linearly with polling frequency, and a single point of failure for any local automation that depends on cloud responses. Production systems cannot tolerate the latency or reliability constraints of pure cloud architectures.",
        },
      ],
    },
    dashboard: {
      title: "Industrial Monitoring Dashboard",
      subtitle:
        "Centralized monitoring of connected gateways, equipment health, and production metrics across all facilities.",
      image: "/screenshots/industrial-gateway.png",
      alt: "Magistrala industrial gateway monitoring dashboard",
    },
    applications: {
      title: "Key Applications",
      subtitle:
        "Bridge the gap between legacy industrial equipment and modern cloud infrastructure without disrupting existing control systems.",
      items: [
        {
          icon: Cog,
          title: "Protocol Translation",
          desc: "Edge gateways poll Modbus registers, subscribe to OPC-UA nodes, and read BACnet objects at configurable rates — then publish normalized MQTT messages to Magistrala. Translation mappings are configured per device type and deployed remotely via the platform's device management API, with no gateway reboot required.",
        },
        {
          icon: Wrench,
          title: "Predictive Maintenance",
          desc: "Vibration FFT signatures, thermal imaging data, motor current draw, and operating hour counters feed ML models that detect degradation patterns — bearing wear, rotor imbalance, insulation breakdown — days or weeks before failure thresholds are reached. Maintenance work orders generate automatically in CMMS systems when risk scores exceed defined limits.",
        },
        {
          icon: Server,
          title: "Edge Computing",
          desc: "Local compute on gateway hardware runs aggregation, filtering, and time-windowed analytics before transmission. High-frequency sensor data (vibration at 10 kHz) is processed locally into spectral features; only the derived metrics — not raw samples — are forwarded to the cloud. This reduces bandwidth by 70–90% while preserving analytical fidelity.",
        },
        {
          icon: Lock,
          title: "Secure Connectivity",
          desc: "Every gateway authenticates to Magistrala with a device-specific X.509 certificate issued through the platform's PKI. All data in transit uses TLS 1.3. RBAC policies restrict which cloud users and applications can access which facility's data. Certificate expiry, revocation, and renewal are managed centrally from the device management console.",
        },
      ],
    },
    howItWorks: {
      subtitle:
        "Magistrala bridges legacy industrial protocols to the cloud using a gateway-first architecture — keeping existing control systems untouched while enabling real-time analytics and predictive maintenance across every connected asset.",
      steps: [
        {
          title: "Translate",
          desc: "Edge gateway devices running Magistrala's agent connect to fieldbus networks via Modbus RTU/TCP, OPC-UA, BACnet IP, or Profinet. Polling schedules, register maps, and unit conversions are configured per device class and pushed remotely from the platform. Translated readings are published as MQTT messages tagged with asset ID, facility, and timestamp.",
        },
        {
          title: "Process at the Edge",
          desc: "Local compute on the gateway applies configurable pre-processing: time-window averaging for slow-changing process variables, FFT computation for vibration signatures, threshold evaluation for immediate local alarms. Only events and derived metrics that exceed relevance criteria are forwarded to the cloud — raw high-frequency samples are processed and discarded locally.",
        },
        {
          title: "Monitor",
          desc: "Normalized telemetry streams into Magistrala's time-series storage and feeds real-time dashboards showing equipment health scores, production counters, energy consumption, and environmental conditions across all facilities simultaneously. Custom views per role ensure that a plant engineer sees asset-level detail while a VP of Operations sees site-level KPIs.",
        },
        {
          title: "Predict",
          desc: "ML models trained on historical failure data evaluate incoming telemetry as streaming feature vectors. When a model's risk score for a specific asset exceeds a configured threshold, the rules engine fires a maintenance work order to the CMMS, notifies the responsible engineer, and logs the prediction with supporting evidence for post-maintenance review.",
        },
      ],
    },
    faq: [
      {
        question:
          "Does installing Magistrala gateways require changes to existing PLC or SCADA configuration?",
        answer:
          "No. Magistrala's edge agent connects to Modbus and OPC-UA interfaces that PLCs and SCADA systems already expose for HMI and historian connectivity. The gateway reads as a passive client — no ladder logic changes, no new function blocks, no SCADA alarm configuration changes. Existing control systems are unaware of the gateway's presence.",
      },
      {
        question:
          "How is OT network security maintained when gateways connect to the cloud?",
        answer:
          "Gateways initiate outbound TLS connections to Magistrala over a dedicated DMZ or cellular backhaul — no inbound firewall rules are required on the OT network. Communication is strictly unidirectional by default (telemetry upload only). Bidirectional command channels for remote configuration require explicit policy enablement and are scoped to specific gateway management topics.",
      },
      {
        question:
          "Can Magistrala handle equipment from multiple vendors across multiple sites?",
        answer:
          "Yes. Each facility is modelled as a separate Magistrala domain with its own device groups and access policies. Gateway configuration is managed per device class — a Siemens S7 PLC and an Allen-Bradley ControlLogix at the same site use different translation mappings but route to the same platform. Multi-site dashboards aggregate across domains with role-appropriate data visibility.",
      },
      {
        question:
          "What ML frameworks are supported for predictive maintenance models?",
        answer:
          "Magistrala's rules engine evaluates models deployed as ONNX binaries or as rule expressions using built-in statistical functions (rolling averages, standard deviation, FFT peak detection). For more complex models, the platform forwards feature vectors to external ML inference endpoints via HTTP, then uses the response score in downstream rule evaluation.",
      },
    ],
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}
