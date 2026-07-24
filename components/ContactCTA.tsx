import { Reveal } from "./Reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="cta-band">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Contact
        </Reveal>
        <Reveal as="h2" delay={90}>
          Reduce coordination risk. Increase design visibility.
        </Reveal>
        <Reveal as="p" delay={170}>
          We work with BIM coordinators, design managers and contractors. Tell us
          about your project and we will show how BIMSpect can compare your own IFC
          model versions and produce a management-level change report.
        </Reveal>
        <Reveal className="cta-band-btns" delay={260}>
          <a className="btn-white" href="mailto:hello@bimspect.com">
            Request project analysis
          </a>
          <a className="btn-outline-white" href="mailto:hello@bimspect.com">
            Book a product walkthrough
          </a>
        </Reveal>
        <Reveal as="p" className="cta-meta" delay={340}>
          hello@bimspect.com · A Grid, Otakaari 5, 02150 Espoo, Finland
        </Reveal>
      </div>
    </section>
  );
}
