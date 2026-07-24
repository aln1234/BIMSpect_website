import { commercialNavLinks } from "./data";

type NavigationLink = {
  href: string;
  label: string;
};

type NavigationCta = {
  href: string;
  label: string;
} | null;

type MobileNavigationProps = {
  open: boolean;
  onNavigate: () => void;
  links?: NavigationLink[];
  cta?: NavigationCta;
};

export function MobileNavigation({
  open,
  onNavigate,
  links = commercialNavLinks,
  cta = { href: "#contact", label: "Request analysis" }
}: MobileNavigationProps) {
  return (
    <nav
      id="mobile-nav"
      className={["mobile-nav", open ? "open" : ""].filter(Boolean).join(" ")}
      aria-label="Mobile navigation"
      aria-hidden={!open}
    >
      <div className="mobile-nav-inner">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={onNavigate}>
            {link.label}
          </a>
        ))}
        {cta ? (
          <a className="btn btn-primary" href={cta.href} onClick={onNavigate}>
            {cta.label}
          </a>
        ) : null}
      </div>
    </nav>
  );
}
