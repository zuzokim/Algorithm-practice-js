// Parking Lot
// Question
// A parking lot has some parking spaces. Whenever a car arrives at the parking lot, the parking lot staff checks whether there are any parking spaces available. If parking spaces are full, cars are going out in specific order. If more cars arrive while some car is waiting, they all line up in a queue in the order in which they arrived. Then, when a parking space becomes available, the first car in the queue that arrived the earliest is parked there.

// The cost of parking in dollars is the weight of the car in kilograms multiplied by the specific rate of its parking space.

// The parking lot operator knows car's arrivalOrder with weights and departureOrder with specific space order. Parking spaces are given spaceOrder with specific price rate. Help him calculate how many dollars his total revenue is going to be today.

// Input
// Parameter 1: spaceOrder
// Array type spaceOrder with specific price rate for multiplication
// Parameter 2: arrivalOrder
// Array type arrivalOrder with car's weight
// Parameter 3: departureOrder
// Array type departureOrder with specific space order
// Output
// Number should be returned.
// Constraints
// spaceOrder: 1 <= spaceOrder[element] <= 10
// spaceOrder: 1 <= spaceOrder.length <=100
// arrivalOrder: 200 <= arrivalOrder[element] <= 1000
// arrivalOrder: 1 <= arrivalOrder.length <= 2000
// departureOrder: 1 <= departureOrder[element] <= 100
// departureOrder: 1 <= departureOrder.length <= 2000
// I/O Example
// const spaceOrder = [2, 3, 1, 4];
// const arrivalOrder = [400, 400, 300, 200, 400, 300, 200, 400];
// const departureOrder = [3, 2, 4, 1, 3, 4, 1, 2];

// const output = queueParking(spaceOrder, arrivalOrder, departureOrder);
// console.log(output); // 8800
// Source
// Olympiad > International Olympiad in Informatics > IOI 2009 > Day 2, 5


// function queueParking(spaceOrder, arrivalOrder, departureOrder){
//   // spaceOrder 금액비율이 담긴 주차공간순서
//   // arrivalOrder = carweight order 도착 차순서
//   // departureOrder = space order 주차공간순서
//   // cost = arrivalOrder[i]*spaceOrder[i] 
 
//   let total = 0;
//   let spacecount = 0;

//   while (arrivalOrder.length > 0) {
//     const head = arrivalOrder[0];
//     // 주차공간이 비어있는 경우
//     if (spacecount < spaceOrder.length) {
//       total += head * spaceOrder[spacecount];
//     } else {
//       // 아닌경우, 주차공간이 비워지는 순서대로 주차
//       const departureIdx = spacecount - spaceOrder.length;
//       const parkIdx = departureOrder[departureIdx] - 1;
//       total += head * spaceOrder[parkIdx];
//     }
//     arrivalOrder.shift();
//     spacecount++;
//   }
//   return total;
// }