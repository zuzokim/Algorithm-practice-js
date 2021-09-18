const palindrome = (str) =>{
  const split = str.split('');

  return (function isPalindrome(split){
    if(split < 2){
      return true;
    }else{
      if(split[0] === split[split.length -1]){
        split.shift();
        split.pop();
        return isPalindrome(split);
      }else{
        return false;
      }
    }
  })(split);
}

let output1 = palindrome('apple');
console.log(output1); // --> false

let output2 = palindrome('level');
console.log(output2); // --> true

let output3 = palindrome('now i won');
console.log(output3); // --> true

let output4 = palindrome('Now i won');
console.log(output4); // --> false