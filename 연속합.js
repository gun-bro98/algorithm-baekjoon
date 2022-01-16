const fs = require("fs");
let input = fs.readFileSync('./input.txt').toString().split('\n');

const array = input[1].split(' ').map(el => +el);

const dp =[];
array.forEach(el=>{
  if(dp.length ===0){
    dp.push(el);
  }else{
    dp.push(Math.max(el, el + dp[dp.length-1]));
  }
});
console.log(dp);
const max = dp.reduce((el1, el2) => {
  console.log(el1, el2)
  return el1 < el2 ? el2 : el1
})

const solution = (max) =>{
  console.log(max);
}
solution(max);
