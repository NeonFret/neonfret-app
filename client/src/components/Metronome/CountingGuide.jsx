import React from "react";
import "./CountingGuide.css";

export default function CountingGuide() {
  return (
    <div className="counting-guide">
      <h2 className="counting-title">How to Count Rhythms</h2>

      <p className="counting-text">
        Counting rhythms helps you stay locked into the beat and understand how
        notes fit inside each measure. Here are the most common ways musicians
        count rhythms with a metronome:
      </p>

      <div className="counting-block">
        <h3>Quarter Notes (Basic)</h3>
        <p className="example">1 — 2 — 3 — 4</p>
        <p className="desc">
          One note per click. Great for beginners learning timing.
        </p>
      </div>

      <div className="counting-block">
        <h3>Eighth Notes</h3>
        <p className="example">1 + 2 + 3 + 4 +</p>
        <p className="desc">
          Say “+” between each beat. Helps with faster rhythms and strumming.
        </p>
      </div>

      <div className="counting-block">
        <h3>Triplets</h3>
        <p className="example">1 trip-let 2 trip-let 3 trip-let 4 trip-let</p>
        <p className="desc">
          Used in swing, blues, and jazz. Smooth, flowing rhythm.
        </p>
      </div>

      <div className="counting-block">
        <h3>Sixteenth Notes</h3>
        <p className="example">1 e + a 2 e + a 3 e + a 4 e + a</p>
        <p className="desc">
          Great for building speed, precision, and tight picking.
        </p>
      </div>

      <p className="counting-tip">
        Tip: Saying rhythms out loud improves accuracy more than practice
        alone.
      </p>
    </div>
  );
}
