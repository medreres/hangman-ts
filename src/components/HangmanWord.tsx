import React from "react";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revealed: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  revealed,
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
              visibility:
                guessedLetters.includes(letter) || revealed
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && revealed ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
