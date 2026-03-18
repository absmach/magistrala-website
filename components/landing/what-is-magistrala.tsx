// Server component — no "use client".
// 130–170 word entity-definition block optimised for AI citation and passage extraction.
// Stats row provides quotable metrics for Perplexity, ChatGPT web search, and Google AI Overviews.

const stats = [
  { value: "4", label: "IoT protocols", sub: "MQTT · CoAP · HTTP · WebSocket" },
  { value: "3+", label: "Message brokers", sub: "NATS · Kafka · RabbitMQ" },
  {
    value: "4+",
    label: "Storage backends",
    sub: "PostgreSQL · InfluxDB · MongoDB · Redis",
  },
  {
    value: "Apache 2.0",
    label: "Open-source license",
    sub: "Free for commercial use",
  },
];

export function WhatIsMagistrala() {
  return (
    <section
      id="what-is-magistrala"
      aria-label="What is Magistrala"
      className="py-16 md:py-20 border-y border-border/40 bg-muted/20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-[1fr_1px_1fr] gap-10 md:gap-16 items-start">
          {/* Definition prose */}
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              What is Magistrala?
            </p>
            <p className="text-base text-foreground leading-relaxed">
              Magistrala is an open-source IoT platform built by Abstract
              Machines for connecting, managing, and analysing data from
              physical devices at scale. It provides the infrastructure layer
              between field hardware — sensors, meters, gateways, industrial
              controllers — and the cloud applications that consume their data.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              At its core, Magistrala is a multi-protocol message broker and
              device management system. It accepts telemetry over MQTT, CoAP,
              HTTP, and WebSocket, normalises messages into a unified format,
              and routes data to storage, analytics, and notification systems
              through a built-in rules engine. Device identity, access control,
              and multi-tenancy are handled natively — no third-party IAM layer
              required.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Licensed under Apache 2.0 and trusted in production across smart
              utilities, industrial IoT, and smart city infrastructure
              worldwide. Runs on Docker or Kubernetes and is available as a
              fully managed cloud service.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-border/40 self-stretch" />

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="text-3xl font-bold tracking-tight text-foreground">
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {s.label}
                </p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
