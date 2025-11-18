import { useEffect, useRef, useState, useCallback } from "react";

export default function useNeonMetronome(initialBpm = 120) {
  const [bpm, setBpm] = useState(initialBpm);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beat, setBeat] = useState(0);

  const audioCtx = useRef(null);
  const nextNoteTime = useRef(0);
  const timerId = useRef(null);

  const initAudio = useCallback(() => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  }, []);

  const playClick = useCallback(() => {
    const ctx = audioCtx.current;
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(1000, nextNoteTime.current);

    gain.gain.setValueAtTime(1, nextNoteTime.current);
    gain.gain.exponentialRampToValueAtTime(0.0001, nextNoteTime.current + 0.03);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(nextNoteTime.current);
    osc.stop(nextNoteTime.current + 0.03);
  }, []);

  const scheduleNote = useCallback(() => {
    const ctx = audioCtx.current;
    if (!ctx) return;

    while (nextNoteTime.current < ctx.currentTime + 0.1) {
      playClick();
      setBeat((b) => b + 1);        // 🔥 VERY IMPORTANT
      nextNoteTime.current += 60 / bpm;
    }
  }, [bpm, playClick]);

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(timerId.current);
      return;
    }

    initAudio();
    nextNoteTime.current = audioCtx.current.currentTime + 0.1;

    timerId.current = setInterval(scheduleNote, 25);

    return () => clearInterval(timerId.current);
  }, [isPlaying, bpm, initAudio, scheduleNote]);

  return {
    bpm,
    setBpm,
    isPlaying,
    start: () => {
      setBeat(0);     // Reset beat when starting
      setIsPlaying(true);
    },
    stop: () => setIsPlaying(false),
    beat,             // 🔥 return beat
  };
}
