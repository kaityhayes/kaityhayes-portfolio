import React, { useState } from "react";

function RockPaperScissors() {
  const [result, setResult] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const playGame = (userChoice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[computerIndex];
    setComputerChoice(computerChoice);

    switch (userChoice + computerChoice) {
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
        setResult("You win!");
        break;
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
        setResult("You lose!");
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setResult("It's a tie!");
        break;
      default:
        setResult("Let's play!");
        break;
    }
  };

  return (
<div className="flex flex-col items-center justify-center bg-white max-w-xs p-8 mx-auto mt-16">


      <h1 className="text-4xl  mb-8">Rock Paper Scissors</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-4">
          <button
            className="bg-pink-300 text-black font-bold py-2 px-4 focus:outline-none hover:bg-pink-400 transition-colors"
            onClick={() => playGame("rock")}
          >
            Rock
          </button>
          <button
            className="bg-pink-300 text-black font-bold py-2 px-4 focus:outline-none hover:bg-pink-400 transition-colors"
            onClick={() => playGame("paper")}
          >
            Paper
          </button>
          <button
            className="bg-pink-300 text-black font-bold py-2 px-4 focus:outline-none hover:bg-pink-400 transition-colors"
            onClick={() => playGame("scissors")}
          >
            Scissors
          </button>
        </div>
        {result && (
          <div className="text-2xl font-bold text-center">
            {result}{" "}
            {computerChoice && (
              <span className="font-normal">
                (Computer chose {computerChoice})
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RockPaperScissors;
