
# Responsive Expanding Cards Gallery

A simple and responsive image gallery built with **HTML**, **CSS**, and **JavaScript**. Each card expands smoothly when hovered, revealing its title while the other cards shrink.

## Preview

![Project Preview](images/preview.png)

---

## ✨ Features

- Responsive image gallery
- Smooth expanding card animation
- Card title appears on hover
- Only one card stays active at a time
- Pure HTML, CSS, and Vanilla JavaScript
- Responsive layout using Flexbox
- Media queries for smaller screen sizes

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```
project/
│
├── images/
│   ├── 1.png
│   ├── 2.png
│   ├── ...
│   └── 8.png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/NargesHaidari/Responsive-Expanding-Cards-Gallery.git
```

### Navigate to the project folder

```bash
cd Responsive-Expanding-Cards-Gallery
```

### Run the project

Open `index.html` in your preferred browser.

For the best development experience, run the project using the **Live Server** extension in Visual Studio Code.

---

## 🚀 How It Works

- The gallery is built using Flexbox.
- Each image card starts with `flex: 1`.
- When the mouse enters a card:
  - All active cards are reset.
  - The hovered card receives the `active` class.
  - The card expands (`flex: 3`).
  - The title fades in.
- When the mouse leaves:
  - The `active` class is removed.
  - All cards return to their original size.

---

## 📱 Responsive Design

The gallery adjusts based on screen width.

| Screen Width | Behavior |
|--------------|----------|
| > 800px | Show all 8 cards |
| 650px - 800px | Hide cards 7 and 8 |
| < 650px | Hide cards 5, 6, 7, and 8 |

---

## Animation

- Flex transition: **0.7s**
- Title fade-in animation
- Smooth hover interaction

---

## Learning Objectives

This project was created to practice:

- DOM Selection
- Event Listeners
- `forEach()` loop
- `classList.add()`
- `classList.remove()`
- CSS Flexbox
- CSS Transitions
- Responsive Design
- Media Queries
