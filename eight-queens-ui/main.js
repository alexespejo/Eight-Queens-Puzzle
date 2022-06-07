const buildBoard = (queens) => {
  let board = [];
  for (let i = 0; i < queens; i++) {
    let childBoard = [];
    for (let j = 0; j < queens; j++) {
      childBoard.push(0);
    }
    board.push(childBoard);
  }
  const row = 0;
  const column = Math.floor(Math.random() * 7);
  if (queens >= 7) {
    board[column][row] = 1;
    board[Math.floor(Math.random() * 7)][column] = 1;
  }

  return board;
};

const boardtoString = (board) => {
  const grid = document.createElement("div");
  board.forEach((element) => {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    element.forEach((pos) => {
      const node = document.createElement("span");
      node.setAttribute("class", "position");
      if (pos === 1) {
        node.setAttribute("class", "position queen");
      }
      node.innerHTML = "";
      row.appendChild(node);
    });

    grid.appendChild(row);
  });

  return grid;
};

const checkBottomLeft = (board, i, j) => {
  let row = i;
  let col = j;
  if (row === board.length || col === -1) {
    return false;
  }
  if (board[row][col] === 1) {
    return true;
  }
  return checkBottomLeft(board, row + 1, col - 1);
};
const checkHorizontal = (board, i, j, x = 0) => {
  if (board[i][x] === 1) {
    return true;
  }
  if (x === j) {
    return false;
  }
  return checkHorizontal(board, i, j, x + 1);
};
const checkTopLeft = (board, i, j) => {
  let row = i;
  let col = j;
  if (col === -1 || row === -1) {
    return false;
  }
  if (board[row][col] === 1) {
    return true;
  }
  return checkTopLeft(board, row - 1, col - 1);
};

const solve = (board) => {
  let row = 1;
  let col = 0;

  while (row < board.length) {
    col = 0;
    let result = false;
    while (col < board[row].length) {
      if (
        board[col][row] === 0 &&
        !checkBottomLeft(board, col + 1, row - 1) &&
        !checkTopLeft(board, col - 1, row - 1) &&
        !checkHorizontal(board, col, row)
      ) {
        board[col][row] = 1;
        result = true;
        break;
      }
      if (board[col][row] === 1) {
        board[col][row] = 0;
      }
      col++;
    }
    if (col === board.length && !result) {
      row--;
    } else {
      row++;
    }
  }
  return board;
};

// all html content
let board = buildBoard(8);

const gameBoard = document.getElementById("game-board");
gameBoard.appendChild(boardtoString(solve(board)));

const solveBtn = document.getElementById("re-run");
solveBtn.addEventListener("click", () => {
  board = buildBoard(8);
  gameBoard.innerHTML = "";
  gameBoard.appendChild(boardtoString(solve(board)));
});
