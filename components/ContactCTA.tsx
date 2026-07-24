import { Reveal } from "./Reveal";

export function ContactCTA() {
  return (
    <section id="contact" className="cta-band">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Contact
        </Reveal>
        <Reveal as="h2" delay={90}>
          Start with a project analysis or a product walkthrough
        </Reveal>
        <Reveal as="p" delay={170}>
          We work with BIM coordinators, design managers and contractors. Tell us
          about your project and we will show you what BIMSpect can do with your
          own IFC files.
        </Reveal>
        <Reveal className="cta-band-btns" delay={260}>
          <a className="btn-white" href="mailto:hello@bimspect.com">
            Request professional access
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
