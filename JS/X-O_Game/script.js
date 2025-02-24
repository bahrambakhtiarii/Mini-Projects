const winner = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]

let gameContainer = document.querySelector('.game--container');
let restGame = document.querySelector('.game--restart');
let statusGame = document.querySelector('.game--status');

let gameActive = true;
let currentTurn = 'X';
let tempPlay = ['' , '', '', '', '', '', '', '', ''];



const showStatusPlayer = () => `It's ${currentTurn}'s turn`;
const showWinner = () => `Player ${currentTurn} has won!`;
const showStatusGame = () => "Game ended in a draw" ;


statusGame.innerHTML = showStatusPlayer();

function enterPoint (gameCont , indexContainer) {
  
  tempPlay[indexContainer] = currentTurn;
  gameCont.innerHTML = currentTurn;
  checkWinner();
  if(gameActive == true){
    getCurrentTurn();
}

}


function checkClick(cellEnter){
  let gameCont = cellEnter.target;
  let indexContainer = parseInt(gameCont.getAttribute('data-cell-index'));
  if (tempPlay[indexContainer] != '' || gameActive == false) {
    return;
  }
  enterPoint(gameCont , indexContainer);
}


//تغییر نوبت 
function getCurrentTurn (){
  currentTurn = currentTurn === "X"?"O" : "X";
  statusGame.innerHTML = showStatusPlayer();
}
//ری استارت گیم
function reStartGame(){
  currentTurn = 'X';
  statusGame.innerHTML = showStatusPlayer();
  tempPlay = ['' , '', '', '', '', '', '', '', ''];
  document.querySelectorAll('.cell').forEach(cell =>(cell.innerHTML = ''));
  gameActive = true;
  
  

}
function checkWinner(){
  let flag = 0;
  for (let i = 0; i < 8; i++) {
    let ind1 = winner[i][0];
    let ind2 = winner[i][1];
    let ind3 = winner[i][2];
    if (tempPlay[ind1] == tempPlay[ind2] 
      && tempPlay[ind2] == tempPlay[ind3]
      && tempPlay[ind1] != '') {
        currentTurn = tempPlay[ind1];
        statusGame.innerHTML = showWinner();
        gameActive = false;
        return;
    }
  }
  for (let j = 0; j < 9; j++) {
    if (tempPlay[j] != '') {
      flag++;
    }
  }
  if (flag === 9) {
    statusGame.innerHTML = showStatusGame();
    gameActive = false;
  }
}




document
    .querySelectorAll('.cell')
    .forEach(cell => cell.addEventListener('click', checkClick));
  document
    .querySelector('.game--restart')
    .addEventListener('click', reStartGame);


