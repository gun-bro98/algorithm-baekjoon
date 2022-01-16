const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const N = Number(input[0]);
let dp = [1, 3];
for(let i = 2; i<N ; i++){
  dp[i] = (dp[i-1] + (dp[i-2]*2))%10007;
}
const result = dp[N-1];
console.log(result);