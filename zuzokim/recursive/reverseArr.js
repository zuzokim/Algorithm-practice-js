function reverseArr(arr) {
  // for immutability
  // let reversed = [];

  // function reverser (arr){
  //   // !emty array
  //   if (arr.length !== 0){
  //     // push last index
  //     reversed.push( arr.pop() );
  //     reverser( arr );
  //   }
  // }

  // reverser(arr);
  // return reversed;

  //return arr.reverse() //recursive calls 4,5로 통과 안됨.

  // //탈출조건
  // if (arr.length === 0) return arr;
  // //1번째인덱스부터 slice(복사)후 0번째인덱스를 끝에 concat;
  // 메서드 체이닝은 앞서 실행된 함수가 반환한 것을 바탕으로 
  // 다음 함수가 앞서 실행한 반환한 것을 이어받아 다시 함수를 실행하는 것을 말합니다.
  // 함수가 한번 호출될 때 concat까지 실행하는 것이 아니라 
  // 해당 함수의 조건만큼 호출하고(또는 첫 번째 메서드를 실행) 결과를 반환, 
  // 그 다음 메서드인 concat 메서드를 실행합니다.
  // return reverseArr(arr.slice(1)).concat(arr[0]);
// const [head, ...tail] = arr;
//   const head = arr[0];
//   const tail = arr.slice(1);
//   return reverseArr(tail).concat(head);
  if (arr.length === 1 || arr.length === 0) return arr;
  return [
    ...[arr[arr.length-1]], //마지막을 앞에 넣어주고
    ...reverseArr(arr.slice(0, arr.length - 1)) 
    //  재귀 탈출 조건: arr의 길이가 1이라면 arr을 그대로 리턴한다
  // 재귀: arr의 길이가 2 이상일 때엔,
  // 배열 "현재 arr의 맨 뒤 요소 + 재귀(현재 요소를 제외한 나머지 부분)"을 리턴한다
  ]
}

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]

// find out what that number is, assuming you write it in a random row by excluding one of the numbers from 1 to n.
// Numbers are given as strings, with a space between each number. (Example: '1 6 2 4 3') There are no situations where two numbers are missing.

// Examples:
// 1. Input: '1 6 2 4 3', Output: 5
// 2. Input: '1 2 3 4 5 6 7 9 10 11 12 13 14 15', Output: 8

// Write an efficient algorithm for the following assumptions:
// 'str' is a list of numbers in the form of a string, within the range 1.. 100,000
function findMissingNumber(str) {
  let array = str.split(' ').map(Number);
  let largest = array.length + 1;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return largest * (largest + 1) / 2 - sum;
}

function findMissingNumber(str) {
  // // 띄어쓰기를 기준으로 split 후 정렬한다.
  let splitandsort = str.split(' ').sort((a,b)=> a -b);

  //반복문 돌면서, 빠진 숫자 검사 (인덱스+1과 값을 비교해 알아낼 수 있음.)
  for(let i = 0; i <splitandsort.length; i++){
    if(Number(splitandsort[i]) !== i + 1) return i + 1
  }

}
//이 문제의 경우 1부터 시작하는 숫자 리스트이기 때문에 가능.


// Given a single input string, write a function that produces all possible anagrams
// of a string and outputs them as an array. At first, don't worry about
// repeated strings. What time complexity is your solution?

// Extra credit: Deduplicate your return array without using uniq().

// example usage:
// var anagrams = allAnagrams('abc');
// console.log(anagrams); // 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'
function allAnagrams(string) {
  // let strObj = {};

  // (function anagram (ana, str) {
  //   if (str === '') strObj[ana] = 1;

  //   for (let i = 0; i < str.length; i++) {
  //     //문자열 순서대로 앞에 고정, 그다음 문자
  //     anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
  //   }
  // })('', string);

  // //key를 배열로 반환
  // return Object.keys(strObj);

  // your code here
  let stringObj = {};
  for (let i = 0; i < string.length; i++) {
    stringObj[i] = false;
  }
  let anagramsObj = {};

  const makeAnagrams = (word, obj) => {
    if (word.length === string.length) {
      if (!anagramsObj[word]) {
        anagramsObj[word] = true;
      }
      return;
    }
    for (let i = 0; i < string.length; i++) {
      let newWord = word;
      if (!obj[i]) {
        newWord += string[i];
        obj[i] = !obj[i];
        makeAnagrams(newWord, obj);
        obj[i] = !obj[i];
      }
    }
  };
  makeAnagrams("", stringObj);
  return Object.keys(anagramsObj);
}