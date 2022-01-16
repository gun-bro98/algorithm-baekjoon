const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(el => +el);
const N = input[0];
let array = new Array(N+1).fill(BigInt(0));
array[1] = BigInt(1);
for(let i = 2 ; i <= N ; i++){
  array[i] = array[i-1] + array[i-2];
}
console.log(array[N].toString());

