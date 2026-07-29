import React, { useState, useRef, useEffect, useCallback } from "react";
import "./ChatBot.css";

// ----------------------------------------------------------------------------
// EDIT THIS: replace with a real summary of your resume/projects/experience.
// This is sent as the system instruction so the model only answers questions
// about you, using facts you provide here — it will not invent details.
// ----------------------------------------------------------------------------
const AMIT_CONTEXT = `
You are a friendly assistant embedded on Amit's portfolio website. You answer
visitor questions about Amit's skills, projects, education, and experience —
and nothing else. If asked something unrelated (general trivia, other people,
coding help unrelated to Amit's work), politely redirect to topics about Amit.
ONLY use the facts listed below. Never invent project names, companies, or
experience that are not explicitly listed here.

About Amit:
- Full-Stack Engineer & Data Scientist, open to full-time opportunities.
- Pursuing B.Tech in Computer Science & Engineering (Data Science) at Lovely
  Professional University (2023–2027), CGPA 7.0/10.
- Focuses on building scalable, data-driven applications: real-time
  communication platforms (WebRTC), interactive data visualization
  dashboards, and modern web apps with React, Node.js, and Python.
- Based in Gurugram, India. Open to remote work.
- GATE CS 2026 qualified. Solved 100+ problems on LeetCode.

Skills / Tech Stack:
- Languages & Frameworks: Python, Java, JavaScript, React.js, Node.js, Flask
- Databases: MongoDB, PostgreSQL, SQL
- Data/AI: Power BI, Excel, Pandas, TensorFlow, AI/ML
- Other: WebRTC, Socket.IO, Git

Work Experience:
- Software Development Engineer (SDE) Intern, Bluestock Fintech
  (Feb 2026 – Mar 2026): Optimized scalable core fintech product features
  during early-stage product development, debugged and validated critical
  application code for performance/reliability, and collaborated with senior
  engineers following standardized dev practices. Stack: React, Node.js,
  PostgreSQL, Git.
- Full Stack Development Training, Lovely Professional University
  (Jun 2025 – Aug 2025): Hands-on full-stack web development, built
  responsive UIs with React.js and RESTful APIs with Node.js, earned an A
  grade for project execution. Stack: React.js, Node.js, JavaScript, HTML,
  CSS, MongoDB.

Projects:
1. AI Investment Research Agent (Jun '26) — An AI-powered investment research
   agent that analyzes any company and generates a structured invest/pass
   recommendation. Runs a 2-node LangGraph.js workflow: a research node doing
   4 parallel Tavily web searches, then a decision node where Gemini 2.5
   Flash synthesizes a report (overview, news, risks, score 0-100, verdict).
   Built for the InsideIIM x Altuni AI Labs AI Engineer Intern assignment.
   Tech: Next.js 15, LangGraph.js, Gemini 1.5/2.5 Flash, Tavily Search API,
   Tailwind CSS, deployed on Render.
2. Real-Time Weather & AQI Predictive Analytics Dashboard (Nov-Dec '25) — A
   live multi-city AQI/weather monitoring system with auto-refresh, using
   scikit-learn (Random Forest) models trained on OpenWeather API data for
   temperature/humidity prediction and weather classification, plus Plotly
   dashboards for trend visualization and city comparison.
   Tech: Python, Flask, scikit-learn, Pandas, NumPy, Plotly, REST APIs.
3. Apna Video Call — Real-Time Communication Suite (May-Oct '25) — A WebRTC +
   Socket.IO peer-to-peer video calling app with audio/video chat, supporting
   low-bandwidth networks with optimized signaling to reduce call drops and
   improve reliability. Includes user authentication and meeting history.
   Tech: React.js, Node.js, Express.js, MongoDB, WebRTC, Socket.IO.
4. Process Scheduling Dashboard — A PyQt5 desktop app visualizing CPU
   scheduling algorithms (FCFS, SJF preemptive/non-preemptive, Round Robin,
   Priority Scheduling) with interactive Gantt charts and performance metrics
   (waiting/turnaround/response time). Built as a 4th-semester Operating
   Systems course project at LPU.
   Tech: Python, PyQt5, Matplotlib, NumPy, Pandas.
5. Meta Ad Performance Dashboard — A Power BI dashboard analyzing Meta
   (Facebook & Instagram) ad campaign performance: impressions, clicks, CTR,
   conversion rate, engagement, and audience insights by age/gender/country.
   Tech: Power BI, DAX, data modeling.
6. Mobile Sales Dashboard — An interactive Power BI dashboard visualizing
   mobile phone sales by city, brand, and payment method, with customer
   ratings and top-performing models. Tech: Power BI, Excel, DAX.
7. Portfolio Website — This personal portfolio itself: a neon-glassmorphism
   React site with dark/light mode, animated sections, and an embedded AI
   chatbot. Tech: React.js, Framer Motion, CSS3.

Other Notes:
- Maintains a LeetCode practice repo with 100+ solved problems spanning
  arrays, DP, trees, graphs, SQL, and more (LeetHub-tracked).

Certifications:
- Oracle Data Platform 2025 Certified Foundations Associate (Apr 2026)
- Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Apr 2026)
- Oracle Cloud Infrastructure 2025 Certified Data Science Professional (Sep 2025)
- Oracle Certified Generative AI Professional (Sep 2025)
- Full Stack Development in React and Node.js, LPU (Aug 2025)
- Natural Language Processing for Developers, Infosys Springboard (Jul 2025)
- Advanced Computer Networks, NPTEL (Apr 2025)
- Tata - GenAI Powered Data Analytics, Forage (Sep 2025)

Education (additional):
- Suraj School, Gurugram, Haryana — Intermediate, 75% (Apr '22 - Mar '23)
- RPS Public School, Rewari, Haryana — Matriculation, 78% (Apr '20 - Mar '21)

Contact:
- Email: amityt500678@gmail.com
- Phone: +91-9815886722
- Location: Gurugram, India (open to remote)
- GitHub: github.com/Amit046
- LinkedIn: linkedin.com/in/-amit

Keep answers short (2-4 sentences), warm, and specific. If you don't have
enough information to answer something about Amit, say so honestly rather
than guessing.
`.trim();

// Groq config — OpenAI-compatible endpoint.
// Check https://console.groq.com/docs/models for current available models
// if this one is deprecated by the time you set this up.
const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;
const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

const INITIAL_MESSAGE = {
  role: "model",
  text: "Hi! I'm Amit's portfolio assistant. Ask me about his skills, projects, or experience.",
};

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, scrollToBottom]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const sendMessage = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    if (!GROQ_API_KEY) {
      setError(
        "Chatbot isn't configured yet — missing REACT_APP_GROQ_API_KEY.",
      );
      return;
    }

    const userMessage = { role: "user", text: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          temperature: 0.6,
          max_tokens: 300,
          messages: [
            {
              role: "system",
              content: AMIT_CONTEXT,
            },
            ...nextMessages.map((m) => ({
              role: m.role === "model" ? "assistant" : "user",
              content: m.text,
            })),
          ],
        }),
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => null);
        throw new Error(
          errBody?.error?.message || `Groq API error (${response.status})`,
        );
      }

      const data = await response.json();
      const replyText =
        data?.choices?.[0]?.message?.content?.trim() ||
        "Sorry, I couldn't generate a response just now.";

      setMessages((prev) => [...prev, { role: "model", text: replyText }]);
    } catch (err) {
      setError(err.message || "Something went wrong reaching the chatbot.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-widget">
      {isOpen && (
        <div
          className="chatbot-window"
          role="dialog"
          aria-label="Chat with Amit's assistant"
        >
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-header-dot" />
              <span className="chatbot-header-title">Ask about Amit</span>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={toggleOpen}
              aria-label="Close chat"
              type="button"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chatbot-message ${
                  msg.role === "user"
                    ? "chatbot-message-user"
                    : "chatbot-message-bot"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="chatbot-message chatbot-message-bot chatbot-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {error && <div className="chatbot-error">{error}</div>}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-row" onSubmit={sendMessage}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a project, skill, or role..."
              className="chatbot-input"
              disabled={loading}
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              ➤
            </button>
          </form>
        </div>
      )}

      <button
        className="chatbot-bubble"
        onClick={toggleOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        type="button"
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </div>
  );
}

export default ChatBot;
