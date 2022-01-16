const fs = require('fs');
let N = +fs.readFileSync('./input.txt').toString();
let dp = [[], new Array(10).fill(1)];
for(let i = 2; i<=N; i++){
  dp[i] = [];
  //9일 때는 무조건 1개라서 아래처럼 초기값 준다.
  dp[i][0] = dp[i-1][0] % 10007;
  for(let j = 1; j < 10 ; j++){
    dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % 10007;
    console.log(dp[i][j-1], dp[i-1][j]);
  }
}
console.log(dp[N].reduce((a, v) => a+v, 0)% 10007);
// console.log(dp);

// dp[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// dp[1] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// dp[2] = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
