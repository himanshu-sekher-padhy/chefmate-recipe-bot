- # 🧑‍🍳 ChefMate – Smart Recipe Generator

Welcome to **ChefMate** — an intelligent AI-powered recipe assistant that helps you cook using ingredients you already have at home.
Just enter what’s in your kitchen, and ChefMate suggests a complete recipe using those items. 
ChefMate generates delicious recipes in real-time using a smart NLP model from Hugging Face.

---

## 🎬 Preview

![Preview](src/assets/preview.mp4)

---

## 📱 Features

🧺 Add/remove ingredients dynamically  
🍲 Real-time recipe generation via Hugging Face API  
🎯 Fully responsive layout with mobile-first design  
🎨 Beautiful button animations using custom CSS  
⚠️ Includes loading indicator & error handling  

---

## 🧰 Tech Stack

| Technology        | Description                                 |
|-------------------|---------------------------------------------|
| `ReactJS`         | Frontend UI and component management        |
| `Vite`            | Lightning-fast build tool for React         |
| `CSS3`            | Custom styling, animations, responsive design |
| `Flexbox`         | UI layout and responsive alignment          |
| `Hugging Face API`| Recipe generation using AI                  |

---

## 🗂️ Project Structure

```bash
📦 chefmate/
│
├── 📁 public/
│   └── vite.svg
│
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── ChefMateLogo.png          # Fav icon
│   │   ├── ChefMateText.png          # Title text
│   │   └── Preview.mp4               # App demo preview
│   │
│   ├── 📁 components/
│   │   ├── 📁 Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── 📁 IngredientsList/
│   │   │   ├── IngredientsList.jsx
│   │   │   ├── IngredientsList.css
│   │   │   └── ButtonAnimation.css
│   │   ├── 📁 Main/
│   │   │   ├── Main.jsx
│   │   │   └── Main.css
│   │   └── 📁 Recipe/
│   │       ├── Recipe.jsx
│   │       └── Recipe.css
│   │
│   ├── ai.js                         # Hugging Face API logic
│   ├── App.jsx                       # Root component
│   ├── App.css                       # Global styles
│   ├── index.css                     # Index-level overrides
│   └── main.jsx                      # Entry point
│
├── 📄 .env                           # API secrets
├── 📄 .gitignore                     # Git ignored files
├── 📄 index.html                     # HTML entry point
├── 📄 package.json                   # Project metadata & scripts
├── 📄 package-lock.json              # Dependency lock
├── 📄 vite.config.js                 # Vite build config
└── 📄 README.md                      # You're reading it!


