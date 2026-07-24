import { securityItems } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

type SecuritySectionProps = {
  variant?: "commercial" | "technical";
};

const technicalSecurityItems = securityItems.map((item) => {
  if (item.title === "NDA and DPA") {
    return {
      ...item,
      body:
        "Project-specific non-disclosure and data processing terms are part of the data handling work for sensitive IFC models."
    };
  }

  if (item.title === "Who sees your files?") {
    return {
      ...item,
      body:
        "Only the BIMSpect team processes models used for the agreed analysis context. No third-party access without written consent."
    };
  }

  return item;
});

export function SecuritySection({ variant = "commercial" }: SecuritySectionProps) {
  const isTechnical = variant === "technical";
  const items = isTechnical ? technicalSecurityItems : securityItems;

  return (
    <section id="security" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Security &amp; data
          </Reveal>
          <Reveal as="h2" delay={90}>
            How we handle your project files
          </Reveal>
          <Reveal as="p" className="section-header-desc section-header-desc-narrow" delay={160}>
            {isTechnical
              ? "IFC models contain sensitive project information. The technical preview describes how project files are processed and protected."
              : "IFC models contain sensitive project information. We take data handling seriously and answer the questions B2B buyers need answered."}
          </Reveal>
        </div>
        <StaggerContainer className="security-grid">
          {items.map((item) => (
            <div className="security-item" key={item.title}>
              <div className="security-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </StaggerContainer>
        <Reveal className="security-highlight" delay={120}>
          <div className="security-shield">🛡</div>
          <p>
            <strong>
              We do not use customer project files for marketing, public examples,
              benchmarking or AI model training without written permission.
            </strong>{" "}
            Your models remain yours. We process them for the analysis you requested
            and nothing else.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
