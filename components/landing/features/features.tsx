"use client";

import { cn } from "@/lib/utils";
import { FeatureIcon } from "./feature-icon";
import { features } from "@/lib/features";
import { TerminalComponent } from "./terminal";
import { RBACLogos } from "./rbac";
import { ScreenshotStack } from "./screenshot";

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
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
                  isReversed ? "md:flex-row-reverse" : "md:flex-row",
                )}
              >
                <div className="w-full md:w-1/3">
                  {feature.icon && <FeatureIcon icon={feature.icon} />}
                  <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="w-full md:w-2/3">
                  {feature.visual === "terminal" && <TerminalComponent />}
                  {feature.visual === "screenshots" && feature.images && (
                    <ScreenshotStack
                      images={feature.images}
                      alt={feature.title}
                    />
                  )}
                  {feature.visual === "rbac" && <RBACLogos />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
