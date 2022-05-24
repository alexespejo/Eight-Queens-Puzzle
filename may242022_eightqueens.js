class Board {
  //8 directions
  constructor() {
    this.board = [
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
    ];
  }
  buildBoard() {
    let board = this.board;
    for (let j = 1; j < board.length; j++) {
      let tracker = 0;
      for (let i = 0; i < board[j].length; i++) {
        board[i][tracker] = 1;
        tracker++;
      }
    }
    return board;
  }
  getBoard() {
    let stringBoard = "";
    let board = this.board;
    for (let i = 0; i < board.length; i++) {
      stringBoard += `${board[i]}
`;
    }
    return stringBoard;
  }
  getArrBoard() {
    return this.board;
  }
  checkTL(i, j) {
    let board = this.board;
    let x = 1;
    let result = false;
    while (true) {
      if (j - x === -1 || i - x === -1) {
        return result;
      }
      if (board[j - x][i - x] === 1) {
        console.log(`Top Left @ COL ${i - x} ROW ${j - x}`);
        result = true;
        return result;
      }
      x++;
    }
  }
  checkRow(i) {
    let board = this.board;
    let x = 0;
    while (x < board[i].length) {
      if (board[i][x] === 1) {
        return true;
      }
      x++;
    }
    return false;
  }
  traverse() {
    let board = this.board;
    let i = 0;
    let j = 0;
    while (i < board.length) {
      j = 0;
      while (j < board[i].length) {
        if (!this.checkTL(i, j) && this.checkRow(i)) {
          this.board[i][j] = 1;
        }
        j++;
      }
      i++;
    }
  }
  checkBL() {
    const board = this.board;
    let i = 0;
    while (i < board.length) {
      let j = 0;
      while (j < board[i].length) {
        if (board[j][i] === 1) {
          let x = 0;
          if (i + x > board[j].length) {
            break;
          }
          if (board[j - x][i + x] === 1) {
            console.log(`Bottom Left COL ${j - x} ROW ${i + x}`);
            break;
          }
          x++;
        }
        j++;
      }
      i++;
    }
  }
}
const board = new Board();
// board.traverse();
// console.log(board.getBoard());
