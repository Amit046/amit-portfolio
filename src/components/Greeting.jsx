import React, { useEffect, useState } from "react";
import "./Greeting.css";

// Define greetings outside component to avoid dependency warning
const greetings = [
  { text: "Hello", language: "English" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", language: "Punjabi" },
  { text: "வணக்கம்", language: "Tamil" },
  { text: "నమస్కారం", language: "Telugu" },
  { text: "مرحبا", language: "Arabic" },
];

function Greeting() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if greeting has already been shown in this session
    const hasSeenGreeting = sessionStorage.getItem("hasSeenGreeting");

    if (!hasSeenGreeting) {
      // Show greeting only if not seen before
      setIsVisible(true);

      // Change greeting every 850ms (slightly slower for better readability)
      const greetingInterval = setInterval(() => {
        setCurrentGreeting((prev) => {
          if (prev < greetings.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 850);

      // Start fade out at 5.5 seconds
      const fadeOutTimer = setTimeout(() => {
        setFadeOut(true);
      }, 5500);

      // Hide completely at 6.5 seconds and set flag
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenGreeting", "true");
      }, 6500);

      return () => {
        clearInterval(greetingInterval);
        clearTimeout(fadeOutTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`greeting-splash ${fadeOut ? "fade-out" : ""}`}>
      <div className="greeting-content">
        <div className="greeting-animation">
          {greetings.map((greeting, index) => (
            <div
              key={index}
              className={`greeting-text ${
                index === currentGreeting ? "active" : ""
              } ${index < currentGreeting ? "passed" : ""}`}
            >
              <h1>{greeting.text}</h1>
              <p className="greeting-language">{greeting.language}</p>
            </div>
          ))}
        </div>

        {/* Animated circles */}
        <div className="greeting-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>

        {/* Progress bar */}
        <div className="greeting-progress">
          <div className="progress-bar"></div>
        </div>

        {/* Background particles matching your portfolio style */}
        <div className="greeting-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Greeting;
