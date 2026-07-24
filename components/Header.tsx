"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { commercialNavLinks, technicalNavLinks } from "./data";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

type HeaderVariant = "commercial" | "technical";

type HeaderProps = {
  variant?: HeaderVariant;
};

export function Header({ variant = "commercial" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isTechnical = variant === "technical";
  const links = isTechnical ? technicalNavLinks : commercialNavLinks;
  const cta = isTechnical ? null : { href: "#contact", label: "Request analysis" };

  const closeMenu = useCallback((restoreFocus = false) => {
    setOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => buttonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, open]);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <nav className="primary-nav" aria-label="Main navigation">
        <div className="wrap nav-inner">
          <a className="logo" href="#home">
            <span>BIM</span>Spect
          </a>
          <DesktopNavigation links={links} />
          {cta ? (
            <a className="btn btn-primary nav-cta" href={cta.href}>
              {cta.label}
            </a>
          ) : null}
          <button
            ref={buttonRef}
            className="mobile-menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((current) => !current)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line
                    x1="2"
                    y1="2"
                    x2="16"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="2"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <rect y="3" width="18" height="1.5" rx=".75" fill="currentColor" />
                  <rect
                    y="8.25"
                    width="18"
                    height="1.5"
                    rx=".75"
                    fill="currentColor"
                  />
                  <rect
                    y="13.5"
                    width="18"
                    height="1.5"
                    rx=".75"
                    fill="currentColor"
                  />
                </>
              )}
            </svg>
            Menu
          </button>
        </div>
      </nav>
      <MobileNavigation
        open={open}
        onNavigate={() => closeMenu(false)}
        links={links}
        cta={cta}
      />
    </header>
  );
}
