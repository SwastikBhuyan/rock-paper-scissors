function getComputerChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

let getComputerSelection = getComputerChoice(["rock","paper","scissor"]);

let playerSelection = prompt("rock, paper or scissor!?").toLowerCase();


