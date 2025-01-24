import { BenefitsSection } from "@/components/benefits-card";
import { ComingSoonBanner } from "@/components/coming-soonbanner";
import { FAQSection } from "@/components/faq-card";
import {
  FeaturesSection,
  ProductFeatureCard,
} from "@/components/features-card";
import { NextFeaturesSection } from "@/components/future-features-card";
import { Hero } from "@/components/hero";
import { PoweredBy } from "@/components/powered-by";
import { heroData } from "@/lib/constants";
import { UseCasesSection } from "@/components/usecase-tab";

export default function Home() {
  return (
    <div className="min-h-screen constant mx-auto">
      {/* Hero Section */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        buttonText={heroData.buttonText}
        buttonLink={heroData.buttonLink}
        imageUrl={heroData.imageUrl}
      />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Powered By Section */}
      <PoweredBy />

      {/* Features Section */}
      <FeaturesSection />

      {/* Future Features Section */}
      <NextFeaturesSection />

      {/* Use Cases Tabs */}
      <UseCasesSection />

      {/* Pricing Section*/}

      {/* <PricingSection plans={pricingData} /> */}

      {/* Coming Soon Banner Section */}
      <ComingSoonBanner />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
