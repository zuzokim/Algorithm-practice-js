const balancedBrackets = function (str) {
  // 인자로 들어오는 str의 길이가 0이라면 바로 true 리턴
  if (str.length === 0) return true;

  // stack에 첫 번째 요소를 할당하고 index 1부터 반복문 실행
  let stack = [str[0]];

  for (let i = 1; i < str.length; i++) {
    // stack에 가장 마지막에 있는 괄호와 str[i]번째 괄호를 조합한다.
    let bracket = stack[stack.length - 1] + str[i];

    // 조합한 괄호가 아래 조건에 해당한다면, stack에 마지막 요소를 제거한다.
    if (bracket === "[]" || bracket === "{}" || bracket === "()") {
      stack.pop();
    } else {
      // 조건에 해당하지 않으면, stack에 push한다.
      stack.push(str[i]);
    }
  }
  // stack의 길이가 0 이라면, 모든 괄호가 짝이 맞아 stack에서 제거된 것이므로 true 리턴
  if (stack.length === 0) return true;
  return false;
};

let output1 = balancedBrackets("[](){}");
console.log(output1); // true

let output2 = balancedBrackets("[({})]");
console.log(output2); // true

let output3 = balancedBrackets("[(]{)}");
console.log(output3); // false
