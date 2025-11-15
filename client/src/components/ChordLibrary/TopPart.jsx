import FilterInput from "./FilterInput";
import SearchInput from "./SearchInput";
import "./TopPart.css";
import { useState } from "react";

export default function TopPart() {
  const [typeFilter, setTypeFilter] = useState("");
  return (
    <section className="top-part-layout">
      <h1>
        Chord <span>Library</span>
      </h1>
      <div className="filters">
        <SearchInput />
        <FilterInput value={typeFilter} onChange={setTypeFilter} />
      </div>
    </section>
  );
}
