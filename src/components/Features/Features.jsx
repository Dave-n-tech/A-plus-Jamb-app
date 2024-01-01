import FeatureCard from "../Feature-card/FeatureCard";
import "./features.scss";

export default function Features() {
  return (
    <section className="Features" id="Features">
      <h1> Why Choose A plus?</h1>
      <div className="wrapper">
        <FeatureCard
          src=""
          heading="CBT Mock tests"
          textContent="Practice taking the CBT exam under realistic exam conditions and get
            instant feedback on your performance"
        />
        <FeatureCard
          src=""
          heading="Practice past questions"
          textContent="Solve past questions in read mode and get detailed answers and explanations"
        />
        <FeatureCard
          src=""
          heading="AI Chatbot solutions"
          textContent="Get step-by-step explanations to answers from our AI chatbot and ask any questions you have about the UTME exam."
        />
        <FeatureCard
          src=""
          heading="Progress Tracking"
          textContent="Save your scores and monitor your progress with graphs and charts. Get personalized tips and recommendations on how to improve your score."
        />
        <FeatureCard
          src=""
          heading="Leaderboard"
          textContent="See how your score compares to other users and win points and badges for topping the leaderboard."
        />
        <FeatureCard
          src=""
          heading="Community"
          textContent="Interact with other users on the platform, ask and answer questions, participate in contests and quizzes and contribute."
        />
      </div>
    </section>
  );
}
