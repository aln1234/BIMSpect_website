import { researchFacts } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function AaltoResearchSection() {
  return (
    <section id="research" className="section research-section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Research &amp; development
          </Reveal>
          <Reveal as="h2" delay={90}>
            Developed from Aalto University Research to Business work
          </Reveal>
          <Reveal as="p" className="section-header-desc section-header-desc-wide" delay={160}>
            The current technical preview presents the product, workflow and
            research context before BIMSpect opens as a commercial website.
          </Reveal>
        </div>
        <StaggerContainer className="research-grid">
          {researchFacts.map((fact) => (
            <div className="research-card" key={fact.title}>
              <h3>{fact.title}</h3>
              <p>{fact.body}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
