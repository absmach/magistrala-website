import { GlobalDeployments } from "@/components/landing/deployments";
import { FAQSection } from "@/components/landing/faq";
import { FeaturesSection } from "@/components/landing/features/features";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero";
import { PartnersMarquee } from "@/components/landing/partners";
import { PricingSection } from "@/components/landing/pricing";
import { ScrollToTop } from "@/components/landing/scroll-to-top";
import { SuccessStories } from "@/components/landing/success-stories";
import { UseCases } from "@/components/landing/use-cases";
import { WhyMagistrala } from "@/components/landing/why-magistrala";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://magistrala.absmach.eu/#organization",
      name: "Abstract Machines",
      url: "https://absmach.eu",
      logo: "https://magistrala.absmach.eu/logos/abstract-machines.svg",
      sameAs: [
        "https://github.com/absmach",
        "https://twitter.com/absmach",
        "https://www.linkedin.com/company/abstract-machines",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "141 Quai de Valmy",
        addressLocality: "Paris",
        postalCode: "75010",
        addressCountry: "FR",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://magistrala.absmach.eu/#software",
      name: "Magistrala",
      alternateName: "SuperMQ",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Linux",
      url: "https://magistrala.absmach.eu",
      description:
        "Open-source IoT platform for cloud and edge with multi-protocol messaging (MQTT, CoAP, HTTP, WebSocket), fine-grained RBAC via SpiceDB, multi-tenancy, and pluggable storage backends.",
      license: "https://www.apache.org/licenses/LICENSE-2.0",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier available",
      },
      author: { "@id": "https://magistrala.absmach.eu/#organization" },
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <PartnersMarquee />
      <FeaturesSection />
      <WhyMagistrala />
      <GlobalDeployments />
      <UseCases />
      <SuccessStories />
      <PricingSection />
      <FAQSection withSchema />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
