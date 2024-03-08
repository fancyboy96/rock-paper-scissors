// Rock-paper-scissors
// Game is two player (Player User and Computer User)


// Users will play in rounds
// Each round, the player user is prompted to input either Rock, Paper, Scissors

const playerSelection = prompt("Choose paper, scissors, or rock:");

// The computer user will respond with either Rock, Paper, Scissors 


// Computer returns a random response (rock, paper or scissors)

const rpsArray = ['Rock', 'Paper', 'Scissors'];
const getComputerResponse = rpsArray[Math.floor(Math.random() * rpsArray.length)];

// The winner of the 'round' will be decided according to the rules below:
// Rules:
// 1. Rock beats Scissors
// 2. Paper beats Rock
// 3. Scissors beat Paper

