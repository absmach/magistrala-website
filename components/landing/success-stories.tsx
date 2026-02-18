import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    logo: "/logos/intel.png",
    name: "Intel",
    height: 100,
    width: 100,
    description:
      "Magistrala powers real-time metering on the edge for Intel, integrated with EdgeX Foundry under the Linux Foundation.",
    link: "https://www.intel.com/content/www/us/en/developer/articles/technical/view-metering-in-action-on-edge-middleware-platforms.html",
    linkText: "Read the case study",
  },
  {
    logo: "/logos/ericsson.png",
    name: "Ericsson",
    height: 100,
    width: 140,
    description:
      "Ericsson uses Magistrala for orchestration of IoT slices through edge and cloud microservice platforms.",
    link: "https://www.researchgate.net/publication/334265054_Enabling_the_Orchestration_of_IoT_Slices_through_Edge_and_Cloud_Microservice_Platforms",
    linkText: "Read the paper",
  },
  {
    logo: "/logos/target.png",
    name: "Target",
    height: 50,
    width: 60,
    description:
      "Target uses Magistrala as the substrate of their IoT platform, deployed in-cloud and on the edge within their stores.",
    link: "https://youtu.be/VenSmkpzC8w?t=1988",
    linkText: "Watch the talk",
  },
  {
    logo: "/logos/nokia.png",
    name: "Nokia",
    height: 100,
    width: 150,
    description:
      "Nokia's Data Marketplace uses Magistrala to seamlessly connect real-time MQTT IoT data streams, enabling secure data sharing and monetization through Magistrala connectors.",
    link: "https://www.nokia.com/networks/data-marketplace/",
    linkText: "Learn more",
  },
];

const CARD_TOP_START = 100;
const CARD_TOP_STEP = 100;

export function SuccessStories() {
  return (
    <section className="py-24 container mx-auto bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Success Stories
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trusted by industry leaders
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {stories.map((story, i) => (
            <div
              key={story.name}
              className="sticky rounded-2xl border border-border/40 bg-card shadow-lg transition-shadow"
              style={{ top: `${CARD_TOP_START + i * CARD_TOP_STEP}px` }}
            >
              <div className="flex items-center gap-4 px-8 py-5 border-b border-border/30">
                <Image
                  src={story.logo}
                  alt={story.name}
                  height={story.height}
                  width={story.width}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="px-8 py-6 space-y-8">
                <span className="text-2xl font-semibold text-foreground">
                  {story.name}
                </span>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {story.description}
                </p>

                <Link
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-lg font-medium text-primary hover:text-[#0a4a82] transition-colors"
                >
                  {story.linkText}
                  <ExternalLink className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
