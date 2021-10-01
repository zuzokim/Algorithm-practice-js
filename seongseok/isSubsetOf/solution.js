// 1. 첫 번째 풀이
const isSubsetOf = function (base, sample) {
  return sample.every((item) => base.includes(item));
};

// 시간 복잡도 : O(N * M) -> base.length * sample.length

// 2. 두 번째 풀이
const isSubsetOf = function (base, sample) {
  // base에 있는 숫자들을 저장할 객체 생성
  let obj = {};

  // base 배열을 순회하며 각각의 숫자들을 객체에 할당한다.
  for (let i = 0; i < base.length; i++) {
    obj[base[i]] = true;
  }

  // sample 배열을 순회하며 각각의 숫자들을 객체에 할당한다.
  for (let i = 0; i < sample.length; i++) {
    obj[sample[i]] = true;
  }

  // 두 번의 반복문을 실행 후, 기존 base 배열과 obj의 길이를 비교한다.
  if (base.length === Object.keys(obj).length) {
    // 길이가 같다면, sample 배열의 숫자들이 base의 부분 집합이라 변화가 생기지 않은 것이므로, true 리턴
    return true;
  } else {
    // 길이가 같지 않다는 것은, base에 존재하지 않는 숫자가 obj에 할당이 된 것이므로 false 리턴
    return false;
  }
};

// 시간 복잡도 : O(N+M) -> base.length + sample.length

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
