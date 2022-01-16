const fs = require("fs");
let input = fs.readFileSync('./input.txt').toString().split('\n');
const inputCount = +input[0];
const array = input[1].split(' ').map(el => +el);
let max= 0;
let dp = Array(inputCount).fill(-1000);
for(let i = 0 ; i<inputCount; i++){
  for(let j = 0 ; j<inputCount-i; j++){
    if(i===0){
      dp[j] = array[j];
    }else {
      dp[j] = dp[j] + array[j+i];
    }
  }

  if(i===0){
    max = Math.max(...dp);
  }else{
    let bin = Math.max(...dp);
    if(max < bin){
      max= bin;
    }
  }
}

/*
i=1 일 때 1부터 10까지 비교 9번 비교
i=2 일 때 2개씩 묶어서 8번 비교
i=3 일 때 3개씩 묶어서 7번 비교
i=4 일 때 4개씩 묶어서 6번 비교
i=5 일 때 5개씩 묶어서 5번 비교
i=6 일 때 6개씩 묶어서 4번 비교
i=7 일 때 7개씩 묶어서 3번 비교
i=8 일 때 8개씩 묶어서 2번 비교
i=9 일 때 9개씩 묶어서 1번 비교

*/

const solution = (max) =>{
  console.log(max);
}
solution(max);
