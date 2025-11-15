import { useEffect, useState } from "react";
import "./ChordPreview.css";

export default function ChordPreview() {
  const [chord, setChord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadChord() {
      try {
        const res = await fetch("http://localhost:5000/api/chords");

        if (!res.ok) throw new Error("Failed to load chord");

        const data = await res.json();

        setChord(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadChord();
  }, []);

  if (loading) {
    return (
      <div className="chord-preview">
        <p style={{ color: "#999", marginTop: "20px" }}>Loading chord...</p>
      </div>
    );
  }

  if (error || !chord) {
    return (
      <div className="chord-preview">
        <p style={{ color: "red", marginTop: "20px" }}>Failed to load chord.</p>
      </div>
    );
  }

  return (
    <div className="chord-preview">
      <h2>Chord Library</h2>

      <img src={chord.diagramURL} alt={chord.name} className="chord-diagram" />

      <h3 className="chord-name">{chord.name}</h3>

      <a href={chord.tutorialURL} className="chord-link">
        Visit the chord tutorial
      </a>
    </div>
  );
}
