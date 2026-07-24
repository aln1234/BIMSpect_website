"use client";

import { useEffect, useRef } from "react";

type ProductVideoModalProps = {
  open: boolean;
  onClose: () => void;
  videoSrc: string;
  posterSrc?: string;
};

export function ProductVideoModal({
  open,
  onClose,
  videoSrc,
  posterSrc
}: ProductVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => undefined);
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      video?.pause();
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="video-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-video-title"
      >
        <div className="video-modal-header">
          <div>
            <p className="eyebrow">Product walkthrough</p>
            <h2 id="product-video-title">Watch the full BIMSpect demo</h2>
          </div>
          <button
            ref={closeButtonRef}
            className="video-modal-close"
            type="button"
            aria-label="Close product video"
            onClick={onClose}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <line
                x1="3"
                y1="3"
                x2="15"
                y2="15"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <line
                x1="15"
                y1="3"
                x2="3"
                y2="15"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <video
          ref={videoRef}
          className="video-modal-player"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          controls
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  );
}
