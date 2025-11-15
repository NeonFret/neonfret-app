import "./FeatureCard.css";

export default function FeatureCard({ icon, title }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <img src={`/icons/${icon}.svg`} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
}
