import { ArrowRight, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FAQSection, solutionsFaqs } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { solutions } from "@/lib/solutions-data";
import { cn } from "@/lib/utils";

export const metadata = createMetadata(
  {
    title: "IoT Solution Packs",
    description:
      "Deploy a complete IoT solution in minutes. Magistrala Solution Packs come pre-configured with clients, channels, rules, dashboards, and alarms — ready for smart cities, water metering, energy, cold chain, agriculture, and more.",
    keywords: [
      "IoT solution packs",
      "Magistrala solutions",
      "smart city IoT",
      "smart water metering",
      "cold chain monitoring",
      "precision agriculture IoT",
      "air quality monitoring",
      "oil gas IoT",
    ],
    openGraph: {
      url: `${baseUrl}/solutions/`,
    },
  },
  "solutions",
);

export default function SolutionsPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#073763]/5 to-transparent" />
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#073763]/20 bg-[#073763]/5 px-4 py-1.5 mb-6">
            <Package className="size-4 text-[#073763] dark:text-blue-400" />
            <span className="text-sm font-medium text-[#073763] dark:text-blue-400">
              Solutions
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-primary">Pick a solution.</span> Deploy in
            minutes.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every solution ships pre-configured — devices, channels, rules,
            dashboards, reports and alarms included. Install on Magistrala Cloud
            and start monitoring immediately.
          </p>
        </div>
      </section>

      {/* ── Solution Cards ─────────────────────────────────────────────── */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-4">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl",
                  "border-2 border-border bg-card",
                  "transition-all duration-300 hover:border-[#073763]/50 hover:shadow-xl hover:-translate-y-0.5",
                )}
              >
                {/* Image preview */}
                <div className="relative overflow-hidden bg-muted/20 h-56 sm:h-64 shrink-0">
                  <Image
                    src={solution.image}
                    alt={`${solution.title} solution pack`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-8 rounded-lg bg-[#073763]/8 dark:bg-[#073763]/20 flex items-center justify-center shrink-0">
                      <solution.icon className="size-4 text-[#073763] dark:text-blue-400" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground leading-snug">
                      {solution.title}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
                    {solution.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#073763] dark:text-blue-400">
                    View solution
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <FAQSection
        items={solutionsFaqs}
        title="Frequently asked questions about Solution Packs"
        id="faq"
        withSchema
      />

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="py-10 px-6">
        <div className="mx-auto lg:max-w-4xl max-sm:px-5 p-16 border rounded-4xl text-center bg-[#073763]">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Don&rsquo;t see your industry?
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Magistrala is protocol-agnostic and fully extensible. Build a custom
            solution on top of the same platform powering every pack above.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="h-12 px-7 text-base border-white/20 dark:bg-white dark:text-black hover:dark:bg-white/90 font-semibold rounded-xl"
            >
              <Link
                href="https://cloud.magistrala.absmach.eu?utm_source=magistrala.absmach.eu&utm_medium=website&utm_campaign=solutions-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Magistrala free
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-7 text-base border-white/20 dark:bg-white dark:text-black hover:dark:bg-white/90 font-semibold rounded-xl"
            >
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
