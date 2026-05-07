/* global React */
const { useState } = React;

function Nav({ onOpenModal, newCourseEnabled }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#kurzy", label: "Kurzy" },
    { href: "#postup", label: "Postup" },
    { href: "#cennik", label: "Cenník" },
    { href: "#ihrisko", label: "Ihrisko" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  return (
    <header className="saco-nav">
      <div className="container saco-nav-inner">
        <a href="#top" className="saco-nav-logo" aria-label="SACO Autoškola — domov">
          <img src="../../assets/logo-dark.svg" alt="SACO Autoškola" width="120" height="44" />
        </a>
        <nav className={`saco-nav-links ${open ? "is-open" : ""}`} aria-label="Hlavná navigácia">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <div className="saco-nav-right">
          {newCourseEnabled && (
            <button type="button" className="saco-nav-newcourse" onClick={onOpenModal}>
              <span className="saco-nav-newcourse-dot" aria-hidden="true" />
              Nový kurz
            </button>
          )}
          <a className="btn btn-primary saco-nav-cta" href="#kontakt">Prihlás sa</a>
          <button
            type="button"
            className="saco-nav-burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
window.Nav = Nav;
