let input = []; 
require('readline')
.createInterface(process.stdin, process.stdout)
.on('line', function(line) { 
   input.push(line.trim());
})
.on('close', function() { 
   const arr = input[1].split(' ').map(v => v * 1);
   const dp = [];
   arr.forEach(v => { 
      if(dp.length === 0) 
         dp.push(v) 
      else { 
         dp.push(Math.max(v, v + dp[dp.length - 1])) 
      }
   }); 
   const result = dp.reduce((p,v) => p < v ? v : p); 
   console.log(result)});
