const diffRows = [
  { type: "ctx", line: "12", code: "#IFCWALL('3d7e…', STRUCTURAL)" },
  { type: "del", line: "−", code: "#IFCBEAM('a91c…', 400x200mm, GL. 4)" },
  { type: "add", line: "+", code: "#IFCBEAM('a91c…', 300x200mm, GL. 4)" },
  { type: "ctx", line: "15", code: "#IFCSLAB('b02f…', FLOOR, CONCRETE)" },
  { type: "add", line: "+", code: "#IFCDOOR('f3c1…', 900x2100mm, NEW)" },
  { type: "del", line: "−", code: "#IFCWINDOW('d44a…', 1200x900mm)" },
  { type: "ctx", line: "22", code: "#IFCCOLUMN('e77b…', HEA200, S355)" }
];

const badges = [
  { className: "badge-add", label: "+14 added" },
  { className: "badge-del", label: "−6 deleted" },
  { className: "badge-mod", label: "~31 modified" }
];

export function DiffPreview() {
  return (
    <div className="diff-card hero-diff">
      <div className="diff-header">
        <div className="dot dot-r" />
        <div className="dot dot-y" />
        <div className="dot dot-g" />
        <span className="diff-filename">model_v4 → model_v5.ifc</span>
      </div>
      <div className="diff-body">
        {diffRows.map((row, index) => (
          <div
            key={`${row.line}-${row.code}`}
            className={`diff-row diff-${row.type}`}
            style={{ "--diff-delay": `${520 + index * 70}ms` } as CSSProperties}
          >
            <div className="diff-ln">{row.line}</div>
            <div className="diff-code">{row.code}</div>
          </div>
        ))}
      </div>
      <div className="diff-summary">
        {badges.map((badge, index) => (
          <span
            key={badge.label}
            className={`diff-badge ${badge.className}`}
            style={{ "--diff-delay": `${1050 + index * 80}ms` } as CSSProperties}
          >
            {badge.label}
          </span>
        ))}
      </div>
    </div>
  );
}
import type { CSSProperties } from "react";
