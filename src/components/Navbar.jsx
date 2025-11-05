import React, { useState, useEffect } from 'react';

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">DataDrivenAmit</span>
          <span className="logo-dot">.</span>
        </div>

        <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <a onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </a>
          <a onClick={() => scrollToSection("about")} className="nav-link">
            About
          </a>
          <a onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </a>
          <a onClick={() => scrollToSection("skills")} className="nav-link">
            Skills
          </a>
          <a
            onClick={() => scrollToSection("certifications")}
            className="nav-link"
          >
            Certifications
          </a>
          <a onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </a>
        </div>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;