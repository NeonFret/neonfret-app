import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ChordDiagram from "../components/ChordPage/ChordDiagram";
import ChordIRL from "../components/ChordPage/ChordIRL";
import ChordInfo from "../components/ChordPage/ChordInfo";

export default function ChordPage() {
  const { slug } = useParams();
  const [chord, setChord] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/chords/slug/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Chord not found");
        return res.json();
      })
      .then((data) => setChord(data))
      .catch((err) => setError(err.message));
  }, [slug]);

  if (error) {
    return <div style={{ color: "red", padding: "40px" }}>Error: {error}</div>;
  }

  if (!chord) {
    return <div style={{ padding: "40px", color: "white" }}>Loading...</div>;
  }

  return (
    <div style={{ padding: "40px", display: "flex", alignItems: "center" }}>
      <ChordDiagram chord={chord} />
      <ChordIRL chord={chord} />
      <ChordInfo chord={chord} />
    </div>
  );
}
