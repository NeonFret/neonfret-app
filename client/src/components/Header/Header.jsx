import logoIcon from "../../assets/logo_icon.svg";
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import { AuthContext } from "../../context/AuthContext";
import profileIcon from "../../../public/icons/profile.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

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

  
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <>
      <header className="header">
        <div className="left-icon-side">
          <img src={logoIcon} alt="NeonFret" />
          <h1>NeonFret</h1>
        </div>

        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/chords">CHORDS</Link>
            </li>
            <li>
              <Link to="/scales">SCALES</Link>
            </li>
            <li>
              <Link to="/licks">LICKS</Link>
            </li>
            <li>
              <Link to="/metronome">PRACTICE</Link>
            </li>
          </ul>
        </nav>

        {user ? (
          <div
            className="profile-area"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img src={profileIcon} alt="profile" className="profile-icon" />
          </div>
        ) : (
          <Link to="/signin" className="sign-in">
            SIGN IN
          </Link>
        )}

        {user && showDropdown && (
          <div className="profile-dropdown" ref={dropdownRef}>
            <p>See Profile</p>

            <button onClick={logout} className="logout-btn">
              Log Out
            </button>
          </div>
        )}

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
            <hr />
            {user ? (
              <li className="mobile-profile">
                <span>{user.username}</span>
                <button onClick={logout} className="logout-btn">
                  Log Out
                </button>
              </li>
            ) : (
              <li className="mobile-sign-in">
                <Link to="/signin">SIGN IN</Link>
              </li>
            )}
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
