import ChordCard from "./ChordCard";
import "./ChordGrid.css";

export default function ChordGrid({ chords }) {
  return (
    <div className="chord-grid">
      {chords.map((chord) => (
        <ChordCard key={chord.id} chord={chord} />
      ))}
    </div>
  );
}
