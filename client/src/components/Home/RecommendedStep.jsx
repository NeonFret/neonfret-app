import "./RecommendedStep.css";

export default function RecommendedStep({ icon, title, desc }) {
  return (
    <div className="recommended-step">
      <div className="step-icon">
        <img src={`/icons/${icon}.svg`} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
