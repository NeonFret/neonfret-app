import "./ChordIRL.css";

export default function ChordIRL({ chord }) {
  return (
    <>
      <img src={chord.irlURL} alt={chord.name} className="irl-img" />
    </>
  );
}
