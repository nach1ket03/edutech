# EduTech University 🌐

**EduTech University** is a fully responsive, modern web application built with **React + Vite** that simulates the official website of a college or university. It showcases academic programs, campus features, and contact information — ideal for educational institutions or student portfolio projects.

## 🌍 Live Site

🔗 [https://nach1ket03.github.io/edutech/](https://nach1ket03.github.io/edutech/)

## 🎯 Purpose

This project demonstrates:

- A professional-looking university website
- Responsive design using React + Vite
- Clean section-based layout for information delivery
- Static site deployment via GitHub Pages

---

## ✨ Key Features

- 🏫 University-style homepage layout
- 🎓 Academic programs and department showcase
- 🧑‍🏫 Faculty/testimonials section
- 📱 Fully mobile responsive
- ⚛️ Built with React + Vite
- 🛰️ Deployed via GitHub Pages

---

## 🛠 Tech Stack

- **React** – UI development
- **Vite** – Fast bundler and dev server
- **CSS3** – Styling
- **GitHub Pages** – Deployment

---

## 📁 Folder Structure

```
edutech/
├── public/
│   └── assets/              # Images and static files
├── src/
│   ├── components/          # Reusable React components
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nach1ket03/edutech.git
cd edutech
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Build

```bash
npm run preview
```

---

## 🚀 Deploying to GitHub Pages

1. Install `gh-pages`:

```bash
npm install gh-pages --save-dev
```

2. Add this to `package.json`:

```json
"homepage": "https://nach1ket03.github.io/edutech",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy with:

```bash
npm run deploy
```

---

## 🔮 Future Improvements

- Login/Signup for students and faculty
- Admin dashboard for managing content
- Dynamic course catalog (with filtering)
- Event calendar and notices section
- Backend integration (Firebase or Node.js)

---

## 🙋 Author

Developed by [Nachiket](https://github.com/nach1ket03)
