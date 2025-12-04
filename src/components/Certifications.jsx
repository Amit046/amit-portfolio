import React, { useEffect, useRef, useState } from "react";
import "./Certifications.css";

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
      color: "#a78bfa",
      description:
        "Advanced expertise in cloud-native data science and ML model deployment",
      certificateLink:
        "https://drive.google.com/file/d/1k8hJOkusZcYKqL17jnF3hSUn3l1YaZDJ/view",
    },
    {
      title: "Oracle Certified Generative AI Professional",
      issuer: "Oracle",
      date: "Sep 2025",
      icon: "🤖",
      color: "#22d3ee",
      description:
        "Comprehensive knowledge of LLMs and enterprise AI deployment",
      certificateLink:
        "https://drive.google.com/file/d/1tzHMnxD9HwbwQXw_YF5iU95DNiz8JWqT/view",
    },
    {
      title: "Full Stack Development in React and Node.js",
      issuer: "Lovely Professional University",
      date: "Aug 2025",
      icon: "🔧",
      color: "#ec4899",
      description: "End-to-end web application development and deployment",
      certificateLink:
        "https://drive.google.com/file/d/1HM1FTiwBOhAtX0KeOFwCCmuVQhkpChn4/view",
    },
    {
      title: "Natural Language Processing for Developers",
      issuer: "Infosys Springboard",
      date: "Jul 2025",
      icon: "💬",
      color: "#f59e0b",
      description: "Text processing and transformer-based models",
      certificateLink:
        "https://drive.google.com/file/d/1dux9qjiy2ROf1jgt4OswEEUZ04zm53Bp/view",
    },
    {
      title: "Advanced Computer Networks",
      issuer: "NPTEL",
      date: "Apr 2025",
      icon: "🌐",
      color: "#10b981",
      description: "TCP/IP protocols and network security",
      certificateLink:
        "https://drive.google.com/file/d/1GpBtvbWB9q5kEk10lPpzsr-Eu4EDTvh1/view",
    },
    {
      title: "Tata - GenAI Powered Data Analytics",
      issuer: "Forage",
      date: "Sep 2025",
      icon: "📈",
      color: "#8b5cf6",
      description: "Real-world analytics and AI-driven strategy",
      certificateLink:
        "https://drive.google.com/file/d/16GJIkVs79tVDt6VTQGxiwsiF_nU9tvDW/view",
    },
  ];

  const strengths = [
    { icon: "🏆", text: "Oracle Certified in GenAI & Cloud" },
    { icon: "💡", text: "Strong software engineering principles" },
    { icon: "🚀", text: "Clean, maintainable code focus" },
    { icon: "📂", text: "Active open-source contributor" },
  ];

  const handleCertificateClick = (link) => {
    // Open in new window/tab
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section
      id="certifications"
      className="certifications-new"
      ref={sectionRef}
    >
      <div className="certifications-container-new">
        <div className={`certifications-header ${isVisible ? "fade-in" : ""}`}>
          <span className="certifications-subtitle">Credentials</span>
          <h2 className="certifications-title">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
        </div>

        <div className="certifications-grid-new">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`certification-card-new ${
                isVisible ? "slide-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="cert-badge-new"
                style={{ background: cert.color }}
              >
                <span className="cert-icon-new">{cert.icon}</span>
              </div>

              <div className="cert-content-new">
                <div className="cert-meta-new">
                  <span className="cert-issuer-new">{cert.issuer}</span>
                  <span className="cert-date-new" style={{ color: cert.color }}>
                    {cert.date}
                  </span>
                </div>

                <h3 className="cert-title-new">{cert.title}</h3>
                <p className="cert-description-new">{cert.description}</p>

                {cert.certificateLink && (
                  <div
                    className="cert-view-btn-new"
                    style={{ borderColor: cert.color }}
                    onClick={() => handleCertificateClick(cert.certificateLink)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter")
                        handleCertificateClick(cert.certificateLink);
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 3h6v6M14 10l7-7M10 3H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>View Certificate</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`strengths-section-new ${isVisible ? "fade-in" : ""}`}>
          <h3 className="strengths-title-new">Key Strengths</h3>
          <div className="strengths-grid-new">
            {strengths.map((strength, index) => (
              <div key={index} className="strength-item-new">
                <span className="strength-icon-new">{strength.icon}</span>
                <p>{strength.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
