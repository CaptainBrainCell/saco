/* global React, Icons */
const { useState: useStateHero } = React;

function Hero({ onSubmitInterest }) {
  const [form, setForm] = useState({ meno: "", tel: "", kurz: "B" });
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    onSubmitInterest && onSubmitInterest(form);
    setTimeout(() => setSent(false), 2400);
  };
  return (
    <section className="section bg-dark saco-hero" id="top">
      <div className="container saco-hero-grid">
        <div className="saco-hero-copy">
          <div className="eyebrow on-dark">Autoškola v Žiari nad Hronom · od 2003</div>
          <h1>Naučíme vás bezpečne jazdiť.</h1>
          <hr className="road-line-h long" style={{ margin: "20px 0 24px" }} />
          <p className="saco-hero-lede">
            Rodinná autoškola SACO. Skupina B, motocykle A, A2, A1 a kondičné jazdy.
            Pokojné tempo, lektori z Žiaru, vlastné dopravné ihrisko pre deti.
          </p>
          <div className="saco-hero-actions">
            <a className="btn btn-accent" href="#kurzy">Vyber si kurz</a>
            <a className="btn btn-ghost on-dark" href="#postup">Ako to funguje</a>
          </div>
          <p className="saco-hero-proof">
            <span>Od roku 2003</span><span aria-hidden="true">·</span>
            <span>5 000+ absolventov</span><span aria-hidden="true">·</span>
            <span>Žiar nad Hronom</span>
          </p>
        </div>

        <div className="saco-hero-right">
          <div className="saco-hero-photo" role="img" aria-label="Auto v daždi">
            {/* Layered SVG composite — perspective road, halo headlights, wet asphalt sheen.
                Avoids flat outline-car cliché called out in the brief. */}
            <svg viewBox="0 0 480 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1a2c47"/>
                  <stop offset="0.6" stopColor="#0E1B2E"/>
                  <stop offset="1" stopColor="#06101c"/>
                </linearGradient>
                <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1a2c47"/>
                  <stop offset="1" stopColor="#0a1626"/>
                </linearGradient>
                <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stopColor="#F59E0B" stopOpacity="0.55"/>
                  <stop offset="0.5" stopColor="#F59E0B" stopOpacity="0.18"/>
                  <stop offset="1" stopColor="#F59E0B" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="halo2" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stopColor="#dbeafe" stopOpacity="0.45"/>
                  <stop offset="1" stopColor="#dbeafe" stopOpacity="0"/>
                </radialGradient>
              </defs>

              <rect width="480" height="380" fill="url(#sky)"/>

              {/* distant city haze */}
              <rect x="0" y="200" width="480" height="60" fill="#14253D" opacity="0.55"/>
              <g opacity="0.35" fill="#1f3358">
                <rect x="40"  y="180" width="22" height="40"/>
                <rect x="80"  y="170" width="14" height="50"/>
                <rect x="110" y="186" width="30" height="34"/>
                <rect x="150" y="172" width="18" height="48"/>
                <rect x="180" y="178" width="26" height="42"/>
                <rect x="240" y="176" width="20" height="44"/>
                <rect x="280" y="184" width="34" height="36"/>
                <rect x="330" y="170" width="16" height="50"/>
                <rect x="360" y="180" width="28" height="40"/>
                <rect x="410" y="178" width="22" height="42"/>
              </g>

              {/* road perspective */}
              <polygon points="0,380 480,380 320,220 160,220" fill="url(#road)"/>
              {/* wet asphalt sheen */}
              <polygon points="0,380 480,380 320,220 160,220" fill="#2563EB" opacity="0.06"/>

              {/* dashed centre-line — perspective */}
              <g fill="#F59E0B">
                <polygon points="237,232 243,232 245,250 235,250"/>
                <polygon points="234,272 246,272 250,300 230,300"/>
                <polygon points="228,322 252,322 258,360 222,360"/>
              </g>

              {/* shoulder lines */}
              <polygon points="160,222 165,222 100,378 88,378" fill="#F5F5F1" opacity="0.18"/>
              <polygon points="315,222 320,222 392,378 380,378" fill="#F5F5F1" opacity="0.18"/>

              {/* halos behind car */}
              <circle cx="200" cy="290" r="80" fill="url(#halo)"/>
              <circle cx="280" cy="290" r="80" fill="url(#halo)"/>

              {/* car silhouette */}
              <g>
                {/* shadow */}
                <ellipse cx="240" cy="332" rx="110" ry="10" fill="#000" opacity="0.55"/>
                {/* body */}
                <path d="M150 312 Q160 280 200 268 L290 268 Q330 278 340 312 L340 326 L150 326 Z" fill="#0b1322"/>
                {/* greenhouse */}
                <path d="M192 268 Q200 244 232 240 L268 240 Q294 246 300 268 Z" fill="#16263f"/>
                <path d="M198 266 Q205 250 232 246 L268 246 Q290 250 296 266 Z" fill="#2a3e60" opacity="0.7"/>
                {/* window split */}
                <line x1="246" y1="246" x2="246" y2="266" stroke="#0E1B2E" strokeWidth="2"/>
                {/* lower trim */}
                <rect x="150" y="320" width="190" height="6" fill="#06101c"/>
                {/* headlights */}
                <ellipse cx="170" cy="298" rx="10" ry="5" fill="#fff8e0"/>
                <ellipse cx="320" cy="298" rx="10" ry="5" fill="#fff8e0"/>
                <ellipse cx="170" cy="298" rx="6" ry="3" fill="#F59E0B"/>
                <ellipse cx="320" cy="298" rx="6" ry="3" fill="#F59E0B"/>
                {/* tail accent */}
                <rect x="155" y="312" width="14" height="3" fill="#dc2626" opacity="0.85"/>
                <rect x="321" y="312" width="14" height="3" fill="#dc2626" opacity="0.85"/>
                {/* wheels */}
                <circle cx="180" cy="328" r="14" fill="#000"/>
                <circle cx="180" cy="328" r="6"  fill="#1f2937"/>
                <circle cx="310" cy="328" r="14" fill="#000"/>
                <circle cx="310" cy="328" r="6"  fill="#1f2937"/>
              </g>

              {/* light beams forward */}
              <polygon points="160,300 90,378 50,378 150,302" fill="url(#halo2)"/>
              <polygon points="330,300 400,378 440,378 340,302" fill="url(#halo2)"/>

              {/* rain streaks */}
              <g stroke="#dbeafe" strokeOpacity="0.18" strokeWidth="1">
                <line x1="20"  y1="40"  x2="14"  y2="80"/>
                <line x1="60"  y1="20"  x2="54"  y2="60"/>
                <line x1="120" y1="60"  x2="114" y2="100"/>
                <line x1="200" y1="30"  x2="194" y2="70"/>
                <line x1="300" y1="50"  x2="294" y2="90"/>
                <line x1="380" y1="20"  x2="374" y2="60"/>
                <line x1="430" y1="60"  x2="424" y2="100"/>
                <line x1="80"  y1="120" x2="74"  y2="160"/>
                <line x1="260" y1="110" x2="254" y2="150"/>
                <line x1="410" y1="130" x2="404" y2="170"/>
              </g>
            </svg>
          </div>

          <form className="saco-hero-form" onSubmit={submit} aria-label="Rýchla prihláška">
            <div className="saco-hero-form-head">
              <span className="eyebrow on-dark" style={{ margin: 0 }}>Rýchla prihláška</span>
              <hr className="road-line-h short" style={{ marginTop: 6 }} />
            </div>
            <label className="label on-dark" htmlFor="hero-meno">Meno</label>
            <input
              id="hero-meno"
              className="input"
              placeholder="Ján Novák"
              value={form.meno}
              onChange={(e) => setForm({ ...form, meno: e.target.value })}
              required
            />
            <label className="label on-dark" htmlFor="hero-tel">Telefón</label>
            <input
              id="hero-tel"
              className="input"
              type="tel"
              placeholder="0905 123 456"
              value={form.tel}
              onChange={(e) => setForm({ ...form, tel: e.target.value })}
              required
            />
            <label className="label on-dark" htmlFor="hero-kurz">Kurz</label>
            <select
              id="hero-kurz"
              className="select"
              value={form.kurz}
              onChange={(e) => setForm({ ...form, kurz: e.target.value })}
            >
              <option value="B">Skupina B — osobné auto</option>
              <option value="A">Skupina A — motocykel</option>
              <option value="A2">Skupina A2 — motocykel do 35 kW</option>
              <option value="A1">Skupina A1 — motocykel do 125 cm³</option>
              <option value="kondicne">Kondičné jazdy</option>
            </select>
            <button type="submit" className="btn btn-accent" style={{ marginTop: 14, width: "100%" }}>
              {sent ? "Ďakujeme — ozveme sa" : "Mám záujem"}
            </button>
            <p className="saco-hero-form-foot">Zavoláme vám do 24 hodín.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

// Reuse the file's local useState alias so the parent React global is loaded.
const useState = useStateHero;

window.Hero = Hero;
