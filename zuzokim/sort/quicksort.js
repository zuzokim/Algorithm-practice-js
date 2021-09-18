// 퀵정렬 : 피벗을 기준으로 배열을 분할하여 재귀적으로 정렬

function quickSort(arr){
  let pivot = arr[0];
  let left = [];
  let right = [];

  //base case: 분할한 배열의 길이가 1이 되면 더이상 분할,정렬하지 않고 해당 배열을 리턴한다.
  if(arr.length < 2) return arr;

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > pivot){
      right.push(arr[i])
    }else{ //else 처리 필요.
      left.push(arr[i]);
    }
  }

  let leftsorted = quickSort(left);
  let rightsorted = quickSort(right);

  return [...leftsorted, pivot, ...rightsorted];
}


// function quickSort(arr){
 
//   let count = 0;
//   (function recur(arr){
//     let idx1 = 0;
//     let idx2 = idx1 +1;
    
//     //base case : 
//     //비교할때마다 count해주고, count가 배열 요소의 갯수만큼이면, 
//     //모두 비교한 것이므로 재귀 종료.
//     if(count === arr.length - 1) return;

//     //idx1와 그 다음 요소를 비교하므로, 마지막인덱스 이전까지 반복
//     while(idx1 < arr.length - 1){
//       if(arr[idx1] > arr[idx2]){
//         //swap
//         let temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;
//       }
//       idx1++
//     }
//     count++;
//     recur(arr);

//   })(arr);

//   return arr;
// }

let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]

//callback 의 리턴값을 기준으로 정렬