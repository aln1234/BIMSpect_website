import { footerLinks, technicalFooterLinks } from "./data";

type FooterProps = {
  variant?: "commercial" | "technical";
};

export function Footer({ variant = "commercial" }: FooterProps) {
  const links = variant === "technical" ? technicalFooterLinks : footerLinks;

  return (
    <footer aria-label="Site footer">
      <div className="wrap footer-inner">
        <a className="logo" href="#home">
          <span>BIM</span>Spect
        </a>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-copy">© 2026 BIMSpect Ltd</p>
      </div>
    </footer>
  );
}
