import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Amit<span className="gradient-text">.</span></h3>
            <p className="footer-tagline">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/Amit046" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/-amit" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:amityt500678@gmail.com">Email</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Location</h4>
            <p>Gurugram, India</p>
            <p className="footer-education">B.Tech CSE (Data Science)</p>
            <p>Lovely Professional University</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Amit. All rights reserved.</p>
          <p className="footer-note">Built with React & passion for code</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;