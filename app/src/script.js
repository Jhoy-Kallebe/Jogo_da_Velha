const arrayCheckSpace = Array.from(document.querySelectorAll('.space-check'));

const playerOne = document.querySelector('.one');
const playerTwo = document.querySelector('.two');
const scoreboard = document.querySelector('.scoreboard');

playerOne.value = 'Fulano';
playerTwo.value = 'Ciclano';

playerOne.innerText = playerOne.value;
playerTwo.innerText = playerTwo.value;

let player = playerOne;
let scoreboardOne = 0;
let scoreboardTwo = 0;

let arrayChecks = ['', '', '', 
                   '', '', '', 
                   '', '', ''];

arrayCheckSpace.forEach((v, index) => {
    arrayCheckSpace[index].addEventListener("click", function() {
        checkSpace(index);
    });
});

function loadGame() {
    arrayCheckSpace.forEach((v, index) => {
        arrayCheckSpace[index].innerText = arrayChecks[index];
    });
    changePlayer(playerTwo, playerOne);
}

function loadScoreboard () {
    scoreboard.innerText = `${scoreboardOne} X ${scoreboardTwo}`;
}

loadGame();
loadScoreboard();

function resetGame(){
    arrayChecks.forEach((v, index) => {
        arrayChecks[index] = '';
    });
    loadGame();
}

function checkSpace(index) {
    if(player == playerOne) {
        arrayChecks[index] = 'X'
        loadGame();
        playWin(playerOne, 'X')
        changePlayer(playerOne, playerTwo);
    } else {
        arrayChecks[index] = 'O'
        loadGame();
        playWin(playerTwo, 'O');
        changePlayer(playerTwo, playerOne)
    }
}

function changePlayer(playerNow, nextPlayer){
    player = nextPlayer;
    nextPlayer.style.animation = 'animationNamePlayer 1s ease-in-out infinite';
    playerNow.style.animation = 'none';
}

function playWin(player, sybol) {
    
}