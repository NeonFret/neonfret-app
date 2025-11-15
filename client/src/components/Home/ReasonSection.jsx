import ReasonCard from "./ReasonCard";
import "./ReasonSection.css";

export default function ReasonSection() {
  return (
    <section className="reason-layout">
      <h1>
        Why <span>NeonFret</span>
      </h1>

      <div className="reason-cards">
        <ReasonCard
          icon="StructuredLearning"
          title="Structured Learning"
          desc="Follow a guided path
that connects chords,
scales, and rhythm -
no random videos."
        />
        <ReasonCard
          icon="InteractiveTools"
          title="Interactive Tools"
          desc="Visual chords, metronome
and scales so you can
understand and learn
the best way."
        />
        <ReasonCard
          icon="PlayYourWay"
          title="Play Your Way"
          desc="No strict lessons.
No pressure. Just tools
that help you grow
your sound, your way."
        />
      </div>
    </section>
  );
}
