/* Pseudo function computerDecide(){
    Get random number from 1 - 3
    IF random number is equal to 1:
        return rock
    IF random number is equal to 2:
        return paper...
}*/
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
/* pseudo function playRound(playerSelection, computerSelection){
   playerSelection_modified =  
}
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
        playRound();
        console.log(playRound());
     }
}