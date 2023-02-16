const arrayCheckSpace = Array.from(document.querySelectorAll('.space-check'));

let playerOne = document.querySelector('.one');
let playerTwo = document.querySelector('.two');

let player = playerOne;

let arrayChecks = ['', '', '', 
                   '', '', '', 
                   '', '', ''];

arrayCheckSpace.forEach((v, index) => {
    arrayCheckSpace[index].addEventListener("click", function() {
        checkSpace(index);
    });
});

function loadGame() {
    arrayCheckSpace.forEach((value, index, array) => {
        array[index].innerText = '';
    });
}

function checkSpace(index) {
    if(player == playerOne) {
        arrayCheckSpace[index].innerText = 'X';
        arrayChecks[index] = 'X'
        player = playerTwo;
    } else {
        arrayCheckSpace[index].innerText = 'O';
        arrayChecks[index] = 'O'
        player = playerOne;
    }
}