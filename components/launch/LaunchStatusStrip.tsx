import { CountdownTimer } from "@/components/launch/CountdownTimer";
import { getRemainingTime, launchIsoString, launchTimestamp } from "@/lib/launch";

function formatLaunchDate() {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Helsinki"
  }).format(new Date(launchTimestamp));
}

export function LaunchStatusStrip() {
  return (
    <section className="launch-status-strip" aria-label="BIMSpect launch status">
      <div className="wrap launch-status-inner">
        <div>
          <p className="eyebrow">Technical website</p>
          <h2>Public commercial launch is scheduled for {formatLaunchDate()}.</h2>
          <p>
            Until then, this page keeps the product workflow, research background,
            screenshots, sample report and data handling information visible.
          </p>
        </div>
        <div className="launch-status-countdown">
          <CountdownTimer initialRemaining={getRemainingTime()} />
          <p>
            Launch configuration: <code>{launchIsoString}</code>
          </p>
        </div>
      </div>
    </section>
  );
}
