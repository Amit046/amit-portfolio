# 🚀 Amit's Modern React Portfolio

A professional, fully redesigned, **neon + glassmorphism React.js portfolio**, featuring animated components, light/dark mode, custom cursor, certifications, projects, and a premium UI/UX suitable for developers and hiring managers.

---

## 🌐 Live Portfolio  
🔗 **https://amit-portfolio11.onrender.com**

---

## 👨‍💻 Author  
**Amit**  
Full Stack Developer | Data Science Enthusiast | AI Explorer  
- 🔗 GitHub: https://github.com/Amit046  
- 🔗 LinkedIn: https://www.linkedin.com/in/-amit  

---

# 📸 Preview  
*(Add screenshots here if needed)*

---

# ✨ Features

### 🎨 Modern UI/UX  
- Neon-glassmorphism theme  
- Smooth dark/light mode switch  
- Animated gradient text  
- Circular orbiting avatar  
- Floating tech bubbles  
- Hover glow effects  
- Custom pointer & ring cursor  

### ⚡ Micro Interactions  
- Framer Motion animations  
- Smooth entry transitions  
- Button hover push effects  
- Scroll-triggered reveals  

### 📁 Professional Sections  
- Hero section with metrics  
- About section with education, stats & highlights  
- Projects with animated border & GitHub links  
- Skills with glowing progress bars  
- Certifications with badges & Google Drive links  
- Contact form with email links  
- Footer with social icons  

### 💾 Data Persistence  
- Theme saved using **localStorage**  

---

# 🧩 Folder Structure (Updated)

```
amit-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── avatar.jpg
│   ├── components/
│   │   ├── Animations.jsx
│   │   ├── Animations.css
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Certifications.jsx
│   │   ├── Certifications.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   └── Footer.jsx
│   ├── styles.css
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

# 🚀 Tech Stack

| Category | Tech |
|---------|------|
| **Frontend** | React.js, JSX, CSS3 |
| **Styling** | Pure CSS, Glassmorphism, Gradients |
| **Animations** | CSS Keyframes, Framer Motion |
| **Icons** | React Icons |
| **Hosting** | Render |
| **Version Control** | Git + GitHub |

---

# 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Amit046/amit-portfolio.git
cd amit-portfolio
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start Development Server
```bash
npm start
```

Runs at:
```
http://localhost:3000
```

### 4️⃣ Build Production Version
```bash
npm run build
```

---

# 🧠 Customization Guide

### 🎨 Change Theme Colors  
Edit global variables in `styles.css`:
```css
:root {
  --primary: #a78bfa;
  --cyan: #22d3ee;
  --pink: #ec4899;
  --dark: #0a0a1a;
}
```

### 🖼 Change Avatar  
Replace image in:
```
src/assets/avatar.jpg
```

### 📦 Add New Project  
In `Projects.jsx`, edit the `projects[]` array.

### 📜 Add New Certification  
In `Certifications.jsx`, edit `certifications[]` list.

---

# 🐛 Common Issues & Fixes

### ❌ Light Mode Not Working  
✔ Add `body.light-mode` selectors in CSS  
✔ Ensure toggle adds class to `<body>`  
✔ Clear cache:  
```
Ctrl + Shift + R
```

### ❌ Links Not Opening  
Use proper `<a>` tags:
```jsx
<a href={link} target="_blank" rel="noopener noreferrer">
```

### ❌ Deployment Fail on Render  
Add required Node version:
```
.node-version → 18
.nvmrc → 18
```

---

# 🚀 Deployment Options

### ▶ Render Deployment (recommended)
1. Login to Render  
2. Connect GitHub repo  
3. Select branch: `main`  
4. Build command:  
```
npm install && npm run build
```
5. Publish folder: `build`

### ▶ Vercel  
```bash
npm i -g vercel
vercel
```

### ▶ Netlify  
Drag & drop `/build` folder

### ▶ GitHub Pages  
Add to package.json:
```json
"homepage": "https://Amit046.github.io/amit-portfolio"
```

---

# 💬 Contact

📧 Email: (add your email here)  
🌐 LinkedIn: https://www.linkedin.com/in/-amit  
🧑‍💻 GitHub: https://github.com/Amit046  

---

# ⭐ Like this project?
If you found this useful —  
**Please star the repository!** ⭐  

> _“Build beautifully. Design boldly. Code smartly.”_

