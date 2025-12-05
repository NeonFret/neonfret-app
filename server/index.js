const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { OAuth2Client } = require("google-auth-library");
const googleClient = new OAuth2Client(
  "1059444998266-9poncaevboi05tqe1fpr09350vjo1bha.apps.googleusercontent.com"
);

const usersFile = path.join(__dirname, "users.json");

app.use(cors());
app.use(express.json());

app.use("/chords", express.static("public/chords"));
app.use("/uploads", express.static("uploads"));

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

function readUsers() {
  try {
    const data = fs.readFileSync(usersFile, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

function generateToken() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profile/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, req.userId + ext);
  },
});

const upload = multer({ storage });

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "No token" });

  const users = readUsers();
  const user = users.find((u) => u.token === token);

  if (!user) return res.status(401).json({ message: "Invalid token" });

  req.userId = user.id;
  next();
}

app.post(
  "/api/auth/upload-profile",
  authMiddleware,
  upload.single("profile"),
  (req, res) => {
    const users = readUsers();
    const user = users.find((u) => u.id === req.userId);

    if (!user) return res.status(400).json({ message: "User not found" });

    user.profileImage = `/uploads/profile/${req.file.filename}`;
    writeUsers(users);

    res.json({
      message: "Profile picture updated",
      image: user.profileImage,
    });
  }
);

app.get("/", (req, res) => {
  res.send("NeonFret API is running");
});

app.get("/api/chords", (req, res) => {
  res.json(chords);
});

app.get("/api/chords/types", (req, res) => {
  const types = [...new Set(chords.map((c) => c.type))];
  res.json(types);
});

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

app.get("/api/chords/:id", (req, res) => {
  const chordId = parseInt(req.params.id, 10);

  const foundChord = chords.find((c) => c.id === chordId);

  if (!foundChord) {
    return res.status(404).json({ message: "Chord not found" });
  }

  res.json(foundChord);
});

app.get("/api/chords/slug/:slug", (req, res) => {
  const slug = req.params.slug.toLowerCase();
  const found = chords.find((c) => c.slug.toLowerCase() === slug);

  if (!found) {
    return res.status(404).json({ message: "Chord not found" });
  }

  res.json(found);
});

app.get("/api/chords/type/:type", (req, res) => {
  const type = req.params.type.toLowerCase();
  const filtered = chords.filter((c) => c.type.toLowerCase() === type);

  if (filtered.length === 0) {
    return res.status(404).json({ message: "No chords found for this type" });
  }

  res.json(filtered);
});

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

app.post("/api/auth/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ message: "All fields required" });

  const users = readUsers();

  if (users.some((u) => u.email === email)) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const newUser = {
    id: Date.now(),
    username,
    email,
    password,
    createdAt: new Date().toLocaleDateString(),
  };

  users.push(newUser);
  writeUsers(users);

  res.json({ message: "Account created successfully" });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user)
    return res.status(401).json({ message: "Invalid email or password" });

  const token = generateToken();

  user.token = token;
  writeUsers(users);

  res.json({
    message: "Login successful",
    token,
  });
});

app.get("/api/auth/profile", (req, res) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: "No token provided" });

  const users = readUsers();
  const user = users.find((u) => u.token === token);

  if (!user) return res.status(401).json({ message: "Invalid token" });

  res.json({
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
    profileImage: user.profileImage || null,
  });
});

app.post("/api/auth/google", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience:
        "1059444998266-9poncaevboi05tqe1fpr09350vjo1bha.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();

    const email = payload.email;
    const username = payload.name;

    const users = readUsers();
    let user = users.find((u) => u.email === email);

    if (!user) {
      user = {
        id: Date.now(),
        username,
        email,
        password: null,
        createdAt: new Date().toLocaleDateString(),
      };
      users.push(user);
    }

    const neonToken = generateToken();
    user.token = neonToken;
    writeUsers(users);

    res.json({ message: "Google login successful", token: neonToken });
  } catch (error) {
    res.status(400).json({ message: "Google authentication failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
