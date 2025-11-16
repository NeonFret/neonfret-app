const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/chords", express.static("public/chords"));

const chords = [
  {
    id: 1,
    name: "C major",
    slug: "c-major",
    type: "major",
    notes: ["C", "E", "G"],
    fingers: ["X", 3, 2, 0, 1, 0],
    diagramURL: "http://localhost:5000/chords/c-major/CmajorFret.svg",
    irlURL: "http://localhost:5000/chords/c-major/CmajorIRL.png",
    tutorialURL: "/chords/c-major",
    difficulty: "Beginner",
  },

  {
    id: 2,
    name: "C minor",
    slug: "c-minor",
    type: "minor",
    notes: ["C", "G", "C", "G"],
    fingers: ["1(barring)", 4, 5, 2, 1],
    diagramURL: "http://localhost:5000/chords/c-minor/CminorFret.svg",
    irlURL: "http://localhost:5000/chords/c-minor/CminorIRL.png",
    tutorialURL: "/chords/c-minor",
    difficulty: "Intermediate",
  },

  {
    id: 3,
    name: "C sus2",
    slug: "c-sus2",
    type: "sus2",
    notes: ["C", "C"],
    fingers: ["X", 3, 0, 0, 1, "X"],
    diagramURL: "http://localhost:5000/chords/c-sus2/Csus2Fret.svg",
    irlURL: "http://localhost:5000/chords/c-sus2/Csus2IRL.png",
    tutorialURL: "/chords/c-sus2",
    difficulty: "Beginner",
  },

  {
    id: 4,
    name: "C 7",
    slug: "c7",
    type: "7",
    notes: ["C", "E", "A#", "C"],
    fingers: ["X", 3, 2, 4, 1, 0],
    diagramURL: "http://localhost:5000/chords/c7/C7Fret.svg",
    irlURL: "http://localhost:5000/chords/c7/C7IRL.png",
    tutorialURL: "/chords/c7",
    difficulty: "Beginner",
  },

  {
    id: 5,
    name: "C maj7",
    slug: "c-major7",
    type: "maj7",
    notes: ["C", "E"],
    fingers: ["X", 3, 2, 0, 0, 0],
    diagramURL: "http://localhost:5000/chords/c-major7/Cmaj7Fret.svg",
    irlURL: "http://localhost:5000/chords/c-major7/Cmaj7IRL.png",
    tutorialURL: "/chords/c-major7",
    difficulty: "Beginner",
  },

  {
    id: 6,
    name: "A major",
    slug: "a-major",
    type: "major",
    notes: ["E", "A", "C#"],
    fingers: ["X", 0, 1, 2, 3, 0],
    diagramURL: "http://localhost:5000/chords/a-major/AmajorFret.svg",
    irlURL: "http://localhost:5000/chords/a-major/AmajorIRL.png",
    tutorialURL: "/chords/a-major",
    difficulty: "Beginner",
  },

  {
    id: 7,
    name: "A minor",
    slug: "a-minor",
    type: "minor",
    notes: ["E", "A", "C"],
    fingers: ["X", 0, 2, 3, 1, 0],
    diagramURL: "http://localhost:5000/chords/a-minor/AminorFret.svg",
    irlURL: "http://localhost:5000/chords/a-minor/AminorIRL.png",
    tutorialURL: "/chords/a-minor",
    difficulty: "Beginner",
  },

  {
    id: 8,
    name: "A sus2",
    slug: "a-sus2",
    type: "sus2",
    notes: ["E", "A"],
    fingers: ["X", 0, 2, 3, 0, 0],
    diagramURL: "http://localhost:5000/chords/a-sus2/Asus2Fret.svg",
    irlURL: "http://localhost:5000/chords/a-sus2/Asus2IRL.png",
    tutorialURL: "/chords/a-sus2",
    difficulty: "Beginner",
  },

  {
    id: 9,
    name: "A 7",
    slug: "a-7",
    type: "7",
    notes: ["E", "C#"],
    fingers: ["X", 0, 2, 0, 3, 0],
    diagramURL: "http://localhost:5000/chords/a7/A7Fret.svg",
    irlURL: "http://localhost:5000/chords/a7/A7IRL.png",
    tutorialURL: "/chords/a-7",
    difficulty: "Beginner",
  },

  {
    id: 10,
    name: "A maj7",
    slug: "a-maj7",
    type: "maj7",
    notes: ["E", "G#", "C#"],
    fingers: ["X", 0, 2, 1, 3, 0],
    diagramURL: "http://localhost:5000/chords/a-maj7/Amajor7Fret.svg",
    irlURL: "http://localhost:5000/chords/a-maj7/Amajor7IRL.png",
    tutorialURL: "/chords/a-maj7",
    difficulty: "Intermediate",
  },
];

app.get("/", (req, res) => {
  res.send("NeonFret API is running");
});

// ------------------- GET all CHORDS -------------------
app.get("/api/chords", (req, res) => {
  res.json(chords);
});

// ------------------- GET all TYPES -------------------
app.get("/api/chords/types", (req, res) => {
  const types = [...new Set(chords.map((c) => c.type))];
  res.json(types);
});

// ------------------- GET chords by ROOT LETTER -------------------
app.get("/api/chords/root/:letter", (req, res) => {
  const letter = req.params.letter.toUpperCase();

  const filtered = chords.filter((c) =>
    c.name.toUpperCase().startsWith(letter)
  );

  if (filtered.length === 0) {
    return res
      .status(404)
      .json({ message: "No chords found for this root note" });
  }

  res.json(filtered);
});

// ------------------- GET chord by ID -------------------
app.get("/api/chords/:id", (req, res) => {
  const chordId = parseInt(req.params.id, 10);

  const foundChord = chords.find((c) => c.id === chordId);

  if (!foundChord) {
    return res.status(404).json({ message: "Chord not found" });
  }

  res.json(foundChord);
});

// ------------------- GET chord by SLUG -------------------
app.get("/api/chords/slug/:slug", (req, res) => {
  const slug = req.params.slug.toLowerCase();
  const found = chords.find((c) => c.slug.toLowerCase() === slug);

  if (!found) {
    return res.status(404).json({ message: "Chord not found" });
  }

  res.json(found);
});

// ------------------- GET chords by TYPE -------------------
app.get("/api/chords/type/:type", (req, res) => {
  const type = req.params.type.toLowerCase();
  const filtered = chords.filter((c) => c.type.toLowerCase() === type);

  if (filtered.length === 0) {
    return res.status(404).json({ message: "No chords found for this type" });
  }

  res.json(filtered);
});

// ------------------- GET chords by DIFFICULTY -------------------
app.get("/api/chords/difficulty/:level", (req, res) => {
  const level = req.params.level.toLowerCase();

  const filtered = chords.filter((c) => c.difficulty.toLowerCase() === level);

  if (filtered.length === 0) {
    return res
      .status(404)
      .json({ message: "No chords found for this difficulty" });
  }

  res.json(filtered);
});

app.listen(5000, () => console.log("Server running on port 5000"));
