// Defines global variables for wins, ties, and losses
let wins = 0;
let ties = 0;
let losses = 0;

// Prompt the user for the number of rounds
let numRounds = parseInt(prompt("How many rounds do you want to play?"));

// Loop through the number of rounds
for (let i = 1; i <= numRounds; i++) {

  // Prompt the user for their choice
  let userChoice = prompt("Round " + i + ": Rock, paper, or scissors?");

  // Generate a random choice for the computer
  let computerChoice = Math.floor(Math.random() * 3);

  // Compare the user's choice to the computer's choice
  if (userChoice === "rock") {
    if (computerChoice === 0) {
      ties++;
      alert("Tie!");
    } else if (computerChoice === 1) {
      losses++;
      alert("You lost!");
    } else {
      wins++;
      alert("You won!");
    }
  } else if (userChoice === "paper") {
    if (computerChoice === 0) {
      wins++;
      alert("You won!");
    } else if (computerChoice === 1) {
      ties++;
      alert("Tie!");
    } else {
      losses++;
      alert("You lost!");
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === 0) {
      losses++;
      alert("You lost!");
    } else if (computerChoice === 1) {
      wins++;
      alert("You won!");
    } else {
      ties++;
      alert("Tie!");
    }
  }
}

// Alert the user to the final score
alert("You won " + wins + " times, tied " + ties + " times, and lost " + losses + " times.");
