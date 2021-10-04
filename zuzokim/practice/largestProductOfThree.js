//정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 배열의 요소는 음수와 0을 포함하는 정수입니다.
// 배열의 길이는 3 이상입니다.

const largestProductOfThree = function (arr) {

  //내림차순정렬
  arr.sort((a,b)=> b-a);

  //첫번째케이스: 큰 숫자 3개를 차례로 곱한다.
  let firstCase = arr[0] * arr[1] * arr[2];
  //두번째케이스: 배열의 요소 중 음수가 있는 경우,
  //제일큰 숫자 * 음수중 가장 작은 숫자 * 음수중 두번째로 작은 숫자가 가장 큰 결과값을 낸다.
  let secondCase = arr[0] * arr[arr.length - 1] * arr[arr.length - 2];
  //음수인 요소가 있는지 알지 못하기 때문에, 두가지 케이스를 비교해 큰 수를 반환한다.
  return Math.max(firstCase, secondCase);
}

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)

//시간복잡도: O(n)