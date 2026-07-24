import { trustMarkers } from "./data";

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="BIMSpect trust markers">
      <div className="wrap trust-items">
        {trustMarkers.map((marker) => (
          <span className="trust-item" key={marker}>
            {marker}
          </span>
        ))}
      </div>
    </section>
  );
}
