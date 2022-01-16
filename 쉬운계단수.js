const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(el => +el);
const N = input[0];
let dp = Array.from(Array(N), ()=> new Array(10).fill(0));
dp[0] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
for(let i = 1; i<N; i++){
  for(let j = 0; j<10 ; j++){
    dp[i][j] = ((dp[i-1][j-1] || 0) + (dp[i-1][j+1] || 0))% 1000000000;
    console.log(dp[i][j]);
  }
}
const result = dp[N-1].reduce((accumulate, current) => {
  console.log('-----------------');
  console.log(accumulate, current);
  return (accumulate + current)% 1000000000;
}, 0);
console.log(result);

