const choices = ['rock', 'paper', 'scissors'];
const playerContainer = document.querySelector('.player');
const computerContainer = document.querySelector('.computer');
const playerArea = document.querySelector('.player-icons');
const computerArea = document.querySelector('.computer-icons');
const playerScore = document.querySelector('.player-points');
const computerScore = document.querySelector('.computer-points');
const playerStatus = document.querySelector('.player-status');
const computerStatus = document.querySelector('.computer-status');
const playAgain = document.querySelector('.play-again');

let playerPoints = 0;
let computerPoints = 0;

playerArea.addEventListener('click', handleplayerSelection)
function handleplayerSelection(event) {
    if (event.target.tagName === 'I') {
        if (playerPoints < 5 && computerPoints < 5) {
            let playerSelection = event.target.id.slice(2);
            let computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            if (playerPoints === 5) {
                playerStatus.innerText = 'Winner';
                playerStatus.classList.add('winner');
                playerContainer.classList.add('winner-container');
                computerStatus.innerText = 'Loser'
                computerStatus.classList.add('loser');
                computerContainer.classList.add('loser-container');
            }
            else if (computerPoints === 5) {
                computerStatus.innerText = 'Winner';
                computerStatus.classList.add('winner');
                computerContainer.classList.add('winner-container');
                playerStatus.innerText = 'Loser'
                playerStatus.classList.add('loser');
                playerContainer.classList.add('loser-container');
            }
        }
    }
}

function computerPlay() {
    let cp = Math.floor(Math.random() * 3);
    document.querySelector(`#c-${choices[cp]}`).classList.add('computer-icon-round');
    setTimeout(changeClass, 1500)
    function changeClass() {
        document.querySelector(`#c-${choices[cp]}`).classList.remove('computer-icon-round');
    }
    return choices[cp];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerPoints++;
        computerScore.innerText = computerPoints;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerPoints++;
        computerScore.innerText = computerPoints;
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerPoints++;
        computerScore.innerText = computerPoints;
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerPoints++;
        playerScore.innerText = playerPoints;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerPoints++;
        playerScore.innerText = playerPoints;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerPoints++;
        playerScore.innerText = playerPoints;
    }
}

playAgain.addEventListener('click', restartGame);
function restartGame() {
    computerPoints = 0;
    computerScore.innerText = computerPoints;
    playerPoints = 0;
    playerScore.innerText = playerPoints;
    computerStatus.innerText = '';
    playerStatus.innerText = '';
}