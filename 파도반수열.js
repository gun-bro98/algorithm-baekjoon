const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n').map(el => +el);
const N = input[0];
const array = input;
const dp = [0];
let k = 1;
for(let i = 1; i<=100 ; i++){
  if(i<4){
    dp[i] = 1;
  }else if(i<6){
    dp[i] = 2;
  }else {
    dp[i] = dp[i-5] + dp[i-1];
  }
}
for(let i = 1; i <=N; i++){
  console.log(dp[array[i]]);
}
