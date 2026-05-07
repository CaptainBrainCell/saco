/* global React */

function Pricing() {
  const cards = [
    { t: "Skupina B", price: "Cena na vyžiadanie", note: "Osobné automobily do 3 500 kg" },
    { t: "Skupina A",  price: "Cena na vyžiadanie", note: "Motocykle bez obmedzenia výkonu" },
    { t: "Skupina A2", price: "Cena na vyžiadanie", note: "Motocykle do 35 kW" },
    { t: "Skupina A1", price: "Cena na vyžiadanie", note: "Motocykle do 125 cm³" },
  ];
  return (
    <section className="section saco-pricing" id="cennik">
      <div className="container">
        <div className="eyebrow">Cenník</div>
        <hr className="road-line-h short" style={{ marginBottom: 16 }} />
        <h2>Ceny zostavíme podľa kurzu.</h2>
        <p className="saco-section-lede">
          Cena záleží od skupiny a obsahu kurzu. Zavolajte alebo napíšte — pošleme vám aktuálny cenník.
        </p>

        <div className="saco-pricing-grid">
          {cards.map((c, i) => (
            <div className="card saco-pricing-card" key={i}>
              <div className="saco-pricing-title">{c.t}</div>
              <div className="saco-pricing-price">{c.price}</div>
              <div className="saco-pricing-note">{c.note}</div>
              <a className="saco-pricing-link" href="#kontakt">Spýtaj sa →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
