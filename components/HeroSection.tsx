import { HeroVideoPreview } from "./hero/HeroVideoPreview";

export function HeroSection() {
  return (
    <section id="home">
      <div className="wrap hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow hero-load hero-load-1">IFC Model Change Analysis</p>
            <h1 className="hero-load hero-load-2">
              See what changed between IFC model <em>versions.</em>
            </h1>
            <p className="hero-sub hero-load hero-load-3">
              BIMSpect compares BIM/IFC model versions and produces management-level
              change reports for BIM coordinators, design managers and contractors.
            </p>
            <p className="hero-sub hero-sub-small hero-load hero-load-4">
              Save coordination meeting time, reduce manual model review work, and
              catch late design changes before they cause unexpected costs on site.
            </p>
            <div className="hero-ctas hero-load hero-load-5">
              <a className="btn btn-primary" href="#contact">
                Request professional access
              </a>
              <a className="btn btn-secondary" href="#sample-report">
                View sample report
              </a>
            </div>
          </div>

          <div className="hero-preview-wrap">
            <HeroVideoPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
