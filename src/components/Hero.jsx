import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");
  const fullText = "Building Tomorrow's Solutions Today";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const avatarImage = require("../assets/avatar.jpg");

  // Replace this with your actual Google Drive CV link
  const cvLink =
    "https://drive.google.com/file/d/1W8oJOqpeycjxYU2QCgZrpLzGBKg8Wj25/view?usp=sharing";

  const handleViewCV = () => {
    window.open(cvLink, "_blank");
  };

  return (
    <section id="home" className="hero-redesign">
      {/* Glow Effect */}
      <div
        className="hero-glow-effect"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(167, 139, 250, 0.15), transparent 40%)`,
        }}
      />

      <div className="hero-container-new">
        {/* Left Side - Content */}
        <div className="hero-content-left">
          <div className="hero-label">
            <span className="status-dot"></span>
            Available for Full-Time Opportunities
          </div>

          <h1 className="hero-name">
            I'm <span className="name-highlight">Amit</span>
          </h1>

          <div className="hero-role">
            <div className="role-line"></div>
            <span className="role-text">{text}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-bio">
            Full-Stack Engineer & Data Scientist crafting scalable solutions
            with React, Node.js, Python, Excel, Power BI and AI. Transforming
            complex problems into elegant digital experiences.
          </p>

          <div className="hero-metrics">
            <div className="metric-box">
              <span className="metric-value">3+</span>
              <span className="metric-label">Projects</span>
            </div>
            <div className="metric-box">
              <span className="metric-value">6+</span>
              <span className="metric-label">Certifications</span>
            </div>
            <div className="metric-box">
              <span className="metric-value">10+</span>
              <span className="metric-label">Technologies</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn primary-btn">
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button onClick={handleViewCV} className="hero-btn cv-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="14 2 14 8 20 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="16"
                  y1="13"
                  x2="8"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="16"
                  y1="17"
                  x2="8"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="10 9 9 9 8 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>View CV</span>
            </button>
            <a href="#contact" className="hero-btn secondary-btn">
              <span>Let's Talk</span>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image-section">
          <div className="image-wrapper">
            <div className="image-border"></div>
            <img src={avatarImage} alt="Amit" className="hero-avatar" />

            {/* Floating Tech Badges */}
            <div className="tech-badge badge-1">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>React</span>
            </div>
            <div className="tech-badge badge-2">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>Node.js</span>
            </div>
            <div className="tech-badge badge-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              <span>Python</span>
            </div>
            <div className="tech-badge badge-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
              </svg>
              <span>MongoDB</span>
            </div>
            <div className="tech-badge badge-5">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11h-13L12 6z" />
              </svg>
              <span>Power BI</span>
            </div>
            <div className="tech-badge badge-6">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              <span>AI/ML</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="hero-particles-bg">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
