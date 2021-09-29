function fibonacci(n) {
  // 반복되는 함수 계산을 방지하기 위한 memo 배열을 생성한다.
  const memo = [0, 1];

  const recursive = (n) => {
    // 만약 현재 memo 배열에서 n번째 요소가 등록이 되어 있다면, 해당 요소를 리턴하여 함수를 종료한다.
    if (memo[n] !== undefined) return memo[n];

    // memo에 등록이 되어 있지 않다면, n-1, n-2를 호출하여 memo[n]에 값을 저장한다.
    memo[n] = recursive(n - 1) + recursive(n - 2);
    return memo[n];
  };

  // 생성한 클로저 함수에 목표로 하는 n을 인자로 함수 호출한다.
  return recursive(n);
}

// 시간 복잡도 : O(N)

let result = fibonacci(10);

console.log(result) // 55
