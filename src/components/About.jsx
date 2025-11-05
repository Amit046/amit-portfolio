import React, { useEffect, useRef, useState } from 'react';

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
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className={`about-content ${isVisible ? 'slide-up' : ''}`}>
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate B.Tech Computer Science and Engineering student specializing in Data Science 
              at Lovely Professional University with a CGPA of 7.0/10.
            </p>
            
            <p>
              My journey in software development combines strong algorithmic thinking with practical 
              full-stack engineering. I've built real-time communication platforms, data visualization 
              dashboards, and desktop applications using modern technologies.
            </p>
            
            <p>
              I'm particularly interested in creating scalable solutions that blend data analysis with 
              interactive user experiences. Whether it's building WebRTC video calling apps or designing 
              CPU scheduling simulators, I focus on writing clean, maintainable code.
            </p>
            
            <div className="education-card">
              <div className="card-icon">🎓</div>
              <div className="card-content">
                <h3>Education</h3>
                <h4>Lovely Professional University</h4>
                <p>B.Tech in Computer Science and Engineering (Data Science)</p>
                <p className="duration">Aug 2023 – Aug 2027 | CGPA: 7.0/10</p>
                <p className="coursework">
                  <strong>Key Courses:</strong> Data Structures & Algorithms, Operating Systems, 
                  DBMS, Computer Networks, Machine Learning, Deep Learning
                </p>
              </div>
            </div>

            <div className="objective-card">
              <div className="card-icon">🎯</div>
              <div className="card-content">
                <h3>Career Objective</h3>
                <p>
                  To leverage my engineering and problem-solving skills to design and implement 
                  impactful software systems, contributing to technologies that connect users globally 
                  while continuously growing as a versatile engineer.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Coding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;