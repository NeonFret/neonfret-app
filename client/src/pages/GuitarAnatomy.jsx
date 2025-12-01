import React from "react";
import "./guitarAnatomy.css";
import GuitarImage from "../components/GuitarAnatomy/GuitarImage";
import PartsList from "../components/GuitarAnatomy/PartsList";

const parts = [
  {
    label: "Headstock",
    description: "The top part of the guitar that holds the tuning machines.",
  },
  {
    label: "Tuning Pegs",
    description: "Used to tighten or loosen strings to tune the guitar.",
  },
  {
    label: "Nut",
    description:
      "Small piece that guides the strings from the headstock to the neck.",
  },
  {
    label: "Frets",
    description: "Metal strips across the fretboard used to change pitch.",
  },
  {
    label: "Fretboard",
    description: "Wooden surface on the neck where you press the strings.",
  },
  { label: "Sound Hole", description: "Amplifies sound on acoustic guitars." },
  {
    label: "Pickguard",
    description: "Protects the guitar body from pick scratches.",
  },
  { label: "Bridge", description: "Anchors the strings to the guitar body." },
  {
    label: "Saddle",
    description: "Supports the strings and affects action height.",
  },
  { label: "Strings", description: "Vibrate to produce sound." },
  { label: "Body", description: "Main resonating chamber of the guitar." },
  { label: "Neck", description: "Connects the body to the headstock." },
];

export default function GuitarAnatomy() {
  const leftParts = parts.slice(0, 6);
  const rightParts = parts.slice(6, 12);

  return (
    <div className="anatomy-container">
      <h1 className="anatomy-header">
        <span>Guitar</span> Anatomy
      </h1>
      <p className="subtitle">Learn every essential part of a guitar</p>

      <div className="main-content">
        <div className="list-parts">
          <PartsList parts={leftParts} />
          <PartsList parts={rightParts} />
        </div>
        <GuitarImage />
      </div>
    </div>
  );
}
