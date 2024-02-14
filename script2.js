let computerScore = 0;
let playerScore = 0;

const rockSelection = document.querySelector("#rockButton");
const paperSelection = document.querySelector("#paperButton");
const scissorsSelection = document.querySelector("#scissorsButton");
const playerSign = document.querySelector("#playerSign");
const computerSign = document.querySelector("#computerSign");
const playerScoreSum = document.querySelector("#playerScore");
const computerScoreSum = document.querySelector("#computerScore");

function getComputerChoice() {
    let arr = ["✊","✋","✌️"];
    const randomChoice = arr[Math.floor(Math.random() * arr.length)];
    return randomChoice;
};


rockSelection.addEventListener("click", function() {
    playerSign.textContent = "✊";
    computerSign.textContent = `${getComputerChoice()}`;
    playRound();
    playerScoreSum.textContent = `Player : ${playerScore}`;
    computerScoreSum.textContent = `Computer : ${computerScore}`;

});

paperSelection.addEventListener("click", function() {
    playerSign.textContent = "✋";
    computerSign.textContent = `${getComputerChoice()}`;
    playRound();
    playerScoreSum.textContent = `Player : ${playerScore}`;
    computerScoreSum.textContent = `Computer : ${computerScore}`;
});

scissorsSelection.addEventListener("click", function() {
    playerSign.textContent = "✌️";
    computerSign.textContent = `${getComputerChoice()}`;
    playRound();
    playerScoreSum.textContent = `Player : ${playerScore}`;
    computerScoreSum.textContent = `Computer : ${computerScore}`;
});


function playRound() {

    if (computerSign.textContent == "✊" && playerSign.textContent == "✋") {
        playerScore += 1;
        // return ("You win! Paper beats Rock!")
    }
    else if (computerSign.textContent == "✊" && playerSign.textContent == "✌️") {
        computerScore += 1;
        // return ("You lose! Rock beats Scissor!")
    }
    else if (computerSign.textContent == "✋" && playerSign.textContent == "✌️") {
        playerScore += 1;
        // return "You Win! Scissor beats Paper!"

    }
    else if (computerSign.textContent == "✋" && playerSign.textContent == "✊") {
        computerScore += 1;
        // return "You lose! Paper beats Rock!"

    }
    else if (computerSign.textContent == "✌️" && playerSign.textContent == "✊") {
        playerScore += 1;
        // return "You Win! Rock beats Scissor!"

    }
    else if (computerSign.textContent == "✌️" && playerSign.textContent == "✋") {
        computerScore += 1;
        // return "You lose! Scissor beats Paper!"
    }

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            alert (`You are the winner!\nYour score is ${playerScore}\nComputer's score is ${computerScore}`);
        }
        else {
            alert (`You Lost :(\nYour score is ${playerScore}\nComputer's score is ${computerScore}`);
        }
    
        playerScore = 0;
        computerScore = 0;
    
        playerScoreSum.textContent = `Player : ${playerScore}`;
        computerScoreSum.textContent = `Computer : ${computerScore}`;
    }
    
    else {
        playerScoreSum.textContent = `Player : ${playerScore}`;
        computerScoreSum.textContent = `Computer : ${computerScore}`;
    };

};

