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
