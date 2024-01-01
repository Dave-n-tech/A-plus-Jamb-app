import "./hero.scss";

export default function Hero() {
  return (
    <div className="Hero" id="Hero">
      <div className="left">
        <h1>The ultimate app to help you JAMB Jamb and score high in UTME</h1>
        <p>
          The ultimate app you need to prepare for UTME ecamination and score
          300 and above
        </p>
        <button className="cta-btn">Get started</button>
      </div>

      <div className="right">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dmqhmprkr/image/upload/v1703938348/pexels-andy-barbour-6683674_ze8qqh.jpg"
            alt="student writing exam"
          />
        </div>
      </div>
    </div>
  );
}
