"use client";

import { useEffect, useRef, useState } from "react";
import { features } from "@/lib/features";
import { cn } from "@/lib/utils";
import { FeatureIcon } from "./feature-icon";
import { RBACLogos } from "./rbac";
import { ScreenshotStack } from "./screenshot";
import { TerminalComponent } from "./terminal";

function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        ...options,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

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
            return (
              <FeatureItem key={feature.title} feature={feature} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const { ref, isInView } = useInView();
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-10 sm:gap-16 md:gap-20 items-start md:min-h-[50vh]",
        "transition-all duration-700 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
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
          <ScreenshotStack images={feature.images} alt={feature.title} />
        )}
        {feature.visual === "rbac" && <RBACLogos />}
      </div>
    </div>
  );
}
