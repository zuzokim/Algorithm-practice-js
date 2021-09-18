// sumOfSubOrdinates
// Question
// There is a company in which the relationships of employees are hierarchical.
// For example, If there is a subordinate B whose boss is A, then B's subordinate C is also a subordinate of A. A HR staff wants to know the total number of subordinates for a specific employee in the company. Complete a function that returns the sum of subordinates of employee from hierarchcy.

// Input
// Parameter 1: hierarchy
// Object type with employees with subordinates
// Parameter 2: employee
// String type
// Output
// Number should be returned.
// the total number of subordinates including employee should be returned.
// Constraints
// Each employee cannot be duplicated.
// I/O Example
// const hierarchy = {
//   A: ["B", "C"],
//   B: ["D", "E"],
//   C: ["F"],
//   D: ["G", "H", "I"],
//   E: ["J", "K"],
//   F: ["L", "M"],
//   G: ["N", "O", "P"],
//   H: ["Q", "R"],
//   J: ["S"],
//   L: ["T", "U", "V"],
// };
// const employee = 'B';

// const output = sumOfSubOrdinates(hierarchy, employee);
// console.log(output); // 14

// function sumOfSubOrdinates(hierarchy, employee) {
//   //직원의 부하직원의 수 구하기
//   // include employee !
//   let result = 1;

//   (function findSub(hierarchcy, employee) {
//     // 탈출조건
//     if (hierarchcy[employee] === undefined) {
//       return;
//     }
//     // 기본 부하직원 수 = 해당 직원의 배열의 길이
//     const count = hierarchcy[employee].length;
//     // 부하직원의 count 누적
//     result = result + count;
//     // 부하직원의 부하직원 찾음
//     for (let i = 0; i < count; i++) {
//       findSub(hierarchcy, hierarchcy[employee][i]);
//     }
//   })(hierarchy, employee);

//   return result;
// }