const quickSort = function (arr) {

    // 만약 현재 arr의 길이가 0 또는 1이라면, 이미 정렬된 배열이므로 arr을 리턴
    if(arr.length < 2) {
      return arr

      // 만약 현재 arr의 길이가 2 이상이라면, 기준으로 하는 요소 하나를 정한다.
    } else { 
      let pivot = arr.shift()
      let left = []
      let right = []
  
      // Pivot(기준 요소)보다 작은 요소들과 큰 요소들을 분할하여 다시 재귀 호출한다.
      for(let i = 0; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
      }
      
      return [...quickSort(left), pivot, ...quickSort(right)]
    }
  };
  
  // 시간 복잡도 : 평균 - O(nlogn) 최악인 경우 - O(n^2)
  
  