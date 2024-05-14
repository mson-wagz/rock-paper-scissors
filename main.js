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

//Add eventlisteners to game elements
const gameElements = [rockGame,paperGame,scissorsGame].forEach((element) =>{
    element.addEventListener('click',playGame);

});
startGame.addEventListener('click', startNewGame);
}

//function to start playing the game
function playGame(event){
    const playerChoice = event.target.innerText.toLowerCase();
    const computerChoice = getComputerChoice();
    const winnerResult = determineWinner(playerChoice,computerChoice);

    const movesLeft = document.querySelector('.moves-left');
                movesLeft.innerText = `Moves Left: ${10 - moves}`;


//update scores and display result
updateScores(winnerResult);
displayResult(winnerResult,playerChoice,computerChoice)

//check if game is over
moves++;
if (moves >= MAX_MOVES) {
    gameOver();
  }
}
//function to get computer choices
function getComputerChoice(){
    return COMPUTER_CHOICES[Math.floor(Math.random() *3)]
}
// //checking who wins
// winner(this.innerText, getComputerChoice)

  
//function to decide who wins
function determineWinner(playerChoice,computerChoice){
    if (playerChoice === computerChoice) {
        return 'tie';
      } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'player';
      } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'player';
      } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'player';
      } else {
        return 'computer';
      }
    }
    
//     const winner = (player,computer) =>{

//     if (player === computer) {
//         return 'Tie'
//     }
//     else if (player == 'rock') {
//         if (computer == 'paper') {
//             return 'Computer Won';

//         } else {
//             return 'Player Won'
//         }
//     }
//     else if (player == 'scissors') {
//         if (computer == 'rock') {
//             return 'Computer Won';
//         } else {
//             return 'Player Won';
//         }
//     }
//     else if (player == 'paper') {
//         if (computer == 'scissors') {
//             return 'Computer Won';
//         } else {
//             return 'Player Won';
//         }
//     }
      
// };

// Function to update the result
// function updateResult(result) {
//     if (result === 'tie') {
//       result.textContent = 'Tie';
//     } else if (result === 'player') {
//       result.textContent = 'Player Won';
//       playerScore++;
//       playerScoreBoard.textContent = playerScore;
//     } else if (result === 'computer') {
//       result.textContent = 'Computer Won';
//       computerScore++;
//       computerScoreBoard.textContent = computerScore;
//     }
//   }
  
    
    // Function to update scores
    function updateScores(winnerResult) {
      if (winnerResult === 'player') {
        playerScore++;
      } else if (winnerResult === 'computer') {
        computerScore++;
      }
    }
//function to display result
function displayResult(winnerResult, playerChoice) {
    const resultText = winnerResult === 'player' ? 'You Win!' : winnerResult === 'computer' ? 'You Lose!' : 'It\'s a Tie!';
    result.textContent = resultText;
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
    
    movesLeft.textContent = `Moves Remaining: ${moves}`;
    moves--;
    if (moves <= 0) {
        gameOver();
    }
}


startNewGame();









