function bubbleSort (arr){
  //두 수를 배열의 마지막까지 차례대로 비교해서 위치를 swap해주는 정렬.

  function swap(idx1, idx2, arr){
    //1)temp 변수 이용
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;

    //2) destructing assignment, arr가 referencetype이라 가능
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for(let i = 0; i < arr.length; i++){
    let swapcount = 0;
    //반복마다 i번째로 큰 수가 마지막에서 i번째에 위치하게 되므로, 그 앞까지만 비교한다.(인덱스이므로 -1해준다.)
    for(let l = 0; l < arr.length - 1 - i; l++){
      if(arr[l] > arr[l + 1]){
        //앞숫자가 큰 경우 위치 swap
        swap(l, l+1, arr);
        swapcount++;
      }
    }

    if(swapcount === 0) break; //swap되지 않은 경우 이미 정렬된 배열이다.
  }

  return arr;
}

let output = bubbleSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]