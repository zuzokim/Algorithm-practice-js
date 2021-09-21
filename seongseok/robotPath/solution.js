const robotPath = function (room, src, dst) {
    const moveY = [-1, 1, 0, 0];
    const moveX = [0, 0, -1, 1];
    let queue = [[...src, 0]];
  
    while (queue.length > 0) {
      // queue에서 현재 좌표를 꺼낸다.
      const [y, x, step] = queue.shift();
  
      // 현재 좌표가 목표로 하는 좌표와 일치한다면, 이동한 횟수를 리턴
      if (dst[0] === y && dst[1] === x) {
        return step;
      } else {
        //현재 좌표를 중심으로 위, 아래, 왼쪽, 오른쪽으로 이동한다.
        for (let i = 0; i < 4; i++) {
          let ny = y + moveY[i];
          let nx = x + moveX[i];
  
          // 배열의 범위를 벗어나지 않고, 다음 좌표의 장애물 여부 판단을 위한 조건문 설정
          if (
            ny <= room.length - 1 &&
            nx <= room[0].length - 1 &&
            ny > -1 &&
            nx > -1 &&
            room[ny][nx] === 0
          ) {
            //위 조건문에 통과된다면, 이동할 수 있는 좌표이므로 좌표와 이동한 걸음 수를 queue에 push한다.
            queue.push([ny, nx, step + 1]);
          }
        }
        // 방문한 좌표임을 표시하기 위해 1을 할당
        room[y][x] = 1;
      }
    }
  };
  
  // 수도 코드
  // 1. 다음 좌표로 이동하기 위한 코드를 작성한다 (위, 아래, 왼쪽, 오른쪽)
  // 2. 큐에 첫 시작 정점을 push한다.
  // 3. 큐의 길이가 0일 때까지 반복문을 실행한다.
  //    -> 큐에서 정점 하나를 꺼낸다.
  //    -> 현재 정점이 도착 지점과 같다면, 현재 depth를 리턴한다.
  //    -> 현재 정점이 도착 지점과 같지 않다면, 현재 정점에서 갈 수 있는 모든 경로를 queue에 push한다.
  //.   -> 위의 반복문 조건 : 다음 정점의 위치가 범위를 벗어나지 않게 조건을 설정해야 됨.
  
  // 시간 복잡도 : O(n^2)

//   let room = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0],
//     [0, 1, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1, 0],
//     [1, 0, 0, 0, 0, 0],
//   ];
//   let src = [4, 2];
//   let dst = [2, 2];
//   let output = robotPath(room, src, dst);
//   console.log(output); // --> 8