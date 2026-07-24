import { pricingPlans } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function PricingSection() {
  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Pricing &amp; access
          </Reveal>
          <Reveal as="h2" delay={90}>
            Professional access for organisations
          </Reveal>
          <Reveal as="p" className="section-header-desc section-header-desc-pricing" delay={160}>
            BIMSpect is available for professional use. Access is granted on
            request to ensure appropriate use and data handling.
          </Reveal>
        </div>

        <StaggerContainer className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div
              className={["pricing-card", plan.featured ? "featured" : ""]
                .filter(Boolean)
                .join(" ")}
              key={plan.tier}
            >
              <div className="pricing-tier">{plan.tier}</div>
              <div className="pricing-name">{plan.name}</div>
              <p className="pricing-desc">{plan.description}</p>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li className="pricing-feature" key={feature}>
                    <span className="pricing-feature-icon" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.price ? (
                <div className="pricing-price pricing-price-main">
                  {plan.price} <span>{plan.priceSuffix}</span>
                </div>
              ) : null}
              {plan.subDetail ? (
                <div className="pricing-price pricing-price-sub">{plan.subDetail}</div>
              ) : null}
              <div
                className={[
                  "pricing-price",
                  plan.price ? "pricing-price-detail" : "pricing-price-custom"
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {plan.detail}
              </div>
              <a className={plan.featured ? "btn-inv" : "btn btn-secondary"} href={plan.href}>
                {plan.cta}
              </a>
            </div>
          ))}
        </StaggerContainer>

        <Reveal className="access-form" delay={120}>
          <p className="eyebrow access-eyebrow">Request B2B access</p>
          <h3>Tell us about your organisation and intended use</h3>
          <div className="access-form-grid">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" placeholder="Organisation name" />
            </div>
            <div className="form-field">
              <label htmlFor="role">Role</label>
              <select id="role" defaultValue="BIM Coordinator">
                <option>BIM Coordinator</option>
                <option>Design Manager</option>
                <option>Project Manager</option>
                <option>Contractor / Site Manager</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="country">Country</label>
              <input id="country" type="text" placeholder="Country" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Work email</label>
              <input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div className="form-field">
              <label htmlFor="project-type">Project type</label>
              <input
                id="project-type"
                type="text"
                placeholder="e.g. Infrastructure, Building, Civil"
              />
            </div>
          </div>
          <div className="form-field form-field-full">
            <label htmlFor="expected-use">Expected use</label>
            <textarea
              id="expected-use"
              placeholder="Briefly describe your intended use, number of IFC models, and project context."
              rows={3}
            />
          </div>
          <div className="checkbox-field">
            <input type="checkbox" id="b2b-confirm" />
            <label htmlFor="b2b-confirm">
              I confirm I am requesting access on behalf of a professional organisation.
            </label>
          </div>
          <button className="btn btn-primary access-submit" type="button">
            Submit access request
          </button>
        </Reveal>
      </div>
    </section>
  );
}
