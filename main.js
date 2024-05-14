//Define constants
const MAX_MOVES = 10;
const COMPUTER_CHOICES = ['rock', 'paper', 'scissors']

//Get elements
const startGame =document.getElementById("start-el");
const rockGame = document.getElementById("rock-el");
const paperGame = document.getElementById("paper-el");
const scissorsGame = document.getElementById("scissors-el");
const movesLeft = document.querySelector('.moves-left');
const result = document.querySelector('.turn');
const playerScoreboard = document.querySelector('.p-count');
const computerScoreboard = document.querySelector('.c-count');

//initialize scores
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;



//function to start a new game
function startNewGame(){
    //Reset scores and moves
    playerScore = 0;
    computerScore = 0;
    moves = 0;

//Add eventlisteners to game elements
const gameElements = [rockGame,paperGame,scissorsGame].gameElements.forEach((element) =>{
    element.addEventListener('click', playGame);
});
}

//function to start playing the game
function playGame(event){
    const playerChoice = event.target.innerText.toLowerCase;
    const computerChoice = getComputerChoice();
    const winnerResult = determineWinner(playerChoice)


//update scores and display result
updateScores(winnerResult);
displayResult(winnerResult,playerChoice,computerChoice)

//check if game is over
if (moves >= MAX_MOVES) {
    gameOver();
  }
}
//function to get computer choices
function getComputerChoice(){
    return COMPUTER_CHOICES[Math.floor(Math.random *3)]
}
        

  
//function to decide who wins
function determineWinner(playerChoice, computerChoice){
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
    
    // Function to update scores
    function updateScores(winnerResult) {
      if (winnerResult === 'player') {
        playerScore++;
      } else if (winnerResult === 'computer') {
        computerScore++;
      }
    }
//function to display result
function displayResult(winnerResult, playerChoice, computerChoice) {
    const resultText = winnerResult === 'player' ? 'You Win!' : winnerResult === 'computer' ? 'You Lose!' : 'It\'s a Tie!';
    result.textContent = resultText;
    playerScoreboard.textContent = `Player Score: ${playerScore}`;
    computerScoreboard.textContent = `Computer Score: ${computerScore}`;
  }
//function to run when game is over
function gameOver() {
    const chooseMove = document.querySelector('.move');
    const restartBtn = document.getElementById("restart-el")
    chooseMove.innerText = 'Game Over!!'
    movesLeft.style.display = 'none';

    if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game'
        result.style.color = '#308D46';
    }
    else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else {
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'grey'
    }
    restartBtn.innerText = 'Restart';
    restartBtn.style.display = 'flex'
    restartBtn.addEventListener('click', () => {
        window.location.reload();
    });
}




startNewGame();












