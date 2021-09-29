// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] 
// without any duplicates. You are allowed to swap any two elements. 
// Find the minimum number of swaps required to sort the array in ascending order.

function minimumSwaps(arr) {
  let count = 0;
  for(let i= 0; i< arr.length; i++){

      while(arr[i] != i + 1){ //1~n 순으로 정렬된 숫자가 아닌 경우
          let temp = arr[i] //현재 요소를 임시 변수에 저장
          arr[i] = arr[temp -1] //현재요소에 인덱스-1 요소 할당 (swap)
          arr[temp-1] = temp; //인덱스-1 요소에 임시변수에 저장해둔 현재 요소를 할당 (swap)
          count++
      }
  }

  return count; //모두 정렬한 경우 카운트를 반환

}

//시간복잡도 : O(n)

console.log(minimumSwaps([4,3,1,2])) //-> 3
console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])) //-> 5