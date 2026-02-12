"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const protocolTabs = [
  {
    label: "HTTP",
    command: `curl -s -X POST \\
  https://api.magistrala.io/http/channels/1/messages \\
  -H "Authorization: Client <client_secret>" \\
  -H "Content-Type: application/senml+json" \\
  -d '[{"bn":"dev1:","n":"temp","u":"Cel","v":23.5}]'`,
  },
  {
    label: "MQTT",
    command: `mosquitto_pub \\
  -h mqtt.magistrala.io -p 1883 \\
  -t "channels/1/messages" \\
  -u "<client_id>" -P "<client_secret>" \\
  -m '[{"bn":"dev1:","n":"temp","u":"Cel","v":23.5}]'`,
  },
  {
    label: "CoAP",
    command: `coap-client -m post \\
  "coap://coap.magistrala.io/channels/1/messages" \\
  -t application/senml+json \\
  -T "<client_secret>" \\
  -e '[{"bn":"dev1:","n":"temp","u":"Cel","v":23.5}]'`,
  },
  {
    label: "WebSocket",
    command: `wscat -c "ws://ws.magistrala.io/channels/1/messages" \\
  -H "Authorization: Client <client_secret>"

> {"bn":"dev1:","n":"temp","u":"Cel","v":23.5}
< {"bn":"dev1:","n":"temp","u":"Cel","v":23.5,"t":1710432000}`,
  },
];

function TerminalComponent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="rounded-xl border border-border/60 bg-[#0c1222] shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-[#ff5f57]" />
          <div className="size-3 rounded-full bg-[#febc2e]" />
          <div className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex gap-0 ml-4">
          {protocolTabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-md transition-colors",
                activeTab === i
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/70"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed text-green-400/90 min-h-[200px]">
        <span className="text-white/30">$ </span>
        <pre className="whitespace-pre-wrap">{protocolTabs[activeTab].command}</pre>
      </div>
    </div>
  );
}

function ScreenshotStack({
  images,
  alt,
}: {
  images: { src: string; alt: string }[];
  alt: string;
}) {
  if (images.length === 1) {
    return (
      <div className="rounded-xl border border-border/60 bg-card shadow-xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[0].src} alt={images[0].alt} className="w-full" loading="lazy" />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="rounded-xl border border-border/60 bg-card shadow-xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[0].src} alt={images[0].alt} className="w-full" loading="lazy" />
      </div>
      {images[1] && (
        <div className="absolute -bottom-6 -right-6 w-3/5 rounded-xl border border-border/60 bg-card shadow-lg overflow-hidden hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[1].src} alt={images[1].alt} className="w-full" loading="lazy" />
        </div>
      )}
      {images[2] && (
        <div className="absolute -top-4 -left-4 w-2/5 rounded-xl border border-border/60 bg-card shadow-lg overflow-hidden hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[2].src} alt={images[2].alt} className="w-full" loading="lazy" />
        </div>
      )}
    </div>
  );
}

function RBACLogos() {
  return (
    <div className="flex items-center justify-center gap-8 py-12">
      <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/40 bg-card shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/authzed.svg" alt="SpiceDB by AuthZed" className="h-10 object-contain" loading="lazy" />
        <span className="text-xs text-muted-foreground font-medium">SpiceDB</span>
      </div>
      <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/40 bg-card shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/oauth-2.png" alt="OAuth 2.0" className="h-10 object-contain" loading="lazy" />
        <span className="text-xs text-muted-foreground font-medium">OAuth 2.0</span>
      </div>
      <div className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/40 bg-card shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/jwt.png" alt="JSON Web Tokens" className="h-10 object-contain" loading="lazy" />
        <span className="text-xs text-muted-foreground font-medium">JWT</span>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Multiprotocol Messaging",
    description:
      "Send and receive data over HTTP, MQTT, CoAP, and WebSocket with unified authentication and channel-based routing. Each protocol adapter runs as an independent microservice for horizontal scaling.",
    visual: "terminal" as const,
  },
  {
    title: "Visual Dashboards",
    description:
      "Build real-time operational dashboards with configurable widgets, time-series charts, and device status panels. Monitor your entire fleet from a single pane of glass.",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/dashboard-1.png", alt: "Dashboard overview" },
      { src: "/screenshots/dashboard-2.png", alt: "Dashboard widgets" },
    ],
  },
  {
    title: "Rules Engine",
    description:
      "Define event-driven automation rules that trigger actions based on device data thresholds, patterns, or schedules. Chain transformations, route messages, and integrate with external systems.",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/rules-engine-1.png", alt: "Rules engine configuration" },
      { src: "/screenshots/rules-engine-2.png", alt: "Rules engine flow" },
    ],
  },
  {
    title: "Alarms & Notifications",
    description:
      "Configure threshold-based alarms with escalation policies and multi-channel notifications. Track alarm history, acknowledgments, and resolution times across your deployment.",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/alarms-1.png", alt: "Alarms overview" },
      { src: "/screenshots/alarms-2.png", alt: "Alarm configuration" },
      { src: "/screenshots/alarms-3.png", alt: "Alarm history" },
    ],
  },
  {
    title: "Multitenancy",
    description:
      "Isolate teams, customers, or environments with domain-level separation. Each domain has its own users, devices, channels, and policies — all managed from a unified control plane.",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/domains-1.png", alt: "Domain management" },
      { src: "/screenshots/domains-2.png", alt: "Domain settings" },
    ],
  },
  {
    title: "Role-Based Access Control",
    description:
      "Fine-grained authorization powered by Google Zanzibar principles. Define roles at user, group, domain, client, and channel scope with SpiceDB, OAuth 2.0, and JWT integration.",
    visual: "rbac" as const,
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate scheduled or on-demand reports from device telemetry and platform events. Export data in multiple formats and integrate with your existing BI tools.",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/reports-1.png", alt: "Reports overview" },
      { src: "/screenshots/reports-2.png", alt: "Report details" },
    ],
  },
  {
    title: "Personal Access Tokens",
    description:
      "Issue scoped API tokens for CI/CD pipelines, service accounts, and third-party integrations. Set expiry, restrict permissions, and audit token usage from the dashboard.",
    visual: "screenshots" as const,
    images: [
      { src: "/screenshots/pat-1.png", alt: "PAT management" },
      { src: "/screenshots/pat-2.png", alt: "PAT creation" },
    ],
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Platform
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything you need to manage IoT at scale
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete suite of tools for device connectivity, data processing,
            visualization, and access control.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className={cn(
                  "flex flex-col gap-12 items-center",
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                )}
              >
                <div className="w-full md:w-2/3">
                  {feature.visual === "terminal" && <TerminalComponent />}
                  {feature.visual === "screenshots" && feature.images && (
                    <ScreenshotStack images={feature.images} alt={feature.title} />
                  )}
                  {feature.visual === "rbac" && <RBACLogos />}
                </div>

                <div className="w-full md:w-1/3">
                  <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
