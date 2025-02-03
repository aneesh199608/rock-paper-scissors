
//Function "getComputerChoice" returns random string values "rock" or "paper" or "scissors"

function getComputerChoice() {
    let randomNumber = Math.random()*100;
    if (randomNumber>=0 && randomNumber<33) {
        return "Rock";
    } else if (randomNumber>=33 && randomNumber<66) {
        return "Paper";
    } else if (randomNumber>66) {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            choice = button.textContent;
        });
    });
    return choice;
}

//Function "playRound" to play a single round
//  -Compare computer and user choices
//  -Determine the winner
//  -Increment the winner's score
//  -Display winner

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice.toLowerCase() == "rock") {
        if (computerChoice == "Rock") {
            console.log("It's a draw");
        } else if (computerChoice == "Paper") {
            console.log("You lose! Paper beats Rock");
            computerScore = computerScore+1;
        } else {
            console.log("You Win! Rock beats Scissors");
            humanScore = humanScore+1;
        }
    } else if (humanChoice.toLowerCase() == "paper") {
        if (computerChoice == "Rock") {
            console.log("You Win! Paper beats Rock");
            humanScore = humanScore+1;
        } else if (computerChoice == "Paper") {
            console.log("It's a draw");
        }
        else {
            console.log("You lose! Scissors beat Paper");
            computerScore = computerScore+1;
        }
    } else if (humanChoice.toLowerCase() == "scissors") {
        if (computerChoice == "Rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore = computerScore+1;
        } else if (computerChoice == "Paper") {
            console.log("You win! Scissors beats Paper");
            humanScore = humanScore+1;
        } else {
            console.log("It's a draw");
        }
    }
}

    
//Function "playGame" for user to play 5 rounds and keep track
//  - Declare final winner

function playGame() {
    for (let i=1; i<6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Your Choice: " + humanSelection + "; " + "Computer Choice: " + computerSelection);
        playRound(humanSelection, computerSelection);
        console.log("Your Score: " + humanScore + "; Computer Score: "+ computerScore);
    }

    // Moved the win condition check outside the loop
    if (humanScore == computerScore) {
        console.log("We are done with the game, and it's a draw!");
    } else if (humanScore > computerScore) {
        console.log("We are done with the game, and you've WON!!! <Add drum rolls>");
    } else {
        console.log("We are done with the game, and sadly you've lost!");
    }
}

let humanScore = 0; 
let computerScore = 0;
playGame();

//function to get the user choice

// Wait for DOM to be fully loaded

