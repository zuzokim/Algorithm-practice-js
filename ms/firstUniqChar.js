// Input: "abaccdeff"
// Output:  'b'

const firstUniqChar = function (str) {
  let result = null;
  let check = {};

  for(let i = 0; i< str.length; i++){
      if(!check[str[i]]){
          check[str[i]] = 1;
      }else{
          check[str[i]] += 1;
      }

  }

  for(let key in check){
      if(check[key] === 1) {
      //     result = key
      //     break;    
      // }
      return key; //첫번째 uniq char를 반환해야하기 때문에 바로 return 해주거나, break로 반복문 종료가 필요하다.
    }
  }
  //return result;
}

console.log(firstUniqChar('abaccdeff'));
