import { useState } from "react";
import "./TheoryCard.css";

export default function TheoryCard({ title, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`theory-card ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="theory-card-question">
        <h3 className="theory-card-title">{title}</h3>
        <span className="theory-card-arrow">{open ? "▲" : "▼"}</span>
      </div>

      <div className="theory-card-answer">
        <p className="theory-card-desc">{desc}</p>
      </div>
    </div>
  );
}
