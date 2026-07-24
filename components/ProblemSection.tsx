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
            Design teams produce new model versions throughout the project — but
            comparing them is manual and slow.
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
