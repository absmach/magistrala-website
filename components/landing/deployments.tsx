import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GlobalDeployments() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Global Reach
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Deployed worldwide
          </h2>
          <p className="mt-4 text-muted-foreground text-xl max-w-xl mx-auto">
            Organizations across the globe rely on Magistrala for
            mission-critical IoT infrastructure.
          </p>
        </div>

        <div className="rounded-2xl border border-border/40 overflow-hidden shadow-lg">
          <iframe
            src="https://deployments.absmach.eu?filter=hidden&sidebar=hidden"
            title="Magistrala Global Deployments"
            className="w-full border-0"
            style={{ height: "600px" }}
            loading="lazy"
            allow="geolocation"
          />
        </div>
        <div className="w-full mt-10 flex justify-center">
          <Button
            asChild={true}
            variant="default"
            className="h-12 px-7 text-base bg-[#073763] hover:bg-[#0a4a82] text-white rounded-xl"
          >
            <Link
              href="https://deployments.absmach.eu?utm_source=magistrala.absmach.eu&utm_medium=website&utm_campaign=home_page"
              target="blank"
            >
              View Full Deployments Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
