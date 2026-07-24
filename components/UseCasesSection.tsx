import { useCases } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function UseCasesSection() {
  return (
    <section id="use-cases" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Use cases
          </Reveal>
          <Reveal as="h2" delay={90}>
            Built for three roles in design and construction
          </Reveal>
        </div>
        <StaggerContainer className="use-cases">
          {useCases.map((useCase) => (
            <div className="use-case" key={useCase.tag}>
              <div className="use-case-tag">{useCase.tag}</div>
              <h3>{useCase.title}</h3>
              <p>{useCase.body}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
