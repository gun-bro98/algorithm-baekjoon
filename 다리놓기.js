const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const array = input.filter((el, i) => i !== 0 ? el: "" );
const dp = Array.from(Array(30), ()=>new Array(30).fill(0));

const selectBridge = (N, M) =>{
  console.log(dp[M][N]);
}

const excuteCombination = (dp) =>{
  for(let M = 1; M<dp.length; M++){
    for(let N = 1; N<=M ; N++){
      if(N===1){
        dp[M][N] = M;
        continue;
      }
      dp[M][N] = dp[M-1][N-1]+ dp[M-1][N];
    }
  }
  for(el of array){
    const new_array = el.split(' ').map(el => +el);
    selectBridge(new_array[0], new_array[1]);
  }
}

//예시의 개수만큼 selectBridge 사용해서 결과값 보여줌


//콤비네이션의 특징 
//5C2와 5C3이 같다.

//함수 실행 장소
excuteCombination(dp);
