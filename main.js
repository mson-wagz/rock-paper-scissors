// Define constants
const MAX_MOVES = 10;
const COMPUTER_CHOICES = ['rock', 'paper', 'scissors'];

// Get elements
const startGame = document.getElementById("start-el");
const rockGame = document.getElementById("rock-el");
const paperGame = document.getElementById("paper-el");
const scissorsGame = document.getElementById("scissors-el");
const movesLeft = document.querySelector('.moves-left');
const result = document.querySelector('.turn');
const playerScoreBoard = document.querySelector('.p-count');
const computerScoreBoard = document.querySelector('.c-count');
const chooseMove = document.querySelector('.move');
const restartBtn = document.getElementById("restart-el");

// Initialize scores
let playerScore = 0;
let computerScore = 0;
let moves = MAX_MOVES;

// Function to start a new game
function startNewGame() {
    // Reset scores and moves
    playerScore = 0;
    computerScore = 0;
    moves = MAX_MOVES;
    movesLeft.textContent = `Moves Left: ${moves}`;
    playerScoreBoard.textContent = `Player Score: ${playerScore}`;
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
    result.textContent = "Choose your move!";
    chooseMove.style.display = "block";
    restartBtn.style.display = "none";
}

// Function to start playing the game
function playGame(event) {
    const playerChoice = event.target.id.split('-')[0]; // Get the choice from the element ID
    const computerChoice = getComputerChoice();
    const winnerResult = determineWinner(playerChoice, computerChoice);

    // Update scores and display result
    updateScores(winnerResult);
    displayResult(winnerResult, playerChoice, computerChoice);

    // Check if game is over
    moves--;
    movesLeft.textContent = `Moves Left: ${moves}`;
    if (moves <= 0) {
        gameOver();
    }
}

// Function to get computer choices
function getComputerChoice() {
    return COMPUTER_CHOICES[Math.floor(Math.random() * 3)];
}

// Function to decide who wins
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to update scores
function updateScores(winnerResult) {
    if (winnerResult === 'player') {
        playerScore++;
    } else if (winnerResult === 'computer') {
        computerScore++;
    }
}

// Function to display result
function displayResult(winnerResult, playerChoice, computerChoice) {
    const resultText = winnerResult === 'player'? 'You Win!' :
                       winnerResult === 'computer'? 'You Lose!' :
                       'It\'s a Tie!';
    result.textContent = `${resultText} (Player: ${playerChoice}, Computer: ${computerChoice})`;
    playerScoreBoard.textContent = `Player Score: ${playerScore}`;
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
}

// Function to run when game is over
function gameOver() {
    rockGame.removeEventListener('click', playGame);
    paperGame.removeEventListener('click', playGame);
    scissorsGame.removeEventListener('click', playGame);

    chooseMove.innerText = 'Game Over!!';

    if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game';
        result.style.color = '#308D46';
    } else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    } else {
        result.style.fontSize = '2rem';
        result.innerText = 'It\'s a Tie';
        result.style.color = 'grey';
    }
    restartBtn.innerText = 'Restart';
    restartBtn.style.display = 'flex';
    restartBtn.addEventListener('click', () => {
        window.location.reload();
    });
}

startGame.addEventListener('click', startNewGame);
startNewGame();