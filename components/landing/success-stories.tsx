import { ExternalLink } from "lucide-react";

const stories = [
  {
    logo: "/img/logos/intel.png",
    name: "Intel",
    description:
      "Powers real-time metering on the edge, integrated with EdgeX Foundry under the Linux Foundation.",
    link: "https://www.intel.com/content/www/us/en/developer/articles/technical/view-metering-in-action-on-edge-middleware-platforms.html",
  },
  {
    logo: "/img/logos/ericsson.png",
    name: "Ericsson",
    description:
      "Enables orchestration of IoT slices through edge and cloud microservice platforms.",
    link: "https://www.researchgate.net/publication/334265054_Enabling_the_Orchestration_of_IoT_Slices_through_Edge_and_Cloud_Microservice_Platforms",
  },
  {
    logo: "/img/logos/target.png",
    name: "Target",
    description:
      "Serves as the underlying IoT substrate deployed across cloud infrastructure and in-store edge systems.",
    link: "https://youtu.be/VenSmkpzC8w?t=1988",
  },
];

export function SuccessStories() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-[#073763] mb-3">
            Success Stories
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trusted by industry leaders
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.name}
              className="flex flex-col rounded-2xl border border-border/40 bg-card p-8"
            >
              <div className="flex items-center justify-center h-16 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.logo}
                  alt={story.name}
                  className="max-h-14 object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              </div>
              <p className="text-muted-foreground text-base leading-relaxed flex-1">
                {story.description}
              </p>
              <a
                href={story.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-base font-medium text-[#073763] hover:text-[#0a4a82] transition-colors"
              >
                Read more
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
