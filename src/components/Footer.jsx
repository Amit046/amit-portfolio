import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              Amit<span className="gradient-text">.</span>
            </h3>
            <p className="footer-tagline">
              Building scalable solutions and transforming ideas into reality
              through code.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a onClick={() => scrollToSection("home")}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("about")}>About</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("projects")}>Projects</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("skills")}>Skills</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/Amit046"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/-amit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:amityt500678@gmail.com">Email</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Location</h4>
            <p>Gurugram, India</p>
            <p className="footer-education">
              Bachelor of Technology in Computer Science and Engineering
            </p>
            <p>Lovely Professional University</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Amit. All rights reserved.</p>
          <p className="footer-note">
            Designed & Built with React & Passion 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
