import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Hero.css";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 81; 
const FRAME_PATH = (i) =>
  `/sequence/ezgif-frame-${String(i).padStart(3, "0")}.png`;

const FPS_START = 6; // slow start speed when cursor first enters
const FPS_FULL = 20; // full speed after ramp-up
const RAMP_DURATION = 1200; // ms to go from slow → full speed
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");
  const fullText = "Building Tomorrow's Solutions Today";
  const [typingIndex, setTypingIndex] = useState(0);

  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const animatingRef = useRef(false);
  const enterTimeRef = useRef(null);
  const wrapperRef = useRef(null);

  const [framesLoaded, setFramesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // ── Typing ────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (typingIndex < fullText.length) {
      const t = setTimeout(() => {
        setText((prev) => prev + fullText[typingIndex]);
        setTypingIndex(typingIndex + 1);
      }, 60);
      return () => clearTimeout(t);
    }
  }, [typingIndex]);

  // ── Global mouse glow ─────────────────────────────────────────────────────
  useEffect(() => {
    const h = (e) =>
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  // ── Preload all frames ────────────────────────────────────────────────────
  useEffect(() => {
    const images = [];
    let loaded = 0;
    const onLoad = () => {
      loaded++;
      setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
      if (loaded === TOTAL_FRAMES) {
        framesRef.current = images;
        setFramesLoaded(true);
        drawFrame(0);
      }
    };
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = onLoad;
      img.onerror = onLoad;
      images.push(img);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Draw a frame ──────────────────────────────────────────────────────────
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[frameIndex];
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    const scale = Math.max(
      width / img.naturalWidth,
      height / img.naturalHeight,
    );
    const sw = img.naturalWidth * scale;
    const sh = img.naturalHeight * scale;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, (width - sw) / 2, (height - sh) / 2, sw, sh);
  }, []);

  // ── Resize canvas ─────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const p = canvas.parentElement;
      canvas.width = p.offsetWidth;
      canvas.height = p.offsetHeight;
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  // ── Stop all animation ────────────────────────────────────────────────────
  const stopAll = useCallback(() => {
    animatingRef.current = false;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    rafRef.current = null;
    timeoutRef.current = null;
  }, []);

  // ── Smooth ramp-up auto-play ──────────────────────────────────────────────
  // Uses setTimeout with dynamic interval to simulate FPS ramping
  const scheduleNext = useCallback(() => {
    if (!animatingRef.current) return;

    // Calculate elapsed time since hover started → ramp FPS
    const elapsed = Date.now() - (enterTimeRef.current || Date.now());
    const t = Math.min(elapsed / RAMP_DURATION, 1); // 0 → 1
    const ease = t * t * (3 - 2 * t); // smoothstep
    const fps = FPS_START + (FPS_FULL - FPS_START) * ease;
    const interval = 1000 / fps;

    timeoutRef.current = setTimeout(() => {
      if (!animatingRef.current) return;
      currentFrameRef.current = (currentFrameRef.current + 1) % TOTAL_FRAMES;
      rafRef.current = requestAnimationFrame(() => {
        drawFrame(currentFrameRef.current);
        scheduleNext();
      });
    }, interval);
  }, [drawFrame]);

  // ── Smooth rewind back to frame 0 ────────────────────────────────────────
  const rewindToZero = useCallback(() => {
    stopAll();
    const step = () => {
      if (currentFrameRef.current <= 0) return;
      currentFrameRef.current = Math.max(0, currentFrameRef.current - 2);
      drawFrame(currentFrameRef.current);
      if (currentFrameRef.current > 0)
        rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, [stopAll, drawFrame]);

  // ── Mouse enter → slowly start animation ─────────────────────────────────
  const handleMouseEnter = useCallback(() => {
    if (!framesLoaded) return;
    stopAll();
    enterTimeRef.current = Date.now();
    animatingRef.current = true;
    scheduleNext();
  }, [framesLoaded, stopAll, scheduleNext]);

  // ── Mouse leave → rewind ──────────────────────────────────────────────────
  const handleMouseLeave = useCallback(() => {
    rewindToZero();
  }, [rewindToZero]);

  // ── Cleanup ───────────────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      stopAll();
    };
  }, [stopAll]);

  const avatarImage = require("../assets/avatar.jpg");
  const cvLink =
    "https://drive.google.com/file/d/1o6vucvIpFZrALugf9tWPxyzy81BFYZhC/view?usp=drive_link";

  return (
    <section id="home" className="hero-redesign">
      <div
        className="hero-glow-effect"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(167, 139, 250, 0.15), transparent 40%)`,
        }}
      />

      <div className="hero-container-new">
        {/* ── Left ────────────────────────────────────────────────────────── */}
        <div className="hero-content-left">
          <div className="hero-label">
            <span className="status-dot"></span>
            Available for Full-Time Opportunities
          </div>

          <h1 className="hero-name">
            I'm <span className="name-highlight">Amit</span>
          </h1>

          <div className="hero-role">
            <div className="role-line"></div>
            <span className="role-text">{text}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-bio">
            Full-Stack Engineer & Data Scientist crafting scalable solutions
            with React, Node.js, Python, Excel, Power BI and AI. Transforming
            complex problems into elegant digital experiences.
          </p>

          <div className="hero-metrics">
            <div className="metric-box">
              <span className="metric-value">5+</span>
              <span className="metric-label">Projects</span>
            </div>
            <div className="metric-box">
              <span className="metric-value">6+</span>
              <span className="metric-label">Certifications</span>
            </div>
            <div className="metric-box">
              <span className="metric-value">10+</span>
              <span className="metric-label">Technologies</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn primary-btn">
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button
              onClick={() => window.open(cvLink, "_blank")}
              className="hero-btn cv-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="14 2 14 8 20 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="16"
                  y1="13"
                  x2="8"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="16"
                  y1="17"
                  x2="8"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>View CV</span>
            </button>
            <a href="#contact" className="hero-btn secondary-btn">
              <span>Let's Talk</span>
            </a>
          </div>
        </div>

        {/* ── Right — Canvas ───────────────────────────────────────────────── */}
        <div className="hero-image-section">
          <div
            className={`image-wrapper image-wrapper-large ${framesLoaded ? "canvas-ready" : ""}`}
            ref={wrapperRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-border"></div>

            {/* Loader */}
            {!framesLoaded && (
              <div className="canvas-loader">
                <div className="loader-ring"></div>
                <span className="loader-text">{loadProgress}%</span>
              </div>
            )}

            {/* Animated canvas */}
            <canvas
              ref={canvasRef}
              className="hero-canvas"
              aria-label="Animated portrait of Amit"
            />

            {/* Static fallback while loading */}
            {!framesLoaded && (
              <img
                src={avatarImage}
                alt="Amit"
                className="hero-avatar hero-avatar-fallback"
              />
            )}

            {/* Floating Tech Badges */}
            <div className="tech-badge badge-1">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>React</span>
            </div>
            <div className="tech-badge badge-2">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>Node.js</span>
            </div>
            <div className="tech-badge badge-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              <span>Python</span>
            </div>
            <div className="tech-badge badge-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
              </svg>
              <span>MongoDB</span>
            </div>
            <div className="tech-badge badge-5">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11h-13L12 6z" />
              </svg>
              <span>Power BI</span>
            </div>
            <div className="tech-badge badge-6">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              <span>AI/ML</span>
            </div>
          </div>
        </div>
      </div>

      {/* Particles */}
      <div className="hero-particles-bg">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
