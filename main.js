function getPlayerChoise(){
    let result = prompt("Choose Rock, Paper or Scissors: ");
    return result.charAt(0).toUpperCase() + result.slice(1);
}

function getComputerChoise(){
    let result = Math.floor(Math.random() * 3);
    if (result == 0)
        return 'Rock';
    else if (result == 1)
        return 'Paper';
    else if (result == 2)
        return 'Scissors';
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection)
        return "Draw";
    else if (playerSelection == 'Rock' && computerSelection == 'Paper')
        return "You Lose";
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors')
        return "You Win";
    else if (playerSelection == 'Paper' && computerSelection == 'Rock')
        return "You Win";
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors')
        return "You Lose";
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock')
        return "You Lose";
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper')
        return "You Win";
}
