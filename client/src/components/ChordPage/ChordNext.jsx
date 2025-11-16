import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ChordNext.css";

export default function ChordNext({ chord }) {
  const [related, setRelated] = useState([]);

  const rootLetter = chord.slug[0];

  useEffect(() => {
    fetch(`http://localhost:5000/api/chords/root/${rootLetter}`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((c) => c.slug !== chord.slug);
        setRelated(filtered);
      })
      .catch((err) => console.log(err));
  }, [rootLetter, chord.slug]);

  return (
    <div className="next-container">
      <h3 className="next-title">Chords to learn next</h3>

      <div className="next-list">
        {related.map((c) => (
          <Link key={c.id} to={`/chords/${c.slug}`} className="next-pill">
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
