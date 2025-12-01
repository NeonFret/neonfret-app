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
          icon="Scales"
          title="Chords"
          desc="Learn chords to train your fingers and hands."
        />

        <RecommendedStep
          icon="ChordLibrary"
          title="Guitar Anatomy"
          desc="Know your instrument inside out, from headstock to bridge and build a solid foundation for every skill ahead."
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
