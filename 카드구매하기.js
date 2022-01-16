const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const N = +input[0];
let array = input[1].split(' ').map(el => +el);
//첫 번째 요소에 0 추가 
array.unshift(0);
//첫 번째 요소는 무조건 추가
let maxPrice = [0, array[1]];
for(let i = 1; i<=N; i++){
  let priceList = [];
  for(let j = 1; j<i; j++){
    priceList.push(maxPrice[i-j] + array[j]);
  }
  priceList.push(array[i]);
  console.log(priceList);
  maxPrice[i] = Math.max(...priceList);
}
console.log(maxPrice[N]);

