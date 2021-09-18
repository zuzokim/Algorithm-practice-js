// Police chase
// Question
// Police officer Daniel has been informed of the location of a suspect and wants to catch him immediately. He starts at a point N on a number line and the suspect is at a point M on the same number line. Police officer has two modes of transportation: walking and teleporting.

// Walking: Police officer can move from any point X to the point X-1 or X+1 in a single minute.

// Teleporting: Police officer can move from any point X to the point 2*X in a single minute.

// If the suspect, unaware of its pursuit, does not move at all, how long does it take for Police Officer Daniel to catch him?

// Input
// Parameter 1: N
// Number type, 0 <= N <= 100,000
// Parameter 2: M
// Number type, 0 <= M <= 100,000
// Output
// Number should be returned.
// The least amount of time, in minutes.
// I/O Example
// const N = 11;
// const M = 81;
// const output = policeChase(N, M);
// console.log(output); // 5
// Source
// Olympiad > USA Computing Olympiad > 2006-2007 Season > USACO US Open 2007 Contest > Silver 2

// function policeChase(N, M){
//   const visitHistory = Array(100000).fill(0);

//   const queue = [[N, 0]];

//   while (queue.length) {
//     const [current, move] = queue.shift(); 
//     //이미 방문한 경우에는 넘어감.
//     if (visitHistory[current]) {
//       continue;
//     }
//     //방문표시
//     visitHistory[current] = 1;
//     //이동한 위치가 도착위치와 같으면 move 리턴.
//     if (current === M) {
//       return move;
//     }

//     if (current * 2 <= 100000) {
//       queue.push([current * 2, move + 1]);
//     }
//     if (current + 1 <= 100000) {
//       queue.push([current + 1, move + 1]);
//     }
//     if (current - 1 >= 0) {
//       queue.push([current - 1, move + 1]);
//     }
//   }
//  }