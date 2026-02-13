"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 10000;
const TOTAL = 3;

const useCases = [
  {
    title: "Smart Water Metering",
    description:
      "Real-time visibility into water networks enabling faster leak detection, fraud prevention, and reduced non-revenue water (NRW). Monitor consumption and pressure continuously across your network with support for NB-IoT, LoRaWAN, and other LPWAN technologies.",
    image: "/screenshots/smart-water.png",
    imageAlt: "Smart water metering dashboard",
    link: "/use-cases/smart-water-metering/",
    linkText: "Smart water metering use case",
  },
  {
    title: "Industrial Gateway Integration",
    description:
      "Connect legacy industrial equipment to the cloud with support for OPC-UA, Modbus, BACnet, and Profinet. Enable predictive maintenance, remote monitoring, and operational efficiency through edge-to-cloud connectivity and protocol translation.",
    image: "/screenshots/industrial-gateway.png",
    imageAlt: "Industrial gateway dashboard",
    link: "/use-cases/industrial-gateway/",
    linkText: "Industrial gateway use case",
  },
  {
    title: "Smart City Solutions",
    description:
      "Build intelligent urban infrastructure with connected sensors and devices. Optimize traffic management, smart parking, street lighting, and waste management. Monitor conditions in real-time and respond to urban challenges proactively.",
    image: "/screenshots/smart-city.png",
    imageAlt: "Smart city dashboard",
    link: "/use-cases/smart-city/",
    linkText: "Smart city use case",
  },
];

/**
 * Returns the visual "depth" of card `i` relative to `current`.
 * 0 = front card, 1 = first behind, 2 = second behind, etc.
 */
function depthOf(i: number, current: number) {
  return (i - current + TOTAL) % TOTAL;
}

export function UseCases() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const progressRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + TOTAL) % TOTAL);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Progress bar + auto-advance
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    bar.style.transition = "none";
    bar.style.width = "0%";

    if (!playing) return;

    void bar.offsetWidth;

    bar.style.transition = `width ${SLIDE_DURATION}ms linear`;
    bar.style.width = "100%";

    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % TOTAL);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, playing]);

  return (
    <section id="usecases" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Applications
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built for real-world use cases
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            From factory floors to smart cities, Magistrala powers IoT solutions
            across industries.
          </p>
        </div>

        {/* Stacked card deck */}
        <div className="relative" style={{ perspective: "1200px" }}>
          {/* Reserve height for the stack — cards are absolute */}
          <div className="relative h-130 sm:h-115 lg:h-105">
            {useCases.map((uc, i) => {
              const depth = depthOf(i, current);
              // Distribute spacing evenly so the stack stays within a fixed total height
              const maxPeek = 40; // total px the deepest card peeks above the front
              const maxScaleDrop = 0.12; // total scale reduction from front to back
              const steps = TOTAL - 1 || 1;
              const yOffset = depth * -(maxPeek / steps);
              const scale = 1 - depth * (maxScaleDrop / steps);
              const zIndex = TOTAL - depth;
              const isFront = depth === 0;

              return (
                <div
                  key={uc.title}
                  className="absolute inset-x-0 top-0 rounded-2xl border border-border/40 bg-card shadow-lg transition-all duration-500 ease-in-out"
                  style={{
                    zIndex,
                    transform: `translateY(${yOffset}px) scale(${scale})`,
                    opacity: isFront
                      ? 1
                      : Math.max(0.4, 1 - depth * (0.5 / steps)),
                    filter: isFront
                      ? "none"
                      : `brightness(${Math.max(0.85, 1 - depth * (0.15 / steps))})`,
                    pointerEvents: isFront ? "auto" : "none",
                    transformOrigin: "top center",
                  }}
                >
                  <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-10 items-center p-8 lg:p-10">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {uc.title}
                      </h3>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                        {uc.description}
                      </p>
                      <a
                        href={uc.link}
                        className="text-base font-medium text-primary hover:text-[#0a4a82] transition-colors"
                      >
                        {uc.linkText} &rarr;
                      </a>
                    </div>

                    <a
                      href={uc.link}
                      className="block rounded-lg overflow-hidden border border-border/50 transition-shadow hover:shadow-lg"
                    >
                      <Image
                        src={uc.image}
                        alt={uc.imageAlt}
                        width={400}
                        height={350}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex items-center justify-center size-10 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex-1 flex items-center gap-3">
              <div className="flex items-center gap-2">
                {useCases.map((uc, i) => (
                  <button
                    type="button"
                    key={uc.title}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={cn(
                      "rounded-full transition-all cursor-pointer",
                      i === current
                        ? "w-6 h-2 bg-[#073763]"
                        : "size-2 bg-border hover:bg-muted-foreground/40",
                    )}
                  />
                ))}
              </div>

              <div className="flex-1 h-1 rounded-full bg-border/60 overflow-hidden">
                <div
                  ref={progressRef}
                  className="h-full rounded-full bg-[#073763]"
                  style={{ width: "0%" }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause carousel" : "Play carousel"}
              className="flex items-center justify-center size-10 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors cursor-pointer"
            >
              {playing ? (
                <Pause className="size-4" />
              ) : (
                <Play className="size-4" />
              )}
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex items-center justify-center size-10 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors cursor-pointer"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
