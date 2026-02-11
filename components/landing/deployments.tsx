import { Globe, MapPin, Server } from "lucide-react";

const stats = [
  { icon: Server, label: "Deployments", value: "100+" },
  { icon: MapPin, label: "Countries", value: "30+" },
  { icon: Globe, label: "Services", value: "50+" },
];

function MinimalGlobe() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full max-w-[360px] text-[#073763]"
        fill="none"
      >
        {/* Outer circle */}
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />

        {/* Meridians */}
        <ellipse cx="200" cy="200" rx="180" ry="70" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        <ellipse cx="200" cy="200" rx="180" ry="120" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <ellipse cx="200" cy="200" rx="70" ry="180" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        <ellipse cx="200" cy="200" rx="120" ry="180" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />

        {/* Equator */}
        <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />

        {/* Deployment dots */}
        {[
          [140, 120], [260, 130], [180, 160], [300, 170],
          [120, 200], [220, 190], [340, 200], [160, 240],
          [270, 230], [200, 270], [310, 260], [130, 280],
          [240, 290], [100, 160], [330, 140], [180, 310],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="currentColor" opacity="0.06" />
            <circle cx={cx} cy={cy} r="3" fill="currentColor" opacity="0.25" />
            <circle cx={cx} cy={cy} r="1.5" fill="currentColor" opacity="0.6" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function GlobalDeployments() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#073763] mb-3">
            Global Reach
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Deployed worldwide
          </h2>
          <p className="mt-4 text-muted-foreground text-xl max-w-xl mx-auto">
            Organizations across the globe rely on Magistrala for mission-critical IoT infrastructure.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <MinimalGlobe />
          </div>

          <div className="w-full md:w-1/2 grid gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-5 rounded-xl border border-border/40 bg-card p-6"
              >
                <div className="flex items-center justify-center size-12 rounded-lg bg-[#073763]/[0.06]">
                  <stat.icon className="size-5 text-[#073763]" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-base text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
