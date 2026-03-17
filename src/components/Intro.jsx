import React, { useEffect, useState } from "react";
import "./Intro.css";

function Intro({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out at 5s, fully gone by 6s
    const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
    const doneTimer = setTimeout(() => onComplete(), 6000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-overlay ${fadeOut ? "intro-fadeout" : ""}`}>
      <video
        className="intro-video"
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setFadeOut(true)}
      />
    </div>
  );
}

export default Intro;
