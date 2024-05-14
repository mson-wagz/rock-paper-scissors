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
const playerScoreBoard = document.querySelector('.p-count');
const computerScoreBoard = document.querySelector('.c-count');

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
const gameElements = [rockGame,paperGame,scissorsGame].forEach((element) =>{
    element.addEventListener('click', playGame);

});
startGame.addEventListener('click', startNewGame);
}

//function to start playing the game
function playGame(event){
    const playerChoice = event.target.innerText.toLowerCase();
    const computerChoice = getComputerChoice();
    const winnerResult = determineWinner(playerChoice,computerChoice);


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
//checking who wins
winner(this.innerText, computerChoice)

  
//function to decide who wins
function determineWinner(playerChoice,computerChoice){
    const winner = (player,computer) =>{

    if (player === computer) {
        result.textContent = 'Tie'
    }
    else if (player == 'rock') {
        if (computer == 'paper') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        } else {
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'scissors') {
        if (computer == 'rock') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'paper') {
        if (computer == 'scissors') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
      
    }
}
// Function to update the result
function updateResult(result) {
    if (result === 'tie') {
      result.textContent = 'Tie';
    } else if (result === 'player') {
      result.textContent = 'Player Won';
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    } else if (result === 'computer') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
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
    playerScoreBoard.textContent = `Player Score: ${playerScore}`;
    computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
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












