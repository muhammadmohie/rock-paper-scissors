const choices = ['rock', 'paper', 'scissors'];

let playerPoints = 0;
let computerPoints = 0;

function playerPlay() {
    let pp = prompt('Enter rock, paper, or scissors')
    return pp;
}

function computerPlay() {
    let cp = Math.floor(Math.random() * 3);
    return choices[cp];
}

function game() {
    let plyr=0;
    let cmtr=0;
    for (let i=0; i<5; i++)
    {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);
        if (winner === 'C') {
            cmtr++;
        }
        else if (winner === 'P') {
            plyr++;
        }
    }
    if (plyr>cmtr)
        console.log('You Win!');
    else
        console.log('Computer Wins!');
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'paper' && playerSelection == 'rock'){
        console.log('You Lose! Paper beats Rock');
        return 'C';
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        console.log('You Lose! Scissors beats Paper');
        return 'C';
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        console.log('You Lose! Rock beats Scissors');
        return 'C';
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You Win! Paper beats Rock');
        return 'P';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You Win! Scissors beats Paper');
        return 'P';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You Win! Rock beats Scissors');
        return 'P';
    }
    else
        console.log('Tie');

}

game();