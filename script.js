let playerSelection;
let playerSelection_modified;
let computerSelection;

let player_score = 0;
let computer_score = 0;
let round_counter = 0;

const hands = document.querySelectorAll('button');
hands.forEach(hand => hand.addEventListener('click', playRound));

const running_score = document.querySelector('.running-score');
const result_text = document.querySelector('.results');
const winner_text = document.querySelector('.winner');
/* 

function playRound:
    Get the hand choices of the player and computer and store them into variables
    Capitalize the player's hand choice
    Get and show the outcome of a round between the player and computer's choices including: the running scores and the hands that were thrown
    IF the outcome is a tie:
        The code should not adjust the round counter
    
    Any other outcome should adjust the round counter
    IF the round counter hits five:
        Determine and show winner
        Reset the game

*/
function playRound(e){
    playerSelection = e.target.className;
    playerSelection_modified = modifySelection(playerSelection);
    computerSelection = computerDecide();

    console.log(playerSelection_modified);
    console.log(computerSelection)

    let new_outcome = getOutcomeOfRound(playerSelection_modified, computerSelection);
    running_score.textContent = `Player Score: ${player_score} Computer Score: ${computer_score}`;
    result_text.textContent = new_outcome;
    
    if (new_outcome === "It's a tie! Throw another one out!") return;

    round_counter++;
    if (round_counter === 5) {
        console.log(determineWinner(player_score, computer_score));
        winner_text.textContent = determineWinner(player_score, computer_score);
        resetGame();
    }
}
/* 

function resetGame:
    Set round_counter to 0
    Set all scores to 0
    Display a zero'd out running_score
    Clear the result_text to a text that signals another game has started

*/
function resetGame(){
    round_counter = 0;
    player_score = 0;
    computer_score = 0;
    running_score.textContent = `Player Score: ${player_score} Computer Score: ${computer_score}`
    result_text.textContent = "Throw something!";
}
/* 

function computerDecide: Should return a throw from the computer
    Get random number from 1 - 3
    IF random number is equal to 1:
        return rock
    IF random number is equal to 2:
        return paper...

*/
function computerDecide(){
    let random_num = Math.floor(Math.random() * 3) + 1;
    switch(random_num){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
/* 

function getOutcomeOfRound: Should return a new outcome of a round of rock, paper, scissors between the player and computer
    Get new throws from the player and computer
    Evaluate if the player tied, won, or lost against the robot
    Return a statement according to the outcome of the round

 */
function getOutcomeOfRound(playerHand, computerHand){

    switch(true){
        case playerHand == computerHand:
            return "It's a tie! Throw another one out!"
        case (playerHand == "Paper" && computerHand == "Rock" || playerHand == "Scissors" && computerHand == "Paper" || playerHand == "Rock" && computerHand == "Scissors"):
            ++player_score;
            return `You win! ${playerSelection} beats ${computerHand}`;
        case (playerHand == "Paper" && computerHand == "Scissors" || playerHand == "Scissors" && computerHand == "Rock" || playerHand == "Rock" && computerHand == "Paper"):
            ++computer_score;
            return `You lose! ${computerSelection} beats ${playerSelection_modified}`;
        default:
            console.log("invalid");
            return "invalid";
    }
    
}
/* 

function manageRoundDetails: Shows the player the outcome of the round and the current score standings
    Create an integer variable to hold the score of the player
    Create an integer variable to hold the score of the computer
    IF outcome of a round is a tie:
        Log to the console that it's a tie
    ELSE IF outcome is a win:
        Log to the console that it's a win
        Return a statement that shows the score of the player and the score of the computer
    ELSE IF outcome is a loss:
        Log to the console that it's a win
        Return a statement that shows the score of the player and the score of the computer

 */
function manageRoundDetails(outcome){
    switch(outcome){
        case "Tie":
            console.log("It's a tie! Throw another one out!");
            break;
        case "Win":
            console.log(`You win! ${playerSelection_modified} beats ${computerSelection}`);
            ++player_score;
            break;
        case "Lose":
            console.log(`You lose! ${computerSelection} beats ${playerSelection_modified}`);
            ++computer_score;
            break;
        case "invalid":
            console.log("Invalid input. Throw a hand!");
            break;
        default:
            console.log("Exiting game");
            return "stop";
    }
    return `Player Score: ${player_score} Computer Score: ${computer_score}`;
}

/*

function modifySelection: returns a capitalized version of a word that it takes in as an argument
    IF the argument is that of type string then:
        Capitalize the first character of the string
        Slice off the rest of the string and turn it all lowercase
        Return a complete, concatenated string
    IF the argument is not of the string type then:
        Return a string that signals to the user that it's not a valid input 
        
 */
function modifySelection(selection){
    first_letter_capitalized = selection.charAt(0).toUpperCase();
    rest_of_selection = selection.slice(1).toLowerCase();
    return first_letter_capitalized + rest_of_selection;
}
/* function determineWinner: returns string that displays winner of the whole game */
function determineWinner(score_of_player, score_of_computer){
    return (score_of_player > score_of_computer) ? "Player wins!" : "Computer wins!";
}
