const prompt=require("prompt-sync")({sigint:true});


const numOfRounds = 5;
const choiceArr = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;


// randomly select a value between 0 and 2
// use this value as the index to choiceArr and return that item
// at that index position
function getComputerChoice(computerChoiceArray) {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoiceArray[computerChoice];
}


// ask for player input
function playerSelection() {
    let playerChoice = prompt("Choose either rock, paper or scissors: ");
    if (playerChoice === "") {
        console.log("TYPE SOMETHING IN YOU NOOB!");
        return null;
    }
    return playerChoice.toLowerCase();
}


// play round and check if computer wins or player wins or if its a draw
// returns message of whether the player won, lost or drew
function playRound (computerPlays, playPlays) {
    let messageStr;
    if (playPlays === null) {
        return null;
    } else if ((computerPlays === playPlays) && (playPlays !== null)) {
        messageStr = "This round is a tie!";
    } else if ((computerPlays === "rock" && playPlays === "scissors")
                || (computerPlays === "paper" && playPlays === "rock")
                || (computerPlays === "scissors" && playPlays === "paper")) {
        messageStr = `You lose! ${computerPlays} beats ${playPlays}`;
    } else if ((playPlays === "rock" && computerPlays === "scissors")
                || (playPlays === "paper" && computerPlays === "rock")
                || (playPlays === "scissors" && computerPlays === "paper")) {
        messageStr = `You win! ${playPlays} beats ${computerPlays}`;
    }
    console.log(messageStr);
    return messageStr;
}


// play game for 5 round, update player and computer score
function playGame() {
    for (let i = 0; i < numOfRounds; i++) {
        let computerChoosesThis = getComputerChoice(choiceArr);
        let playerChoosesThis = playerSelection();
        let message = playRound(computerChoosesThis, playerChoosesThis);
        if (message === null) {
            return null;
        } else if (message.includes('win!')) {
            playerScore++;
        } else if (message.includes('lose!')) {
            computerScore++;
        } else {
            //do nothing (tie)
        }
    }
}


// call the game function to start the game
playGame();


// after the 5 rounds have been played,
if (computerScore > playerScore) {
    console.log("///// YOU LOSE! YOU TRASH KID! //////");
} else if (computerScore < playerScore) {
    console.log("///// YOU WIN! YOU JUST BEAT A COMPUTER LOL! /////");
} else if (computerScore === playerScore) {
    console.log("///// YOU TIED! HOW DO YOU EVEN TIE WITH A BOT BRO! /////");
}



