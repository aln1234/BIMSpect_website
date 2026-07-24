import { workflowSteps } from "./data";
import { OutputMetricsSection } from "./OutputMetricsSection";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function HowItWorksSection() {
  return (
    <section id="product" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Product
          </Reveal>
          <Reveal as="h2" delay={90}>
            IFC model change analysis for design and construction management
          </Reveal>
          <Reveal as="p" className="section-header-desc" delay={160}>
            BIMSpect analyses changes between IFC model versions and turns technical
            model differences into clear, management-level insights.
          </Reveal>
        </div>

        <div className="product-layout">
          <div>
            <Reveal as="p" className="eyebrow product-column-eyebrow">
              How it works
            </Reveal>
            <StaggerContainer className="steps" stagger={85}>
              {workflowSteps.map((step) => (
                <div className="step" key={step.number}>
                  <div className="step-num">{step.number}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </div>
              ))}
            </StaggerContainer>
          </div>

          <OutputMetricsSection />
        </div>
      </div>
    </section>
  );
}
