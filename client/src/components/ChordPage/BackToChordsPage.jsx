import { Link } from "react-router-dom";
import "./BackToChordsPage.css";

export default function BackToChordsPage() {
  return (
    <Link to="/chords" className="back-btn">
      Back to chords
    </Link>
  );
}
