const bubbleSort = function (arr) {
  let changed = false;

  for (let i = 0; i < arr.length; i++) {
    if (i === 1 && !changed) return arr;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        changed = true;
      }
    }
  }

  return arr;
};

// 수도 코드
// 1. arr 배열 반복문 실행
//   -> 만약 반복문이 한 번 실행된 시점에서 배열에 변화가 없다면 정렬된 배열이므로 바로 arr 리턴
// 2. 이중 반복문 실행
//   -> 배열의 i번째 요소와 i+1번째 요소를 비교한다.
//   -> i번째 요소가 i+1번째 요소보다 크다면, 두 개의 위치를 바꾼다.
//   -> i번째 요소가 i+1번째 요소보다 작거나 같다면, continue

// 시간 복잡도 : 정렬되지 않은 배열은 O(n^2), 정렬된 배열은 O(n)
