import { quotes } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function SocialProofSection() {
  return (
    <section id="proof" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Pilot feedback
          </Reveal>
          <Reveal as="h2" delay={90}>
            Pilot users reported that BIMSpect made design progress and model
            maturity more visible.
          </Reveal>
        </div>
        <StaggerContainer className="quotes">
          {quotes.map((quote) => (
            <div className="quote-card" key={quote.initials}>
              <p className="quote-text">{quote.quote}</p>
              <div className="quote-meta">
                <div className="quote-avatar">{quote.initials}</div>
                <div>
                  <div className="quote-name">{quote.name}</div>
                  <div className="quote-role">{quote.role}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
