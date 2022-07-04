// Global variables
let playerScore = 0;
let computerScore = 0;

// Functions

function capitalize(string){
    const lowerString = string.toLowerCase().slice(1);
    const firstChar = string.charAt(0).toUpperCase();
    return firstChar + lowerString;
}

function computerPlay(){
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playerPlay(){
    let playerSelection = prompt("Rock, Paper, Scissors?");
    playerSelection = capitalize(playerSelection);
    while (!["Rock", "Paper", "Scissors"].includes(playerSelection)){
        alert("Whoops, you chose a wrong value. Try again!");
        playerSelection = prompt("Rock, Paper, Scissors?");
        playerSelection = capitalize(playerSelection);
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return `Both players chose ${playerSelection}. It's a tie!`;
    } else if (playerSelection == "Rock"){
        if (computerSelection == "Paper") {
            computerScore += 1;
            return `${computerSelection} beats ${playerSelection}, Computer wins!`;
        } else {
            playerScore += 1;
            return `${playerSelection} beats ${computerSelection}, You win!`;
        }
    } else if (playerSelection == "Paper"){
        if (computerSelection == "Scissors") {
            computerScore += 1;
            return `${computerSelection} beats ${playerSelection}, Computer wins!`;
        } else {
            playerScore += 1;
            return `${playerSelection} beats ${computerSelection}, You win!`;
        }
    } else if (playerSelection == "Scissors"){
        if (computerSelection == "Rock") {
            computerScore += 1;
            return `${computerSelection} beats ${playerSelection}, Computer wins!`;
        } else {
            playerScore += 1;
            return `${playerSelection} beats ${computerSelection}, You win!`;
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore){
        return "Player wins!";
    } else {
        return "Computer wins!";
    }
}

console.log(game());