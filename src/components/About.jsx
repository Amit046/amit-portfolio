import React, { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {
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

  return (
    <section id="about" className="about-new" ref={sectionRef}>
      <div className="about-container-new">
        <div className={`about-header ${isVisible ? "fade-in" : ""}`}>
          <span className="about-subtitle">Who I Am</span>
          <h2 className="about-title">
            Turning Ideas Into <span className="gradient-text">Reality</span>
          </h2>
        </div>

        <div className="about-grid-new">
          {/* Left - Main Content */}
          <div className={`about-main ${isVisible ? "slide-left" : ""}`}>
            <p className="about-lead">
              Full-Stack Engineer with a passion for building scalable,
              data-driven applications.
            </p>

            <p className="about-desc">
              Currently pursuing B.Tech in Computer Science & Engineering (Data
              Science) at Lovely Professional University with a CGPA of 7.0/10.
              I specialize in creating modern web applications using React,
              Node.js, and Python.
            </p>

            <p className="about-desc">
              My expertise spans from building real-time communication platforms
              with WebRTC to creating interactive data visualization dashboards.
              I focus on writing clean, maintainable code while ensuring optimal
              performance and user experience.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Problem Solver</h4>
                  <p>Translating complex requirements into elegant solutions</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h4>Fast Learner</h4>
                  <p>Quickly adapting to new technologies and frameworks</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Production Ready</h4>
                  <p>Delivering scalable, maintainable, and tested code</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats & Education */}
          <div className={`about-sidebar ${isVisible ? "slide-right" : ""}`}>
            <div className="stats-grid-new">
              <div className="stat-item-new">
                <div className="stat-icon">💼</div>
                <div className="stat-content">
                  <span className="stat-num">3+</span>
                  <span className="stat-text">Projects</span>
                </div>
              </div>
              <div className="stat-item-new">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                  <span className="stat-num">6+</span>
                  <span className="stat-text">Certs</span>
                </div>
              </div>
              <div className="stat-item-new">
                <div className="stat-icon">⚙️</div>
                <div className="stat-content">
                  <span className="stat-num">10+</span>
                  <span className="stat-text">Tech</span>
                </div>
              </div>
              <div className="stat-item-new">
                <div className="stat-icon">💻</div>
                <div className="stat-content">
                  <span className="stat-num">2+</span>
                  <span className="stat-text">Years</span>
                </div>
              </div>
            </div>

            <div className="education-box-new">
              <div className="edu-icon">🎓</div>
              <div className="edu-content">
                <h3>Education</h3>
                <h4>Lovely Professional University</h4>
                <p>B.Tech CSE (Data Science)</p>
                <span className="edu-year">2023 – 2027</span>
                <div className="edu-gpa">
                  <span>CGPA</span>
                  <strong>7.0/10</strong>
                </div>
              </div>
            </div>

            <div className="objective-box-new">
              <div className="obj-icon">🎯</div>
              <div className="obj-content">
                <h3>Career Objective</h3>
                <p>
                  Seeking opportunities to leverage my full-stack development
                  and data science skills to build impactful software systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
