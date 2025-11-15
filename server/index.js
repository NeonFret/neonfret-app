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
  },

  {
    id: 2,
    name: "C minor",
    slug: "c-minor",
    type: "minor(barre)",
    notes: ["C", "G", "C", "G"],
    fingers: ["1(barring)", 4, 5, 2, 1],
    diagramURL: "http://localhost:5000/chords/c-minor/CminorFret.svg",
    irlURL: "http://localhost:5000/chords/c-minor/CminorIRL.png",
    tutorialURL: "/chords/c-minor",
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
  },

  {
    id: 4,
    name: "C7",
    slug: "c7",
    type: "dominant7",
    notes: ["C", "E", "A#", "C"],
    fingers: ["X", 3, 2, 4, 1, 0],
    diagramURL: "http://localhost:5000/chords/c7/C7Fret.svg",
    irlURL: "http://localhost:5000/chords/c7/C7IRL.png",
    tutorialURL: "/chords/c7",
  },

  {
    id: 5,
    name: "Cmaj7",
    slug: "c-major7",
    type: "major7",
    notes: ["C", "E", "G", "B"],
    fingers: ["X", 3, 2, 0, 0, 0],
    diagramURL: "http://localhost:5000/chords/c-major7/Cmaj7Fret.svg",
    irlURL: "http://localhost:5000/chords/c-major7/Cmaj7IRL.png",
    tutorialURL: "/chords/c-major7",
  },
];

app.get("/", (req, res) => {
  res.send("NeonFret API is running");
});

app.get("/api/chords", (req, res) => {
  res.json(chords);
});

app.listen(5000, () => console.log("Server running on port 5000"));
