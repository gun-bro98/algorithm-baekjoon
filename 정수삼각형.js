const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const inputCount = +input[0];
let dp=[];
for(let i = 1; i <=inputCount; i++){
  const array = input[i].split(' ').map(el => +el);
  dp.push(array);
}

let list = [];
for(let i = 0; i<inputCount; i++){
  for(let j =0; j<=i; j++){
    if(i===0 && j===0) continue;
    if(j === 0){
      dp[i][j] = dp[i][j]+ dp[i-1][j];
    }else if(j === dp[i].length-1){
      dp[i][j] = dp[i][j]+ dp[i-1][j-1];
    }else{
      dp[i][j] += Math.max(dp[i-1][j-1], dp[i-1][j]);
    }
  }
}
console.log(Math.max(...dp[inputCount-1]));

// let max = 0;
// for(let i=0 ; i<inputCount-1; i++){
//   if(max===0){
//     max= Math.max(dp[inputCount-1][i],dp[inputCount-1][i+1]);
//     continue;
//   }else{
//     max= Math.max(max,dp[inputCount-1][i+1]);
//   }
// }
// console.log(max);

/*
        7
      3   8
    8   1   0
  2   7   4   4
4   5   2   6   5

1=> 2, 3  [1][0] [1][1] 은 [0][0] 영향

2=> 4, 5  [2][0] [2][1] 은 [1][0] 영향  [i][j] = [i][j]+ [i-1][j] [i][j] = [i][j]+ [i-1][j-1] 
3=> 5, 6  [2][1] [2][2] 은 [1][1] 영향  [i][j] = [i][j]+ [i-1][j] [i][j] = [i][j]+ [i-1][j-1] 

4=> 7, 8  [3][0] [3][1] 은 [2][0] 영향  [i][j] = [i][j]+ [i-1][j] [i][j] = [i][j]+ [i-1][j-1]
5=> 8, 9  [3][1] [3][2] 은 [2][1] 영향  [i][j] = [i][j]+ [i-1][j] [i][j] = [i][j]+ [i-1][j-1]
6=> 9, 10

*/



/*

inputCount = 1일 때
lists[0].array[0]

inputCount = 2일 때
lists[0].array[0] + lists[1].array[0]
lists[0].array[0] + lists[1].array[1]

inputCount = 3일 때
lists[0].array[0] + lists[1].array[0] + lists[2].array[0] 
lists[0].array[0] + lists[1].array[0] + lists[2].array[1] 
lists[0].array[0] + lists[1].array[1] + lists[2].array[1] 
lists[0].array[0] + lists[1].array[1] + lists[2].array[2] 
lists = [ [ 7 ], [ 3, 8 ], [ 8, 1, 0 ], [ 2, 7, 4, 4 ], [ 4, 5, 2, 6, 5 ] ]

*/