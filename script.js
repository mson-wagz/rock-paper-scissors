let player1Score = 0;
let player2Score = 0;

function rotateFunction() {
    const circle = document.querySelector('.circle');
    const spin = document.querySelector('.spin');
    const result = document.querySelector('#result');

    const randomDegrees = Math.floor(Math.random() * 360) + 1;
    circle.style.transition = "all 10s";
    circle.style.transform = `rotate(${3600 + randomDegrees}deg)`;
    spin.style.display = "none";
    result.style.display = "block";

    setTimeout(function() {
        const finalPosition = (randomDegrees % 360);
        if (finalPosition >= 0 && finalPosition < 120) {
            result.innerHTML = "You got Rock!";
        } else if (finalPosition >= 120 && finalPosition < 240) {
            result.innerHTML = "You got Paper!";
        } else {
            result.innerHTML = "You got Scissors!";
        }
    }, 10000);
}

document.getElementById('start-el').addEventListener('click', function() {
    const player1Choice = document.getElementById('player1-choice').value;
    const player2Choice = document.getElementById('player2-choice').value;
    const result = document.getElementById('result');

    if (player1Choice === "" || player2Choice === "") {
        result.textContent = 'Both players must make a choice!';
        return;
    }

    if (player1Choice === player2Choice) {
        result.textContent = 'It\'s a tie!';
    } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'scissors' && player2Choice === 'paper') ||
        (player1Choice === 'paper' && player2Choice === 'rock')
    ) {
        result.textContent = 'Player 1 wins!';
        player1Score++;
    } else {
        result.textContent = 'Player 2 wins!';
        player2Score++;
    }

    document.getElementById('player1-score').textContent = player1Score;
    document.getElementById('player2-score').textContent = player2Score;
});

document.getElementById('restart-el').addEventListener('click', restart);

function restart() {
    player1Score = 0;
    player2Score = 0;
    document.getElementById('player1-score').textContent = player1Score;
    document.getElementById('player2-score').textContent = player2Score;

    const circle = document.querySelector('.circle');
    const spin = document.querySelector('.spin');
    const result = document.querySelector('#result');

    circle.style.transition = "all 10s";
    circle.style.transform = "rotate(0deg)";
    spin.style.display = "block";
    result.style.display = "none";
}
