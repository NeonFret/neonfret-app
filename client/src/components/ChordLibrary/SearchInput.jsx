import "./SearchInput.css";
import SearchIcon from "../../../public/icons/SearchIcon.svg";

export default function SearchInput({value, onChange}) {
  return (
    <div className="search-wrapper">
      <img src={SearchIcon} alt="search" className="search-icon" />
      <input type="search" placeholder="Search chords..." value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>
  );
}
