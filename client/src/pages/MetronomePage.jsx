import React from "react";
import "./MetronomePage.css";

import useNeonMetronome from "../Hooks/useMetronome";

import BeatVisualizer from "../components/Metronome/BeatVisualizer";
import BpmSlider from "../components/Metronome/BpmSlider";
import MetronomeControls from "../components/Metronome/MetronomeControls";

export default function MetronomePage() {
  const { bpm, setBpm, isPlaying, start, stop, beat } = useNeonMetronome(120);

  return (
    <div className="metronome-container">
      <h1 className="metronome-title">Metronome</h1>

      <BeatVisualizer isPlaying={isPlaying} beat={beat} />

      <BpmSlider bpm={bpm} setBpm={setBpm} />

      <MetronomeControls isPlaying={isPlaying} start={start} stop={stop} />
    </div>
  );
}
