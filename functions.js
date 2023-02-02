// const prompt=require("prompt-sync")({sigint:true});


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

// play round and check if computer wins or player wins or if its a draw
// returns message of whether the player won, lost or drew
function playRound (computerPlays, playerPlays) {
    let messageStr;
    if (playerPlays === null) {
        return null;
    } else if ((computerPlays === playerPlays) && (playerPlays !== null)) {
        messageStr = "This round is a tie!";
        displayGameMessage(messageStr);
    } else if ((computerPlays === "rock" && playerPlays === "scissors")
                || (computerPlays === "paper" && playerPlays === "rock")
                || (computerPlays === "scissors" && playerPlays === "paper")) {
        displayGameMessage(loseMessage ());
        computerScore++;
        // save and display the score as per scenario
        displayComputerScore();
    } else if ((playerPlays === "rock" && computerPlays === "scissors")
                || (playerPlays === "paper" && computerPlays === "rock")
                || (playerPlays === "scissors" && computerPlays === "paper")) {
        displayGameMessage(winMessage ());
        playerScore++;
        // save and display the score as per scenario
        displayPlayerScore();
    }
}

// display player's score on screen
function displayPlayerScore () {
    let playerPoints = document.querySelector('.player-score');
    playerPoints.textContent = playerScore;
}

// display computer's score on screen
function displayComputerScore () {
    let computerPoints = document.querySelector('.computer-score');
    computerPoints.textContent = computerScore;
}

// display game message
function displayGameMessage (messageString) {
    let gameMessage = document.querySelector('.game-message');
    gameMessage.textContent = messageString;
}

// randomise the loser message
function loseMessage () {
    let loseMessageArr = [
        'How do you lose to a bot bro?',
        'Please...just bin yourself.',
        'Do better.',
        'Seriously?',
        'My Grandma can do beat...'
    ]
    let loseMessageArrIndex = Math.floor(Math.random() * loseMessageArr.length);
    return loseMessageArr[loseMessageArrIndex];
}

// randomise the winner message
function winMessage () {
    let winMessageArr = [
        'Nice...you beat a bot.',
        'Good job, you should pat yourself on the back.',
        'Congratz, do you want an award with that?',
        'Wow, you won.',
        'Lucky choice rookie.'
    ]
    let winMessageArrIndex = Math.floor(Math.random() * winMessageArr.length);
    return winMessageArr[winMessageArrIndex];
}

// declare which item you are querying
// e.target always refers to the element that triggered the event
// querySelector returns the first ELEMENT within the document that matches
// the specified selector

function displayRoundResult (e) {
    let playerDecision = e.target.id;
    return playRound(getComputerChoice(choiceArr), playerDecision);
}

const buttons = document.querySelectorAll('img');
buttons.forEach((button) => button.addEventListener('click', e => {
    // let roundEnd = displayRoundResult(e);
    // trackScore(computerScore, playerScore, roundEnd);  
    let playerSelection = e.target.id;  
    playRound(getComputerChoice(choiceArr), playerSelection); 
}));




