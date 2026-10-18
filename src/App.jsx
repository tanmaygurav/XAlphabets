import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function App() {
  const [text, setText] = useState("");

  const handleKeyPress = (char) => {
    setText((prev) => prev + char);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (/^[a-zA-Z]$/.test(key)) {
        handleKeyPress(key.toUpperCase());
      } else if (key === "Backspace") {
        handleBackspace();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Alphabet Buttons</h1>
        <p className={styles.subtitle}>Click letters (or use your keyboard) to build text.</p>

        <div className={`${styles.output} output`}>
          {text ? (
            <span>{text}</span>
          ) : (
            <span className={styles.placeholder}>Your text will appear here...</span>
          )}
        </div>

        <div className={styles.actionRow}>
          <button
            type="button"
            className={styles.backspaceButton}
            onClick={handleBackspace}
          >
            Backspace
          </button>
        </div>

        <div className={styles.keysContainer}>
          {ALPHABETS.map((char) => (
            <button
              key={char}
              type="button"
              className={`${styles.key} key`}
              onClick={() => handleKeyPress(char)}
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

