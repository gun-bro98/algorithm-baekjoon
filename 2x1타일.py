# 2*1 -> 1가지
# 2*2 -> 2 가지
# 2*3 -> 3가지
# 2*4 -> 5가지
# f(1) = 1
# f(2) = 2 
# f(n) = f(n-1)+ f(n-2)



N = int(input())

def calculate(N, dp):
  for i in range(-1, N):
    if i == 0:
      dp[i] = 1
    elif i == 1:
      dp[i] = 2
    else:
      dp[i] = dp[i-1] + dp[i-2]

  return  dp[N-1]%10007
dp = [0 for i in range(1000)]
print(calculate(N,dp))
