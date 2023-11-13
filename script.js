function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    } else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
}


let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playAgainButton = document.getElementById('playAgain');

rockButton.addEventListener('click', function() {
    playGame('Rock');
});
paperButton.addEventListener('click', function() {
    playGame('Paper');
});
scissorsButton.addEventListener('click', function() {
    playGame('Scissors');
});


playAgainButton.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('score').textContent = '';
    document.getElementById('result').textContent = '';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    playAgainButton.classList.add('hidden');
});


function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').textContent = result;
    if (result.includes('Win')) {
        playerScore++;
    } else if (result.includes('Lose')) {
        computerScore++;
    }
    document.getElementById('score').textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? 'Player' : 'Computer';
        document.getElementById('result').textContent = `${winner} wins the game!`;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playAgainButton.classList.remove('hidden');
    }
}
       