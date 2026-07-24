import { teamMembers } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function TeamSection() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            About
          </Reveal>
          <Reveal as="h2" delay={90}>
            About BIMSpect
          </Reveal>
        </div>
        <Reveal className="about-origin about-origin-spaced">
          BIMSpect originated from an Aalto University Research to Business project
          and is being commercialised as an independent software company. Our focus
          is on making IFC model change analysis practically useful for construction
          project management — not just for BIM specialists.
        </Reveal>
        <StaggerContainer className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.initials}>
              <div className="team-initials">{member.initials}</div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
          <div className="team-card team-office-card">
            <div className="team-office-icon">🏢</div>
            <div className="team-office-address">
              BIMSpect Ltd
              <br />
              A Grid, Otakaari 5
              <br />
              02150 Espoo, Finland
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
