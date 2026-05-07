/* global React */

function Playground() {
  return (
    <section className="section bg-soft saco-playground" id="ihrisko">
      <div className="container saco-playground-grid">
        <div>
          <div className="eyebrow">Detské dopravné ihrisko</div>
          <hr className="road-line-h short" style={{ marginBottom: 16 }} />
          <h2>Pre najmenších vodičov.</h2>
          <p className="saco-section-lede" style={{ marginLeft: 0 }}>
            Vlastné dopravné ihrisko v Žiari, kde sa deti hravo naučia pravidlá cestnej premávky.
            Bicykle, kolobežky, dopravné značky a križovatky — všetko v zmenšenej mierke.
          </p>
          <ul className="saco-playground-list">
            <li>Pre školy a škôlky po dohode</li>
            <li>Lektori s pedagogickou praxou</li>
            <li>V areáli autoškoly v Žiari nad Hronom</li>
          </ul>
          <a className="btn btn-primary" href="#kontakt">Dohodni si návštevu</a>
        </div>

        <div className="saco-playground-vis" aria-hidden="true">
          <svg viewBox="0 0 320 280" preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="grass" width="14" height="14" patternUnits="userSpaceOnUse">
                <rect width="14" height="14" fill="#e8ecd9"/>
                <circle cx="3" cy="4" r="0.7" fill="#cdd6a8"/>
                <circle cx="9" cy="9" r="0.7" fill="#cdd6a8"/>
              </pattern>
            </defs>
            <rect width="320" height="280" rx="16" fill="url(#grass)"/>
            {/* roads */}
            <rect x="0"   y="120" width="320" height="40" fill="#3a4a64"/>
            <rect x="140" y="0"   width="40"  height="280" fill="#3a4a64"/>
            {/* dashed centre lines */}
            <g fill="#F59E0B">
              <rect x="20"  y="138" width="14" height="4"/>
              <rect x="50"  y="138" width="14" height="4"/>
              <rect x="80"  y="138" width="14" height="4"/>
              <rect x="216" y="138" width="14" height="4"/>
              <rect x="246" y="138" width="14" height="4"/>
              <rect x="276" y="138" width="14" height="4"/>
              <rect x="158" y="20"  width="4"  height="14"/>
              <rect x="158" y="50"  width="4"  height="14"/>
              <rect x="158" y="80"  width="4"  height="14"/>
              <rect x="158" y="196" width="4"  height="14"/>
              <rect x="158" y="226" width="4"  height="14"/>
              <rect x="158" y="256" width="4"  height="14"/>
            </g>
            {/* zebra crossing */}
            <g fill="#F5F5F1" opacity="0.9">
              <rect x="116" y="124" width="4" height="32"/>
              <rect x="124" y="124" width="4" height="32"/>
              <rect x="132" y="124" width="4" height="32"/>
            </g>
            {/* tiny car */}
            <g transform="translate(40,128)">
              <rect width="34" height="14" rx="3" fill="#2563EB"/>
              <rect x="6" y="2" width="22" height="6" rx="2" fill="#dbeafe"/>
              <circle cx="9" cy="14" r="3" fill="#0F0F14"/>
              <circle cx="25" cy="14" r="3" fill="#0F0F14"/>
            </g>
            {/* sign */}
            <g transform="translate(200,80)">
              <rect x="-1" y="0" width="2" height="22" fill="#6B6B73"/>
              <circle cx="0" cy="-4" r="9" fill="#F59E0B" stroke="#0E1B2E" strokeWidth="2"/>
              <text x="0" y="-1" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="9" fill="#0E1B2E">!</text>
            </g>
            {/* tree */}
            <g transform="translate(60,60)">
              <rect x="-2" y="14" width="4" height="10" fill="#7c5e3e"/>
              <circle cx="0" cy="8" r="14" fill="#7ea96a"/>
            </g>
            <g transform="translate(260,210)">
              <rect x="-2" y="14" width="4" height="10" fill="#7c5e3e"/>
              <circle cx="0" cy="8" r="14" fill="#7ea96a"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
window.Playground = Playground;
