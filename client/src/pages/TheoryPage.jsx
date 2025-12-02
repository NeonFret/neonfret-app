import TheoryCard from "../components/TheoryPage/TheoryCard";
import "./TheoryPage.css"

function TheoryPage() {
  return (
    <div className="theory-container">
      <h1 className="theory-header">
        Guitar <span> Theory </span>Basics
      </h1>
      <p className="theory-subtitle" style={{ color: "#cfcfcf" }}>
        Simple explanations to help you understand the why behind the music you
        play.
      </p>

      <div className="theory-grid">
        <TheoryCard
          title="What is a Chord?"
          desc="A chord is when three or more different notes are played simultaneously to create a unified, harmonious sound. The quality of a chord (like Major or Minor) depends on the specific distances, or intervals, between these notes. Chords are the building blocks of harmony and provide the emotional foundation for a song."
        />

        <TheoryCard
          title="What is a Scale?"
          desc="A scale is an ordered set of notes that sound 'good' together. It's like the musical palette for a song. Scales provide the framework for melodies and are the source material for chords. The most common scale is the Major scale (Do-Re-Mi-Fa-Sol-La-Ti), which determines the notes available in a Key."
        />

        <TheoryCard
          title="What is a Key?"
          desc="A key tells you which specific group of notes a song uses and establishes a tonal center. This center note, called the tonic or root, is the note the music naturally wants to resolve to—it's where the music feels completely at rest. For example, a song in the Key of C Major will primarily use the notes from the C Major scale."
        />

        <TheoryCard
          title="Major vs Minor"
          desc="The difference is all about the mood! Major keys and chords sound bright, happy, and resolved. Minor keys and chords sound emotional, serious, or sad. This emotional shift is caused by moving just one note within the chord or scale—the third note is lowered (or 'flatted') in a Minor setting."
        />

        <TheoryCard
          title="What is Pitch?"
          desc="Pitch is simply how high or low a note sounds. On a guitar, you increase the pitch by shortening the vibrating string (i.e., fretting closer to the bridge) or by tuning to a higher string. Scientifically, pitch is determined by the frequency of the sound wave, measured in Hertz (Hz)."
        />

        <TheoryCard
          title="What is an Interval?"
          desc="An interval is the distance between any two notes. This is the fundamental unit of music theory. Intervals are named by the number of letter names they span (e.g., C to G is a 'fifth'). Understanding intervals helps you build scales, recognize chords, and figure out melodies by ear. "
        />

        <TheoryCard
          title="Why Do Frets Get Smaller?"
          desc="Frets define intervals. To raise a note by one half-step (one fret), you need to cut the vibrating string length in half over the course of the fretboard. Since you are always cutting the remaining length by half, the physical distance between frets must continuously get smaller as you move toward the bridge. This is based on a logarithmic, mathematical ratio."
        />

        <TheoryCard
          title="What is 1st Position?"
          desc="In guitar, 'position' refers to the fret where your index finger is placed. 1st Position means your index finger is anchored on the 1st fret, and your other fingers (middle, ring, pinky) naturally cover the 2nd, 3rd, and 4th frets. This allows you to play passages without shifting your hand up or down the neck."
        />

        <TheoryCard
          title="What is a Root Note?"
          desc="The root note is the starting note and most important note of any scale, chord, or key. It's the note that gives the structure its name. For example, in a C Major chord or the C Major scale, the note C is the root note. Everything else in the structure is defined in relation to the root."
        />

        <TheoryCard
          title="What is Tempo?"
          desc="Tempo is the speed of the music, determining how fast or slow a piece should be played. It's typically measured in BPM (Beats Per Minute). A song with a tempo of 120 BPM has 120 beats every minute, meaning there are two beats every second. It's often indicated by a word like *Allegro* (fast) or *Adagio* (slow)."
        />

        <TheoryCard
          title="What is 4/4 Time?"
          desc="4/4 Time (also known as Common Time) is the most common time signature, or rhythm, in music. The top '4' means there are 4 beats in every measure, and the bottom '4' means a quarter note gets one beat. It’s counted as '1, 2, 3, 4' and is the foundation for rock, pop, folk, and most modern music."
        />

        <TheoryCard
          title="What is a Chord Progression?"
          desc="A chord progression is an ordered sequence of chords that repeats to create the harmonic structure of a song. They create musical tension and release. Many popular songs use simple, common progressions, such as the famous I-IV-V-I progression (Tonic, Subdominant, Dominant, Tonic), which provides a strong, satisfying sense of musical movement."
        />
      </div>
    </div>
  );
}

export default TheoryPage;
