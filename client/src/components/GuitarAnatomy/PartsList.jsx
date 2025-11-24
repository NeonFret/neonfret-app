import React from "react";

export default function PartsList({ parts }) {
  return (
    <div className="parts-column">
      {parts.map((p, i) => (
        <div key={i} className="part-row">
          <h3>
            <span>{p.label}</span>
          </h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
