import { HeroVideoPreview } from "@/components/hero/HeroVideoPreview";

export function TechnicalHeroSection() {
  return (
    <section id="home">
      <div className="wrap hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow hero-load hero-load-1">IFC Model Change Analysis</p>
            <h1 className="hero-load hero-load-2">
              Technical preview for IFC model <em>change analysis.</em>
            </h1>
            <p className="hero-sub hero-load hero-load-3">
              This pre-launch technical website shows how BIMSpect compares IFC
              model versions, structures added, deleted and modified objects, and
              prepares model-change data for coordination review.
            </p>
            <p className="hero-sub hero-sub-small hero-load hero-load-4">
              The product is being prepared for public commercial launch while the
              technical workflow, research background and data handling information
              remain visible.
            </p>
            <div className="hero-ctas hero-load hero-load-5">
              <a className="btn btn-primary" href="#workflow">
                View workflow
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
