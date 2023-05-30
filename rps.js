let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = "";

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || 
        (playerSelection == 'Paper' && computerSelection == 'Rock') || 
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {

        playerScore += 1;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "\n\nPlayer score: " + playerScore + "\nComputer score: " + computerScore);

        if (playerScore == 5) {
            result += '\n\nYou won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ("It's a tie. You both chose " + playerSelection
            + "\n\nPlayer score: " + playerScore + "\nComputer score: " + computerScore);
    }
    else {
        computerScore += 1;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "\n\nPlayer score: " + playerScore + "\nComputer score: " + computerScore);

        if (computerScore == 5) {
            result += '\n\nI won the game! Reload the page to play again';
            disableButtons();
        }
    }

    document.getElementById('result').innerText = result;
    return;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
    })
})