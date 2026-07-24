import { AnimatedProgressBar } from "./AnimatedProgressBar";
import { outputMetrics } from "./data";
import { Reveal } from "./Reveal";
import { StaggerContainer } from "./StaggerContainer";

export function OutputMetricsSection() {
  return (
    <div>
      <Reveal as="p" className="eyebrow product-column-eyebrow">
        What you get
      </Reveal>
      <StaggerContainer className="output-grid" stagger={80}>
        {outputMetrics.map((metric, index) => (
          <div className="output-card" key={metric.label}>
            <div className="output-label">{metric.label}</div>
            <div
              className={["output-value", metric.valueClass]
                .filter(Boolean)
                .join(" ")}
            >
              {metric.value}
            </div>
            <div className="output-desc">{metric.description}</div>
            <AnimatedProgressBar
              value={metric.progress}
              color={metric.color}
              delay={index * 80}
            />
          </div>
        ))}
      </StaggerContainer>
    </div>
  );
}
