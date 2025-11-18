import React, { useEffect, useState } from "react";
import "./BeatVisualizer.css";

export default function BeatVisualizer({ beat }) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const micro = setTimeout(() => {
      setPulse(true);
    }, 0);

    const timeout = setTimeout(() => {
      setPulse(false);
    }, 150);

    return () => {
      clearTimeout(micro);
      clearTimeout(timeout);
    };
  }, [beat]);

  return <div className={`beat-circle ${pulse ? "pulse" : ""}`}></div>;
}
