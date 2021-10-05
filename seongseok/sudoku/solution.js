// 정답 코드
const sudoku = (board) => {
  // 스도쿠 보드에서 숫자가 0인 곳의 인덱스를 가져온다.
  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  // emptySpot에서 row가 -1이라면, 스도쿠 범위를 넘어선 것이므로 함수 종료
  if (row === -1) {
    return board;
  }

  // 1부터 9까지 반복문을 실행하여 현재 위치에 들어갈 수 있는 숫자를 할당하고 다시 재귀 호출한다.
  for (let num = 1; num <= 9; num++) {
    if (checkValue(board, row, col, num)) {
      board[row][col] = num;
      sudoku(board);
    }
  }

  // 여기 코드가 실행되는 경우는, 위의 반복문이 끝나는 시점에 실행이 된다. -> 해당하는 위치에 할당할 수 있는 숫자가 없는 경우
  // 이 경우에 현재 위치의 숫자를 0으로 바꾸고 함수를 종료하여 백트래킹한다.
  if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;

  return board;
};

// 다음 빈칸의 위치를 확인하기 위한 함수
function nextEmptySpot(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  // 빈칸이 존재하지 않는다면 음수를 리턴
  return [-1, -1];
}

// row, column, square을 확인하여 들어갈 수 있는 숫자인지 확인하는 함수
function checkValue(board, row, column, value) {
  if (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  ) {
    return true;
  }

  return false;
}

// 세로줄에서 들어갈 수 있는 숫자인지 확인하는 함수
function checkColumn(board, column, value) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] === value) {
      return false;
    }
  }

  return true;
}

// 가로줄에서 들어갈 수 있는 숫자인지 확인하는 함수
function checkRow(board, row, value) {
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }

  return true;
}

// 3*3 사각형 박스에 들어갈 수 있는 숫자인지 확인하는 함수
function checkSquare(board, row, column, value) {
  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(column / 3) * 3;

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === value) return false;
    }
  }

  return true;
}

let board = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];
let output = sudoku(board);
console.log(output); // -->
/* 
[
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];
 */









//------------------------------------------------------------------------------//
// 여기 아래는 처음에 시도한 수도 코드와 코드들입니다.


// 첫 번째 시도한 방법
// 수도 코드
// 1. board를 순회한다.
//    -> 만약 현재 요소가 0이라면, 가로줄 세로줄 3X3 사각형 박스를 비교하여 겹치지 않는 숫자를 할당한다.

// 겹치지 않는 숫자를 리턴하는 함수
// 1. 현재 요소가 해당하는 가로줄과 세로줄을 순회하며 각각 객체에 할당한다. ex) 1: true, 2: false
// 2. 현재 요소가 속한 3X3 사각형 박스도 순회하며 각각 객체에 할당한다.
// 3. 가로줄, 세로줄, 사각형 박스의 숫자들이 모두 객체에 할당이 되었다면, 객체를 순회한다.
//    -> 객체를 순회하며 가장 처음으로 false가 나온 숫자(키)를 리턴한다.

// 3X3 사각형 박스를 가져오는 함수
// 사각형 row, col 시작 지점 조건
// -> 0~2 사이라면, 0
// -> 3~5 사이라면, 3
// -> 6~8 사이라면, 6
// 1. 인자로 현재 요소의 row, col 인덱스를 받는다.
// 2. 위에서 설정한 조건에 맞춰서 사각형 박스의 인덱스를 가져온다.
// 3. 가져온 인덱스에 맞춰서 사각형을 순회하며 객체에 할당한다.

// const sudoku = function (board) {
//   // TODO: 여기에 코드를 작성합니다.
//   let numObj = {};
//   for (let i = 1; i <= 9; i++) {
//     numObj[i] = false;
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[i][j] === 0) {
//         board[i][j] = Number(getValidNum(i, j));
//       }
//     }
//   }

//   console.log(board);

//   function isValid(row, col) {
//     let validNum;

//     for (let i = 0; i < board[row].length; i++) {
//       if (board[row][i] === 0) continue;
//       numObj[board[row][i]] = true;
//     }

//     for (let i = 0; i < board.length; i++) {
//       if (board[i][col] === 0) continue;
//       numObj[board[i][col]] = true;
//     }

//     getSquareNums(row, col);

//     for (let key in numObj) {
//       if (!numObj[key]) {
//         validNum = key;
//       }
//     }

//     if (validNum === undefined) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   function getSquareNums(row, col) {
//     let newRow = getStartIdx(row);
//     let newCol = getStartIdx(col);

//     for (let i = newRow; i < newRow + 3; i++) {
//       for (let j = newCol; j < newCol + 3; j++) {
//         if (board[i][j] === 0) continue;
//         numObj[board[i][j]] = true;
//       }
//     }
//   }

//   function getStartIdx(idx) {
//     if (0 <= idx && idx <= 2) {
//       return 0;
//     }
//     if (3 <= idx && idx <= 5) {
//       return 3;
//     }
//     if (6 <= idx && idx <= 8) {
//       return 6;
//     }
//   }

//   function resetNumObj() {
//     for (let i = 1; i <= 9; i++) {
//       numObj[i] = false;
//     }
//   }
// };
