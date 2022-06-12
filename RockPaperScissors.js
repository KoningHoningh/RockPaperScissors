
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
function playRound(playerChoice, computerChoice, currentDiv, playerWins, computerWins) {
    if (playerChoice === computerChoice) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = "It's a DRAW! Both players played " + playerChoice +"."; //In case of a player draw
        currentDiv.appendChild(newDiv)
        showScore(playerWins, computerWins, currentDiv)
        return 0;
  
    }
    else if ((playerChoice == "ROCK" && computerChoice == "SCISSORS") || (playerChoice == "SCISSORS" && computerChoice == "PAPER")||
     (playerChoice == "PAPER" && computerChoice == "ROCK"))
    {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = 'You WIN! ' + playerChoice + " Beats " + computerChoice + "!"; // In case the player wins.
        currentDiv.appendChild(newDiv);
        showScore(playerWins+1, computerWins, currentDiv)
        return 1;
    }
    else {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = "You LOSE! " + computerChoice + " Beats " + playerChoice + "!"; // In case the CPU wins
        currentDiv.appendChild(newDiv);
        showScore(playerWins, computerWins+1, currentDiv)
        return -1;

        
    };
    return playerWins,computerWins;
};
// Insert a div that shows who has won the game.
function showResult(result,newDiv) 
{
    newDiv.innerHTML = result;
    console.log(result);
}
// Insert a div that shows the score.
function showScore(playerWins, computerWins, currentDiv)
{
    const newDiv2 = document.createElement("div"); 
    newDiv2.innerHTML = "The score is now: " + playerWins + "-" + computerWins + ".";
    currentDiv.appendChild(newDiv2);
}


// Checks whether or not the player or computer has won 5 rounds.
function endGameCheck(playerWins, computerWins, currentDiv)
{
    
    if (playerWins === 5)
    {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = "Game Over";
        currentDiv.appendChild(newDiv);

        const newGameButton = document.createElement("BUTTON");
        newGameButton.appendChild(document.createTextNode("New Game"))
        currentDiv.appendChild(newGameButton);
        newGameButton.addEventListener("click", function() {
            currentDiv.innerHTML = "";
        })
    }
    else if (computerWins === 5)
    {
        const newDiv = document.createElement("div")
        newDiv.innerHTML= "Game Over";
        currentDiv.appendChild(newDiv);
        const newGameButton = document.createElement("BUTTON");
        newGameButton.appendChild(document.createTextNode("New Game"))
        currentDiv.appendChild(newGameButton);
        newGameButton.addEventListener("click", function() {
            currentDiv.innerHTML = "";
        })
    }
    else {return false};
    
    return true;
    
}

function playGame() {

    var playerWins = 0;
    var computerWins = 0;
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");
    const newDiv = document.createElement("div");
    const currentDiv = document.querySelector(".div2");
    newDiv.innerHTML = "";
    currentDiv.appendChild(newDiv);
    
    rock.addEventListener("click", function(){
        
        const result = playRound("ROCK", computerPlay(), newDiv, playerWins, computerWins);
        if (result === 1) {
            playerWins += 1;
        }
        else if (result === -1)
        {
            computerWins += 1;
        }
        
        if (endGameCheck(playerWins, computerWins, currentDiv))
        {
            playerWins = 0;
            computerWins = 0;
        }
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