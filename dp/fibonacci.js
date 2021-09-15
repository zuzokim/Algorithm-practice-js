// naive solution: O(2^N)
// const fibonacci = (num) => {
//   if(num < 2) return num;
//   return fibonacci(num - 1) + fibonacci(num -2);
// }

// dp solution with meoization: O(N)
const fibonacci = (num, memo) => {
  if(num < 2) return num;
  memo = memo || {};
  if(memo[num]) return memo[num];
  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num -2, memo);
}

const fibonacci = (num) => {
  const memo = [0,1];
  const aux = (num) => {
    //if(num < 2) return num;
    //if(memo[num])return memo[num];
    if(memo[num] !== undefined)return memo[num];

    return memo[num] = aux(num -1) + aux(num -2);
  }
  return aux(num);
}





let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34