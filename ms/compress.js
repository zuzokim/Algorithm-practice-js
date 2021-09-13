// Input: str = "aabcccccaaa"
// Output: "a2b1c5a3"
// Input: str = "aabbcc"
// Output: "aabbcc"

const compress = function (str){
  let comp = '';
  let count = 1;
  if(str.length === 0)return '';
  for(let i= 0; i< str.length; i++){
    if(str[i] === str[i+1]){
      count++;
    }else{
      comp += str[i] + count;
      count = 1; // 초기화
    }
  }

  if(str.length === 1 || str.length <= comp.length)return str;

  return comp;
}

console.log(compress('aabcccccaaa'));
console.log(compress('aabbcc'));
console.log(compress('a'));