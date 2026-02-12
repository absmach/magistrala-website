import {
  Droplets,
  Building2,
  Factory,
  Eye,
  Clock,
  DollarSign,
  Gauge,
  Search,
  BarChart3,
  Bell,
  Lightbulb,
  Trash2,
  Shield,
  Zap,
  Cog,
  Wrench,
  Server,
  Lock,
  TrafficCone,
  Wind,
  type LucideIcon,
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
}

export const useCases: UseCase[] = [
  {
    title: "Smart Water Metering",
    slug: "smart-water-metering",
    icon: Droplets,
    summary:
      "Real-time visibility into water networks — enabling faster leak detection, fraud prevention and reduced non-revenue water.",
    description:
      "Magistrala ingests continuous telemetry from water meters and pressure sensors, applies real-time analytics, and triggers automated alerts so teams can act faster. Connect meters and sensors via MQTT gateways over NB-IoT, LoRaWAN, or cellular. Real-time analytics detect anomalies, leaks, and unusual consumption patterns. Automated alerts trigger workflows to field teams, SCADA, and notification systems.",
    benefits: [
      "Real-time anomaly detection and leak localization",
      "Automated alerting and incident workflows",
      "Integration with SCADA, ticketing and notification systems",
      "Scalable, protocol-agnostic ingestion (MQTT, CoAP, HTTP)",
    ],
    challenges: {
      title: "The Challenge",
      subtitle:
        "Water utilities face growing pressure to reduce losses and operate efficiently. Legacy metering results in delayed detection and significant revenue loss.",
      items: [
        {
          icon: Eye,
          title: "Limited Visibility",
          desc: "No continuous visibility into consumption and pressure across the network.",
        },
        {
          icon: Clock,
          title: "Slow Response",
          desc: "Issues found only after customer complaints or billing discrepancies.",
        },
        {
          icon: DollarSign,
          title: "Revenue Impact",
          desc: "Significant water and revenue losses due to undetected leaks and tampering.",
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
          desc: "Real-time tracking of water consumption patterns across all connected meters.",
        },
        {
          icon: Search,
          title: "Leak Detection",
          desc: "Automated anomaly detection to identify and localize leaks before they escalate.",
        },
        {
          icon: BarChart3,
          title: "Demand Forecasting",
          desc: "Predictive analytics for water demand planning and resource allocation.",
        },
        {
          icon: Bell,
          title: "Alert Management",
          desc: "Configurable alarms for pressure drops, tampering, and unusual usage patterns.",
        },
      ],
    },
    howItWorks: {
      subtitle:
        "Magistrala connects your water infrastructure end-to-end — from field sensors to operations teams — with a fully automated data pipeline.",
      steps: [
        {
          title: "Ingest",
          desc: "Water meters and pressure sensors publish telemetry via MQTT gateways over NB-IoT, LoRaWAN, or cellular networks.",
        },
        {
          title: "Normalize",
          desc: "Protocol adapters translate device payloads into a unified format, regardless of manufacturer or connectivity.",
        },
        {
          title: "Analyze",
          desc: "The rules engine applies anomaly detection algorithms to identify leaks, unusual consumption, and pressure drops in real time.",
        },
        {
          title: "Act",
          desc: "Automated alerts trigger workflows to SCADA systems, field team ticketing, SMS notifications, and dashboards.",
        },
      ],
    },
  },
  {
    title: "Smart City Solutions",
    slug: "smart-city",
    icon: Building2,
    summary:
      "Build intelligent urban infrastructure with connected sensors and devices. Optimize traffic, energy, waste management, and public services.",
    description:
      "Modern cities face unprecedented challenges: traffic congestion, energy inefficiency, waste management issues, and the need for enhanced public safety. Magistrala enables adaptive traffic signals, smart parking, intelligent street lighting, optimized waste collection, integrated surveillance, and smart grid integration. Data-driven results improve city operations and citizen quality of life through real-time monitoring and automation.",
    benefits: [
      "Adaptive traffic management reducing congestion by up to 25%",
      "Smart parking and street lighting with 30-50% cost savings",
      "Optimized waste collection routes based on real-time data",
      "Integrated public safety and emergency response systems",
    ],
    challenges: {
      title: "The Challenge",
      subtitle:
        "Cities manage thousands of disconnected systems — from streetlights to waste bins — with no unified view or automation.",
      items: [
        {
          icon: TrafficCone,
          title: "Fragmented Infrastructure",
          desc: "Siloed systems with no interoperability between traffic, lighting, waste, and safety platforms.",
        },
        {
          icon: Wind,
          title: "Operational Inefficiency",
          desc: "Manual processes and fixed schedules waste resources and delay response to changing conditions.",
        },
        {
          icon: DollarSign,
          title: "Rising Costs",
          desc: "Growing urban populations strain budgets while citizens expect better services and sustainability.",
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
        "Transform every aspect of urban infrastructure with connected IoT solutions.",
      items: [
        {
          icon: Lightbulb,
          title: "Street Lighting",
          desc: "Intelligent lighting that adapts to weather conditions and foot traffic.",
        },
        {
          icon: Trash2,
          title: "Waste Management",
          desc: "Optimized collection routes based on real-time bin fill levels.",
        },
        {
          icon: Shield,
          title: "Public Safety",
          desc: "Integrated surveillance and emergency response coordination systems.",
        },
        {
          icon: Zap,
          title: "Energy Grid",
          desc: "Smart grid integration for efficient energy distribution and monitoring.",
        },
      ],
    },
    howItWorks: {
      subtitle:
        "Magistrala unifies diverse urban sensors into a single platform — enabling city-wide automation and data-driven decision making.",
      steps: [
        {
          title: "Connect",
          desc: "Streetlights, waste bins, traffic sensors, and environmental monitors connect over LoRaWAN, NB-IoT, or Wi-Fi.",
        },
        {
          title: "Aggregate",
          desc: "Multi-protocol ingestion normalizes data from thousands of heterogeneous devices into a unified data model.",
        },
        {
          title: "Automate",
          desc: "Smart rules trigger actions — dimming lights based on traffic, rerouting waste trucks, or escalating safety alerts.",
        },
        {
          title: "Visualize",
          desc: "City operators monitor real-time dashboards and historical trends to optimize services and reduce costs.",
        },
      ],
    },
  },
  {
    title: "Industrial Gateway Integration",
    slug: "industrial-gateway",
    icon: Factory,
    summary:
      "Connect legacy industrial equipment to the cloud — enabling predictive maintenance, remote monitoring, and operational efficiency.",
    description:
      "Manufacturing facilities rely on legacy equipment using proprietary protocols like Modbus, OPC-UA, and BACnet. Magistrala seamlessly connects these systems to the cloud with protocol translation, edge computing, and centralized management. Process data locally for real-time decision making, detect equipment failures before they happen using ML models at the edge, and minimize unplanned outages through proactive maintenance.",
    benefits: [
      "Protocol translation for Modbus, OPC-UA, Profinet, BACnet",
      "Edge computing for real-time decision making and reduced latency",
      "Predictive maintenance with ML models at the edge",
      "Secure connectivity with TLS/mTLS encryption and RBAC",
    ],
    challenges: {
      title: "The Challenge",
      subtitle:
        "Factories run on legacy equipment with proprietary protocols that can't talk to modern cloud systems — creating blind spots and reactive maintenance cycles.",
      items: [
        {
          icon: Lock,
          title: "Protocol Silos",
          desc: "Equipment speaks Modbus, OPC-UA, BACnet — none of which integrate natively with cloud platforms.",
        },
        {
          icon: Clock,
          title: "Reactive Maintenance",
          desc: "Without real-time monitoring, failures are discovered only after costly unplanned downtime.",
        },
        {
          icon: Server,
          title: "No Edge Intelligence",
          desc: "All data sent to the cloud creates latency, bandwidth costs, and single points of failure.",
        },
      ],
    },
    dashboard: {
      title: "Industrial Monitoring Dashboard",
      subtitle:
        "Centralized monitoring of connected gateways, equipment health, and production metrics.",
      image: "/screenshots/industrial-gateway.png",
      alt: "Magistrala industrial gateway monitoring dashboard",
    },
    applications: {
      title: "Key Applications",
      subtitle:
        "Bridge the gap between legacy equipment and modern cloud infrastructure.",
      items: [
        {
          icon: Cog,
          title: "Protocol Translation",
          desc: "Seamless conversion between Modbus, OPC-UA, BACnet, and cloud-native protocols.",
        },
        {
          icon: Wrench,
          title: "Predictive Maintenance",
          desc: "ML-driven failure prediction to minimize unplanned downtime.",
        },
        {
          icon: Server,
          title: "Edge Processing",
          desc: "Local data processing for real-time decision making with reduced latency.",
        },
        {
          icon: Lock,
          title: "Secure Connectivity",
          desc: "End-to-end encryption with TLS/mTLS and role-based access control.",
        },
      ],
    },
    howItWorks: {
      subtitle:
        "Magistrala bridges legacy industrial protocols to the cloud — enabling predictive maintenance and real-time operational intelligence.",
      steps: [
        {
          title: "Translate",
          desc: "Edge gateways convert Modbus, OPC-UA, BACnet, and Profinet data into cloud-native MQTT or HTTP messages.",
        },
        {
          title: "Process at the Edge",
          desc: "Local compute filters, aggregates, and applies ML models before sending data to the cloud — reducing latency and bandwidth.",
        },
        {
          title: "Monitor",
          desc: "Centralized dashboards track equipment health, production metrics, and environmental conditions across all facilities.",
        },
        {
          title: "Predict",
          desc: "ML-driven analytics detect early signs of equipment degradation, triggering maintenance workflows before failures occur.",
        },
      ],
    },
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((uc) => uc.slug === slug);
}
