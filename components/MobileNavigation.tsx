import { navLinks } from "./data";

type MobileNavigationProps = {
  open: boolean;
  onNavigate: () => void;
};

export function MobileNavigation({ open, onNavigate }: MobileNavigationProps) {
  return (
    <nav
      id="mobile-nav"
      className={["mobile-nav", open ? "open" : ""].filter(Boolean).join(" ")}
      aria-label="Mobile navigation"
      aria-hidden={!open}
    >
      <div className="mobile-nav-inner">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={onNavigate}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={onNavigate}>
          Request access
        </a>
      </div>
    </nav>
  );
}
