//하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합( = 멱집합)을 리턴해야 합니다.

// arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
// arr[i]는 알파벳 순서로 정렬되어야 합니다.
// 집합은 중복된 원소를 허용하지 않습니다.
// 부분집합은 빈 문자열을 포함합니다.
// arr은 사전식 순서(lexical order)로 정렬되어야 합니다.

const powerSet = function(str) {
  let sorted = str.split('').sort();

  //중복 제거 방법 1
  // let filtered = sorted.reduce((acc, cur) => {
  //   if(acc[acc.length -1] === cur){
  //     return acc;
  //   }else{
  //     return acc.concat(cur);
  //   }
  // })

  //중복 제거 방법 2 :
  //set 객체를 생성해 중복을 제거한뒤, 스프레드연산자로 다시 배열에 담아준다.
  // let set = new Set(sorted);
  // let filtered = [...set];

  //중복 제거 방법 3 : 
  //indexOf 는 특정값이 처음으로 나타나는 인덱스를 반환한다.
  //filter 는 특정조건에 부합하는 배열의 모든 요소를 반환한다.
  let filtered = sorted.filter((el, id) => {
    return sorted.indexOf(el) === id;
  })

  let subSets = [];

  const isPowerSet = function(idx, subset){
    //base case: 길이가 0인 경우 배열에 넣고 종료.
    if(idx === filtered.length){
      subSets.push(subset);
      return;
    }
    //recursive: 두가지의 경우로 나뉜다.
    //idx 번째 문자 포함하지 않는 경우
    isPowerSet(idx + 1, subset);
    //idx 번째 문자 포함하는 경우
    isPowerSet(idx + 1, subset + filtered[idx]);
  }

  isPowerSet(0, '');

  return subSets.sort(); //lexical 정렬을 위해 sort해준다.
  
};

let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); 
// ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 
//   'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']

//시간복잡도: O(n)???