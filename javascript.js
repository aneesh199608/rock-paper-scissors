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
    return prompt('Welcome to our game! Type your choice of "Rock Paper Scissors"');
}
//Function "playRound" to play a single round
//  -Compare computer and user choices
//  -Determine the winner
//  -Increment the winner's score
//  -Display winner
//Function "playGame" for user to play 5 rounds and keep track
//Declare final winner

console.log("Human choice: " + getHumanChoice());
console.log("Computer choice: " + getComputerChoice());
