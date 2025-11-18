import React from "react";
import "./MetronomeMistakes.css";

export default function MetronomeMistakes() {
  return (
    <div className="metronome-mistakes">
      <h2 className="mistakes-title">Common Mistakes to Avoid</h2>

      <ul className="mistakes-list">
        <li><strong>Rushing:</strong> Don’t speed ahead of the click. Stay steady.</li>
        <li><strong>Playing Too Fast:</strong> Slow practice builds real accuracy.</li>
        <li><strong>Not Counting:</strong> Count out loud — it reinforces timing.</li>
        <li><strong>Ignoring Subdivisions:</strong> They help lock into grooves.</li>
        <li><strong>Stopping When You Mess Up:</strong> Keep going — recover in time.</li>
      </ul>

      <p className="mistakes-tip">
        🧠 Tip: Clean timing is more impressive than speed.
      </p>
    </div>
  );
}
