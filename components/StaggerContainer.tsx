"use client";

import {
  Children,
  cloneElement,
  createElement,
  isValidElement,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode
} from "react";
import { useInViewOnce } from "./Reveal";

type StaggerContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

type StaggerChildProps = {
  className?: string;
  style?: CSSProperties;
};

export function StaggerContainer({
  as = "div",
  children,
  className = "",
  delay = 0,
  stagger = 90
}: StaggerContainerProps) {
  const [ref, visible] = useInViewOnce();
  const classes = ["stagger-container", visible ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  const staggeredChildren = Children.map(children, (child, index) => {
    if (!isValidElement<StaggerChildProps>(child)) {
      return child;
    }

    const element = child as ReactElement<StaggerChildProps>;
    const childClasses = [element.props.className, "stagger-child"]
      .filter(Boolean)
      .join(" ");
    const childStyle = {
      ...element.props.style,
      "--stagger-delay": `${delay + index * stagger}ms`
    } as CSSProperties;

    return cloneElement(element, {
      className: childClasses,
      style: childStyle
    });
  });

  return createElement(as, { ref, className: classes }, staggeredChildren);
}
