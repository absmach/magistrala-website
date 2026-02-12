import { HeroSection } from "@/components/landing/hero";
import { PartnersMarquee } from "@/components/landing/partners";
import { FeaturesSection } from "@/components/landing/features";
import { WhyMagistrala } from "@/components/landing/why-magistrala";
import { GlobalDeployments } from "@/components/landing/deployments";
import { UseCases } from "@/components/landing/use-cases";
import { SuccessStories } from "@/components/landing/success-stories";
import { PricingSection } from "@/components/landing/pricing";
import { FAQSection } from "@/components/landing/faq";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { ScrollToTop } from "@/components/landing/scroll-to-top";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PartnersMarquee />
      <FeaturesSection />
      <WhyMagistrala />
      <GlobalDeployments />
      <UseCases />
      <SuccessStories />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
