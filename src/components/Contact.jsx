import React, { useEffect, useRef, useState } from 'react';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since no backend, just show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'slide-left' : ''}`}>
            <h3>Let's Connect!</h3>
            <p className="contact-description">
              I'm currently looking for opportunities in software engineering and full-stack development. 
              Feel free to reach out if you'd like to discuss projects, collaborations, or just say hi!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Gurugram, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:amityt500678@gmail.com">amityt500678@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919815886722">+91-9815886722</a>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://github.com/Amit046" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/-amit" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className={`contact-form-wrapper ${isVisible ? 'slide-right' : ''}`}>
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;