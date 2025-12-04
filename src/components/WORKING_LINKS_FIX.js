// ============================================
// CERTIFICATE LINKS FIX
// ============================================

// In Certifications.jsx, replace the button section with this:

{cert.certificateLink && (
  <a
    href={cert.certificateLink}
    target="_blank"
    rel="noopener noreferrer"
    className="cert-view-btn-new"
    style={{ borderColor: cert.color }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M15 3h6v6M14 10l7-7M10 3H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span>View Certificate</span>
  </a>
)}

// ============================================
// PROJECT LINKS FIX
// ============================================

// In Projects.jsx, replace the button section with this:

<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="project-link-new"
  style={{ background: `linear-gradient(135deg, ${project.color}, rgba(255,255,255,0.1))` }}
>
  <span>View Project</span>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>

// ============================================
// CERTIFICATE LINKS (USE THESE EXACT URLS)
// ============================================

const certifications = [
  {
    certificateLink: "https://drive.google.com/file/d/1k8hJOkusZcYKqL17jnF3hSUn3l1YaZDJ/view",
  },
  {
    certificateLink: "https://drive.google.com/file/d/1tzHMnxD9HwbwQXw_YF5iU95DNiz8JWqT/view",
  },
  {m 
    certificateLink: "https://drive.google.com/file/d/1HM1FTiwBOhAtX0KeOFwCCmuVQhkpChn4/view",
  },
  {
    certificateLink: "https://drive.google.com/file/d/1dux9qjiy2ROf1jgt4OswEEUZ04zm53Bp/view",
  },
  {
    certificateLink: "https://drive.google.com/file/d/1GpBtvbWB9q5kEk10lPpzsr-Eu4EDTvh1/view",
  },
  {
    certificateLink: "https://drive.google.com/file/d/16GJIkVs79tVDt6VTQGxiwsiF_nU9tvDW/view",
  },
];

// ============================================
// CSS FIX FOR BUTTONS
// ============================================

/* Make sure buttons don't have cursor: none */
.cert-view-btn-new,
.project-link-new {
  cursor: pointer !important;
  pointer-events: auto !important;
}

/* Override any global cursor settings */
body.light-mode .cert-view-btn-new,
body.light-mode .project-link-new {
  cursor: pointer !important;
}