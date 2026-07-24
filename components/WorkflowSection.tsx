import { workflowCards } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function WorkflowSection() {
  return (
    <section id="workflow" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Workflow
          </Reveal>
          <Reveal as="h2" delay={90}>
            A new IFC change management workflow
          </Reveal>
          <Reveal as="p" className="section-header-desc section-header-desc-wide" delay={160}>
            BIMSpect is not just a model viewer. It creates a repeatable workflow
            for comparing model versions, understanding change impact and preparing
            management-level design coordination decisions.
          </Reveal>
        </div>

        <StaggerContainer className="workflow-grid" stagger={85}>
          {workflowCards.map((card) => (
            <div className="workflow-card" key={card.number}>
              <div className="workflow-num">{card.number}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
