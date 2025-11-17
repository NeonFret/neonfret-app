import React from "react";
import "./MetronomeControls.css";

export default function MetronomeControls({ isPlaying, start, stop }) {
  return (
    <div className="metro-controls">
      {isPlaying ? (
        <button className="stop-btn" onClick={stop}>
          Stop
        </button>
      ) : (
        <button className="start-btn" onClick={start}>
          Start
        </button>
      )}
    </div>
  );
}
