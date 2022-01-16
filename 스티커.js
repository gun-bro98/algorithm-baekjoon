let fs = require('fs');
let inputs = fs.readFileSync('./input.txt').toString().split('\n');
let cases = Number(inputs[0]);
//배열의 첫 번째 요소 제거
inputs.shift();
for(let num=0; num<cases; num++){
    //첫 번째 요소 가져오기
    let count = Number(inputs[3*num]);
    //두 번째 요소를 업이라는 배열이라부르자
    let up = inputs[3*num+1].split(' ').map(v=>Number(v));
    //세 번째 요소를 다운이라는 배열이라부르자
    let down = inputs[3*num+2].split(' ').map(v=>Number(v));
    //아예 선택 안하는 경우, 위에를 먼저 선택하는 경우, 아래를 먼저 선택하는 경우
    let dp = [[0, up[0], down[0]]];
    //count 만큼
    for(let i=1; i<count; i++){
        dp[i] = [
            //현재 선택 안하고, 전의 것 중 제일 큰거 선택하는 것
            Math.max(...dp[i-1]),
            //아예 안 선택 안해서 i-2에서 제일 큰 것과 현재의 것 더하기 vs 
            //아래를 선택하고 현재는 위의 것을 고르는 경우
            Math.max(dp[i-1][0], dp[i-1][2]) + up[i],
            //위를 선택하고 현재는 아래의 것을 고르는 경우
            Math.max(dp[i-1][0], dp[i-1][1]) + down[i]
                ];
    }
    //최종 결과 중 큰 것
    console.log(Math.max(...dp[count-1]));
}