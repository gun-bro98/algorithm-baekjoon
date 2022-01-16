import sys
N = int(input())
array = list(map(int,input().split()))
maxValue = 0
dp = [-1000 for i in range(N) ] 
for i in range(N):
  for j in range(N-i):
    if i==0 :
      dp[j] = array[j]
    else :
      dp[j] = dp[j]+array[j+i]
  if i == 0:
    maxValue = max(dp)
  else :
    bin = max(dp)
    if maxValue < bin:
      maxValue = bin

print(maxValue)