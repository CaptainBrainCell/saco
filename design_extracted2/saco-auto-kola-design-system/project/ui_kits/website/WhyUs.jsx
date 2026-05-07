/* global React */

function WhyUs() {
  const items = [
    {
      t: "Dve dekády skúseností",
      d: "Učíme jazdiť od roku 2003. Cez naše ruky prešlo viac ako 5 000 vodičov.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2l2.6 5.3 5.9.9-4.3 4.1 1 5.9L12 15.5 6.8 18.2l1-5.9L3.5 8.2l5.9-.9z"/>
        </svg>
      ),
    },
    {
      t: "Rodinný prístup",
      d: "Žiadny call-centrum. Hovoríte priamo s lektorom, ktorý vás bude učiť.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="8" r="3.2"/>
          <circle cx="17" cy="9" r="2.6"/>
          <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M14 19c0-2.4 2-4 4-4s4 1.6 4 4"/>
        </svg>
      ),
    },
    {
      t: "Žiar nad Hronom",
      d: "Sme miestni. Trénujeme na cestách, ktoré poznáme — a budete poznať aj vy.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/>
          <circle cx="12" cy="10" r="2.6"/>
        </svg>
      ),
    },
    {
      t: "Detské ihrisko",
      d: "Vlastné dopravné ihrisko, kde sa najmenší naučia pravidlá hrou.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2"/>
          <path d="M3 12h18M9 6v12M15 6v12"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="section bg-dark saco-why" id="preco">
      <div className="container">
        <div className="eyebrow on-dark">Prečo my</div>
        <hr className="road-line-h short" style={{ marginBottom: 16 }} />
        <h2>Poctivá autoškola, ktorú v Žiari poznáme.</h2>
        <p className="saco-section-lede on-dark">
          Robíme svoju prácu dobre už dve dekády. Bez marketingových rečí — len jazdy, teória a ľudský prístup.
        </p>

        <div className="saco-why-grid">
          {items.map((it, i) => (
            <article key={i} className="card on-dark">
              <div className="saco-why-icon" aria-hidden="true">{it.icon}</div>
              <h3 className="saco-why-title">{it.t}</h3>
              <p className="saco-why-desc">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.WhyUs = WhyUs;
