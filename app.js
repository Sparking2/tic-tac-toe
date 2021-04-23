function createPlayer(playerName, playerIcon) {
  playerName: playerName
  playerIcon: playerIcon
  return {
    getPlayerName() {
      return playerName;
    },
    getPlayerIcon() {
      return playerIcon;
    }
  }
}

var gameBoard = (function () {

  var tiles = [
    "", "", "",
    "", "", "",
    "", "", ""];

  var board;

  var changeTile = function (tileIndex) {
    console.log(tiles[tileIndex]);
  }

  function changeBackground() {
    this.style.background = "black";
  }

  var startBoard = function () {
    board = document.createElement('div');
    board.classList.add('gameboard');
    tiles.forEach(element => {
      let tile = document.createElement('div');
      tile.style.background = "white";
      tile.addEventListener('click', changeBackground);
      board.appendChild(tile);
    });
    document.body.appendChild(board);
  }

  return {
    changeTile: changeTile,
    startBoard: startBoard
  }

})();

gameBoard.changeTile(0);
gameBoard.startBoard();

let playerOne = createPlayer('PlayerX', 'X');
let playerTwo = createPlayer('PlayerO', 'O');

console.log(playerOne.getPlayerName());