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
/* pseudo function playRound: Should return the outcome of a round of rock, paper, scissors between the player and computer
    Create a variable that will hold user prompt input
    Create a variable that will hold the computer's choice
    Create a variable that will hold the user's modified input
    Output to console the computer's choice
    Output to console the user's modified input
    Evaluate if the player tied, won, or lost against the robot
    Return a statement according to the outcome
 */
function playRound(){
    let playerSelection = prompt("What will you throw?...");
    let computerSelection = computerDecide();
    let playerSelection_modified = modifySelection(playerSelection);
    console.log(computerSelection);
    console.log(playerSelection_modified);
    switch(true){
        case playerSelection == computerSelection:
            return "It's a tie! Throw another one out!"
        case (playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock"):
            return `You win! ${playerSelection} beats ${computerSelection}`;
        case (playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Paper"):
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        default:
            return "Not a valid input. Throw a sign!";
    }
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
    if(typeof selection === "string"){
        first_letter_capitalized = selection.charAt(0).toUpperCase();
        rest_of_selection = selection.slice(1).toLowerCase();
        return first_letter_capitalized + rest_of_selection;
    }
    return "Not a valid input. Throw a sign!";
}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
     }
}