// Given an array A consisting of N integers, 
// you should return the biggest value X, which occurs in A exactly X times. 
// If there is no such value, you should return 0.
// Input: [3, 8, 2, 3, 3, 2] / Output: 3

let arr = [3, 8, 2, 3, 3, 2];

//처음풀이 -> 시간복잡도 n^2
// findX (arr) {
//   let result = 0;
//   let obj = {};
//   arr.sort();
//   for(let i = 0; i<arr.length; i++){
//       if(!obj[arr[i]]){
//           obj[arr[i]] = 1;
//       }else{
//           obj[arr[i]] +=1;
//       }
//   }

//   for(let key in obj){
//       if(parseInt(key) === obj[key]){
//           result = Math.max(...key); // O(n)
//       }
//   }
//   return result;
// }

const findX = function(arr){
    arr.sort((a, b) => b - a); //내림차순 정렬

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i]
        const check = checkOccurances(number, i, arr)
        if (check) return number;
    }

    
    function checkOccurances (number, i, arr) {
        const index = i + number - 1 
        //(i + number) -> i로부터 number만큼 떨어진 인덱스 구하기. 단, 배열에서 인덱스를 찾기 위해 -1 해줌.
        //요소의 등장횟수(frequency)를 알 수 있음. 
        return arr[index] === number 
        //해당 인덱스의 숫자와 number가 같다면 frequency가 같다는 것을 의미함. 
        //(정렬을 했기 때문에 가능함.)
    }

    return 0;
}

console.log(findX(arr));