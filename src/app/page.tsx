import { PoweredBy } from '@/components/powered-by';
import { BenefitsSection } from '@/components/section-benefits';
import { ComingSoonBanner } from '@/components/section-coming-soon';
import { FAQSection } from '@/components/section-faq';
import { FeaturesSection } from '@/components/section-features';
import { Hero } from '@/components/section-hero';
import { IntroductionSection } from '@/components/section-introduction';
import { UseCasesSection } from '@/components/section-usecase';

export default function Home() {
  return (
    <div className="min-h-screen constant mx-auto">
      <Hero />
      <IntroductionSection />
      <BenefitsSection />
      <PoweredBy />
      <FeaturesSection />
      {/* <NextFeaturesSection /> */}
      <UseCasesSection />

      <ComingSoonBanner />
      {/* <PricingSection /> */}
      <FAQSection />
    </div>
  );
}
