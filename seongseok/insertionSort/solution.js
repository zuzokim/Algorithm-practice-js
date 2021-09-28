const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 0, j = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

// 목표 : 인자로 받아오는 arr을 오름차순으로 정렬한다. (삽입 정렬 알고리즘 적용)

// 1. 인자로 들어온 배열을 순회한다.
// 2. arr[i]를 temp에 임시로 저장한다.
// 3. 이중 반복문을 실행한다. j는 i - 1, 조건은 j >= 0
// 4. arr[j]가 현재 temp의 값보다 크다면, j+1 위치에 arr[j]를 할당한다.
// 4-1. arr[j]가 arr[i]보다 값이 작다면, break를 걸어주고, arr[j+1]에 temp를 할당한다.

// 시간 복잡도 
// 최악의 경우(정렬이 하나도 안된 경우) : O(n^2)
// 최선의 경우(이미 정렬이 되어있는 경우) : O(n)


