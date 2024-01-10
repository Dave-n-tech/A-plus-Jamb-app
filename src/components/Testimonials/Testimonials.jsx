import "./testimonials.scss";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import SignUpButton from "../SignUpButton/SignUpButton";

export default function Testimonials() {
  return (
    <section className="Testimonials" id="Testimonials">
      <h1>Testimonials</h1>
      <div className="card-container">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <SignUpButton />
    </section>
  );
}
