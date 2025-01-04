let humanScore = 0; 
let computerScore = 0;


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


//Function "getHumanChoice" for user to input his choice via prompt

function getHumanChoice() {
    humanAnswer = prompt('Welcome to our game! Type your choice of "Rock Paper Scissors"');
    if (humanAnswer.toLowerCase() == "rock" || humanAnswer.toLowerCase() == "paper" || humanAnswer.toLowerCase() == "scissors") {
            return humanAnswer;
        }
     else {
        
        getHumanChoice();
     }   
    }

//Function "playRound" to play a single round
//  -Compare computer and user choices
//  -Determine the winner
//  -Increment the winner's score
//  -Display winner

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() == "rock" || humanChoice.toLowerCase() == "paper" || humanChoice.toLowerCase() == "scissors") {
    
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
        else {
            console.log("You have typed in a wrong input, please try again");
            i=i-1;
        }
    }

    
//Function "playGame" for user to play 5 rounds and keep track

function playGame() {
    for (let i=1; i<6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Your Choice: " + humanSelection + "; " + "Computer Choice: " + computerSelection);
        playRound(humanSelection, computerSelection);
        console.log("Your Score: " + humanScore + "; Computer Score: "+ computerScore);
    }
    console.log("That's it, it's been great playing with you!");
}
//Declare final winner

// console.log("Human choice: " + getHumanChoice());
// console.log("Computer choice: " + getComputerChoice());
// console.log(humanScore);


const gamePlay = playGame();

