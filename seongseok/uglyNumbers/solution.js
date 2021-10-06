const uglyNumbers = function (n) {
  const uglyNums = [1]; // ugly 숫자들을 담을 배열을 선언 (1 먼저 포함)
  let [idx2, idx3, idx5] = [0, 0, 0]; // 2, 3, 5를 곱할 수를 기억하기 위한 index 배열을 선언

  // 반복문 실행하여 i가 n보다 커지면 종료
  for (let i = 0; i < n; i++) {
    // 반복문이 실행될 때마다, 기억하고 있는 배열의 요소에 2, 3, 5를 곱한다.
    const nextMultipleOf2 = uglyNums[idx2] * 2;
    const nextMultipleOf3 = uglyNums[idx3] * 3;
    const nextMultipleOf5 = uglyNums[idx5] * 5;

    // 가장 작은 숫자를 uglyNums 배열에 push한다.
    const nextUglyNum = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    uglyNums.push(nextUglyNum);

    // 중복 제거를 위해 조건문에 따라 각각의 index를 증가시킨다.
    if (nextUglyNum === nextMultipleOf2) idx2++;
    if (nextUglyNum === nextMultipleOf3) idx3++;
    if (nextUglyNum === nextMultipleOf5) idx5++;
  }
  return uglyNums[n - 1];
};

// 시간 복잡도 : O(N)

let result = uglyNumbers(1);
console.log(result); // --> 1

result = uglyNumbers(3);
console.log(result); // --> 3