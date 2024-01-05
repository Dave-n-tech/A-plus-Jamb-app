import "./testimonials.scss";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import LoginButton from "../LoginButton/LoginButton";

export default function Testimonials() {
  return (
    <div className="Testimonials" id="Testimonials">
      <h1>Testimonials</h1>
      <div className="card-container">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <LoginButton />
    </div>
  );
}
