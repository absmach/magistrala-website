import { FeatureCard } from "./feature-card";
import { features } from "./features-data";

export function PlatformOverview() {
  return (
    <section className="py-20 lg:py-28 bg-background border-t border-border/40">
      <div className="mx-auto container px-6">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#073763] dark:text-blue-400 mb-3">
            Platform
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-[1.1] mb-4">
            The platform powering every solution.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A complete, enterprise-grade IoT core. Open source and fully under
            your control.
          </p>
        </div>

        {/* Feature cards — 1 per row, alternating content-left/visual-right layout */}
        <div className="flex flex-col gap-12 sm:gap-24 lg:gap-40 mx-auto mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
