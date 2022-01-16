const fs = require("fs");
let input = fs.readFileSync('./input.txt').toString();
let inputCount = parseInt(input);
let dp=[];
for(let i = 0; i<=inputCount; i++){
  if(i===0){
    dp[i] = 0;
    console.log(dp[i]);
  }else if(i === 1){
    dp[i] = 1;
    console.log(dp[i]);
  }else{
    dp[i] = dp[i-1]+ dp[i-2];
    console.log(dp[i]);
  }
}
console.log(dp[inputCount]);