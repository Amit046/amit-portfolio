import React, { useEffect, useRef, useState } from "react";

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certifications = [
    {
      title:
        "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      date: "Sep 2025",
      icon: "☁️",
      description: "Expertise in Data Science and Cloud Infrastructure",
      certificateLink:
        "https://drive.google.com/file/d/1k8hJOkusZcYKqL17jnF3hSUn3l1YaZDJ/view?usp=drive_link",
    },
    {
      title: "Oracle Certified Generative AI Professional",
      issuer: "Oracle",
      date: "Sep 2025",
      icon: "🤖",
      description: "Proficiency in modern AI and ML tools",
      certificateLink:
        "https://drive.google.com/file/d/1tzHMnxD9HwbwQXw_YF5iU95DNiz8JWqT/view?usp=drive_link",
    },
    {
      title: "Full Stack Development in React and Node.js",
      issuer: "Lovely Professional University",
      date: "Aug 2025",
      icon: "🔧",
      description: "Complete full-stack web development certification",
      certificateLink:
        "https://drive.google.com/file/d/1HM1FTiwBOhAtX0KeOFwCCmuVQhkpChn4/view?usp=drive_link",
    },
    {
      title: "Natural Language Processing for Developers",
      issuer: "Infosys Springboard",
      date: "Jul 2025",
      icon: "💬",
      description: "NLP techniques and applications for developers",
      certificateLink:
        "https://drive.google.com/file/d/1dux9qjiy2ROf1jgt4OswEEUZ04zm53Bp/view?usp=drive_link",
    },
    {
      title: "Advanced Computer Networks",
      issuer: "NPTEL",
      date: "Apr 2025",
      icon: "🌐",
      description:
        "Advanced concepts in Computer Networks, TCP/IP Protocol, and Network Routing",
      certificateLink:
        "https://drive.google.com/file/d/1GpBtvbWB9q5kEk10lPpzsr-Eu4EDTvh1/view?usp=drive_link",
    },
    {
      title: "Tata - GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      date: "Sep 2025",
      icon: "📈",
      description:
        "Practical tasks in exploratory data analysis, risk profiling, and AI-driven collections strategy",
      certificateLink:
        "https://drive.google.com/file/d/16GJIkVs79tVDt6VTQGxiwsiF_nU9tvDW/view?usp=drive_link",
    },
  ];

  return (
    <section id="certifications" className="certifications" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? "fade-in" : ""}`}>
          <span className="gradient-text">Certifications</span> & Achievements
        </h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`certification-card ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
                {cert.certificateLink && (
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-btn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="16"
                      height="16"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                    View Certificate
                  </a>
                )}
              </div>
              <div className="cert-badge">✓</div>
            </div>
          ))}
        </div>

        <div className={`achievements-section ${isVisible ? "fade-in" : ""}`}>
          <h3 className="achievements-title">Key Strengths</h3>
          <div className="achievements-list">
            <div className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <p>Oracle Certified in Generative AI and Cloud Infrastructure</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">💡</span>
              <p>
                Strong grasp of software engineering principles and full-cycle
                development
              </p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🚀</span>
              <p>
                Fast learner focused on clean, maintainable, and scalable code
              </p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">📂</span>
              <p>
                Active GitHub contributor with real-world full-stack projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
