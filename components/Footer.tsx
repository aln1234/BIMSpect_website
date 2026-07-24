export function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="wrap footer-inner">
        <a className="logo" href="#home">
          <span>BIM</span>Spect
        </a>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#sample-report">Sample Report</a>
            </li>
            <li>
              <a href="#security">Security &amp; Data</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/bimspect"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer-copy">© 2026 BIMSpect Ltd</p>
      </div>
    </footer>
  );
}
