import { CountdownTimer } from "@/components/launch/CountdownTimer";
import { getRemainingTime, launchIsoString, launchTimestamp } from "@/lib/launch";

function formatLaunchDate() {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Helsinki"
  }).format(new Date(launchTimestamp));
}

const launchFocusItems = [
  "IFC version comparison",
  "Critical change visibility",
  "Clear project reports"
];

export function ComingSoonHomepage() {
  const launchDateLabel = formatLaunchDate();
  const initialRemaining = getRemainingTime();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <main id="main-content" className="coming-soon-page">
        <section className="coming-soon-hero" aria-labelledby="coming-soon-title">
          <div className="wrap coming-soon-shell">
            <header className="coming-soon-nav" aria-label="Pre-launch header">
              <a className="logo" href="#main-content">
                <span>BIM</span>Spect
              </a>
              <a className="coming-soon-nav-link" href="mailto:hello@bimspect.com">
                hello@bimspect.com
              </a>
            </header>

            <div className="coming-soon-grid">
              <div className="coming-soon-copy">
                <p className="eyebrow">Pre-launch access</p>
                <h1 id="coming-soon-title">
                  BIMSpect is preparing to launch.
                </h1>
                <p className="coming-soon-lead">
                  We are getting the final BIMSpect experience ready for BIM
                  coordinators, design managers and contractors who need clearer
                  visibility into IFC model changes.
                </p>
                <p className="coming-soon-body">
                  The full website will open automatically on{" "}
                  <strong>{launchDateLabel}</strong>. Until then, you can request
                  professional access or talk with us about a project analysis.
                </p>
                <div className="coming-soon-actions">
                  <a className="btn btn-primary" href="mailto:hello@bimspect.com">
                    Request early access
                  </a>
                  <a className="btn btn-secondary" href="mailto:hello@bimspect.com">
                    Book a walkthrough
                  </a>
                </div>
                <ul className="coming-soon-focus" aria-label="BIMSpect launch focus">
                  {launchFocusItems.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <aside
                className="coming-soon-panel"
                aria-label="BIMSpect launch countdown"
              >
                <div className="coming-soon-panel-top">
                  <div className="hero-video-dots" aria-hidden="true">
                    <span className="dot dot-r" />
                    <span className="dot dot-y" />
                    <span className="dot dot-g" />
                  </div>
                  <span>Launch schedule</span>
                </div>
                <div className="coming-soon-panel-body">
                  <p className="eyebrow">Public launch</p>
                  <h2>{launchDateLabel}</h2>
                  <CountdownTimer initialRemaining={initialRemaining} />
                  <p className="coming-soon-timestamp">
                    Launch configuration: <code>{launchIsoString}</code>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
