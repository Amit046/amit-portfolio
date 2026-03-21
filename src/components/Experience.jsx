import React, { useEffect, useRef } from "react";
import "./Experience.css";

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Software Development Engineer (SDE) Intern",
      company: "Bluestock Fintech",
      type: "Internship",
      period: "Feb 2026 – Present",
      status: "current",
      icon: "💼",
      color: "#a78bfa",
      highlights: [
        "Optimizing scalable core fintech product features across multiple modules during early-stage product development.",
        "Debugging and validating critical application code to improve performance, reliability, and long-term maintainability.",
        "Collaborating closely with senior engineers to follow standardized software development practices and workflows.",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Git"],
    },
    {
      id: 2,
      role: "Full Stack Development Training",
      company: "Lovely Professional University",
      type: "Training",
      period: "Jun 2025 – Aug 2025",
      status: "completed",
      icon: "🎓",
      color: "#22d3ee",
      highlights: [
        "Acquired hands-on experience in full-stack web development using modern frontend and backend technologies.",
        "Implemented responsive user interfaces with React.js and RESTful APIs using Node.js following scalable practices.",
        "Built functional full-stack modules and earned an A grade for overall performance and project execution.",
      ],
      tech: ["React.js", "Node.js", "JavaScript", "HTML", "CSS", "MongoDB"],
    },
  ];

  return (
    <section id="experience" className="experience-new" ref={sectionRef}>
      <div className="experience-container-new">
        {/* Header */}
        <div className="experience-header animate-on-scroll">
          <span className="experience-subtitle">My Journey</span>
          <h2 className="experience-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="experience-desc">
            Real-world exposure through internships and intensive training
            programs, building production-grade software and industry-standard
            practices.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`experience-card-new animate-on-scroll ${idx % 2 === 0 ? "card-left" : "card-right"}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div
                className="timeline-dot"
                style={{
                  background: exp.color,
                  boxShadow: `0 0 20px ${exp.color}60`,
                }}
              >
                <span>{exp.icon}</span>
              </div>

              <div className="exp-card-inner">
                {/* Status badge */}
                <div className="exp-card-top">
                  <span className={`exp-status-badge ${exp.status}`}>
                    {exp.status === "current" ? (
                      <>
                        <span className="live-dot"></span> Current
                      </>
                    ) : (
                      "Completed"
                    )}
                  </span>
                  <span className="exp-type-tag">{exp.type}</span>
                </div>

                {/* Role & Company */}
                <h3 className="exp-role">{exp.role}</h3>
                <div className="exp-company-row">
                  <span className="exp-company" style={{ color: exp.color }}>
                    {exp.company}
                  </span>
                  <span className="exp-period">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="16"
                        y1="2"
                        x2="16"
                        y2="6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="8"
                        y1="2"
                        x2="8"
                        y2="6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="3"
                        y1="10"
                        x2="21"
                        y2="10"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    {exp.period}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="exp-divider"
                  style={{
                    background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                  }}
                ></div>

                {/* Highlights */}
                <ul className="exp-highlights">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="exp-highlight-item">
                      <span className="exp-bullet" style={{ color: exp.color }}>
                        ▹
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="exp-tech-row">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="exp-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

     
        
      </div>
    </section>
  );
}

export default Experience;
