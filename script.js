let computerScore = 0;

let playerScore = 0;

function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function playRound() {

    let computerSelection = getComputerChoice(["rock","paper","scissor"]);

    let playerSelection = prompt("rock, paper or scissor!?").toLowerCase();


    if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore += 1;
        return ("You win! Paper beats Rock!")
    }
    else if (computerSelection == "rock" && playerSelection == "scissor") {
        computerScore += 1;
        return ("You lose! Rock beats Scissor!")
    }
    else if (computerSelection == "paper" && playerSelection == "scissor") {
        playerScore += 1;
        return "You Win! Scissor beats Paper!"

    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore += 1;
        return "You lose! Paper beats Rock!"

    }
    else if (computerSelection == "scissor" && playerSelection == "rock") {
        playerScore += 1;
        return "You Win! Rock beats Scissor!"

    }
    else if (computerSelection == "scissor" && playerSelection == "paper") {
        computerScore += 1;
        return "You lose! Scissor beats Paper!"
    }
    else if (computerSelection == playerSelection) {
        return "Draw!"
    }
    else playerSelection = prompt("Enter a valid prompt!").toLowerCase();

}

function playGame() {

    alert(playRound());
    alert(playRound());
    alert(playRound());
    alert(playRound());
    alert(playRound());

    if (computerScore > playerScore) {
        return "Sorry, you lose."
    }
    else return "Congrats! You Win!"
}

alert(playGame());