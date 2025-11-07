# 🚀 Amit's Portfolio Website

A modern, responsive, dark-themed developer portfolio built using **React.js**, showcasing my projects, skills, certifications, and contact details — with smooth animations and an interactive user experience.

🔗 **Live Demo:** [https://amit-portfolio11.onrender.com](https://amit-portfolio11.onrender.com)  
👨‍💼 **LinkedIn:** [www.linkedin.com/in/-amit](https://www.linkedin.com/in/-amit)

---

## 🧱 Folder Structure

```
amit-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── avatar.jpg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

---

## ⚙️ Tech Stack

- **Frontend:** React.js  
- **Styling:** CSS3 (No Tailwind)  
- **Animations:** AOS, Framer Motion, CSS keyframes  
- **Icons:** React Icons  
- **Build Tool:** Create React App  
- **Hosting:** Render (Live Demo)

---

## ✨ Features

✅ Dark & Light theme toggle (saved in localStorage)  
✅ Animated hero section with orbiting avatar  
✅ Smooth scroll and reveal animations  
✅ Responsive layout (mobile & desktop)  
✅ Glassmorphism UI components  
✅ Interactive project cards with hover tilt  
✅ Animated skill progress bars  
✅ Certification timeline with icons  
✅ Contact form with validation  
✅ Social media links with glow hover  
✅ Gradient text and neon buttons  

---

## 🧩 Setup & Installation

### 1️⃣ Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/en/) (v14 or newer)
- npm (comes bundled with Node.js)

Check versions:
```bash
node -v
npm -v
```

---

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/amit-portfolio.git
cd amit-portfolio
```

---

### 3️⃣ Install Dependencies
```bash
npm install
```

---

### 4️⃣ Run the Development Server
```bash
npm start
```
App runs locally at:
```
http://localhost:3000
```

---

### 5️⃣ Build for Production
```bash
npm run build
```
The optimized build files will appear in the `/build` directory — ready for deployment.

---

## 🚀 Deployment Options

| Platform | Command / Method |
|-----------|------------------|
| **Render** | Auto-deploy from GitHub (used here) |
| **Vercel** | `npm i -g vercel` → `vercel` |
| **Netlify** | Drag & drop `/build` folder |
| **GitHub Pages** | `npm install gh-pages` → set `"homepage"` in `package.json` |
| **Firebase Hosting** | Deploy via Firebase CLI |

---

## 🧠 Customization

### 🎨 Colors
Edit global colors in `src/styles.css`:
```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --accent: #f093fb;
  --bg-dark: #0d0d0d;
  --text-light: #f8f8f8;
}
```

### 💼 Add New Projects
Edit `src/components/Projects.jsx`:
```jsx
const projects = [
  {
    title: "AI Legal Advisor",
    description: "Multilingual chatbot powered by Gemini API",
    demo: "https://your-demo-link.com",
    github: "https://github.com/your-username/project-repo",
  },
];
```

### 🧩 Add or Edit Skills
Modify arrays in `src/components/Skills.jsx` to update skill bars and icons.

---

## 🔮 Recommended Enhancements

- 3D rotating avatar (React Three Fiber)  
- Dynamic background particles (react-tsparticles)  
- Console-style intro animation  
- Scroll progress bar at the top  
- Custom glowing cursor  
- “Back to Top” button with fade-in effect  

---

## ⚡ Troubleshooting

| Issue | Fix |
|-------|-----|
| `npm install` fails | Clear cache → `npm cache clean --force` |
| App not loading | Check file paths & imports |
| Styles missing | Ensure `import "./styles.css";` in `App.jsx` |
| AOS not working | Add `AOS.init()` in a `useEffect` |
| Port busy | Run `npm start --port 3001` |

---

## 💻 Useful Commands

| Command | Description |
|----------|-------------|
| `npm start` | Run development server |
| `npm run build` | Create optimized production build |
| `npm run deploy` | Deploy to GitHub Pages (if configured) |

---

## 📸 Live Preview

Check it out here:  
👉 **[Amit's Portfolio Live](https://amit-portfolio11.onrender.com)**

---

## 👨‍💻 Author

**Amit**  
💼 Full Stack Developer | Data Science Enthusiast | AI Explorer  
🔗 [LinkedIn](https://www.linkedin.com/in/-amit)  
🌐 [Live Portfolio](https://amit-portfolio11.onrender.com)

---




> _“Code like an artist. Build like an engineer. Dream like a creator.”_ ✨
