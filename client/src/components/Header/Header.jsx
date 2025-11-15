import logoIcon from "../../assets/logo_icon.svg";

import "../Header/Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="left-icon-side">
          <img src={logoIcon} alt="NeonFret" />
          <h1>NeonFret</h1>
        </div>

        <nav>
          <ul className="nav-list">
            <li>HOME</li>
            <li>CHORDS</li>
            <li>SCALES</li>
            <li>LICKS</li>
            <li>PRACTICE</li>
          </ul>
        </nav>

        <button className="sign-in">SIGN IN</button>
      </header>
      <div className="underline"></div>
    </>
  );
}
