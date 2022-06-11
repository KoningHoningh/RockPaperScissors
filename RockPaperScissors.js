
// Allows the CPU to pick between Rock, Paper and Scissors.
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
// this fuction allows the player to play their turn. Not active right now.
function playerPlay() {
    var playerChoice = "";
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    rock.addEventListener("click", function(){
        playerChoice = "ROCK";
    });
    paper.addEventListener("click", function(){
        playerChoice = "PAPER";
    });
    scissors.addEventListener("click", function(){
        playerChoice = "SCISSORS";
    });

    console.log(playerChoice);
    return playerChoice;
}

// Determines who wins
function playRound(playerChoice, computerChoice, newDiv, playerWins, computerWins) {
    if (playerChoice === computerChoice) {
        newDiv.innerHTML = "It's a DRAW! Both players played " + playerChoice +"."; //In case of a player draw
    }
    else if ((playerChoice == "ROCK" && computerChoice == "SCISSORS") || (playerChoice == "SCISSORS" && computerChoice == "PAPER")||
     (playerChoice == "PAPER" && computerChoice == "ROCK"))
    {
        newDiv.innerHTML = 'You WIN! ' + playerChoice + " Beats " + computerChoice + "!"; // In case the player wins.
        playerWins += 1;
    }
    else {
        newDiv.innerHTML = "You LOSE! " + computerChoice + " Beats " + playerChoice + "!"; // In case the CPU wins
        computerWins += 1;
    };
    return playerWins,computerWins;
};
// Insert a div that shows who has won the game.
function showResult(result,newDiv) 
{
    newDiv.innerHTML = result;
    console.log(result);
}


// Checks whether or not there have been 5 rounds played. Returns 0 when true to reset the game.
function endGameCheck(playerWins, computerWins)
{
    playCount +=1;
    if (playCount === 5)
    {
        console.log("Game Over")
        return 0;
    }
    return playCount;
}

function playGame() {

    var playerWins = 0;
    var computerWins = 0;
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    const newDiv = document.createElement("div");
    const currentDiv = document.querySelector(".div1");
    newDiv.innerHTML = "";
    document.body.appendChild(newDiv);
    
    rock.addEventListener("click", function(){
        playRound("ROCK", computerPlay(), newDiv, playerWins, computerWins);
    });

    paper.addEventListener("click", function(){
        playRound("PAPER", computerPlay(), newDiv, playerWins, computerWins);
    });

    scissors.addEventListener("click", function(){
        playRound("SCISSORS", computerPlay(), newDiv, playerWins, computerWins);
    });



    for (let i = 0; i < 5; i++)

    {
        
        //console.log(playRound(playerPlay(), computerPlay()));
    };
};

playGame();