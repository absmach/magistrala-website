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

export const features = [
  {
    title: "Multi-Protocol Messaging",
    description:
      "Connect devices over MQTT, CoAP, HTTP, and WebSocket. Protocol adapters handle translation so your devices speak whatever language they need to.",
    icon: "protocols",
    visual: "terminal" as const,
  },
  {
    title: "Visual Dashboards",
    description:
      "Build real-time and historical dashboards with drag-and-drop widgets. Monitor alarms, track entities, and visualize data without writing code.",
    icon: "dashboard",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/dashboard-2.png", alt: "Dashboard overview" },
      { src: "/screenshots/dashboard-1.png", alt: "Dashboard widgets" },
    ],
  },
  {
    title: "Rules Engine",
    description:
      "Process messages, generate alarms, send notifications, and route data to external storage. Define logic visually or through the API.",
    icon: "rules",
    visual: "screenshots" as const,
    images: [
      {
        src: "/screenshots/rules-engine-1.png",
        alt: "Rules engine configuration",
      },
      { src: "/screenshots/rules-engine-2.png", alt: "Rules engine flow" },
    ],
  },
  {
    title: "Alarm Management",
    description:
      "Generate alarms from rules, assign severity levels, track acknowledgment, and manage resolution workflows across your entire fleet.",
    icon: "alarms",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/alarms-3.png", alt: "Alarm history" },
      { src: "/screenshots/alarms-1.png", alt: "Alarms overview" },
      { src: "/screenshots/alarms-2.png", alt: "Alarm configuration" },
    ],
  },
  {
    title: "Multitenancy",
    description:
      "Isolate teams, customers, or environments with domain-level separation. Each domain has its own users, devices, channels, and policies — all managed from a unified control plane.",
    icon: "tenancy",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/domains-1.png", alt: "Domain management" },
      { src: "/screenshots/domains-2.png", alt: "Domain settings" },
    ],
  },
  {
    title: "Role-Based Access Control",
    description:
      "Fine-grained permissions at user, group, domain, client, and channel level. Backed by a distributed authorization engine compatible with SpiceDB.",
    icon: "security",
    visual: "rbac" as const,
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate scheduled or on-demand reports from device telemetry and platform events. Export data in multiple formats and integrate with your existing BI tools.",
    icon: "reports",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/reports-2.png", alt: "Report details" },
      { src: "/screenshots/reports-1.png", alt: "Reports overview" },
    ],
  },
  {
    title: "Personal Access Tokens",
    description:
      "Issue scoped API tokens for CI/CD pipelines, service accounts, and third-party integrations. Set expiry, restrict permissions, and audit token usage from the dashboard.",
    icon: "tokens",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/pat-2.png", alt: "PAT creation" },
      { src: "/screenshots/pat-1.png", alt: "PAT management" },
    ],
  },
];
