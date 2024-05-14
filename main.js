// Define constants
const MAX_MOVES = 10;
const COMPUTER_CHOICES = ['rock', 'paper', 'scissors'];

// Get elements
const startGame = document.getElementById("start-el");
const rockGame = document.getElementById("rock-el");
const paperGame = document.getElementById("paper-el");
const scissorsGame = document.getElementById("scissors-el");
let movesLeft = document.querySelector('.moves-left');
const result = document.querySelector('.result');
const playerScoreBoard = document.querySelector('.p-count');
const computerScoreBoard = document.querySelector('.c-count');
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
    movesLeft.textContent = `Moves Remaining: ${moves}`;

    // Reset UI elements
    result.textContent = '';
    playerScoreBoard.textContent = `Player Score: ${playerScore}`;
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
    restartBtn.style.display = 'none';
    
    // Add event listeners to game elements
    rockGame.addEventListener('click', playGame);
    paperGame.addEventListener('click', playGame);
    scissorsGame.addEventListener('click', playGame);
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
    movesLeft.textContent = `Moves Remaining: ${moves}`;
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
    const resultText = winnerResult === 'player' ? 'You Win!' :
                       winnerResult === 'computer' ? 'You Lose!' :
                       'It\'s a Tie!';
   
resultParagraph.textContent = `${resultText} (${playerChoice} vs ${computerChoice})`;
}

