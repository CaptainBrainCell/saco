/* global React */

function StatStrip() {
  const stats = [
    { num: "2003", label: "Rok založenia" },
    { num: "5 000+", label: "Absolventov" },
    { num: "4", label: "Skupiny vodičáku" },
    { num: "1", label: "Detské ihrisko v Žiari" },
  ];
  return (
    <section className="section bg-soft saco-stats" aria-label="Čísla">
      <div className="container">
        <div className="saco-stats-grid">
          {stats.map((s, i) => (
            <div className="saco-stat" key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="saco-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.StatStrip = StatStrip;
