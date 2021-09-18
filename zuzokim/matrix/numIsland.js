// Input:
// [
//   [1,1,0,0,0],
//   [0,1,0,0,1],
//   [0,0,0,1,1],
//   [0,0,0,0,0],
//   [0,0,0,0,1]
// ]
// Output: 3
// Input:
// [
//   [1,1]
// ]
// Output:1

const numIsland = (grid) => {
  let height = grid.length;
  let width = grid[0].length;
  let count = 0;
  for(let h =0; h < height; h++){
    for(let w = 0; w < width; w++){
      if(grid[h][w] === 0) continue;
      count++;
      searchIsland(h, w);
    }
  }

  function searchIsland(h ,w){
    if(h < 0 || w < 0 || w >= width || h >= height) return;
    if(grid[h][w] === 0)return;

    grid[h][w] = 0;
    searchIsland(h-1, w);
    searchIsland(h, w-1);
    searchIsland(h+1, w);
    searchIsland(h, w+1);
  }
  return count;
}


const input = [
  [1,1,0,0,0],
  [0,1,0,0,1],
  [0,0,0,1,1],
  [0,0,0,0,0],
  [0,0,0,0,1]
]

console.log(numIsland(input));

