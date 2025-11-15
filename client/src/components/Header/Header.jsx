import logoIcon from "../../assets/logo_icon.svg";
import { useState, useEffect } from "react";
import "../Header/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 300);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

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

        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {menuOpen && (
        <div className={`mobile-menu ${closing ? "closing" : ""}`}>
          <ul>
            <li>HOME</li>
            <li>CHORDS</li>
            <li>SCALES</li>
            <li>LICKS</li>
            <li>PRACTICE</li>
            <li className="mobile-sign-in">SIGN IN</li>
          </ul>

          <button className="close-menu" onClick={closeMenu}>
            ✕
          </button>
        </div>
      )}

      <div className="underline"></div>
    </>
  );
}
