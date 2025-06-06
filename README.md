# EduTech 🎓

**EduTech** is a modern and responsive education website built using **React** and powered by **Vite**. It serves as a front-end prototype for an online learning platform and showcases educational programs, features, and contact sections in a clean and user-friendly layout.

## 🌐 Live Site

🔗 [https://nach1ket03.github.io/edutech/](https://nach1ket03.github.io/edutech/)

## 🚀 Features

- ⚛️ Built with React and Vite for fast performance
- 💻 Responsive design for mobile and desktop
- 🧩 Modular components
- 🌙 Smooth navigation and UI transitions
- 📄 Easy to extend and customize

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- HTML5 + CSS3

## 📂 Folder Structure

```
edutech/
├── public/
│   └── assets/              # Static files (images, video, etc.)
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Page-level components (optional)
│   ├── App.jsx              # Main app layout
│   └── main.jsx             # Vite entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📦 Installation & Development

### Clone the Repository

```bash
git clone https://github.com/nach1ket03/edutech.git
cd edutech
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment on GitHub Pages

1. Install `gh-pages`:

```bash
npm install gh-pages --save-dev
```

2. Add to `package.json`:

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

> Make sure your repo name is `edutech` and it's pushed to GitHub before deploying.

## 🔮 Future Enhancements

- Integrate with Firebase or a backend API
- User authentication
- Instructor and student dashboards
- Course catalog & filtering
- Quiz and certification features

## 🙋‍♂️ Author

**Nachiket**  
📎 [GitHub Profile](https://github.com/nach1ket03)
