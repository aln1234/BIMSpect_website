import { securityItems } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function SecuritySection() {
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
            IFC models contain sensitive project information. We take data handling
            seriously and answer the questions B2B buyers need answered.
          </Reveal>
        </div>
        <StaggerContainer className="security-grid">
          {securityItems.map((item) => (
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
