import { problemCards } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function ProblemSection() {
  return (
    <section id="problem" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            The problem
          </Reveal>
          <Reveal as="h2" delay={90}>
            IFC models change constantly. Project decisions rarely see the change
            clearly enough.
          </Reveal>
          <Reveal as="p" className="section-header-desc section-header-desc-wide" delay={160}>
            Design teams release new model versions throughout the project. Without
            structured comparison, coordination meetings depend on manual checking,
            fragmented comments and assumptions about what has actually changed.
          </Reveal>
        </div>
        <StaggerContainer className="problem-grid">
          {problemCards.map((card) => (
            <div className="problem-cell" key={card.title}>
              <div className="problem-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
