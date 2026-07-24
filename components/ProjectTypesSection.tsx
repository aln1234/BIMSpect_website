import { projectTypeCards } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function ProjectTypesSection() {
  return (
    <section id="project-types" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Project workflows
          </Reveal>
          <Reveal as="h2" delay={90}>
            Applicable to IFC-based project workflows
          </Reveal>
          <Reveal as="p" className="section-header-desc" delay={160}>
            BIMSpect is designed for projects where multiple disciplines release
            IFC models and model changes need to be understood beyond the BIM
            specialist role.
          </Reveal>
        </div>
        <StaggerContainer className="project-grid">
          {projectTypeCards.map((card) => (
            <div className="project-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
