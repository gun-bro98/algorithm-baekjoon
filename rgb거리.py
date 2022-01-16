# 먼저 행은 집의 수를 나타내고, 열은 rgb를 나타낸다.
# 문제를 잘 보면 인접한 집들의 색은 같으면 안된다.
# N은 2부터 1000까지이다.


# runtime error
import sys
N = int(input())

def defineColor(RGB, N):
  for k in range(0, N):
    for i in range(3):
      RGB[k][i] = int(input())

  for i in range(1, N):
    RGB[i][0] = min(RGB[i-1][1], RGB[i-1][2]) + RGB[i][0]
    RGB[i][1] = min(RGB[i-1][0], RGB[i-1][2]) + RGB[i][1]
    RGB[i][2] = min(RGB[i-1][0], RGB[i-1][1]) + RGB[i][2]
  return min(RGB[N-1])
  
RGB = [[0,1,2] for i in range(2, 10001)]
print(defineColor(RGB, N))
sys.exit(1)












# 잘됨
# n=int(input())
# a=[list(map(int,input().split())) for _ in range(n)]

# for i in range(1,n):
#     a[i][0]=a[i][0]+min(a[i-1][1],a[i-1][2])
#     a[i][1]=a[i][1]+min(a[i-1][0],a[i-1][2])
#     a[i][2]=a[i][2]+min(a[i-1][0],a[i-1][1])

# print(min(a[n-1]))
# print(a)