const randomNumber = Math.floor(Math.random() * 100 + 1);
const btn = document.querySelector(".submit");
const input = document.querySelector("#number");
const resultMessage = document.querySelector(".gameResult");
const remainingGuess = document.querySelector(".remainingGuess");
const previousGuess = document.querySelector(".previousGuess");
const start = document.querySelector(".start");

let previousGuesses = [];
let numGuess = 0;
let playGame = true;
let totalGuessesAvailable = 10;

if (playGame) {
  btn.addEventListener("click", (e) => {
    const guess = parseInt(input.value);
    validateInput(guess);
  });
}

function validateInput(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
    input.value = "";
  } else if (guess < 1 || guess > 100) {
    alert("Please Enter a valid Number between 1 & 100");
    input.value = "";
  } else {
    numGuess++;

    if (numGuess > 10) {
      displayMessage(`Game Over!!! Random Number is ${randomNumber}`);
      updateGuess();
      endGame();
    } else {
      previousGuesses.push(guess);
      checkGuess(guess);
      updateGuess();
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right!!! You took ${numGuess} Guesses`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is Low");
  } else {
    displayMessage("Number is High");
  }
}

function displayMessage(msg) {
  resultMessage.innerText = msg;
}

function updateGuess() {
  previousGuess.innerText = `Previous Guesses : ${previousGuesses.toString()}`;
  remainingGuess.innerText = `Remaining Guesses : ${
    totalGuessesAvailable - numGuess < 0 ? 0 : totalGuessesAvailable - numGuess
  }`;
}

function endGame() {
  console.log("Game ended");
  btn.setAttribute("disabled", "true");
  start.classList.add("view");
}

start.addEventListener("click", (e) => {
  window.location.reload();
});
