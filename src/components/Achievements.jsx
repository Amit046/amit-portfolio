import React, { useEffect, useRef, useState } from "react";
import "./Achievements.css";

const achievements = [
  {
    id: 1,
    icon: "🎓",
    title: "GATE CS 2026 Qualified",
    subtitle: "Graduate Aptitude Test in Engineering",
    description:
      "Qualified GATE 2026 in Computer Science & Information Technology — one of India's most competitive national-level engineering exams.",
    tag: "Academic",
    color: "var(--ach-gold)",
  },
  {
    id: 2,
    icon: "💻",
    title: "50+ LeetCode Problems Solved",
    subtitle: "Competitive Programming",
    description:
      "Solved 50+ coding challenges on LeetCode spanning arrays, dynamic programming, trees, graphs, and more.",
    tag: "DSA",
    color: "var(--ach-cyan)",
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="achievements-section" id="achievements" ref={sectionRef}>
      {/* Decorative blobs */}
      <div className="ach-blob ach-blob-1" />
      <div className="ach-blob ach-blob-2" />

      <div className={`ach-container ${visible ? "ach-visible" : ""}`}>
        {/* Header */}
        <div className="ach-header">
          <span className="ach-label">Milestones</span>
          <h2 className="ach-title">
            Achievements<span className="ach-dot">.</span>
          </h2>
          <p className="ach-subtitle">
            A few highlights from my academic and coding journey.
          </p>
        </div>

        {/* Cards */}
        <div className="ach-grid">
          {achievements.map((ach, i) => (
            <div
              className="ach-card"
              key={ach.id}
              style={{ "--delay": `${i * 0.18}s`, "--accent": ach.color }}
            >
              <div className="ach-card-inner">
                {/* Glow accent line */}
                <div className="ach-accent-bar" />

                <div className="ach-icon-wrap">
                  <span className="ach-icon">{ach.icon}</span>
                </div>

                <div className="ach-tag">{ach.tag}</div>

                <h3 className="ach-card-title">{ach.title}</h3>
                <p className="ach-card-sub">{ach.subtitle}</p>
                <p className="ach-card-desc">{ach.description}</p>

                {/* Corner decoration */}
                <svg className="ach-corner" viewBox="0 0 40 40" fill="none">
                  <path d="M0 40 L40 0" stroke="currentColor" strokeWidth="1" opacity="0.15" />
                  <path d="M10 40 L40 10" stroke="currentColor" strokeWidth="1" opacity="0.1" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}