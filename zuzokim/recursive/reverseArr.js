function reverseArr(arr) {

  //1)풀이1
  //탈출조건
  if (arr.length === 0) return arr;
  //1번째인덱스부터 slice(복사)후 0번째인덱스를 끝에 concat;

  return reverseArr(arr.slice(1)).concat(arr[0]);
  /*메서드 체이닝은 앞서 실행된 함수가 반환한 것을 바탕으로 
  다음 함수가 앞서 실행한 함수의 반환값을 이어받아 실행되는 것을 말한다.
  함수가 한번 호출될 때 concat까지 실행하는 것이 아니라,
  해당 함수의 조건만큼 호출하고(또는 첫 번째 메서드를 실행) 결과를 반환, 
  그 다음 메서드인 concat 메서드를 실행한다.*/
  //--> [1,2,3] - [2,3] - [3] - return arr: [] 
  //--> concat arr[0]: [3] - [3,2] - return : [3,2,1]

  //2)풀이2
  // 재귀 탈출 조건: arr의 길이가 2 이하인 경우,arr을 그대로 리턴한다
  if (arr.length < 2) return arr;
  return [
    ...[arr[arr.length-1]], //마지막을 앞에 넣어주고
    ...reverseArr(arr.slice(0, arr.length - 1)) 
    // 재귀(현재 요소(마지막)를 제외한 나머지 부분)
  ]
}

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]