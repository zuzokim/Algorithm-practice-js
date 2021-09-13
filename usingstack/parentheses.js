// Input: "([)]"
// Output: False
// Input: "()[]{}"
// Output: True

const validParentheses = (s) => {
  let par = {
    '[' : ']',
    '{' : '}',
    '(' : ')',
  }

  let stack = [];

  for(let i = 0; i<s.length; i++){
    if(s[i] === '[' || s[i] === '{' || s[i] === '('){
      stack.push(s[i]);
    }else{
      //opening par가 아닌 경우 stack에서 꺼내서 closing되지 않으면 false 
      let pop = stack.pop();

      if(s[i] !== par[pop])return false;
    }
  }

  if(stack.length !== 0)return false;
  //해당 i 순서에 closing되었더라도 아직 closing되지 않은 par가 stack에 남아있다면 false

  return true;
}

console.log(validParentheses('([)]'));
console.log(validParentheses('()[]{}'));
