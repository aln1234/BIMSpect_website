import { benefitCards } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function BenefitsSection() {
  return (
    <section id="benefits" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Benefits
          </Reveal>
          <Reveal as="h2" delay={90}>
            Review changes faster. Discuss the right issues earlier.
          </Reveal>
        </div>
        <StaggerContainer className="benefit-grid">
          {benefitCards.map((card) => (
            <div className="benefit-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <ul className="benefit-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
