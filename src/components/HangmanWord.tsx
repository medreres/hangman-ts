import React from "react";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) {
  //   const word = "test";
  //   const guessedLetters = ['t', 'e', 's']
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: "1px solid black",
          }}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
