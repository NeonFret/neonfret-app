import "./ChordCard.css";

export default function ChordCard({ chord }) {
  return (
    <div className="chord-card">
      <h3>
        {chord.name.split(" ")[0]}{" "}
        <span>{chord.name.split(" ")[1]}</span>
      </h3>

      <p>Notes: {chord.notes.join(", ")}</p>
      <p>Fingers: {chord.fingers.join("")}</p>

      <button>VIEW CHORD</button>
    </div>
  );
}
