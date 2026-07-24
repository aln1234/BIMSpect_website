import { AnimatedProgressBar } from "./AnimatedProgressBar";
import {
  disciplineRows,
  reportContents,
  reportKpis,
  riskItems
} from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

type SampleReportSectionProps = {
  showActions?: boolean;
};

export function SampleReportSection({
  showActions = true
}: SampleReportSectionProps) {
  return (
    <section id="sample-report" className="section">
      <div className="wrap">
        <div className="section-header">
          <Reveal as="p" className="eyebrow">
            Sample report
          </Reveal>
          <Reveal as="h2" delay={90}>
            See what a BIMSpect Change Report looks like
          </Reveal>
          <Reveal as="p" className="section-header-desc section-header-desc-narrow" delay={160}>
            This anonymised example shows the output from a comparison between two
            model versions of a mid-size construction project.
          </Reveal>
        </div>

        <div className="report-preview">
          <Reveal className="report-mock report-reveal">
            <div className="report-mock-header">
              <span className="report-mock-title">
                BIMSpect Change Report · Project X · v4 → v5
              </span>
              <span className="report-badge">SAMPLE</span>
            </div>
            <div className="report-section">
              <div className="report-section-label">Change summary</div>
              <div className="report-kpi-row">
                {reportKpis.map((kpi) => (
                  <div className="report-kpi" key={kpi.label}>
                    <div className={`report-kpi-val ${kpi.className}`}>{kpi.value}</div>
                    <div className="report-kpi-lbl">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="report-section">
              <div className="report-section-label">Change intensity by discipline</div>
              <div className="disc-rows">
                {disciplineRows.map((row, index) => (
                  <div className="disc-row" key={row.name}>
                    <span className="disc-name">{row.name}</span>
                    <AnimatedProgressBar
                      className="disc-bar-bg"
                      fillClassName="disc-bar-fill"
                      value={row.progress}
                      delay={index * 90}
                    />
                    <span className="disc-count">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="report-section">
              <div className="report-section-label">Coordination risk indicators</div>
              <div className="risk-items">
                {riskItems.map((item) => (
                  <div className="risk-item" key={item}>
                    <span aria-hidden="true">⚠️</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="report-info">
            <Reveal as="h2">Management-level insight from technical model data</Reveal>
            <Reveal as="p" delay={90}>
              The report is designed for design coordination meetings, not just BIM
              specialists. Every section is readable by project managers and
              contractors without IFC expertise.
            </Reveal>
            <StaggerContainer className="report-contents" delay={100} stagger={60}>
              {reportContents.map((item) => (
                <div className="report-item" key={item}>
                  {item}
                </div>
              ))}
            </StaggerContainer>
            {showActions ? (
              <Reveal className="report-ctas" delay={180}>
                <a className="btn btn-primary" href="#contact">
                  Request analysis for your project
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Download sample PDF
                </a>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
