const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const inputCount = +input[0];

const arrayList = input[1].split(' ').map(list => +list);
//배열 1로 모두 채우기
let dp = new Array(inputCount).fill(1);

for(let i = 0; i < inputCount; i++){
  //1로 초기화
  const values = [1];
  for(let j = 0; j < i; j++){
    if(arrayList[i]>arrayList[j]){
      values.push(dp[j]+1);
    }
    console.log(values);
  }

  dp[i] = Math.max(...values);

}
console.log(Math.max(...dp));
// dp[0]일 때는 1 자기를 제외한 작은게없다.
// dp[1]일 때는 2 10과 자기자신(20)
// dp[2]일 때는 1 자기를 제외한 작은게없다.
// dp[3]일 때는 3 10, 20 자기자신(30)
// dp[4]일 때는 2 10과 자기자신(20)
// dp[5]일 때는 4 10, 20, 30, 자기자신(50)

