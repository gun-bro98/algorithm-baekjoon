const fs = require('fs');
// /dev/stdin/
let input = fs.readFileSync('./input.txt').toString().split('\n').map(num => +num);
const inputCount = input[0];
const dp = input;
let sum = [0, dp[1], dp[1]+dp[2]];
for(let i = 3 ; i <= inputCount ; i++){
  sum[i] = Math.max(sum[i-3] + dp[i-1]+dp[i], sum[i-2]+ dp[i]);
  console.log(sum[i]);
}

function solution(count, sum) {
  console.log(sum[count]);
}
solution(inputCount, sum);

/*
dp = [
  6, 10, 20, 15, 25, 10, 20
]
최대한 많이 밟아야한다. 그래야 최대값 나옴 
처음과 마지막은 밟자

count = 1
f(x)
dp[1] 

count = 2
dp[1] + dp[2]

count = 3

dp[1] + dp[3] 
dp[2] + dp[3]
count = 4

dp[1] + dp[2] + dp[4] 
dp[1] + dp[3] + dp[4] 

count = 5

dp[1] + dp[2] + dp[4] + dp[5]
dp[1] + dp[3] + dp[5]

count = 6


dp[1] + dp[2] + dp[4]+ dp[6]
dp[1] + dp[3] + dp[4]+ dp[6]
dp[1] + dp[3] + dp[5]+ dp[6]
dp[2] + dp[3] + dp[5]+ dp[6]

count = 7
dp[1] + dp[2] + dp[4] + dp[6] + dp[7]
dp[1] + dp[2] + dp[4] + dp[5] + dp[7]
dp[1] + dp[3] + dp[4] + dp[6] + dp[7]
dp[2] + dp[3] + dp[4] + dp[5] + dp[7]
dp[2] + dp[3] + dp[4] + dp[6] + dp[7]




*/




