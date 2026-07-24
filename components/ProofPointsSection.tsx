import { proofPoints } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function ProofPointsSection() {
  return (
    <section id="proof" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            What BIMSpect helps teams measure
          </Reveal>
          <Reveal as="h2" delay={90}>
            Make design change visible and comparable
          </Reveal>
        </div>
        <StaggerContainer className="proof-grid">
          {proofPoints.map((point) => (
            <div className="proof-card" key={point.title}>
              <div className="proof-value">{point.value}</div>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
