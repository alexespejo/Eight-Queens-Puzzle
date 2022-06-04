const buildBoard = (queens) => {
  let board = [];
  for (let i = 0; i < queens; i++) {
    let childBoard = [];
    for (let j = 0; j < queens; j++) {
      childBoard.push(0);
    }
    board.push(childBoard);
  }
  // board[0][1] = 1;
  return board;
};

const boardtoString = (board) => {
  let stringBoard = "";
  for (let i = 0; i < board.length; i++) {
    stringBoard += `${board[i]} 
`;
  }
  console.log(stringBoard);
};

const checkBottomLeft = (board, i, j) => {
  let col = j - 1;
  let row = i + 1;
  // console.log(board.length)
  let result = false;
  while (!result) {
    if (row === board.length || col === -1) {
      // console.log("END");
      break;
    }
    if (board[row][col] === 1) {
      // console.log(`found one row ${row} column ${col}`);
      result = true;
      break;
    }
    col--;
    row++;
  }
  return result;
};

const checkHorizontal = (board, i, j) => {
  // if (board[i][j] === 1) {
  // console.log(j);
  for (let x = 0; x < j; x++) {
    if (board[i][x] === 1) {
      return true;
    }
  }
  return false;
  // }
};
const checkTopLeft = (board, i, j) => {
  let col = j - 1;
  let row = i - 1;
  let result = false;
  while (!result) {
    if (col === -1 || row === -1) {
      break;
    }
    if (board[row][col] === 1) {
      // console.log("FOUND IT");
      result = true;
      break;
    }
    col--;
    row--;
  }
  return result;
};

const solve = (board) => {
  let row = 0;
  let col = 0;

  while (row < board.length) {
    col = 0;
    let result = false;
    while (col < board[row].length) {
      // console.log(`COL ${row} ROW ${col} GRID ${grid[col][row]}`);
      if (
        board[col][row] === 0 &&
        !checkBottomLeft(board, col, row) &&
        !checkTopLeft(board, col, row) &&
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
    // console.log(`row ${col} result ${result}`);
    // console.log(result);
    if (col === board.length && !result) {
      row--;
    } else {
      row++;
    }
  }
  return board;
};

let board = buildBoard(8);
boardtoString(solve(board));

// const traverse = (board) => {
//   let row = 0;

//   while (row < board.length) {
//     let col = 0;
//     while (col < board[row].length) {
//       if (board[row][col] === 1 && col !== 0) {
//         if (checkBottomLeft(board, row, col)) {
//           console.log("found one in the bottom left");
//         }
//         if (checkTopLeft(board, row, col)) {
//           console.log("found on in the top left");
//         }
//         if (checkHorizontal(board, row, col)) {
//           console.log("found one in adjacent");
//         }
//       }
//       col++;
//     }
//     row++;
//   }
//   return board;
// };

// console.log(board);
// boardtoString(board);

// let board = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];

//Traverse by row then grid
// for (let row = 0; row < grid.length; row++) {
//   for (let col = 0; col < grid[row].length; col++) {
//     if (grid[col][row] === 1) {
//       console.log(grid[col][row]);
//       break;
//     }
//     if (grid[col][row] === 0) {
//       if (
//         !checkBottomLeft(grid, col, row) &&
//         !checkTopLeft(grid, col, row) &&
//         !checkHorizontal(grid, col, row)
//       ) {
//         grid[col][row] = 1;
//         break;
//       }
//     }
//   }
// }
