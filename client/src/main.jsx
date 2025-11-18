import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import AuthProvider from "../src/context/AuthProvider.jsx";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Chords from "./pages/Chords.jsx";
import ChordPage from "./pages/ChordPage.jsx";
import MetronomePage from "./pages/MetronomePage.jsx";
import SignIn from "./pages/Auth/SignIn.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="chords" element={<Chords />} />
            <Route path="/chords/:slug" element={<ChordPage />} />
            <Route path="metronome" element={<MetronomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
