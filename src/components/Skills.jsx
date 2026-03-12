import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const softSkills = [
    { icon: "🧠", label: "Problem Solving" },
    { icon: "🤝", label: "Teamwork" },
    { icon: "⚡", label: "Adaptability" },
    { icon: "🎯", label: "Detail Oriented" },
    { icon: "🕐", label: "Time Management" },
    { icon: "💬", label: "Communication" },
    { icon: "🚀", label: "Fast Learner" },
    { icon: "🔍", label: "Critical Thinking" },
    { icon: "💡", label: "Creativity" },
    { icon: "📋", label: "Leadership" },
    { icon: "🔄", label: "Agile Mindset" },
    { icon: "🌐", label: "Open Source" },
  ];

  const techStack = [
    { icon: "🐍", label: "Python" },
    { icon: "⚛️", label: "React.js" },
    { icon: "🟢", label: "Node.js" },
    { icon: "🍃", label: "MongoDB" },
    { icon: "📊", label: "Power BI" },
    { icon: "🐘", label: "PostgreSQL" },
    { icon: "🔥", label: "TensorFlow" },
    { icon: "🐼", label: "Pandas" },
    { icon: "🔗", label: "WebRTC" },
    { icon: "🐙", label: "Git" },
    { icon: "🌐", label: "Socket.IO" },
    { icon: "📈", label: "Excel" },
    { icon: "☕", label: "Java" },
    { icon: "🗄️", label: "SQL" },
    { icon: "🤖", label: "AI/ML" },
    { icon: "🧪", label: "Flask" },
  ];

  const competencies = [
    { icon: "💡", title: "Problem Solving", desc: "Advanced DSA & algorithms" },
    { icon: "🚀", title: "Full-Stack", desc: "End-to-end development" },
    { icon: "📈", title: "Data Engineering", desc: "SQL & visualization" },
    { icon: "🤝", title: "Collaboration", desc: "Team-based development" },
    { icon: "⚡", title: "Fast Learner", desc: "Quick tech adoption" },
    { icon: "🎯", title: "Detail-Oriented", desc: "Clean, tested code" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-new" ref={sectionRef}>
      <div className="skills-container-new">

        {/* Header */}
        <div className={`skills-header ${isVisible ? "fade-in" : ""}`}>
          <span className="skills-subtitle">Tech Stack</span>
          <h2 className="skills-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        {/* ── TECH STACK MARQUEE (scrolls RIGHT → LEFT) ── */}
        <div className={`marquee-section ${isVisible ? "fade-in" : ""}`}>
          <h3 className="marquee-label">
            <span className="gradient-text">Technologies</span> I Work With
          </h3>
          <div className="marquee-wrapper">
            <div className="marquee-fade-left"></div>
            <div className="marquee-track-outer">
              <div className="marquee-track">
                {techStack.map((item, i) => (
                  <div key={`a-${i}`} className="marquee-item">
                    <span className="marquee-icon">{item.icon}</span>
                    <span className="marquee-text">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="marquee-track" aria-hidden="true">
                {techStack.map((item, i) => (
                  <div key={`b-${i}`} className="marquee-item">
                    <span className="marquee-icon">{item.icon}</span>
                    <span className="marquee-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee-fade-right"></div>
          </div>
        </div>

        {/* ── SOFT SKILLS MARQUEE (scrolls LEFT → RIGHT, reverse) ── */}
        <div className={`marquee-section ${isVisible ? "fade-in" : ""}`}>
          <div className="soft-skills-header">
            <span
              className="skills-subtitle"
              style={{
                color: "#ec4899",
                borderColor: "rgba(236,72,153,0.4)",
                background: "rgba(236,72,153,0.1)",
              }}
            >
              Soft Skills
            </span>
            <h3 className="soft-skills-title">
              Beyond the <span className="gradient-text">Code</span>
            </h3>
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-fade-left marquee-fade-left--pink"></div>
            <div className="marquee-track-outer marquee-track-outer--reverse">
              <div className="marquee-track">
                {softSkills.map((item, i) => (
                  <div key={`sa-${i}`} className="marquee-item marquee-item--pink">
                    <span className="marquee-icon">{item.icon}</span>
                    <span className="marquee-text">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="marquee-track" aria-hidden="true">
                {softSkills.map((item, i) => (
                  <div key={`sb-${i}`} className="marquee-item marquee-item--pink">
                    <span className="marquee-icon">{item.icon}</span>
                    <span className="marquee-text">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee-fade-right marquee-fade-right--pink"></div>
          </div>
        </div>

        {/* ── CORE COMPETENCIES MARQUEE (scrolls RIGHT → LEFT) ── */}
        <div className={`marquee-section ${isVisible ? "fade-in" : ""}`}>
          <h3 className="marquee-label">Core <span className="gradient-text">Competencies</span></h3>
          <div className="marquee-wrapper">
            <div className="marquee-fade-left"></div>
            <div className="marquee-track-outer marquee-track-outer--slow">
              <div className="marquee-track">
                {competencies.map((item, i) => (
                  <div key={`ca-${i}`} className="marquee-item marquee-item--comp">
                    <span className="marquee-icon">{item.icon}</span>
                    <div className="comp-text-group">
                      <span className="comp-title">{item.title}</span>
                      <span className="comp-desc">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="marquee-track" aria-hidden="true">
                {competencies.map((item, i) => (
                  <div key={`cb-${i}`} className="marquee-item marquee-item--comp">
                    <span className="marquee-icon">{item.icon}</span>
                    <div className="comp-text-group">
                      <span className="comp-title">{item.title}</span>
                      <span className="comp-desc">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee-fade-right"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
