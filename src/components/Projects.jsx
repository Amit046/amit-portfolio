import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      title: "Video Calling App",
      period: "May 2025 – Jul 2025",
      description:
        "Enterprise-grade real-time video communication platform with peer-to-peer connectivity, low-latency streaming, and seamless chat integration.",
      tech: ["React.js", "WebRTC", "Socket.IO", "Node.js", "Express.js"],
      icon: "📹",
      link: "https://github.com/Amit046/Video_Call_App",
      highlights: [
        "Sub-100ms P2P latency",
        "Real-time chat sync",
        "HD screen sharing",
      ],
      color: "#a78bfa",
    },
    {
      title: "Mobile Sales Dashboard",
      period: "Jul 2025",
      description:
        "Interactive BI dashboard with multi-dimensional analysis, custom DAX calculations, and drill-down capabilities for comprehensive sales insights.",
      tech: ["Power BI", "Excel", "DAX", "Data Modeling"],
      icon: "📊",
      link: "https://github.com/Amit046/Mobile-Sales-Dashboard-PowerBI",
      highlights: [
        "Multi-dimensional analysis",
        "Dynamic KPI cards",
        "YoY comparisons",
      ],
      color: "#22d3ee",
    },
    {
      title: "CPU Scheduling Simulator",
      period: "Mar 2025 – Apr 2025",
      description:
        "Desktop application simulating OS scheduling algorithms with visual Gantt charts, performance metrics, and modular architecture.",
      tech: ["Python", "PyQt5", "OOP", "Data Visualization"],
      icon: "⚙️",
      link: "https://github.com/Amit046/Process-Scheduling-Dashboard",
      highlights: [
        "Interactive Gantt charts",
        "Real-time metrics",
        "Modular design",
      ],
      color: "#ec4899",
    },
  ];

  return (
    <section id="projects" className="projects-new" ref={sectionRef}>
      <div className="projects-container-new">
        <div className={`projects-header ${isVisible ? "fade-in" : ""}`}>
          <span className="projects-subtitle">My Work</span>
          <h2 className="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-desc">
            Building scalable solutions with modern technologies
          </p>
        </div>

        <div className="projects-grid-new">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card-new ${isVisible ? "slide-up" : ""} ${
                activeProject === index ? "active" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="project-top">
                <div
                  className="project-icon-new"
                  style={{ color: project.color }}
                >
                  {project.icon}
                </div>
                <span className="project-period-new">{project.period}</span>
              </div>

              <h3 className="project-title-new">{project.title}</h3>
              <p className="project-description-new">{project.description}</p>

              <div className="project-highlights-new">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="project-tech-new">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="tech-badge-new"
                    style={{ borderColor: project.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-new"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, rgba(255,255,255,0.1))`,
                }}
              >
                <span>View Project</span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;