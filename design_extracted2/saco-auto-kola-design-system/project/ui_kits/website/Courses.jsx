/* global React */

function Courses() {
  const courses = [
    {
      title: "Skupina B",
      desc: "Osobné automobily do 3 500 kg. Manuál aj automat, teória aj prax.",
      tags: ["Od 17 rokov", "Najobľúbenejší"],
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 17h14M3 17V11l2-5h14l2 5v6"/>
          <circle cx="7.5" cy="17.5" r="1.7"/>
          <circle cx="16.5" cy="17.5" r="1.7"/>
        </svg>
      ),
    },
    {
      title: "Skupina A",
      desc: "Motocykle bez obmedzenia výkonu. Pre skúsenejších jazdcov.",
      tags: ["Od 24 rokov"],
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="5.5" cy="17" r="3"/>
          <circle cx="18.5" cy="17" r="3"/>
          <path d="M5.5 17l4-7h5l3 7M9.5 10h4M14 8l1 2"/>
        </svg>
      ),
    },
    {
      title: "Skupina A2",
      desc: "Motocykle do 35 kW. Vhodné pre začínajúcich motorkárov.",
      tags: ["Od 18 rokov"],
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="5.5" cy="17" r="3"/>
          <circle cx="18.5" cy="17" r="3"/>
          <path d="M5.5 17l4-7h5l3 7"/>
        </svg>
      ),
    },
    {
      title: "Skupina A1",
      desc: "Motocykle do 125 cm³. Prvý vodičák pre tínedžerov.",
      tags: ["Od 16 rokov"],
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="5.5" cy="17" r="2.5"/>
          <circle cx="18.5" cy="17" r="2.5"/>
          <path d="M5.5 17l3.5-6h4l2.5 6"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="section saco-courses" id="kurzy">
      <div className="container">
        <div className="eyebrow">Kurzy</div>
        <hr className="road-line-h short" style={{ marginBottom: 16 }} />
        <h2>Vyber si, kam chceš sadnúť.</h2>
        <p className="saco-section-lede">
          Učíme štyri skupiny vodičáku. Vyberte si tú, ktorá vám sedí — alebo nám zavolajte a poradíme.
        </p>

        <div className="saco-courses-grid">
          {courses.map((c, i) => (
            <article className="card card-course" key={i}>
              <div className="course-icon">{c.icon}</div>
              <h3 className="saco-course-title">{c.title}</h3>
              <p className="saco-course-desc">{c.desc}</p>
              <div className="saco-course-tags">
                {c.tags.map((t, j) => (
                  <span className="pill" key={j}>{t}</span>
                ))}
              </div>
              <a className="saco-course-link" href="#kontakt">
                Prihlás sa
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Courses = Courses;
