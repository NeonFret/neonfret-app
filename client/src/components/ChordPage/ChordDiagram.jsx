import "./ChordDiagram.css";
import PlaySoundButton from "./PlaySoundButton";

export default function ChordDiagram({ chord }) {
  return (
    <div className="diagram-container">
      <div className="diagram-box">
        <img src={chord.diagramURL} alt={chord.name} className="diagram-img" />
        <PlaySoundButton chord={chord} />
      </div>
    </div>
  );
}
