import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductScreenshotsSection } from "@/components/ProductScreenshotsSection";
import { ProjectTypesSection } from "@/components/ProjectTypesSection";
import { ProofPointsSection } from "@/components/ProofPointsSection";
import { RolesSection } from "@/components/RolesSection";
import { SampleReportSection } from "@/components/SampleReportSection";
import { SecuritySection } from "@/components/SecuritySection";
import { TeamSection } from "@/components/TeamSection";
import { TrustStrip } from "@/components/TrustStrip";
import { WorkflowSection } from "@/components/WorkflowSection";

export function FullBimspectSite() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <ProblemSection />
        <WorkflowSection />
        <BenefitsSection />
        <ProductScreenshotsSection />
        <RolesSection />
        <ProjectTypesSection />
        <SampleReportSection />
        <ProofPointsSection />
        <SecuritySection />
        <PricingSection />
        <TeamSection />
      </main>
      <ContactCTA />
      <Footer />
    </>
  );
}
