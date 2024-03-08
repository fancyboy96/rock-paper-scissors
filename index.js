// Rock-paper-scissors
// Game is two player (Player User and Computer User)
// Users will play in rounds
// Each round, the player user is prompted to input either Rock, Paper, Scissors
// capitalise first letter of playerSelection string
// The computer user will respond with either Rock, Paper, Scissors
// The winner of the 'round' will be decided according to the rules below:
// Rules:
// 1. Rock beats Scissors
// 2. Paper beats Rock
// 3. Scissors beat Paper


function getComputerChoice() {

let computerChoiceArray = ["rock", "paper", "scissors"];

return computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)]; 

}


function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Paper, scissors or rock?").toLowerCase();
    computerSelection = getComputerChoice();


    if (playerSelection == computerSelection) {
        console.log("Draw! " + "You selected " + playerSelection + " and the Computer selected " + computerSelection + ". " + playerSelection + " is equal to " + computerSelection + ".")
    } else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") || playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! " + "You selected " + playerSelection + " and the Computer selected " + computerSelection + ". " + playerSelection + " beats " + computerSelection + ".")
    } else (console.log("You lose! " + "You selected " + playerSelection + " and the Computer selected " + computerSelection + ". " + playerSelection + " beats " + computerSelection +"."))
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame()