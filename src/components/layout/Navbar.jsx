import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        TULAS
        <span>INTERNATIONAL SCHOOL</span>
      </a>

      <nav className="navbar-links">
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#campus">Campus</a>
        <a href="#sports">Sports</a>
        <a href="#admissions">Admissions</a>
      </nav>

      <a href="#admissions" className="navbar-cta">
        Enquire Now
        <ArrowRight size={17} />
      </a>

      <button
        className="navbar-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#academics" onClick={closeMenu}>
          Academics
        </a>

        <a href="#campus" onClick={closeMenu}>
          Campus
        </a>
        <a href="#sports" onClick={closeMenu}>
          Sports
        </a>

        <a href="#why-tis" onClick={closeMenu}>
          Why TIS
        </a>

        <a href="#testimonials" onClick={closeMenu}>
          Testimonials
        </a>

        <a href="#admissions" onClick={closeMenu}>
          Admissions
        </a>
      </nav>
    </header>
  );
}

export default Navbar;