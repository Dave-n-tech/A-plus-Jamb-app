import "./feature-card.scss";

export default function FeatureCard({ src, heading, textContent }) {
  return (
    <div className="feature-card">
      <img src={src} alt="" />
      <h3>{heading}</h3>
      <p>{textContent}</p>
    </div>
  );
}
