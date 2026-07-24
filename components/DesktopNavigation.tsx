import { commercialNavLinks } from "./data";

type NavigationLink = {
  href: string;
  label: string;
};

type DesktopNavigationProps = {
  links?: NavigationLink[];
};

export function DesktopNavigation({
  links = commercialNavLinks
}: DesktopNavigationProps) {
  return (
    <div className="nav-links">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
}
