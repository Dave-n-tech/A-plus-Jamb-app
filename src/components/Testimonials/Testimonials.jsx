import "./testimonials.scss";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

export default function Testimonials() {
  return (
    <div className="Testimonials" id="Testimonials">
      <h1>Testimonials</h1>
      <div className="card-container">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <button className="cta-btn">Get started</button>
    </div>
  );
}
