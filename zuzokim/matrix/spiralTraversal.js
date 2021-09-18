// Take a two-dimensional array(i.e., an array containing many arrays of equal length) and return all the values in the array.

// Constraints:
// The spiral turns clockwise (start left -> right).
// All elements of an array contain only numbers.
// Empty arrays are not entered.
// Based on the entire two-dimensional array, there are no identical elements(the same number).

// example:

// spiralTraversal([
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]);

// returns [1, 2, 3, 6, 9, 8, 7, 4, 5]

// let results = [];
// let startRowIndex = 0;
// let endRowIndex = matrix.length - 1;
// let startColIndex = 0;
// let endColIndex = matrix[0].length - 1;

// while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {

//   for (let i = startColIndex; i <= endColIndex; i++) {
//     results.push(matrix[startRowIndex][i]);
//   }
//   startRowIndex++;

//   for (let j = startRowIndex; j <= endRowIndex; j++) {
//     results.push(matrix[j][endColIndex]);
//   }
//   endColIndex--;

//   if (startRowIndex <= endRowIndex) {
//     for (let k = endColIndex; k >= startColIndex; k--) {
//       results.push(matrix[endRowIndex][k]);
//     }
//     endRowIndex--;
//   }

//   if (startColIndex <= endColIndex) {
//     for (let m = endRowIndex; m >= startRowIndex; m--) {
//       results.push(matrix[m][startColIndex]);
//     }
//     startColIndex++;
//   }

// }

// return results;