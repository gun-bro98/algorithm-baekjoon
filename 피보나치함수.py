#n이 2이면
# (i) fibonacci(1, 0, 0)+ fibonacci(0, 0, 0)
# 0은 1번 1은 1번

# n이 3이면
# (i) fibonacci(2, 0, 0)+ fibonacci(1, 0, 0)
# (i) fibonacci(1, 0, 0)+ fibonacci(0,0,0) +fibonacci(1, 0, 0)
# 0은 1번 1는 2번

# n이 4이면 
# (i) fibonacci(3, 0, 0)+ fibonacci(2, 0, 0)
# (ii) fibonacci(2, 0, 0) + fibonacchi(1, 0, 0) + fibonacci(1, 0, 0) + fibonacci(0,0,0)
# (iii) fibonacci(1, 0, 0)+ fibonacchi(0, 0, 0)  + fibonacchi(1, 0, 0) + fibonacci(1, 0, 0) + fibonacci(0,0,0)
# 0은 2번 1은 3번

# n이 5이면 
# (i) fibonacci(5, 0, 0)
# (ii) fibonacci(4, 0, 0) + fibonacci(3, 0, 0)
# (iii) fibonacci(3, 0, 0)+ fibonacci(2, 0, 0)+ fibonacci(2, 0, 0)+ fibonacci(1, 0, 0)
# (iiii) fibonacci(2, 0, 0) + fibonacchi(1, 0, 0) + fibonacci(1, 0, 0) + fibonacci(0,0,0)+ fibonacci(1, 0, 0)+ fibonacci(0,0,0) +fibonacci(1, 0, 0)
# (iiiii) fibonacci(1, 0, 0) + fibonacci(0, 0, 0) + fibonacchi(1, 0, 0) + fibonacci(1, 0, 0) + fibonacci(0,0,0)+ fibonacci(1, 0, 0)+ fibonacci(0,0,0) +fibonacci(1, 0, 0)
# 0은 3번 1은 5번

# 6-> 5,4
# 5 4 -> 4,3 3,2
# 4,3, 3,2 -> 3,2 2,1 2,1 1,0
# 3,2 2,1 2,1 1,0 -> 2,1 1,0 1,0 1 1,0 1 1 0 -> 1 0 1 1 0 1 0 1 1 0 1 1 0
# 0은 5번 1은 8번

# 즉, f(x) = f(x-1) + f(x-2) -> 1에 대해서
# g(x) = g(x-2) + g(x-3) -> 0에 대해서

T = int(input())
about_0 = [0 for i in range(40)]
about_1 = [0 for i in range(40)]

for i in range(T):
  N = int(input())

  for i in range(-1, N):
    if i == -1:
      about_0[i] = 1;
      about_1[i] = 0;
    elif i == 0:
      about_0[i] = 0;
      about_1[i] = 1;
    else :
      about_0[i] = about_0[i-1] + about_0[i-2];
      about_1[i] = about_1[i-1] + about_1[i-2];
  print(about_0[N-1], about_1[N-1])
  