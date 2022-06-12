
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
function playRound(playerChoice, computerChoice, currentDiv) {
    if (playerChoice === computerChoice) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = "It's a DRAW! Both players played " + playerChoice +"."; //In case of a player draw
        currentDiv.appendChild(newDiv)
        
        return 0;
  
    }
    else if ((playerChoice == "ROCK" && computerChoice == "SCISSORS") || (playerChoice == "SCISSORS" && computerChoice == "PAPER")||
     (playerChoice == "PAPER" && computerChoice == "ROCK"))
    {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = 'You WIN! ' + playerChoice + " Beats " + computerChoice + "!"; // In case the player wins.
        currentDiv.appendChild(newDiv);
        return 1;
    }
    else {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = "You LOSE! " + computerChoice + " Beats " + playerChoice + "!"; // In case the CPU wins
        currentDiv.appendChild(newDiv);
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
function endGameCheck(playerWins, computerWins, currentDiv, rock, paper, scissors)
{
    
    if (playerWins === 5 || computerWins === 5) {return true} 
}

function blockButtons(rock, paper, scissors) 
{
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function newGameButton(rock, paper, scissors, currentDiv) 
{
    blockButtons(rock, paper,scissors)
    const newDiv = document.createElement("div")
    newDiv.innerHTML= "Game Over";
    currentDiv.appendChild(newDiv);
    const newGameButton = document.createElement("BUTTON");
    newGameButton.appendChild(document.createTextNode("New Game"))
    currentDiv.appendChild(newGameButton);
    newGameButton.addEventListener("click", function() {
        currentDiv.innerHTML = "";
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
})}

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
        
        const result = playRound("ROCK", computerPlay(), currentDiv);
        if (result === 1) {
            playerWins += 1;  
        }
        else if (result === -1)
        {
            computerWins += 1;  
        }
        showScore(playerWins, computerWins, currentDiv)

        if (endGameCheck(playerWins, computerWins, currentDiv, rock, paper, scissors))
        {
            playerWins = 0;
            computerWins = 0;
            newGameButton(rock, paper, scissors, currentDiv);

        }
    });
    paper.addEventListener("click", function(){
        const result = playRound("PAPER", computerPlay(), currentDiv);
        if (result === 1) {
            playerWins += 1;  
        }
        else if (result === -1)
        {
            computerWins += 1;  
        }
        showScore(playerWins, computerWins, currentDiv)

        if (endGameCheck(playerWins, computerWins, currentDiv, rock, paper, scissors))
        {
            playerWins = 0;
            computerWins = 0;
            newGameButton(rock, paper, scissors, currentDiv);

        }
    });

    scissors.addEventListener("click", function(){
        const result = playRound("SCISSORS", computerPlay(), currentDiv);
        if (result === 1) {
            playerWins += 1;  
        }
        else if (result === -1)
        {
            computerWins += 1;  
        }
        showScore(playerWins, computerWins, currentDiv)

        if (endGameCheck(playerWins, computerWins, currentDiv, rock, paper, scissors))
        {
            playerWins = 0;
            computerWins = 0;
            newGameButton(rock, paper, scissors, currentDiv);

        }
    });



    for (let i = 0; i < 5; i++)

    {
        
        //console.log(playRound(playerPlay(), computerPlay()));
    };
};

playGame();