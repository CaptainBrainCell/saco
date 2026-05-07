/* global React */
const { useState: useStateContact, useEffect: useEffectContact } = React;

function ContactCTA({ prefilledSubject, onSubjectConsumed }) {
  const [form, setForm] = useStateContact({
    meno: "", email: "", tel: "", subject: "", msg: "",
  });
  const [sent, setSent] = useStateContact(false);

  useEffectContact(() => {
    if (prefilledSubject) {
      setForm((f) => ({ ...f, subject: prefilledSubject }));
      onSubjectConsumed && onSubjectConsumed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefilledSubject]);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="section bg-dark saco-contact" id="kontakt">
      <div className="container saco-contact-grid">
        <div className="saco-contact-info">
          <div className="eyebrow on-dark">Kontakt</div>
          <hr className="road-line-h short" style={{ marginBottom: 16 }} />
          <h2>Napíšte nám alebo zavolajte.</h2>
          <p className="saco-section-lede on-dark" style={{ marginLeft: 0 }}>
            Ozveme sa do 24 hodín. Radi odpovieme na otázky o termínoch, cenách aj o tom, či ste pripravení.
          </p>

          <ul className="saco-contact-list">
            <li>
              <span className="saco-contact-key">Adresa</span>
              <span className="saco-contact-val">Rudenkova 816/19, 965 01 Žiar nad Hronom</span>
            </li>
            <li>
              <span className="saco-contact-key">Telefón</span>
              <span className="saco-contact-val">
                <a href="tel:+421905650761">0905 650 761</a><br/>
                <a href="tel:+421905589441">0905 589 441</a>
              </span>
            </li>
            <li>
              <span className="saco-contact-key">E-mail</span>
              <span className="saco-contact-val">
                <a href="mailto:info@saco.sk">info@saco.sk</a><br/>
                <a href="mailto:autoskola@saco.sk">autoskola@saco.sk</a>
              </span>
            </li>
            <li>
              <span className="saco-contact-key">Facebook</span>
              <span className="saco-contact-val">
                <a href="https://facebook.com/autoskola.saco" rel="noopener">facebook.com/autoskola.saco</a>
              </span>
            </li>
          </ul>
        </div>

        <form className="saco-contact-form" onSubmit={submit} aria-label="Kontaktný formulár">
          {sent ? (
            <div className="saco-contact-success" role="status">
              <div className="saco-contact-success-mark">✓</div>
              <h3>Ďakujeme.</h3>
              <p>Ozveme sa vám do 24 hodín na uvedený telefón alebo e-mail.</p>
              <button type="button" className="btn btn-ghost" onClick={() => { setSent(false); setForm({ meno: "", email: "", tel: "", subject: "", msg: "" }); }}>
                Poslať ďalšiu správu
              </button>
            </div>
          ) : (
            <>
              <div className="saco-contact-form-head">
                <span className="eyebrow">Formulár</span>
                <hr className="road-line-h short" style={{ marginTop: 6 }} />
              </div>
              <div className="saco-contact-row">
                <div>
                  <label className="label" htmlFor="c-meno">Meno a priezvisko</label>
                  <input id="c-meno" className="input" value={form.meno} onChange={(e) => setForm({ ...form, meno: e.target.value })} required />
                </div>
                <div>
                  <label className="label" htmlFor="c-tel">Telefón</label>
                  <input id="c-tel" className="input" type="tel" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} required />
                </div>
              </div>
              <label className="label" htmlFor="c-email">E-mail</label>
              <input id="c-email" className="input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              <label className="label" htmlFor="c-subject">Predmet</label>
              <input id="c-subject" className="input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Napr. Záujem o kurz: Skupina B" />
              <label className="label" htmlFor="c-msg">Správa</label>
              <textarea id="c-msg" className="textarea" rows="4" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} />
              <button type="submit" className="btn btn-primary" style={{ marginTop: 16 }}>Odoslať správu</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
window.ContactCTA = ContactCTA;
