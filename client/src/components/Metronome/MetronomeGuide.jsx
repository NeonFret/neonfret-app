import React from "react";
import "./MetronomeGuide.css";

export default function MetronomeGuide() {
  return (
    <div className="metronome-guide">
      <h2 className="guide-title">How to Practice With a Metronome</h2>

      <p className="guide-text">
        A metronome helps you develop timing, rhythm, and consistency. Start
        slow, stay relaxed, and focus on playing cleanly before speeding up.
      </p>

      <ul className="guide-list">
        <li>
          <strong>1. Start Slow:</strong> Begin with a comfortable tempo (50–70
          BPM).
        </li>
        <li>
          <strong>2. Keep It Clean:</strong> Make sure every note is even and
          steady.
        </li>
        <li>
          <strong>3. Increase Gradually:</strong> Raise BPM by 2–4 only when you
          feel confident.
        </li>
        <li>
          <strong>4. Practice with Subdivisions:</strong> Train accuracy with
          1/4, 1/8, and 1/16 notes.
        </li>
        <li>
          <strong>5. Record Yourself:</strong> Listen for timing errors to
          improve quickly.
        </li>
      </ul>

      <p className="guide-tip">
        Tip: Great players don't rush. They control time.
      </p>
    </div>
  );
}
