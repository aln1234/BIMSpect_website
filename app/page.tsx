import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductScreenshotsSection } from "@/components/ProductScreenshotsSection";
import { SampleReportSection } from "@/components/SampleReportSection";
import { SecuritySection } from "@/components/SecuritySection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { TeamSection } from "@/components/TeamSection";
import { UseCasesSection } from "@/components/UseCasesSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <ProductScreenshotsSection />
        <HowItWorksSection />
        <UseCasesSection />
        <SampleReportSection />
        <SocialProofSection />
        <PricingSection />
        <SecuritySection />
        <TeamSection />
      </main>
      <ContactCTA />
      <Footer />
    </>
  );
}
