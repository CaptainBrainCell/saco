/* global React */
const { useEffect: useEffectModal } = React;

function NewCourseModal({ open, course, onClose, onInterested }) {
  useEffectModal(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="saco-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="saco-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="new-course-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="saco-modal-head">
          <span className="badge-new"><span className="pulse" aria-hidden="true" /> 🚦 Nový kurz</span>
          <button type="button" className="saco-modal-close" aria-label="Zavrieť" onClick={onClose}>×</button>
        </div>
        <div className="saco-modal-body">
          <div className="eyebrow">{course.type}</div>
          <hr className="road-line-h short" style={{ marginBottom: 12 }} />
          <h3 id="new-course-title" className="saco-modal-title">{course.title}</h3>
          <div className="saco-modal-date">{course.date}</div>
          <p className="saco-modal-desc">{course.description}</p>
          <div className="saco-modal-actions">
            <button type="button" className="btn btn-primary" onClick={() => onInterested(course)}>
              Mám záujem
            </button>
            <button type="button" className="btn btn-ghost" onClick={onClose}>Možno neskôr</button>
          </div>
        </div>
      </div>
    </div>
  );
}
window.NewCourseModal = NewCourseModal;
