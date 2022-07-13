// Global variables
let playerScore = 0;
let computerScore = 0;
let gameEnd = false;
const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.roundResult');
const displayPlayerScore = document.querySelector('.displayPlayerScore');
const displayComputerScore = document.querySelector('.displayComputerScore');
const computerChoiceImg = document.querySelector('.computerChoiceImg');
buttons.forEach(button => button.addEventListener('click', playerPlay))

// Functions

function capitalize(string){
    const lowerString = string.toLowerCase().slice(1);
    const firstChar = string.charAt(0).toUpperCase();
    return firstChar + lowerString;
}

function computerPlay(){
    // function returns "Rock", "Paper" or "Scissors" value, chosen randomly
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            computerChoiceImg.firstChild.src = 'images/ComputerRock.webp';
            computerChoiceImg.firstChild.alt = 'rock';
            return "Rock";
        case 1:
            computerChoiceImg.firstChild.src = 'images/ComputerPaper.webp';
            computerChoiceImg.firstChild.alt = 'paper';
            return "Paper";
        case 2:
            computerChoiceImg.firstChild.src = 'images/ComputerScissors.webp';
            computerChoiceImg.firstChild.alt = 'scissors';
            return "Scissors";
    }
}

function playerPlay(e){
    // function prompts player for valid value, if the value is incorrect, it prompts user again
    if (gameEnd) return;
    const playerSelection = capitalize(this.className);
    game(playerSelection, computerPlay());
}

function playRound(playerSelection, computerSelection){
    // function takes playerSelection and computerSelection, both being string values,
    // and checks who wins Rock Paper Scissors game
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

function game(playerSelection, computerSelection){
    // main function of the game, plays 5 rounds and returns the winner
    roundResult.innerHTML = playRound(playerSelection, computerSelection);
    if (playerScore == 5){roundResult.innerHTML = "You win!"; gameEnd=true} 
    if (computerScore == 5){roundResult.innerHTML = "Computer wins!"; gameEnd=true}
    displayPlayerScore.innerHTML = `You: ${playerScore}`;
    displayComputerScore.innerHTML = `Computer: ${computerScore}`;
}
