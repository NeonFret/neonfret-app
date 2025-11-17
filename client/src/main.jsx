import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Chords from "./pages/Chords.jsx";
import ChordPage from "./pages/ChordPage.jsx";
import MetronomePage from "./pages/MetronomePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="chords" element={<Chords />} />
          <Route path="/chords/:slug" element={<ChordPage />} />
          <Route path="metronome" element={<MetronomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
