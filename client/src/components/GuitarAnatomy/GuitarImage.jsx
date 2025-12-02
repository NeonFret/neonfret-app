import React from "react";
import guitarImage from "../../../public/Images/guitar_anatomy.jpeg";
import { useState } from "react";

export default function GuitarImage() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  function handleFullScreen() {
    setIsFullScreen(!isFullScreen);

    if (!isFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <div className={`guitar-image-wrapper ${isFullScreen ? "fullscreen" : ""}`}>
      <img src={guitarImage} alt="Guitar Anatomy" onClick={handleFullScreen} />
    </div>
  );
}
