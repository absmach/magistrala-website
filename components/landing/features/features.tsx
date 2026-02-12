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
      <div className="mx-auto max-w-350 px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Platform
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything you need to manage IoT at scale
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete suite of tools for device connectivity, data processing,
            visualization, and access control.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-32">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className={cn(
                  "flex flex-col gap-10 sm:gap-16 md:gap-20 items-start md:min-h-[50vh]",
                  isReversed ? "md:flex-row-reverse" : "md:flex-row",
                )}
              >
                <div className="w-full md:w-2/5">
                  <div className="flex flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
                    {feature.icon && <FeatureIcon icon={feature.icon} />}
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="w-full md:w-3/5">
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
