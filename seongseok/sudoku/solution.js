// 첫 번째 시도한 방법
// 수도 코드
// 1. board를 순회한다.
//    -> 만약 현재 요소가 0이라면, 가로줄 세로줄 3X3 사각형 박스를 비교하여 겹치지 않는 숫자를 할당한다.

// 겹치지 않는 숫자를 리턴하는 함수
// 1. 현재 요소가 해당하는 가로줄과 세로줄을 순회하며 각각 객체에 할당한다. ex) 1: true, 2: false
// 2. 현재 요소가 속한 3X3 사각형 박스도 순회하며 각각 객체에 할당한다.
// 3. 가로줄, 세로줄, 사각형 박스의 숫자들이 모두 객체에 할당이 되었다면, 객체를 순회한다.
//    -> 객체를 순회하며 가장 처음으로 false가 나온 숫자(키)를 리턴한다.

// 3X3 사각형 박스를 가져오는 함수
// 사각형 row, col 시작 지점 조건
// -> 0~2 사이라면, 0
// -> 3~5 사이라면, 3
// -> 6~8 사이라면, 6
// 1. 인자로 현재 요소의 row, col 인덱스를 받는다.
// 2. 위에서 설정한 조건에 맞춰서 사각형 박스의 인덱스를 가져온다.
// 3. 가져온 인덱스에 맞춰서 사각형을 순회하며 객체에 할당한다.
