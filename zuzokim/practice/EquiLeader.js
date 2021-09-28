// A non-empty array A consisting of N integers is given.
// The leader of this array is the value that occurs in more than half of the elements of A.
// An equi leader is an index S such that 0 ≤ S < N − 1 and 
// two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] 
// have leaders of the same value.
// For example, given array A such that:

//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2
// we can find two equi leaders:

// 0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
// 2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
// The goal is to count the number of equi leaders.

// Write a function:
// function solution(A);
// that, given a non-empty array A consisting of N integers, returns the number of equi leaders.
// For example, given:

//     A[0] = 4
//     A[1] = 3
//     A[2] = 4
//     A[3] = 4
//     A[4] = 4
//     A[5] = 2
// the function should return 2, as explained above.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, 
// publication or disclosure prohibited.

function equiLeader(A) {

let leader = null;
let freq = {};
let count = 0;
let numLeaderLeft = 0;
let numLeader = 0;

//숫자의 등장 횟수를 freq에 저장한다. 키: 등장한 인덱스, 등장횟수는 해당 키값의 length로 구한다. 
for(let i = 0; i< A.length; i++){
    if(!freq[A[i]]){
        freq[A[i]] = [i];
    }else{
        freq[A[i]].push(i);
    }
    //등장횟수가 전체 배열 길이의 절반을 초과하는 경우에 해당 키가 leader가 된다.
    //이때, leader의 등장 횟수를 기억해둔다.
    if(freq[A[i]].length > A.length / 2 ){
        numLeader = freq[A[i]].length
        leader = A[i];
    }
}


for(let j = 0; j < A.length; j++){
    //전체 배열을 순회하며 +1씩 left 배열의 길이로 만들어준다. (배열을 직접 만들어줄 필요가 없다. ex) push 이용)
    let leftLen = j + 1;
    let rightLen = A.length - leftLen;

    //0번째 인덱스부터 순회하며, 해당 인덱스값이 leader와 같다면 left배열의 leader 수를 +1
    if(A[j] === leader) numLeaderLeft++;

    //right배열의 leader 수 === 기억해둔 전체 leader 수 - left배열의 leader 수
    let numLeaderRight = numLeader - numLeaderLeft; 

    //left배열의 leader수 right배열의 leader수 모두 각자의 배열의 길이의 절반보다 큰 경우에만 count + 1
    if(numLeaderLeft > leftLen / 2 && numLeaderRight > rightLen / 2){
        count++;
    }
}
return count;
}

console.log(equiLeader([4,3,4,4,4,2])); // --> 2

//시간복잡도: 0(n)