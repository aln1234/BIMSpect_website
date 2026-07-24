export const DEFAULT_LAUNCH_AT = "2026-09-01T00:00:00+03:00";

function resolveLaunchIsoString() {
  const configuredLaunch = process.env.NEXT_PUBLIC_LAUNCH_AT;

  if (!configuredLaunch) {
    return DEFAULT_LAUNCH_AT;
  }

  if (Number.isNaN(Date.parse(configuredLaunch))) {
    return DEFAULT_LAUNCH_AT;
  }

  return configuredLaunch;
}

export const launchIsoString = resolveLaunchIsoString();
export const launchTimestamp = Date.parse(launchIsoString);

export type RemainingTime = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function hasLaunched(now: Date = new Date()) {
  return now.getTime() >= launchTimestamp;
}

export function getRemainingTime(now: Date = new Date()): RemainingTime {
  const totalMs = Math.max(0, launchTimestamp - now.getTime());
  const totalSeconds = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds
  };
}
