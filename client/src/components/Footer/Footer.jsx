import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-line"></div>
      <div className="footer">
        <div className="footer-left">
          <span className="copyright">© {year}</span>
          <span className="brand">NeonFret</span>
        </div>

        <div className="footer-right">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
