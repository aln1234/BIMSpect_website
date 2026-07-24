"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ProductVideoModal } from "../ProductVideoModal";

const VIDEO_SRC = "/videos/video.mp4";
const POSTER_SRC = "/videos/video.webp";

const benefits = [
  "Compare IFC versions",
  "Identify critical changes",
  "Generate clear reports"
];

function shouldReduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroVideoPreview() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  const playPreview = useCallback(() => {
    const video = videoRef.current;
    if (!video || modalOpen || reducedMotion) {
      return;
    }

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => undefined);
    }
  }, [modalOpen, reducedMotion]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setReducedMotion(shouldReduceMotion());
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const element = cardRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      { threshold: [0, 0.35, 0.7] }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (inView && !modalOpen && !reducedMotion) {
      playPreview();
    } else {
      video.pause();
    }
  }, [inView, modalOpen, playPreview, reducedMotion]);

  const openModal = () => {
    videoRef.current?.pause();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    window.requestAnimationFrame(() => {
      triggerRef.current?.focus();
      if (inView && !reducedMotion) {
        playPreview();
      }
    });
  };

  return (
    <aside
      className="hero-video-shell"
      aria-label="Supplementary BIMSpect product video preview"
    >
      <div
        ref={cardRef}
        className={["hero-video-card", ready ? "is-ready" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="hero-video-topbar">
          <div className="hero-video-dots" aria-hidden="true">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
          </div>
          <span className="hero-video-label">BIMSpect product walkthrough</span>
        </div>
        <div className="hero-video-stage">
          {!ready ? <div className="hero-video-loading">Loading preview</div> : null}
          <video
            ref={videoRef}
            className="hero-video"
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            autoPlay={!reducedMotion}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Muted preview of the BIMSpect product walkthrough"
            onCanPlay={() => {
              setReady(true);
              playPreview();
            }}
          />
          <div className="hero-video-overlay">
            <p>BIMSpect product walkthrough</p>
            <h2>See model changes before they become site problems.</h2>
            <span>
              Compare IFC versions, identify critical changes and generate clear
              project reports.
            </span>
          </div>
        </div>
      </div>
      <div className="hero-video-actions">
        <button
          ref={triggerRef}
          className="btn btn-primary hero-video-button"
          type="button"
          onClick={openModal}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="8"
              cy="8"
              r="7.25"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M6.5 5.5L11 8L6.5 10.5V5.5Z" fill="currentColor" />
          </svg>
          Watch full demo
        </button>
        <ul className="hero-video-benefits" aria-label="BIMSpect product benefits">
          {benefits.map((benefit) => (
            <li key={benefit}>
              <span aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <ProductVideoModal
        open={modalOpen}
        onClose={closeModal}
        videoSrc={VIDEO_SRC}
        posterSrc={POSTER_SRC}
      />
    </aside>
  );
}
