/* global React */

function Postup() {
  const steps = [
    { n: 1, t: "Prihlás sa", d: "Vyplníš formulár alebo nám zavoláš. Dohodneme termín." },
    { n: 2, t: "Teória", d: "Pravidlá cestnej premávky, prvá pomoc, technika vozidla." },
    { n: 3, t: "Praktická jazda", d: "Začneme na cvičisku, postupne vyrazíme na cesty Žiaru a okolia." },
    { n: 4, t: "Skúšky", d: "Test, jazda. Pripravíme vás tak, aby ste si verili." },
    { n: 5, t: "Vodičák v ruke", d: "Gratulujeme. Po skúške vás čaká návšteva dopravného inšpektorátu." },
  ];

  return (
    <section className="section bg-soft saco-postup" id="postup">
      <div className="container">
        <div className="eyebrow">Postup</div>
        <hr className="road-line-h short" style={{ marginBottom: 16 }} />
        <h2>Päť krokov k vodičáku.</h2>
        <p className="saco-section-lede">
          Žiadne prekvapenia. Vieme presne, čo vás čaká, a prevedieme vás celým procesom.
        </p>

        <ol className="saco-postup-list">
          {steps.map((s, i) => (
            <li key={s.n} className="saco-postup-item">
              <div className="saco-postup-rail">
                <div className="saco-postup-dot">{s.n}</div>
                {i < steps.length - 1 && <div className="road-line-v saco-postup-vline" />}
              </div>
              <div className="saco-postup-body">
                <h3 className="saco-postup-title">{s.t}</h3>
                <p className="saco-postup-desc">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
window.Postup = Postup;
