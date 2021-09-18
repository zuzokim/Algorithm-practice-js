const longestPalindrome = (str) => {
  let result = '';
  for(let i = 0 ;i < str.length; i++){
    for(let j = str.length -1 ; j > i; j--){
      if(str[i] === str[j]){ // 양끝에서부터 탐색하며 같은 문자를 찾으면
        let checkStr = str.slice(i, j+1); //같은 문자열i,j까지 slice해 체크한다.
        if(checkStr === [...checkStr].reverse().join('') && //체크할 문자열과 뒤집은 문자열이 같고,
          checkStr.length > result.length){ //저장된 문자열의 길이보다 긴 경우
            result = checkStr; //해당 문자열을 리턴한다.
          }
      }
    }
  }
  return result;
}

//시간복잡도 O(N^2)
const longestPalindrome = (str) => {
  let result = '';

  const centerPalindrome = function (left, right){
    //두글자(홀수인경우 가운데글자 포함)를 str의 길이가 넘어가지 않을때까지 양쪽으로 넓혀가며 비교.
    while(left>= 0 && right < str.length && 
      str[left] === str[right]){
      left--;
      right++;
    }
    //같은 경우까지만 slice해서 반환한다.
    return str.slice(left + 1, right);
  }

  for(let i = 0 ; i< str.length; i++){
    const oddPal = centerPalindrome(i - 1, i + 1); //글자수가 홀수인경우, 가운데글자 하나를 포함해 비교
    const evenPal = centerPalindrome(i, i + 1); //글자수가 짝수인경우, 연속된 두 글자를 비교

    //길이가 가장 긴 것을 반환하기 위한 조건
    if(oddPal.length > result.length) result = oddPal;
    if(evenPal.length > result.length) result = evenPal;
  }
  return result;
}


let output1 = longestPalindrome('My dad is a racecar athlete');
console.log(output1); // --> 'a racecar a'  
//( "dad", "ete", " dad " are not the longest)
let output2 = longestPalindrome('aaaa level eye redivider hannah');
console.log(output2); // --> ' redivider '  
//Count whitespaces as valid characters ("aaaa", " level ", " eye ", "hannah" are not the longest)