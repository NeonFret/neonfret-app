import { useState } from "react";
import "./FilterInput.css";
import ArrowIcon from "../../../public/icons/ArrowDown.svg";

const OPTIONS = [
  { value: "", label: "Filter by type" },
  { value: "major", label: "Major" },
  { value: "minor", label: "Minor" },
  { value: "sus2", label: "Sus2" },
  { value: "7", label: "7" },
  { value: "maj7", label: "Maj7" },
];

export default function FilterInput({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  const selectedLabel =
    OPTIONS.find((opt) => opt.value === value)?.label || "Filter by type";

  return (
    <div
      className={`filter-wrapper ${open ? "open" : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className={`filter-display ${value ? "has-value" : ""}`}>
        {selectedLabel}
      </div>

      <img src={ArrowIcon} alt="" className="filter-arrow" />

      {open && (
        <ul className="filter-options">
          {OPTIONS.map((opt) => (
            <li
              key={opt.value}
              className="filter-option"
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
