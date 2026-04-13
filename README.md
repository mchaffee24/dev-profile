# dev-profile
# Mitchell Chaffee – Dev Profile

## 📅 Date
April 2026

---

## 📌 Overview
This Dev Profile site serves as a central hub for my web development projects. It showcases my work, provides direct access to live applications, and links to source code repositories.

---

## 🎯 Purpose
The purpose of this project is to create a clean, accessible portfolio page that highlights my development work and meets modern web standards using semantic HTML, Bootstrap, and custom CSS.

---

## 🧩 Featured Project

### 🎮 Memory Match Game
A single-page web game where users flip cards to find matching pairs. The game tracks attempts and matches, includes adjustable settings, and stores user data using Web Storage.

#### 🔗 Links
- **Play Game:** https://mchaffee24.github.io/game/
- **Source Code:** https://github.com/mchaffee24/game

---

## 🛠️ Technologies Used
- HTML5 (semantic structure)
- CSS3 (custom styling + variables)
- Bootstrap 5 (layout and components)
- JavaScript (ES Modules)
- Web Storage API (localStorage)
- Git & GitHub (version control and deployment)

---

## 📸 Screenshot
![Memory Match Game](images/game-thumb.jpg)

---

## 💻 Code Example

Below is an example of how validation links are dynamically generated based on the current deployed page:

```javascript
function setupValidationLinks() {
  const currentUrl = window.location.href;

  const htmlValidatorLink = document.getElementById("html-validator");
  const waveCheckerLink = document.getElementById("wave-checker");

  htmlValidatorLink.href = `https://validator.w3.org/nu/?doc=${encodeURIComponent(currentUrl)}`;
  waveCheckerLink.href = `https://wave.webaim.org/report#/${encodeURIComponent(currentUrl)}`;
}
