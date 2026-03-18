export const protocols = [
  {
    id: "mqtt",
    label: "MQTT",
    color: "#22c55e",
    parts: [
      { text: "mosquitto_pub", cls: "term-cmd" },
      { text: " -I ", cls: "term-flag" },
      { text: '"WM Lyon Apt 01"', cls: "term-str" },
      { text: " -u ", cls: "term-flag" },
      { text: "a679ab56-...aaf", cls: "term-val" },
      { text: " \\\n  -P ", cls: "term-flag" },
      { text: "<client_secret>", cls: "term-val" },
      { text: " \\\n  -t ", cls: "term-flag" },
      { text: "m/<channel>/c/<client>", cls: "term-val" },
      { text: " \\\n  -h ", cls: "term-flag" },
      { text: "messaging.magistrala.absmach.eu", cls: "term-str" },
      { text: " \\\n  -m ", cls: "term-flag" },
      { text: '\'[{"n":"pressure","v":123}]\'', cls: "term-json" },
      { text: " \\\n  -p ", cls: "term-flag" },
      { text: "8883", cls: "term-num" },
      { text: " -d", cls: "term-flag" },
      { text: " --cafile ", cls: "term-flag" },
      { text: "/etc/ssl/certs/ca-certificates.crt", cls: "term-val" },
    ],
  },
  {
    id: "coap",
    label: "CoAP",
    color: "#3b82f6",
    parts: [
      { text: "coap-cli", cls: "term-cmd" },
      { text: " post ", cls: "term-flag" },
      { text: "m/<channel>/c/<client>", cls: "term-val" },
      { text: " \\\n  -a ", cls: "term-flag" },
      { text: "<client_secret>", cls: "term-val" },
      { text: " \\\n  -d ", cls: "term-flag" },
      { text: '\'[{"n":"pressure","v":123}]\'', cls: "term-json" },
      { text: " \\\n  -H ", cls: "term-flag" },
      { text: "messaging.magistrala.absmach.eu", cls: "term-str" },
      { text: " \\\n  -p ", cls: "term-flag" },
      { text: "5684", cls: "term-num" },
      { text: " -s", cls: "term-flag" },
      { text: " -A ", cls: "term-flag" },
      { text: "/etc/ssl/certs/ca-certificates.crt", cls: "term-val" },
    ],
  },
  {
    id: "ws",
    label: "WebSocket",
    color: "#a855f7",
    parts: [
      { text: "wscat", cls: "term-cmd" },
      { text: " -c ", cls: "term-flag" },
      {
        text: '"wss://messaging.magistrala.absmach.eu\n  /api/ws/m/<channel>/c/<client>\n  /?authorization=<client_secret>"',
        cls: "term-str",
      },
      { text: " \\\n  -x ", cls: "term-flag" },
      { text: '\'[{"n":"pressure","v":123}]\'', cls: "term-json" },
      { text: " \\\n  --ca ", cls: "term-flag" },
      { text: "/etc/ssl/certs/ca-certificates.crt", cls: "term-val" },
    ],
  },
  {
    id: "http",
    label: "HTTP",
    color: "#f59e0b",
    parts: [
      { text: "curl", cls: "term-cmd" },
      { text: " -s -S -i", cls: "term-flag" },
      { text: " \\\n  --cacert ", cls: "term-flag" },
      { text: "/etc/ssl/certs/ca-certificates.crt", cls: "term-val" },
      { text: " \\\n  -X ", cls: "term-flag" },
      { text: "POST", cls: "term-method" },
      { text: " \\\n  -H ", cls: "term-flag" },
      { text: '"Content-Type: application/senml+json"', cls: "term-str" },
      { text: " \\\n  -H ", cls: "term-flag" },
      { text: '"Authorization: Client <client_secret>"', cls: "term-str" },
      {
        text: " \\\n  https://messaging.magistrala.absmach.eu\n  /api/http/m/<channel>/c/<client>/",
        cls: "term-str",
      },
      { text: " \\\n  -d ", cls: "term-flag" },
      { text: '\'[{"n":"pressure","v":123}]\'', cls: "term-json" },
    ],
  },
];

export const syntaxColors: Record<string, string> = {
  "term-cmd": "#7dd3fc",
  "term-flag": "#94a3b8",
  "term-str": "#86efac",
  "term-val": "#fbbf24",
  "term-json": "#67e8f9",
  "term-num": "#c084fc",
  "term-method": "#f87171",
};

const CLOUD_URL =
  "https://cloud.magistrala.absmach.eu/register?utm_source=magistrala.absmach.eu&utm_medium=website&utm_campaign=features";

export const features = [
  {
    title: "Multi-Protocol Messaging",
    description:
      "Connect IoT devices over MQTT, CoAP, HTTP, and WebSocket from a single ingestion layer. Protocol adapters normalize messages from heterogeneous devices into a unified internal format — no firmware changes or device-side code modifications required. MQTT connections support TLS and mTLS with certificate-based authentication. CoAP handles constrained devices on low-bandwidth NB-IoT and LoRaWAN networks. WebSocket enables full-duplex communication for real-time monitoring applications. HTTP supports REST-style integration with existing backend systems. All protocols share the same channel-based routing model: a message published over MQTT is immediately readable by HTTP subscribers on the same channel. This makes Magistrala protocol-agnostic by design, supporting mixed device fleets without protocol-specific middleware or separate broker deployments.",
    icon: "protocols",
    visual: "terminal" as const,
    cta: { href: "/docs", label: "Read the docs", external: false },
  },
  {
    title: "Visual Dashboards",
    description:
      "Build real-time and historical dashboards with a drag-and-drop widget editor — no coding required. The built-in visualization layer connects directly to device telemetry streams, rendering live data with sub-second refresh rates. Choose from time-series line charts, bar graphs, gauges, heatmaps, and alarm summary panels. Historical views query the time-series storage backend to surface trends, anomalies, and period-over-period comparisons. Dashboard access follows the platform RBAC model — operators see only the devices and channels their role permits. Export dashboard data in CSV or JSON for downstream reporting pipelines. Dashboards embed into external applications via iframe with authentication token scoping, making them suitable for white-labelled customer portals and field technician mobile views.",
    icon: "dashboard",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/dashboard-2.png", alt: "Dashboard overview" },
      { src: "/screenshots/dashboard-1.png", alt: "Dashboard widgets" },
    ],
    cta: { href: CLOUD_URL, label: "Try on Cloud", external: true },
  },
  {
    title: "Rules Engine",
    description:
      "Process incoming device messages in real time with a visual rules engine that requires no code. Rules evaluate telemetry against configurable thresholds, statistical functions, and cross-device conditions — then trigger actions including alarm generation, webhook notifications, email and SMS alerts, and data routing to external storage backends. Complex multi-step workflows chain rules together: an initial threshold breach generates an alarm; if unacknowledged within a configured time window, a second rule escalates to a different notification channel or on-call system. Rules are defined through a drag-and-drop flow editor or programmatically via the REST API, enabling GitOps-style configuration management in CI/CD pipelines. All rule executions and triggered actions are logged with timestamps and device context for audit and compliance.",
    icon: "rules",
    visual: "screenshots" as const,
    images: [
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Rules engine configuration",
      },
      {
        src: "/screenshots/rules-engine-2.png",
        alt: "Rules engine flow",
        height: 400,
        width: 250,
      },
    ],
    cta: {
      href: "/docs/user-guide/rules-engine",
      label: "Read the docs",
      external: false,
    },
  },
  {
    title: "Alarm Management",
    description:
      "Generate, track, and resolve alarms across your entire device fleet with a structured alarm lifecycle. Alarms are produced by the rules engine when telemetry breaches defined thresholds, with severity levels — critical, major, minor, warning, info — assigned per rule. Each alarm moves through active, acknowledged, and resolved states, with timestamps and operator attribution at every transition, creating a full audit trail for compliance reporting. Alarm views filter by device, severity, time range, and acknowledgment status. Notifications fire through configurable sinks including email, SMS, and webhook on alarm creation and state change. Fleet-level alarm dashboards aggregate across all domains and devices, giving operations teams a single pane of glass for incident management and SLA tracking.",
    icon: "alarms",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/alarms-2.png", alt: "Alarm Rule" },
      {
        src: "/screenshots/alarms-1.png",
        alt: "Alarm history",
        height: 400,
        width: 250,
      },
    ],
    cta: {
      href: "/docs/user-guide/alarms",
      label: "Read the docs",
      external: false,
    },
  },
  {
    title: "Multitenancy",
    description:
      "Isolate tenants, teams, customers, or deployment environments using domain-level separation with no shared state between domains. Each Magistrala domain has its own users, device registries, channels, groups, and authorization policies — managed independently while sharing the same platform infrastructure. Domain administrators control membership, access policies, and resource quotas without platform-level privileges, enabling SaaS operators to provide self-service environments to end customers. Cross-domain data sharing is configured through explicit policy grants rather than implicit inheritance, preventing accidental data leakage between tenants. The unified control plane gives platform operators a global view across all domains for billing, monitoring, and compliance — without exposing individual tenant data. Multi-domain deployments scale horizontally with per-domain traffic isolation at the message broker layer.",
    icon: "tenancy",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/domains-1.png", alt: "Domain overview" },
      {
        src: "/screenshots/domains-2.png",
        alt: "Domains selection",
      },
    ],
    cta: { href: CLOUD_URL, label: "Try on Cloud", external: true },
  },
  {
    title: "Role-Based Access Control",
    description:
      "Enforce fine-grained access control at every level of the platform hierarchy: user, group, domain, client, and channel. Magistrala's authorization model follows the Google Zanzibar relationship-based access control pattern, implemented through integration with SpiceDB — a distributed, consistent authorization database built for high-throughput permission evaluation at scale. Permissions are evaluated at runtime for every API call, message publication, and subscription request — no stale allow-lists. Roles are composable: a device technician can read telemetry from assigned channels but cannot modify device configurations or access billing data. Policy changes take effect immediately without service restarts or cache invalidation delays. All authorization decisions and policy modifications are logged with actor identity, timestamp, and context for security audits and compliance reporting.",
    icon: "security",
    visual: "rbac" as const,
    cta: {
      href: "/docs/dev-guide/dev-tools/authorization",
      label: "Read the docs",
      external: false,
    },
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate scheduled or on-demand analytical reports from device telemetry, alarm history, and platform event logs. Reports are configured with time ranges, device or group filters, aggregation functions — sum, average, min, max, count — and output formats including CSV, JSON, and PDF. Scheduled reports run on configurable cron expressions and are delivered by email or stored for downstream consumption. The reporting layer queries Magistrala's time-series storage backend directly, supporting high-cardinality datasets across millions of data points without separate ETL pipelines or data warehousing infrastructure. Integration with BI tools including Grafana, Tableau, and Power BI is supported through the REST API and standard data connectors. Report access follows domain-scoped RBAC policies, ensuring tenants see only their own data.",
    icon: "reports",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/reports-2.png", alt: "Report details" },
      { src: "/screenshots/reports-1.png", alt: "Reports overview" },
    ],
    cta: { href: CLOUD_URL, label: "Try on Cloud", external: true },
  },
  {
    title: "Personal Access Tokens",
    description:
      "Issue scoped, time-limited API tokens for CI/CD pipelines, service accounts, third-party integrations, and developer access — without sharing user credentials. Each Personal Access Token carries an explicit permission scope and expiry date, ensuring tokens hold only the minimum privileges required for their purpose. Tokens are created through the dashboard or REST API and are immediately usable for authenticating programmatic access to platform resources. Revocation takes effect immediately across all services with no cache delay. The token audit log records every issuance, last-use timestamp, and revocation event, providing the access history needed for SOC 2 and ISO 27001 compliance workflows. Token usage is tracked per-token in the dashboard, making it straightforward to identify stale or over-privileged credentials before they become a security risk.",
    icon: "tokens",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/pat-1.png", alt: "PAT management" },
      { src: "/screenshots/pat-2.png", alt: "PAT creation" },
    ],
    cta: {
      href: "/docs/user-guide/pats",
      label: "Read the docs",
      external: false,
    },
  },
];
