import "./ChordInfo.css";
import InfoIcon from "../../../public/icons/info-icon.svg";

export default function ChordInfo({ chord }) {
  return (
    <div className="info-box">
      <div className="info-section">
        <div className="info-header">
          <span className="span-info">Notes in chord</span>

          <div className="tooltip-wrapper">
            <img src={InfoIcon} className="info-icon" />

            <div className="tooltip">
              Here are only shown the notes that are played by fingers, no open
              string notes.
            </div>
          </div>
        </div>

        <p className="info-value-big">{chord.notes.join(", ")}</p>
      </div>

      <div className="divider"></div>

      <div className="info-section">
        <div className="info-header">
          <span className="span-info">Fingers</span>

          <div className="tooltip-wrapper">
            <img src={InfoIcon} className="info-icon" />

            <div className="tooltip">
              X means the string is muted.
              <br />0 means the string is played open.
            </div>
          </div>
        </div>

        <p className="info-value-big">{chord.fingers.join(" ")}</p>
      </div>
    </div>
  );
}
