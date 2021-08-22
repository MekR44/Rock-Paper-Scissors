//*************************************************
//**************INTIALIZE VARIABLES*****************
//*************************************************
let playerChoice = ""; //Initialize both as strings
let computerChoice = "";
const gameOptions = ["Rock", "Paper", "Scissors"];
let winner = "";
let needReset = false;

//*****************************************************
//**************FUNCTIONS******************************
//*****************************************************

//***********Play Game Function**************

function playGame(choice) {
  if (needReset === true) {
    // Reset announcement from previous game
    myNode = document.getElementById("winner-announce");
    myNode.textContent = "";
    needReset = false;
  }

  playerChoice = choice; // Assign player choice
  computerChooses(); // Assign computer choice

  winner = compareChoices(); // Determine Winner
  displayResults(computerChoice, winner); // Display results
}

//**********Computer Choice Function**********
function computerChooses() {
  let randomIndex = Math.floor(Math.random() * 3); // (1) Get random integer from 0 to 2
  computerChoice = gameOptions[randomIndex]; // (2) Assign option from array corresponding to integer
}

//***********Compare Choices Function*************
function compareChoices() {
  let outcome = null;

  //Check for a tie
  if (computerChoice === playerChoice) {
    outcome = "It's a tie!";

    // When Computer chooses Rock....
  } else if (computerChoice === gameOptions[0]) {
    if (playerChoice === gameOptions[1]) {
      // Player chooses Paper
      outcome = "You won!";
    } else {
      // Player chooses Scissors
      outcome = "You lost.";
    }

    // When Computer chooses Paper....
  } else if (computerChoice === gameOptions[1]) {
    if (playerChoice === gameOptions[2]) {
      //And Player chooses Scissors
      outcome = "You won!";
    } else {
      //And Player chooses Rock
      outcome = "You lost.";
    }

    // When Computer chooses Scissors....
  } else {
    if (playerChoice === gameOptions[0]) {
      // And Player chooses Rock
      outcome = "You won!";
    } else {
      // And Player chooses Paper
      outcome = "You lost.";
    }
  }
  return outcome;
}

//*******************Display Results Function******************

//Creates output text and html to display it
function displayResults() { 
  const paragraphText = document.createElement("p");
  paragraphText.innerText =
    "You chose " + playerChoice + ". " +
    "The Computer chose " + computerChoice + ". " +
    winner + " Choose again!";
  document.getElementById("winner-announce").appendChild(paragraphText);
  needReset = true;
}
//*************************************************************
//***********************MAIN PROGRAM**************************
//*************************************************************

//Initiate game once player makes a choice
document.querySelector("#rock").onclick = function () {
  playGame(gameOptions[0]);
};
document.querySelector("#paper").onclick = function () {
  playGame(gameOptions[1]);
};
document.querySelector("#scissors").onclick = function () {
  playGame(gameOptions[2]);
};

