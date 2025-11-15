import "./ReasonCard.css";

export default function ReasonCard({ icon, title, desc }) {
  return (
    <section className="cards">
      <div className="reason-card">
        <img src={`/icons/${icon}.svg`} alt="" />

        <h3>{title}</h3>

        <p>{desc}</p>
      </div>
    </section>
  );
}
