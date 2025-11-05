import React, { useEffect, useRef, useState } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState({});
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'C++', level: 70 }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'WebRTC', level: 75 },
        { name: 'Socket.IO', level: 80 }
      ]
    },
    {
      category: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'Linux', level: 75 }
      ]
    },
    {
      category: 'Data & Analytics',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Pandas', level: 80 },
        { name: 'NumPy', level: 75 },
        { name: 'Matplotlib', level: 75 },
        { name: 'Excel', level: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          const initialProgress = {};
          skillCategories.forEach(category => {
            category.skills.forEach(skill => {
              initialProgress[skill.name] = 0;
            });
          });
          setProgress(initialProgress);

          setTimeout(() => {
            const finalProgress = {};
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
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
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className={`skill-category ${isVisible ? 'slide-up' : ''}`}
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{progress[skill.name] || 0}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${progress[skill.name] || 0}%`,
                          transition: 'width 1.5s ease-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`core-competencies ${isVisible ? 'fade-in' : ''}`}>
          <h3 className="competencies-title">Core Competencies</h3>
          <div className="competencies-grid">
            <div className="competency-card">
              <div className="competency-icon">💻</div>
              <h4>Software Development</h4>
              <p>OOP, design patterns, version control, and Agile principles</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">🧩</div>
              <h4>Problem Solving</h4>
              <p>Data structures, algorithms, and computational optimization</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">🌐</div>
              <h4>Full-Stack Engineering</h4>
              <p>Modern web technologies and RESTful API design</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">📈</div>
              <h4>Data Handling</h4>
              <p>SQL, data visualization, and analytics tools</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">🤝</div>
              <h4>Collaboration</h4>
              <p>Effective communication in team-based environments</p>
            </div>
            <div className="competency-card">
              <div className="competency-icon">⚡</div>
              <h4>Adaptability</h4>
              <p>Quick learner exploring new technologies and debugging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;