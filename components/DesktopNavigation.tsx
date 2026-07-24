import { navLinks } from "./data";

export function DesktopNavigation() {
  return (
    <div className="nav-links">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
}
