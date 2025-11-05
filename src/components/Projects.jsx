import React, { useEffect, useRef, useState } from "react";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
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
        "Real-time video communication platform with audio/video calling, chat, and screen sharing features using WebRTC and Socket.IO for peer-to-peer communication.",
      tech: ["React.js", "WebRTC", "Socket.IO", "Node.js", "Express.js"],
      icon: "📹",
      link: "https://github.com/Amit046/Video_Call_App",
      highlights: [
        "Low-latency P2P communication",
        "Dynamic room management",
        "Responsive UI with seamless sync",
      ],
    },
    {
      title: "Mobile Sales Dashboard",
      period: "Jul 2025",
      description:
        "Interactive dashboard analyzing and visualizing sales data by city, brand, payment method, and customer ratings using advanced DAX formulas and data modeling.",
      tech: ["Power BI", "Excel", "DAX", "Data Analysis"],
      icon: "📊",
      link: "https://github.com/Amit046/Mobile-Sales-Dashboard-PowerBI",
      highlights: [
        "Interactive visualizations",
        "Sales trend analysis",
        "Multi-dimensional filtering",
      ],
    },
    {
      title: "CPU Scheduling Simulator",
      period: "Mar 2025 – Apr 2025",
      description:
        "Desktop simulator for process scheduling algorithms (FCFS, SJF, RR) with interactive GUI, Gantt chart visualization, and turnaround metrics analysis.",
      tech: ["Python", "PyQt5", "OOP", "Data Visualization"],
      icon: "⚙️",
      link: "https://github.com/Amit046/Process-Scheduling-Dashboard",
      highlights: [
        "Visual Gantt charts",
        "Multiple scheduling algorithms",
        "Modular OOP design",
      ],
    },
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? "fade-in" : ""}`}>
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-icon">{project.icon}</div>
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-dot">•</span>
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="18"
                    height="18"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
