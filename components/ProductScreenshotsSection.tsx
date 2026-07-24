import Image from "next/image";
import { screenshots } from "./data";
import { Reveal } from "./Reveal";

export function ProductScreenshotsSection() {
  return (
    <section id="product-screenshots" className="screenshots-section">
      <div className="wrap">
        <Reveal as="p" className="eyebrow screenshots-eyebrow">
          Product view
        </Reveal>
        <Reveal as="h2" className="screenshots-heading" delay={90}>
          See the IFC change workflow in action
        </Reveal>
        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <Reveal
              as="figure"
              className="screenshot-card"
              delay={index * 110}
              key={screenshot.src}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                sizes="(max-width: 768px) calc(100vw - 40px), 50vw"
                priority={index === 0}
              />
              <figcaption>
                <strong>{screenshot.label}</strong> {screenshot.body}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
