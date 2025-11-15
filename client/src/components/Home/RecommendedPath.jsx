import RecommendedStep from "./RecommendedStep";
import "./RecommendedPath.css";

export default function RecommendedPath() {
  return (
    <section className="recommended-layout">
      <h1>
        Recommended <span>Path</span>
      </h1>

      <div className="path-row">
        <RecommendedStep
          icon="ChordLibrary"
          title="Chords"
          desc="Learn chords to train your fingers and hands."
        />


        <RecommendedStep
          icon="Scales"
          title="Scales"
          desc="Learn Pentatonic Scales to develop your skills for playing solos."
        />


        <RecommendedStep
          icon="PracticeMode"
          title="Rhythm Practice"
          desc="Take all your knowledge and practice with metronome to learn how to stay on time."
        />
      </div>
    </section>
  );
}
