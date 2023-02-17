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
let gameWin = '';

let arrayChecks = ['', '', '', 
                   '', '', '', 
                   '', '', ''];

arrayCheckSpace.forEach((v, index) => {
    arrayCheckSpace[index].addEventListener("click", function() {
        checkSpace(index);
    });
});

loadGame();

function loadGame() {
    arrayCheckSpace.forEach((v, index) => {
        arrayCheckSpace[index].innerText = arrayChecks[index];
    });
    changePlayer(playerTwo, playerOne);
    loadScoreboard();
}

function loadScoreboard () {
    scoreboard.innerText = `${scoreboardOne} X ${scoreboardTwo}`;
}

function resetGame(){
    arrayChecks.forEach((v, index) => {
        arrayChecks[index] = '';
    });
    loadGame();
    gameWin = '';
}

function checkSpace(index) {
    if(arrayChecks[index] == '' && gameWin == ''){
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
}

function changePlayer(playerNow, nextPlayer){
    player = nextPlayer;
    nextPlayer.style.animation = 'animationNamePlayer 1s ease-in-out infinite';
    playerNow.style.animation = 'none';
}

function playWin(player, sybol) {
    winColumnOne(player, sybol);    
    winColumnTwo(player, sybol);
    winColumnThree(player, sybol);    
    winRowOne(player, sybol);
    winRowTwo(player, sybol);
    winRowThree(player, sybol);
    winCrossOne(player, sybol);
    winCrossTwo(player, sybol);

    if(gameWin == playerOne.value) {
        scoreboardOne++;
        resetGame();
    }
    if (gameWin == playerTwo.value) {
        scoreboardTwo++;
        resetGame();
    }
}

function winColumnOne(player, sybol) {
    if(arrayChecks[0] == sybol && arrayChecks[3] == sybol && arrayChecks[6] == sybol) {
        alert(player.value+' ganhou!');
        gameWin = player.value;
    }
}    

function winColumnTwo(player, sybol){
    if(arrayChecks[1] == sybol && arrayChecks[4] == sybol && arrayChecks[7] == sybol) {
        alert(player.value+' ganhou!');
        gameWin = player.value;
    }
}

function winColumnThree(player, sybol) {
    if(arrayChecks[2] == sybol && arrayChecks[5] == sybol && arrayChecks[8] == sybol) {
        alert(player.value+' ganhou!');
        gameWin = player.value;
    }
}

function winRowOne(player, sybol) {
    if(arrayChecks[0] == sybol && arrayChecks[1] == sybol && arrayChecks[2] == sybol) {
        alert(player.value+' ganhou!');
        gameWin = player.value;
    }
}

function winRowTwo(player, sybol) {
    if(arrayChecks[3] == sybol && arrayChecks[4] == sybol && arrayChecks[5] == sybol) {
        alert(player.value+' ganhou!');
        gameWin = player.value;
    }
}

function winRowThree(player, sybol) {
    if(arrayChecks[6] == sybol && arrayChecks[7] == sybol && arrayChecks[8] == sybol) {
        alert(player.value+' ganhou!');
        gameWin = player.value;
    }
}

function winCrossOne(player, sybol) {
    if(arrayChecks[0] == sybol && arrayChecks[4] == sybol && arrayChecks[8] == sybol) {
        alert(player.value+' ganhou!');
        gameWin = player.value;
    }
}

function winCrossTwo(player, sybol) {
    if(arrayChecks[2] == sybol && arrayChecks[4] == sybol && arrayChecks[6] == sybol) {
        alert(player.value+' ganhou!');
        gameWin = player.value;
    }
}
