import FeatureCard from "./FeatureCard";
import ChordPreview from "./ChordPreview";
import { Link } from "react-router-dom";
import "./HomeHero.css";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-left">
        <div className="text-section">
          <div className="inner-text">
            <div className="inner-upper-text">
              <h1>
                Learn Guitar <br />
                The <span>Easy Way</span>
              </h1>

              <p>
                Interactive tools, visual guides and <br />
                structured practice. All in one place
              </p>
            </div>

            <Link to="/guitar-anatomy" type="button" className="hero-button">
              START WITH <br /> GUITAR ANATOMY
            </Link>
          </div>
        </div>

        <div className="feature-cards">
          <FeatureCard icon="Scales" title="Chord Library" />
          <FeatureCard icon="ChordLibrary" title="Guitar Anatomy" />
          <FeatureCard icon="PracticeMode" title="Practice Mode" />
        </div>
      </div>

      <ChordPreview />
    </section>
  );
}
