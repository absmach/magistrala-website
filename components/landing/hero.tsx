import { Cpu, LineChart, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HERO_CONTENT = {
  badge: "/ Open Source IoT Platform",
  titleLine1: "IoT solutions",
  titleLine2: "without complexity.",
  description:
    "Skip complex setups. Launch IoT and industrial solutions instantly, then customize every layer with a powerful, open-source platform.",
  primaryAction: {
    label: "Try Magistrala",
    href: "https://cloud.magistrala.absmach.eu/en?utm_source=magistrala.absmach.eu&utm_medium=website&utm_campaign=home-page",
  },

  secondaryAction: {
    label: "Schedule Demo",
    href: "/contact",
  },
  nodes: [
    {
      id: "node-1",
      label: "/ Working system instantly",
      description:
        "Deploy a complete solution with devices, data, dashboards, and alerts already configured.",
      icon: Zap,
      left: "181px",
      top: "65px",
    },
    {
      id: "node-2",
      label: "/ Customize everything",
      description:
        "Extend with rules, integrations, and workflows tailored to your exact use case.",
      icon: Cpu,
      left: "346px",
      top: "180px",
    },
    {
      id: "node-3",
      label: "/ Scale without complexity",
      description:
        "A composable architecture that grows with your system — without feature overload.",
      icon: LineChart,
      left: "490px",
      top: "354px",
    },
  ],
  dashboardBlock: {
    title: "Getting started has never been simpler.",
    description:
      "Start with pre-configured industrial solutions, or build your own from scratch using a flexible, open-source IoT platform core.",
    linkText: "Explore Solutions",
    linkHref: "/solutions",
  },
  stats: [
    { id: "stat-1", value: "13+", label: "Global\nPartners" },
    { id: "stat-2", value: "400+", label: "Deployments" },
    { id: "stat-3", value: "4+", label: "Protocols \n Supported" },
    { id: "stat-4", value: "2.5k+", label: "GitHub Stars" },
  ],
};

export async function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-12 bg-[#f8fafc] dark:bg-background">
      <div className="absolute inset-x-0 top-0 h-200 bg-linear-to-b from-blue-50/50 to-transparent dark:from-[#073763]/10 dark:to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-100 bg-white/40 dark:bg-primary/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="mx-auto container px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-12 items-center">
          <div className="max-w-2xl pt-8">
            <div className="inline-flex items-center text-sm font-medium text-muted-foreground mb-6">
              {HERO_CONTENT.badge}
            </div>

            <h1 className="text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem] leading-[1.05] mb-6">
              <span className="text-primary">{HERO_CONTENT.titleLine1}</span>
              <br />
              {HERO_CONTENT.titleLine2}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                variant="default"
                className="h-12 px-8 text-base rounded-full transition-all sm:hover:shadow-lg sm:hover:-translate-y-0.5"
              >
                <Link
                  href={HERO_CONTENT.primaryAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {HERO_CONTENT.primaryAction.label}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 text-base rounded-full transition-all shadow-sm sm:hover:shadow-md sm:hover:-translate-y-0.5"
              >
                <Link href={HERO_CONTENT.secondaryAction.href}>
                  {HERO_CONTENT.secondaryAction.label}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-end w-full h-112.5 lg:-translate-x-32 xl:-translate-x-56">
            <div className="relative w-137.5 h-112.5">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none text-slate-300 dark:text-slate-700"
                viewBox="0 0 550 450"
                fill="none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="curveFade" x1="0" y1="0" x2="1" y2="1">
                    <stop
                      offset="0%"
                      stopColor="currentColor"
                      stopOpacity="0"
                    />
                    <stop
                      offset="15%"
                      stopColor="currentColor"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="85%"
                      stopColor="currentColor"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="currentColor"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M -250 100 Q 200 -150 550 450"
                  stroke="url(#curveFade)"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {HERO_CONTENT.nodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.id}
                    className="absolute"
                    style={{ left: node.left, top: node.top }}
                  >
                    <HoverCard openDelay={100} closeDelay={100}>
                      <HoverCardTrigger asChild>
                        <Button
                          variant="link"
                          className="-translate-x-1/2 -translate-y-1/2"
                        >
                          <div className="relative cursor-pointer group">
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 size-3 bg-[#073763] dark:bg-white rounded-full ring-[5px] ring-[#f8fafc] dark:ring-background group-hover:scale-110 transition-transform" />
                            <div className="absolute left-4 -bottom-px pb-1.5 pr-12 whitespace-nowrap border-b-[1.5px] border-slate-300 dark:border-slate-600 mask-[linear-gradient(to_right,black_60%,transparent_100%)] group-hover:border-[#073763] dark:group-hover:border-white transition-colors">
                              <span className="text-[14.5px] font-medium text-slate-800 dark:text-slate-200 group-hover:text-[#073763] dark:group-hover:text-white transition-colors">
                                {node.label}
                              </span>
                            </div>
                          </div>
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent
                        side="left"
                        align="start"
                        sideOffset={16}
                        alignOffset={-16}
                        className="w-55 p-4 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-2xl border-border bg-white dark:bg-card z-30 text-left"
                      >
                        <div className="size-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-3 shadow-sm bg-slate-50 dark:bg-slate-800">
                          <Icon className="size-3.5 text-foreground" />
                        </div>
                        <p className="text-sm font-medium text-foreground leading-snug">
                          {node.description}
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
          <div
            className="relative w-full lg:w-[60%] shrink-0 flex items-center justify-center mt-10 lg:mt-0"
            style={{ perspective: "2000px" }}
          >
            <div
              className="relative w-full rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out hover:scale-105"
              style={{
                transform:
                  "rotateX(55deg) rotateY(20deg) rotateZ(-35deg) scale(1.25)",
                transformStyle: "preserve-3d",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 40%, transparent 95%)",
                maskImage:
                  "linear-gradient(to bottom, black 40%, transparent 95%)",
              }}
            >
              <div className="absolute inset-0 z-20 pointer-events-none rounded-xl bg-linear-to-tl from-transparent via-white/5 to-white/20 dark:from-transparent dark:via-white/5 dark:to-white/10" />

              <Image
                src="/screenshots/dashboard-2.png"
                alt="Magistrala Dashboard"
                className="w-full h-auto object-cover rounded-xl z-10 relative"
                width={1920}
                height={1080}
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="flex flex-col items-start w-full lg:w-[40%] shrink-0 pl-0 lg:pl-4">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-50/50 dark:bg-[#073763]/20 border border-blue-100 dark:border-[#073763]/30 mb-6 shadow-sm">
              <Sparkles className="size-6 text-[#073763] dark:text-blue-400" />
            </div>

            <h3 className="text-3xl lg:text-4xl font-medium text-foreground leading-[1.15] tracking-tight mb-4">
              {HERO_CONTENT.dashboardBlock.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {HERO_CONTENT.dashboardBlock.description}
            </p>

            <Link
              href={HERO_CONTENT.dashboardBlock.linkHref}
              className="inline-flex items-center font-medium text-primary group"
            >
              {HERO_CONTENT.dashboardBlock.linkText}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 border-t border-border/40 pt-10 pb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {HERO_CONTENT.stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
              >
                <span className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
                  {stat.value}
                </span>
                <span className="font-medium text-muted-foreground leading-tight whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
