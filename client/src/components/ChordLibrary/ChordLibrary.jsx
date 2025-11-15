import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import FilterInput from "./FilterInput";
import ChordGrid from "./ChordGrid";
import "./ChordLibrary.css";

export default function ChordLibrary() {
  const [chords, setChords] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/chords")
      .then((res) => res.json())
      .then((data) => setChords(data));
  }, []);

  const filtered = chords.filter((chord) => {
    const matchesSearch = chord.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    const matchesFilter = typeFilter ? chord.type === typeFilter : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="layout-main">
      <section className="top-part-layout">
        <h1>
          Chord <span>Library</span>
        </h1>

        <div className="filters">
          <SearchInput value={searchValue} onChange={setSearchValue} />
          <FilterInput value={typeFilter} onChange={setTypeFilter} />
        </div>
      </section>

      <ChordGrid chords={filtered} />
    </div>
  );
}
