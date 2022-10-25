let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let randomNum = Math.floor(Math.random()*9);

    return randomNum++;
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
   const humanDifferent = Math.abs
   (targetGuess - humanGuess);
   const computerDifferent = Math.abs
   (targetGuess - computerGuess);

   if (humanDifferent <= computerDifferent) {
    return true;
   } else {
    false;
   }
}
const updateScore = winner => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;

}