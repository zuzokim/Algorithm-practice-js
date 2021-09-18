//세로 길이 2, 가로 길이 n인 2 x n 보드. 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수 리턴.

// 타일을 놓는 방법은 가장 왼쪽부터 세로로 놓거나 가로로 놓는 것으로 시작한다.
// 1) 세로로 놓는 법
//   2 | a - - -
//   1 | a - - -
//   ------------
// 2) 가로로 놓는 법
// 타일을 가로로 놓게 되면, 그 바로 아래에는 가로로 놓을 수 밖에 없다.
//   2 | a a - -
//   1 | b b - -
//   ------------
// 이때, 타일이 아직 놓이지 않은 부분은 사실 크기만 다를뿐 같은 종류의 문제라는 것을 알 수 있다.
// 즉, 2 x 4 보드에 타일을 놓는 방법은 아래 두 가지 방법을 더한 결과와 같다.
//  1) 2 x 3 보드에 타일을 놓는 방법
//  2) 2 x 2 보드에 타일을 놓는 방법

//naive solution
// const tiling = (n) => {
//   if (n <= 2) return n;
//   return tiling(n - 1) + tiling(n - 2);
// n 보드에 타일 놓는 방법 = n-1 보드에 타일 놓는 방법 + n-2 보드에 타일 놓는 방법
// }

//memoization O(n)
const tiling = (n) => {
  let memo = [0,1,2];
  const aux = (n) =>{
    //if (n <= 2) return memo[n];
    if(memo[n] !== undefined) return memo[n];
    return memo[n] = aux(n - 1) + aux(n - 2);
  }
  return aux(n);
}

//slicing window O(n) : 
//필요한 최소한의 데이터만을 활용, 
//크기 n의 문제에 대한 해결을 위해 필요한 데이터는 오직 2개뿐이라는 사실을 이용
const tiling = (n) => {
  let first = 1;
  let second = 2;
  if(n <= 2)return n;
  for(let i = 3; i <= n; i++){
    const next = first + second;
    first = second;
    second = next;
  }
  return second;
}



output = tiling(4);
console.log(output); // --> 5

output = tiling(50);
console.log(output); // --> 20365011074

