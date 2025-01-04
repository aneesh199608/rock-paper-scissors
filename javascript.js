//Function "getComputerChoice" returns random string values "rock" or "paper" or "scissors"

function getComputerChoice() {
    let randomNumber = Math.random()*100;
    if (randomNumber>=0 && randomNumber<33) {
        return computerChoice = "Rock";
    } else if (randomNumber>=33 && randomNumber<66) {
        return computerChoice = "Paper";
    } else if (randomNumber>66) {
        return computerChoice = "Scissors";
    }
}
console.log(getComputerChoice());

//Function "getHumanChoice" for user to input his choice via prompt
//Function "playRound" to play a single round
//  -Compare computer and user choices
//  -Determine the winner
//  -Increment the winner's score
//  -Display winner
//Function "playGame" for user to play 5 rounds and keep track
//Declare final winner