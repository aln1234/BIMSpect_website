"use client";

import { useEffect, useState } from "react";
import { getRemainingTime, launchTimestamp, type RemainingTime } from "@/lib/launch";

type CountdownTimerProps = {
  initialRemaining: RemainingTime;
};

const units: Array<keyof Omit<RemainingTime, "totalMs">> = [
  "days",
  "hours",
  "minutes",
  "seconds"
];

function getCurrentRemaining() {
  return getRemainingTime(new Date());
}

export function CountdownTimer({ initialRemaining }: CountdownTimerProps) {
  const [remaining, setRemaining] = useState(initialRemaining);

  useEffect(() => {
    const tick = () => {
      const nextRemaining = getCurrentRemaining();
      setRemaining(nextRemaining);

      if (nextRemaining.totalMs <= 0) {
        window.location.reload();
      }
    };
    const interval = window.setInterval(tick, 1000);

    tick();

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="launch-countdown"
      aria-label={`Time remaining until launch at ${new Date(
        launchTimestamp
      ).toISOString()}`}
    >
      {units.map((unit) => (
        <div className="launch-countdown-item" key={unit}>
          <strong>{remaining[unit].toString().padStart(2, "0")}</strong>
          <span>{unit}</span>
        </div>
      ))}
    </div>
  );
}
