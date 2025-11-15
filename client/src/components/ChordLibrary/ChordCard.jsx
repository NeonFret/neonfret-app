import "./ChordCard.css";

export default function ChordCard({ chord }) {
  const getDifficultyColor = (level) => {
    switch (level.toLowerCase()) {
      case "Beginner":
        return "#39ff88";
      case "intermediate":
        return "#ff9f40";
      case "advanced":
        return "#ff5757";
      default:
        return "#39ff88";
    }
  };
  return (
    <div className="chord-card">
      <h3>
        {chord.name.split(" ")[0]} <span>{chord.name.split(" ")[1]}</span>
      </h3>

      <p>Notes: {chord.notes.join(", ")}</p>
      <p>Fingers: {chord.fingers.join("")}</p>

      <p>
        Difficulty:{" "}
        <span
          className="diff-color"
          style={{ color: getDifficultyColor(chord.difficulty) }}
        >
          {chord.difficulty}
        </span>
      </p>

      <button>VIEW CHORD</button>
    </div>
  );
}
