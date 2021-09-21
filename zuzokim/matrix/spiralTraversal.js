// Take a two-dimensional array(i.e., an array containing many arrays of equal length) and return all the values in the array.

// Constraints:
// The spiral turns clockwise (start left -> right).
// All elements of an array contain only numbers.
// Empty arrays are not entered.
// Based on the entire two-dimensional array, there are no identical elements(the same number).

const spiralTraversal = (matrix) => {
  let result = [];
  let startOuterIdx = 0;
  let endOuterIdx = matrix.length - 1; //전체 배열의 길이
  let startInnerIdx = 0;
  let endInnerIdx = matrix[0].length - 1; //내부 배열의 길이

  //matrix에서 순회한 범위 밖으로 벗어나지 않을 때까지만 순회한다.
  while(startOuterIdx <= endOuterIdx && startInnerIdx <= endInnerIdx){
    //1)오른쪽으로 이동
    //2)아래로
    //3)왼쪽으로
    //4)위로
    //1~4반복

    //1)
    for(let i = startInnerIdx; i<= endInnerIdx; i++){
      result.push(matrix[startOuterIdx][i]); 
    }
    startOuterIdx++; //아래로 한칸 이동

    //2)
    for(let j = startOuterIdx; j<= endOuterIdx; j++ ){
      result.push(matrix[j][endInnerIdx]);
    }
    endInnerIdx--; //내부 배열에서 마지막 인덱스는 모두 담았으므로, -1 

    //3)
    // (while조건문에 들어오기 전에 30번째 줄에서 startOuterIdx++ 해주게 되므로, 
    // 왼쪽으로 다시 탐색하지 않고 끝낼 수 있도록 조건문이 필요하다.
    if(startOuterIdx <= endOuterIdx){ 
      for(let k = endInnerIdx; k>= startInnerIdx ; k--){
        result.push(matrix[endOuterIdx][k]);
      }
      endOuterIdx--; //전체 배열에서 마지막 요소는 모두 담았으므로, -1
    }

    //4)
    //if(startInnerIdx <= endInnerIdx){
      for(let m = endOuterIdx; m >= startOuterIdx ; m--){
        result.push(matrix[m][startInnerIdx]);
      }
      startInnerIdx++; //오른쪽으로 이동해야하므로, +1
    //}
    
  }
  return result
}

//시간복잡도 : O(n^2)

console.log(spiralTraversal([
  [1,2,3],
  [8,9,4],
  [7,6,5]
])); // ->  [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(spiralTraversal([
  ['I', "'", 'm', ' ', 'a', ' ', 's', 'l'],
  ['t', ' ', 'I', ' ', 'n', 'e', 'v', 'o'],
  ['u', ' ', 'b', 'a', 'c', 'k', 'e', 'w'],
  ['b', 'k', 'l', 'a', 'w', ' ', 'r', ' '],
  [' ', ',', 'r', 'e', 'k', 'l', 'a', 'w'],
])); 

