import { Factory, Building2, Cpu, Wifi, Gauge, Leaf } from "lucide-react";

const useCases = [
  {
    icon: Factory,
    title: "Industrial IoT",
    description:
      "Monitor production lines, manage PLCs, and bridge OPC-UA, Modbus, and Sparkplug MQTT protocols with edge gateways.",
  },
  {
    icon: Building2,
    title: "Smart Buildings",
    description:
      "Integrate HVAC, lighting, and occupancy sensors into unified building management systems with real-time controls.",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description:
      "Deploy Magistrala at the edge for low-latency data processing, local decision making, and intermittent connectivity.",
  },
  {
    icon: Wifi,
    title: "Telecom & 5G",
    description:
      "Orchestrate IoT network slices, manage device connectivity at scale, and enable MEC deployments on telecom infrastructure.",
  },
  {
    icon: Gauge,
    title: "Fleet & Asset Tracking",
    description:
      "Track vehicles, containers, and mobile assets with real-time geolocation, geofencing, and condition monitoring.",
  },
  {
    icon: Leaf,
    title: "Energy & Utilities",
    description:
      "Monitor smart meters, manage distributed energy resources, and optimize grid operations with real-time telemetry.",
  },
];

export function UseCases() {
  return (
    <section id="usecases" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#073763] mb-3">
            Applications
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built for real-world use cases
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            From factory floors to smart cities, Magistrala powers IoT solutions across industries.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="group rounded-2xl border border-border/40 bg-card p-7 transition-all hover:shadow-lg hover:shadow-[#073763]/[0.04] hover:border-[#073763]/10"
            >
              <div className="mb-4 inline-flex items-center justify-center size-10 rounded-lg bg-[#073763]/[0.06] group-hover:bg-[#073763]/[0.1] transition-colors">
                <uc.icon className="size-5 text-[#073763]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {uc.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
