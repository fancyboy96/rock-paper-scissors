// Rock-paper-scissors
// Game is two player (Player User and Computer User)
// Users will play in rounds
// Each round, the player user is prompted to input either Rock, Paper, Scissors



let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();


function getPlayerChoice () {
    
    let playerPrompt = prompt("Choose paper, scissors, or rock:");

    // capitalise first letter of playerSelection string

    return playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase();
}

// The computer user will respond with either Rock, Paper, Scissors

function getComputerChoice() { 
    let rpsArray = ['Rock', 'Paper', 'Scissors'];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

// The winner of the 'round' will be decided according to the rules below:
// Rules:
// 1. Rock beats Scissors
// 2. Paper beats Rock
// 3. Scissors beat Paper

function playRound(playerSelection, computerSelection) {

    console.log (playerSelection, computerSelection);

    if (playerSelection == computerSelection) {
        console.log("TIE. " + playerSelection + " is equal to " + computerSelection);
    } else if ((playerSelection == "Rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        console.log("You Win!")
    } else {
        console.log("You Lose!")
    }


}

playRound()