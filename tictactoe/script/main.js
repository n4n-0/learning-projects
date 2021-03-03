const gameSquares = document.getElementsByClassName('scoreboard-square');
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

const Player = (name, marker) => {
  let score = 0;

  const getName = () => name;
  const getMarker = () => marker;
  const getScore = () => score;
  const won = () => score++;

  return {getName, getMarker, getScore, won}
};

const gameBoard = (() => {
  let board = Array.from(Array(9).keys());
  let turn = "X";

  const changeTurn = () => (turn == "X") ? turn = "O" : turn = "X";
  const getTurn = () => turn;
  const turnClick = (square) => {
    if (turn == "X" && typeof board[square.target.id] == 'number')  {
      console.log("Succ");
      document.getElementById(square.target.id).innerText = "X"
      changeTurn();
      setTimeout(function() { cpuTurn(board); }, 1000);
    } else {
      console.log("fail");
    }
  }

  const checkGameStatus = (method) => {
    switch (method) {
      case draw:
        
        break;
      case won:
        let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
        let gameWon = null;
        
        break;
    
      default:
        break;
    }
  }

  const cpuTurn = (board) => {
    let cpuWent = false
    let randomSpot = Math.floor(Math.random() * board.length);

    while(!cpuWent) {
      if (document.getElementById(randomSpot).innerText == "") {
        document.getElementById(randomSpot).innerText = "O"
        cpuWent = true;
        changeTurn();
      } else {
        randomSpot = Math.floor(Math.random() * board.length);
      }
    }
  }

  return {turnClick, getTurn, cpuTurn}
});

const GAME = gameBoard();

window.addEventListener('load', function() {
  for (let i = 0; i < gameSquares.length; i++) {
    gameSquares[i].innerText = "";
    gameSquares[i].addEventListener('click', GAME.turnClick, false);
  }
});