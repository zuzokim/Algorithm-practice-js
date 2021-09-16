// naive solution: O(2^N)
// const fibonacci = (num) => {
//   if(num < 2) return num;
//   return fibonacci(num - 1) + fibonacci(num -2);
// }

// dp solution with meoization: O(N)
//o
const fibonacci = (num) => {
  let memo = {};
  if(num < 2) return num;
  if(memo[num]) return memo[num];
  return memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
}

//o
const fibonacci = (num) => {
  let memo = {0:0, 1:1};
  if(memo[num] !== undefined) return memo[num];
  return memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
}

//o
const fibonacci = (num) => {
  let memo = [0,1];
  if(num < 2) return num;
  if(memo[num]) return memo[num];
  return memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
}

//o
const fibonacci = (num) => {
  let memo = [0,1];
  if(memo[num] !== undefined) return memo[num];
  return memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
}


let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34