"use client";

import type { CSSProperties } from "react";
import { useInViewOnce } from "./Reveal";

type AnimatedProgressBarProps = {
  value: number;
  color?: string;
  className?: string;
  fillClassName?: string;
  delay?: number;
};

export function AnimatedProgressBar({
  value,
  color,
  className = "output-bar",
  fillClassName = "output-bar-fill",
  delay = 0
}: AnimatedProgressBarProps) {
  const [ref, visible] = useInViewOnce<HTMLDivElement>();
  const styles = {
    width: `${value}%`,
    background: color,
    "--progress-delay": `${delay}ms`
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={[
        "animated-progress",
        visible ? "is-visible" : "",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={fillClassName} style={styles} />
    </div>
  );
}
