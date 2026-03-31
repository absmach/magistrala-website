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
      "@id": "https://magistrala.absmach.eu/#org",
      name: "Abstract Machines",
      legalName: "Abstract Machines SAS",
      url: "https://absmach.eu",
      logo: {
        "@type": "ImageObject",
        url: "https://magistrala.absmach.eu/logos/abstract-machines.svg",
        width: 200,
        height: 50,
      },
      sameAs: [
        "https://github.com/absmach",
        "https://twitter.com/absmach",
        "https://www.linkedin.com/company/abstract-machines",
        "https://www.youtube.com/@abstractmachines",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "141 Quai de Valmy",
        addressLocality: "Paris",
        postalCode: "75010",
        addressCountry: "FR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@absmach.eu",
        contactType: "customer service",
        availableLanguage: ["English", "French"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://magistrala.absmach.eu/#website",
      url: "https://magistrala.absmach.eu",
      name: "Magistrala",
      publisher: { "@id": "https://magistrala.absmach.eu/#org" },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://magistrala.absmach.eu/docs?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://magistrala.absmach.eu/#software",
      name: "Magistrala",
      alternateName: ["Mainflux"],
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud, Linux, Docker, Kubernetes",
      url: "https://magistrala.absmach.eu",
      description:
        "Open-source IoT platform for cloud and edge with multi-protocol messaging (MQTT, CoAP, HTTP, WebSocket), fine-grained RBAC via SpiceDB, multi-tenancy, and pluggable storage backends.",
      license: "https://www.apache.org/licenses/LICENSE-2.0",
      offers: [
        {
          "@type": "Offer",
          name: "Free Tier",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          description: "Unlimited scale, dedicated infrastructure, premium SLA",
          availability: "https://schema.org/InStock",
          url: "https://magistrala.absmach.eu/contact",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: "Contact sales for custom pricing",
          },
        },
      ],
      author: { "@id": "https://magistrala.absmach.eu/#org" },
      creator: { "@id": "https://magistrala.absmach.eu/#org" },
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": "https://magistrala.absmach.eu/#source",
      name: "Magistrala",
      codeRepository: "https://github.com/absmach/magistrala",
      programmingLanguage: "Go",
      license: "https://opensource.org/licenses/Apache-2.0",
      creator: { "@id": "https://magistrala.absmach.eu/#org" },
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
