///스택 구현///

class Stack {
  constructor() {
    this.storage = {};
    this.top = 0; // 스택의 가장 상단을 가리키는 포인터 변수 초기화
  }
  
  size() {
    return this.top;
  }
  
  // 스택에 데이터 추가
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }
	
  // 가장 나중에 추가된 데이터 가장 먼저 추출
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 함
    if (this.top === 0) {
      return {};
    } 
    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;
    
    return result;
  }
}


const stack = new Stack();

stack.size(); // 0

for(let i = 1; i < 10; i++) {
  	stack.push(i);
}
stack.pop(); // 9
stack.pop(); // 8
stack.size(); // 7
stack.push(8);
stack.size(); // 8
...
