/* global React */

function Footer() {
  return (
    <footer className="saco-footer bg-dark">
      <div className="container">
        <hr className="road-line-h full" style={{ marginBottom: 56 }} />
        <div className="saco-footer-grid">
          <div>
            <img src="../../assets/logo-light.svg" alt="SACO Autoškola" width="140" height="50" />
            <p className="saco-footer-blurb">
              Rodinná autoškola v Žiari nad Hronom. Učíme jazdiť od roku 2003.
            </p>
          </div>
          <div>
            <div className="saco-footer-h">Kurzy</div>
            <ul>
              <li><a href="#kurzy">Skupina B</a></li>
              <li><a href="#kurzy">Skupina A</a></li>
              <li><a href="#kurzy">Skupina A2</a></li>
              <li><a href="#kurzy">Skupina A1</a></li>
            </ul>
          </div>
          <div>
            <div className="saco-footer-h">Kontakt</div>
            <ul>
              <li>Rudenkova 816/19<br/>965 01 Žiar nad Hronom</li>
              <li><a href="tel:+421905650761">0905 650 761</a></li>
              <li><a href="mailto:info@saco.sk">info@saco.sk</a></li>
              <li><a href="https://facebook.com/autoskola.saco" rel="noopener">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="saco-footer-bottom">
          <span>© {new Date().getFullYear()} SACO s.r.o.</span>
          <span aria-hidden="true">·</span>
          <span>IČO 46008101</span>
          <span aria-hidden="true">·</span>
          <span>Od roku 2003</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
