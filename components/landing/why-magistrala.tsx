import { Code2, Cloud, Database } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Open Source",
    description:
      "Apache 2.0 licensed. Fork it, extend it, deploy it commercially. No vendor lock-in, no hidden costs. Maintained by Abstract Machines and a global community of contributors.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description:
      "Microservices architecture built for Kubernetes. Each service scales independently, deploys in containers, and integrates with your existing observability stack.",
  },
  {
    icon: Database,
    title: "Pluggable Storage & Brokers",
    description:
      "Choose your database — PostgreSQL, TimescaleDB, MongoDB, InfluxDB, Cassandra. Swap message brokers between NATS, Kafka, or RabbitMQ through clean interfaces.",
  },
];

export function WhyMagistrala() {
  return (
    <section className="py-24 bg-slate-warm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#073763] mb-3">
            Why Magistrala
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Why teams choose Magistrala
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative rounded-2xl border border-border/40 bg-card p-8 transition-shadow hover:shadow-lg hover:shadow-[#073763]/[0.04]"
            >
              <div className="mb-5 inline-flex items-center justify-center size-11 rounded-lg bg-[#073763]/[0.06]">
                <reason.icon className="size-5 text-[#073763]" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
