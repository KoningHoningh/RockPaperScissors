function computerPlay() {
    const randomValue = Math.floor(Math.random()*3);
    switch (randomValue) {
        case 0:
            return "ROCK"
            break;
        case 1:
            return "PAPER"
            break;
        default:
            return "SCISSORS"
}
};
function playerPlay() {
    const playerChoice = prompt("What do you draw?").toUpperCase();
    console.log(playerChoice);
    if (playerChoice == "ROCK" || playerChoice == "PAPER" || playerChoice == "SCISSORS")
    {
        return playerChoice;
    }
    else {playerPlay();}
}
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return("It's a DRAW!")
    }
    else if ((playerChoice == "ROCK" && computerChoice == "SCISSORS") || (playerChoice == "SCISSORS" && computerChoice == "PAPER")||
     (playerChoice == "PAPER" && computerChoice == "ROCK"))
    {
        return 'You WIN! ' + playerChoice + " Beats " + computerChoice + "!";
    }
    else {
        return "You LOSE! " + computerChoice + " Beats " + playerChoice + "!";
    };
};

function playGame() {
    for (let i = 0; i < 5; i++)
    {
        console.log(playRound(playerPlay(), computerPlay()));
    };
};

playGame();