const body = document.querySelector('body');
let score = 0;
let cscore = 0;
const scoreDiv = document.createElement('div');
scoreDiv.textContent = `score: ${score}`;
body.appendChild(scoreDiv);

function getPlayerChoise(){
    return new Promise((resolve, reject) => {
        const choiceContainer = document.createElement('div');
        const rockButton = document.createElement('button');
        rockButton.textContent = 'Rock 🗻';
        const paperButton = document.createElement('button');
        paperButton.textContent ='Paper 📃';
        const scissorsButton = document.createElement('button');
        scissorsButton.textContent = 'Scissors ✂️';

        choiceContainer.appendChild(rockButton);
        choiceContainer.appendChild(paperButton);
        choiceContainer.appendChild(scissorsButton);

        body.appendChild(choiceContainer);

        rockButton.addEventListener('click', () => resolve('Rock'));
        paperButton.addEventListener('click', () => resolve('Paper'));
        scissorsButton.addEventListener('click', () => resolve('Scissors'));
    });
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
    else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        ++cscore;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        ++score;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        ++score;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        ++cscore;
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        ++cscore;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        ++score;
        return "You Win! Scissors beats Paper";
    }
}

const play = document.querySelector('#playButton');
play.addEventListener('click', async function(){
    body.removeChild(play);
    const playerChoice = await getPlayerChoise();
    const computerChoice = getComputerChoise();
    alert(playRound(playerChoice, computerChoice));
    body.removeChild(choiceContainer);
});

if (score === 5){
    if (score > cscore){
        score = 0;
        cscore = 0;
        alert('You Win');
    }
    else if (score < cscore){
        score = 0;
        cscore = 0;
        alert ('You Lose');
    }
    else{
        score = 0;
        cscore = 0;
        alert('Draw');
    }
}