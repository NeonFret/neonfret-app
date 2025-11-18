import React from "react";
import "./MetronomePage.css";

import useNeonMetronome from "../Hooks/useMetronome";

import BeatVisualizer from "../components/Metronome/BeatVisualizer";
import BpmSlider from "../components/Metronome/BpmSlider";
import MetronomeControls from "../components/Metronome/MetronomeControls";
import MetronomeGuide from "../components/Metronome/MetronomeGuide";
import CountingGuide from "../components/Metronome/CountingGuide";
import MetronomeMistakes from "../components/Metronome/MetronomeMistakes";

export default function MetronomePage() {
  const { bpm, setBpm, isPlaying, start, stop, beat } = useNeonMetronome(120);

  return (
    <div className="metronome-container">
      <div className="guides">
        <div className="left-guides">
          <MetronomeGuide />
          <MetronomeMistakes />
        </div>

        <div className="right-guides">
          <CountingGuide />
        </div>
      </div>

      <div className="metronome-section">
        <h1>
          <span>Practice</span> With Metronome!
        </h1>
        <BeatVisualizer isPlaying={isPlaying} beat={beat} />

        <BpmSlider bpm={bpm} setBpm={setBpm} />

        <MetronomeControls isPlaying={isPlaying} start={start} stop={stop} />
      </div>
    </div>
  );
}
