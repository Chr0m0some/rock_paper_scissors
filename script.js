let playerSelection;
let playerSelection_modified;
let computerSelection;

let player_score = 0;
let computer_score = 0;

/* Pseudo function computerDecide: Should return a throw from the computer
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
/* pseudo function getThrows: Should get new throws from the player and the computer
    Have a variable store the user input
    Have a variable store the modified user input
    Have a variable store the computer's choice
    Check if the player cancelled the game instead of throwing a hand
 */
function getNewThrows(){
    playerSelection = prompt("What will you throw?...");
    computerSelection = computerDecide();

    if (playerSelection === null){
        return "cancelled";
        console.log("cancelled");
    } 

    playerSelection_modified = modifySelection(playerSelection);
}
/* pseudo function getOutcomeOfRound: Should return a new outcome of a round of rock, paper, scissors between the player and computer
    Get new throws from the player and computer
    Evaluate if the player tied, won, or lost against the robot
    Return a statement according to the outcome of the round
 */
function getOutcomeOfRound(){
    let new_throws = getNewThrows();

    console.log(playerSelection_modified);
    console.log(computerSelection);
    console.log(typeof playerSelection);

    switch(true){
        case playerSelection_modified == computerSelection:
            return "Tie"
        case (playerSelection_modified == "Paper" && computerSelection == "Rock" || playerSelection_modified == "Scissors" && computerSelection == "Paper" || playerSelection_modified == "Rock" && computerSelection == "Scissors"):
            return "Win";
        case (playerSelection_modified == "Paper" && computerSelection == "Scissors" || playerSelection_modified == "Scissors" && computerSelection == "Rock" || playerSelection_modified == "Rock" && computerSelection == "Paper"):
            return "Lose";
        case new_throws == "cancelled":
            return "Cancelled";
        default:
            console.log("invalid");
            return "invalid";
    }
}
/* pseudo function manageRoundDetails: Shows the player the outcome of the round and the current score standings
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
/* pseudo function adjustRoundCounter: Returns an adjustment for the round counter if the outcome of the round is a tie or the player didn't give a valid input 
    IF outcome of a round was a tie or invalid:
        Return 1
    ELSE:
        Return 0
 */
function adjustRoundCounter(outcome){
    if(outcome === "Tie" || outcome === "invalid") return 1;
    return 0;
}
/* pseudo function modifySelection: returns a capitalized version of a word that it takes in as an argument
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
/* function game: Plays a game of rock, paper, scissors between the computer and player for up to 5 rounds
    Show the outcome of each round with all the relevant details of who won, who lost, and what the current score is
    IF the game is cancelled:
        Stop the game
    IF the player didn't give a valid input:
        Make them repeat the round until they throw a valid hand
    Show the outcome of the final game winner 
     */
function game(){
    for (let i = 1; i <= 5; i++) {
        let new_outcome = getOutcomeOfRound();
        var round_details = manageRoundDetails(new_outcome);
        console.log(new_outcome);
        console.log(round_details);
        if(round_details == "stop") return;
        i -= adjustRoundCounter(new_outcome);
        console.log(i);
     }
     console.log(determineWinner(player_score, computer_score));
}