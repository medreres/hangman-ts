import React from "react";
import { KEYS } from "./helpers/Keys";
import styles from "./Keyboard.module.css";

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
  inactiveLetters: string[];
  activeLetters: string[];
  disabled: boolean;
};

export default function Keyboard({
  addGuessedLetter,
  inactiveLetters,
  activeLetters,
  disabled,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => {
              addGuessedLetter(key);
            }}
            disabled={inactiveLetters.includes(key) || disabled}
            className={`${styles.btn} ${isActive ? styles.active : ""}
            ${isInactive || disabled ? styles.inactive : ""}`}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
