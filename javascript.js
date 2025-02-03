let humanScore = 0; 
let computerScore = 0;

//Get references to DOM elements
const roundResult = document.querySelector("#round-result");
const runningScore = document.querySelector("#running-score");
const buttons = document.querySelectorAll(".btn")

//Function "getComputerChoice" returns random string values "rock" or "paper" or "scissors"

function getComputerChoice() {
    let randomNumber = Math.random()*100;
    if (randomNumber>=0 && randomNumber<33) {
        return "Rock";
    } else if (randomNumber>=33 && randomNumber<66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//Function "playRound" to play a single round
//  -Compare computer and user choices
//  -Determine the winner
//  -Increment the winner's score
//  -Display winner

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == computerChoice) {
        roundResult.textContent = `It's a draw. Both of you chose ${humanChoice}`;
            
    }else if ((humanChoice == "Rock" && computerChoice == "Scissors") ||
                (humanChoice == "Scissors" && computerChoice == "Paper") ||
                (humanChoice == "Paper" && computerChoice == "Rock")) {
                    humanScore++;
                    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }else {
        computerScore++;
        roundResult.textContent = `Oops, you lost! ${computerChoice} beats ${humanChoice}`;
                }
                
runningScore.textContent = `Your Score: ${humanScore}; Computer Score: ${computerScore}`;

if(humanScore == 5 || computerScore == 5) {
    announceWinner();
}
}


function announceWinner() {
    if (humanScore == 5) {
        roundResult.textContent = "Congratulations, you got 5 points!";
    } else {
        roundResult.textContent = "You lost the game, Computer got 5 points!";
    }

    buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});


