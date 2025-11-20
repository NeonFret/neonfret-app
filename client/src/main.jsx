import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "../src/context/AuthProvider.jsx";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Chords from "./pages/Chords.jsx";
import ChordPage from "./pages/ChordPage.jsx";
import MetronomePage from "./pages/MetronomePage.jsx";
import SignIn from "./pages/Auth/SignIn.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import GuitarAnatomy from "./pages/GuitarAnatomy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1059444998266-9poncaevboi05tqe1fpr09350vjo1bha.apps.googleusercontent.com">
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
              <Route path="/guitar-anatomy" element={<GuitarAnatomy />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
