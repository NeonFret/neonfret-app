import React from "react";
import "./BpmSlider.css";

export default function BpmSlider({ bpm, setBpm }) {
  return (
    <div className="bpm-slider-container">
      <p className="bpm-label">
        BPM:<span style={{ fontWeight: 700 }}> {bpm}</span>
      </p>

      <input
        className="bpm-slider"
        type="range"
        min="40"
        max="240"
        value={bpm}
        onChange={(e) => setBpm(Number(e.target.value))}
      />
    </div>
  );
}
