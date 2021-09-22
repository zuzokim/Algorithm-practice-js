// Given a single input string, write a function that produces all possible anagrams
// of a string and outputs them as an array. At first, don't worry about
// repeated strings. What time complexity is your solution?
// Extra credit: Deduplicate your return array without using uniq().

function allAnagrams(str) {

  let strObj = {}; //anagram을 담을 객체생성

  (function makeAnagram (wrd, str) {
    //str이 빈문자열이 되면(조합할 wrd를 모두 소진하면) strObj객체에 key로 word, 값으로 1을 할당해준다.
    if (str === '') strObj[wrd] = 1;

    //문자열을 돌면서 
    for (let i = 0; i < str.length; i++) {
      //문자열 순서대로 앞에 고정, 그다음 문자들을 조합
      makeAnagram(wrd + str[i], str.slice(0, i) + str.slice(i + 1));
      //a, bc - ab, c - abc, '' => {abc : 1}
    }
  })('', str);

  //key를 배열로 반환 (중복된 키 제거)
  return Object.keys(strObj);

  // 다른 풀이
  // let stringObj = {};
  // for (let i = 0; i < string.length; i++) {
  //   stringObj[i] = false;
  // }
  // let anagramsObj = {};

  // const makeAnagrams = (word, obj) => {

  //   if (word.length === string.length) {
  //     if (!anagramsObj[word]) {
  //       anagramsObj[word] = true;
  //     }
  //     return;
  //   }

  //   for (let i = 0; i < string.length; i++) {
  //     let newWord = word;
  //     if (!obj[i]) {
  //       newWord += string[i];
  //       obj[i] = !obj[i];
  //       makeAnagrams(newWord, obj);
  //       obj[i] = !obj[i];
  //     }
  //   }
  // };

  // makeAnagrams("", stringObj);

  // return Object.keys(anagramsObj);
}

//시간복잡도 : O(n)

const anagrams = allAnagrams('abc');
console.log(anagrams); // 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'