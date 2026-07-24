import { roleCards } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function RolesSection() {
  return (
    <section id="roles" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Roles
          </Reveal>
          <Reveal as="h2" delay={90}>
            Built for the design and construction team
          </Reveal>
        </div>
        <StaggerContainer className="role-grid">
          {roleCards.map((card) => (
            <div className="role-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
