//문제 : 2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.

const rotateMatrix = (matrix) => {

  if(matrix.length === 0)return []; //빈배열이 들어올 경우 빈 배열 리턴.

  let outerIdx = matrix.length - 1;
  let innerIdx = matrix[0].length;
  let startIdx = 0;

  //90도 회전했을 때의 길이만큼 이중 배열 생성. 단, 이후 push 해줄 때 같은 값을 참조하게 되므로, map을 사용해줘야함. 
  let result = Array(innerIdx).fill().map(el => []);

  //길이가 넘지 않을 때까지 반복.
  while(startIdx < innerIdx){
    //90도 회전했을 때는 가장 마지막 인덱스의 0번째부터 push 해주어야하므로, i를 줄여가며 반복.
    for(let i = outerIdx ; i >= 0 ; i--){
      result[startIdx].push(matrix[i][startIdx])
    }
    startIdx++; 
    //생성해둔 이중 배열의 인덱스를 하나씩 ++ 해주어 넣어준다.
  }
  return result;
}

//시간 복잡도 : O(n)

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const matrix2 =  [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(matrix[0][0]); // --> 1
console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[3][2]); // --> 8

console.log(rotateMatrix(matrix)); 
console.log(rotateMatrix(matrix2)); 