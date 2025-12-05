import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState({});
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      category: "Languages",
      icon: "💻",
      color: "#a78bfa",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      category: "Frontend",
      icon: "🎨",
      color: "#22d3ee",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "WebRTC", level: 75 },
        { name: "Socket.IO", level: 80 },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "#ec4899",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Git", level: 85 },
      ],
    },
    {
      category: "Data & Analytics",
      icon: "📊",
      color: "#f59e0b",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Pandas", level: 80 },
        { name: "Excel", level: 85 },
        { name: "ML", level: 75 },
        { name: "Pipelining", level: 70 },
      ],
    },
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
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Initialize progress at 0
          const initialProgress = {};
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              initialProgress[skill.name] = 0;
            });
          });
          setProgress(initialProgress);

          // Animate to actual values
          setTimeout(() => {
            const finalProgress = {};
            skillCategories.forEach((category) => {
              category.skills.forEach((skill) => {
                finalProgress[skill.name] = skill.level;
              });
            });
            setProgress(finalProgress);
          }, 300);
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

        {/* Skills Grid - 4 Columns */}
        <div className="skills-grid-new">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`skill-category-new ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="category-header-new">
                <span
                  className="category-icon-new"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </span>
                <h3 className="category-title-new">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="skills-list-new">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item-new">
                    <div className="skill-header-new">
                      <span className="skill-name-new">{skill.name}</span>
                      <span
                        className="skill-percentage-new"
                        style={{ color: category.color }}
                      >
                        {progress[skill.name] || 0}%
                      </span>
                    </div>
                    <div className="skill-bar-new">
                      <div
                        className="skill-progress-new"
                        style={{
                          width: `${progress[skill.name] || 0}%`,
                          background: `linear-gradient(90deg, ${category.color}, rgba(255,255,255,0.2))`,
                        }}
                      >
                        <div
                          className="skill-glow"
                          style={{ boxShadow: `0 0 20px ${category.color}` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competencies Section */}
        <div className={`competencies-new ${isVisible ? "fade-in" : ""}`}>
          <h3 className="competencies-title-new">Core Competencies</h3>
          <div className="competencies-grid-new">
            {competencies.map((comp, index) => (
              <div
                key={index}
                className="competency-card-new"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="competency-icon-new">{comp.icon}</div>
                <h4>{comp.title}</h4>
                <p>{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
