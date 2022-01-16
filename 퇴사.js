// const fs = require('fs');
// let input = fs.readFileSync('./input.txt').toString().split('\n');
// const N = +input[0];
// const array = input.filter((el, i) => i !== 0 ? el: "" );
// const t = [0];
// const p = [0];
// const dp =[0];
// for(el of array){
//   const new_array = el.split(' ').map(el => +el);
//   t.push(new_array[0]);
//   p.push(new_array[1]);
// }
// for(let i = 1; i <=N; i++){
//   let sum = 0;
//   for(let k = i; k <= N; k+=t[k]){
//     if(k === i){
//       sum+=p[k];
//       continue;  
//     }
//     if(t[k]+ k - 1>N){
//       continue;
//     }
//     const minterm =  
//     sum+=p[k];
//   }
//   dp.push(sum);
// }
// console.log(Math.max(...dp));

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const N = +input[0];
const array = input.filter((el, i) => i !== 0 ? el: "" );
const T = [0];
const P = [0];
for(el of array){
  const new_array = el.split(' ').map(el => +el);
  T.push(new_array[0]);
  P.push(new_array[1]);
}
const DP = new Array(T.length).fill(0);

for (let i = 1; i < DP.length; i++) {
    DP[i] = P[i];

    if (i + T[i] - 1 > N) {
        DP[i] = DP[i - 1];
        continue;
    }

    let temp = DP[i];
    for (let j = 1; j < i; j++) {
        if (j + T[j] <= i) {
            temp = Math.max(temp, DP[j] + P[i]);
        }
    }
    DP[i] = temp;
}
console.log(Math.max(...DP.slice(1, N + 1)));
