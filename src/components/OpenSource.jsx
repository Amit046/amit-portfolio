import React, { useEffect, useRef, useState } from "react";
import "./OpenSource.css";

const GITHUB_USERNAME = "Amit046";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const ghHeaders = {
  Accept: "application/vnd.github.v3+json",
  ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
};

export default function OpenSource() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            headers: ghHeaders,
          }),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            { headers: ghHeaders },
          ),
        ]);

        if (!profileRes.ok || !reposRes.ok) throw new Error("API error");

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);

        const sorted = reposData
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setRepos(sorted);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const stats = profile
    ? [
        { label: "Public Repos", value: profile.public_repos, icon: "📁" },
        { label: "Followers", value: profile.followers, icon: "👥" },
        { label: "Following", value: profile.following, icon: "🔗" },
        {
          label: "Total Stars",
          value: repos.reduce((acc, r) => acc + r.stargazers_count, 0),
          icon: "⭐",
        },
      ]
    : [];

  const langColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    Shell: "#89e051",
    default: "#a78bfa",
  };

  return (
    <section className="os-section" id="opensource" ref={sectionRef}>
      <div className="os-blob os-blob-1" />
      <div className="os-blob os-blob-2" />

      <div className={`os-container ${visible ? "os-visible" : ""}`}>
        <div className="os-header">
          <span className="os-label">GitHub</span>
          <h2 className="os-title">
            Open Source<span className="os-dot">.</span>
          </h2>
          <p className="os-subtitle">
            Real-time data from my GitHub — contributions, repos & activity.
          </p>
        </div>

        {loading && (
          <div className="os-loader">
            <div className="os-spinner" />
            <p>Fetching GitHub data…</p>
          </div>
        )}

        {error && (
          <div className="os-error">
            <span>⚠️</span>
            <p>
              GitHub API rate limit hit.{" "}
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#a78bfa" }}
              >
                View profile directly →
              </a>
            </p>
          </div>
        )}

        {!loading && !error && profile && (
          <>
            <div className="os-profile">
              <img
                src={profile.avatar_url}
                alt={profile.login}
                className="os-avatar"
              />
              <div className="os-profile-info">
                <h3 className="os-profile-name">
                  {profile.name || profile.login}
                </h3>
                <p className="os-profile-bio">
                  {profile.bio || "Developer & Open Source Enthusiast"}
                </p>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="os-gh-btn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>

              <div className="os-stats-row">
                {stats.map((s) => (
                  <div className="os-stat" key={s.label}>
                    <span className="os-stat-icon">{s.icon}</span>
                    <span className="os-stat-value">{s.value}</span>
                    <span className="os-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="os-graph-wrap">
              <h4 className="os-section-heading">📊 Contribution Activity</h4>
              <div className="os-graph-card">
                <img
                  src={`https://ghchart.rshah.org/a78bfa/${GITHUB_USERNAME}`}
                  alt="GitHub Contribution Chart"
                  className="os-graph-img"
                />
              </div>
            </div>

            <div className="os-repos-wrap">
              <h4 className="os-section-heading">🚀 Top Repositories</h4>
              <div className="os-repos-grid">
                {repos.map((repo, i) => (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="os-repo-card"
                    key={repo.id}
                    style={{ "--delay": `${i * 0.08}s` }}
                  >
                    <div className="os-repo-top">
                      <span className="os-repo-icon">📦</span>
                      <span className="os-repo-name">{repo.name}</span>
                    </div>
                    <p className="os-repo-desc">
                      {repo.description || "No description provided."}
                    </p>
                    <div className="os-repo-meta">
                      {repo.language && (
                        <span className="os-repo-lang">
                          <span
                            className="os-lang-dot"
                            style={{
                              background:
                                langColors[repo.language] || langColors.default,
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="os-repo-stars">
                        ⭐ {repo.stargazers_count}
                      </span>
                      <span className="os-repo-forks">
                        🍴 {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
