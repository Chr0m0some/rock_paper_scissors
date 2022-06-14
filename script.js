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

}
 */
function playRound(playerSelection, computerSelection){

}

function game(){

}