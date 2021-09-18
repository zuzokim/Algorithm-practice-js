//mergesort는 N의 길이를 가진 배열 리스트를 1의 길이를 가진 "부분 리스트"가 N개 모인 것으로 취급한다.
//시간복잡도 O(nlogn)

// mergeSort함수는 재귀적으로 호출하여 배열의 길이가 1일때까지 분할하여 mergeg함수에 인자로 전달한다.
// merge함수는 순수함수로, 전달받은 분할된 배열(left,right)를 거슬러올라가며 병합한다.

function mergeSort(arr){ 
  if (arr.length === 1) return arr; //길이가 1일 될때까지
  
  const middle = parseInt(arr.length / 2); //중간
  const left = mergeSort(arr.slice(0, middle)); //중간을 기준으로 분할
  const right = mergeSort(arr.slice(middle));
  
  return merge(left, right); 
  
  function merge(left, right){
    let merged = [];
    
    while(left.length !== 0 && right.length !== 0){
      left[0] < right[0] ? merged.push(left.shift()) : merged.push(right.shift());
      /*if(left[0] < right[0]){
        merged.push(left.shift());
      }
      else{
        merged.push(right.shift());
      }*/
    }
    
    //spread로 펼쳐 넣기
    return [...merged, ...left, ...right]; 
    /*if(left.length === 0) merged.push(...right); //왼쪽을 모두 병합했다면 오른쪽의 남은 요소를 병합
    if(right.length === 0) merged.push(...left); //오른쪽을 모두 병합했다면 왼쪽의 남은 요소를 병합
    return merged; //최종 머지된 배열을 리턴*/
  }
  
  // function merge(left, right) {
    //   let merged = [];
    
    //   let leftIdx = 0;
    //   let rightIdx = 0;
    //   const fullLength = left.length + right.length; //분할 -> 왼쪽, 오른쪽 배열을 합친 총 길이
    
    //   for (let i = 0; i < fullLength; i++) { 
    //     if (leftIdx >= left.length) { 
    //       merged.push(right[rightIdx]);
    //       rightIdx++;
    //      //(왼쪽이크지만)rightIdx가 배열의 길이와 같아져 이미 오른쪽을 모두 병합한 경우 or 왼쪽이 작은 경우
    //     } else if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) { 
    //       merged.push(left[leftIdx]);//왼쪽 푸쉬(병합)
    //       leftIdx++;
    //     } else {
      //       merged.push(right[rightIdx]);
      //       rightIdx++;
      //     }
      //   }
      
      //   return merged;
      // };
      
      
    }
    
let output = mergeSort([3, 1, 30, 21]);
console.log(output); // --> [1, 3, 21, 30]