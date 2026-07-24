import { AaltoResearchSection } from "@/components/AaltoResearchSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LaunchStatusStrip } from "@/components/launch/LaunchStatusStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductScreenshotsSection } from "@/components/ProductScreenshotsSection";
import { ProofPointsSection } from "@/components/ProofPointsSection";
import { SampleReportSection } from "@/components/SampleReportSection";
import { SecuritySection } from "@/components/SecuritySection";
import { TeamSection } from "@/components/TeamSection";
import { TrustStrip } from "@/components/TrustStrip";
import { WorkflowSection } from "@/components/WorkflowSection";
import { TechnicalHeroSection } from "./TechnicalHeroSection";

export function PreLaunchTechnicalSite() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header variant="technical" />
      <main id="main-content">
        <TechnicalHeroSection />
        <LaunchStatusStrip />
        <TrustStrip />
        <ProblemSection />
        <WorkflowSection />
        <ProductScreenshotsSection />
        <ProofPointsSection />
        <SampleReportSection showActions={false} />
        <SecuritySection variant="technical" />
        <AaltoResearchSection />
        <TeamSection />
      </main>
      <Footer variant="technical" />
    </>
  );
}
