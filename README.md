# Alphabet Buttons (XAlphabets)

An interactive alphabet buttons web application built with **React**, **Vite**, and **CSS Modules**. Users can click on alphabet buttons (A–Z) or use their physical keyboard to type characters into the display area, as well as remove characters using the Backspace control.

---

## 🔗 Links

- **Live Demo**: [https://xalphabetstanmaygurav.vercel.app/](https://xalphabetstanmaygurav.vercel.app/)
- **GitHub Repository**: [https://github.com/tanmaygurav/XAlphabets](https://github.com/tanmaygurav/XAlphabets)

---

## ✨ Features

- **On-Screen Alphabet Keys**: Full A–Z keyboard grid (13×2 layout) for quick text composition.
- **Physical Keyboard Support**: Seamlessly type letters and delete with the backspace key using your physical keyboard.
- **Backspace Action**: Easily delete the last entered character using either the UI Backspace button or your keyboard.
- **Placeholder Output**: Clear indicator `"Your text will appear here..."` before any text is entered.
- **CSS Modules Styling**: Scoped and clean component styling that matches modern design guidelines.
- **Responsive Layout**: Adapts gracefully across desktop and mobile screens.

---

## 🛠️ Tech Stack

- **React 19**
- **Vite 4**
- **CSS Modules**

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tanmaygurav/XAlphabets.git
   cd XAlphabets
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

To start the local development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

---

## 🧪 Testing with Cypress

To run the Cypress end-to-end assessment tests:

```bash
cd assessment
npm install
npx cypress run --spec "cypress/e2e/spec.cy.js"
```

