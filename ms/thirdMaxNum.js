const thirdMax = (nums) => {
  //처음 풀이 -> third가 없는 경우에 가장 큰 max를 반환하지 못함.
    // nums.sort((a,b) => b - a);
    // let first = nums[0];
    // let second = -100000;
    // let third = -100000;
    // for(let i = 1; i < nums.length; i++){
    //     if (nums[i] > first){
    //         third = second;
    //         second = first;
    //         first = nums[i];
    //     }else if (nums[i] > second){
    //         third = second;
    //         second = nums[i];
    //     }else if (nums[i] > third){
    //         third = nums[i];
    //     }
    // }
    // //if(third === -100000)return first;
    //     return third;

    nums.sort((a, b) => b - a); //내림차순 정렬
    let first = nums[0];
    let third;
    let count = 0; //초기 카운트 === 0
    for(let i = 0; i < nums.length; i++){
      if(nums[i] !== nums[i+1]){
        third = nums[i];
        count++;
      }
      if(count === 3)break;
    }
    //다른 숫자가 2개이하이면 3번째로 큰 숫자를 구할 수 없으므로, 가장 큰 숫자를 반환한다.
    if(count <= 2)return first;

    return third;
}

console.log(thirdMax([1,2]));
console.log(thirdMax([2, 2, 2, 3, 1]));