N = int(input())
array = [0 for i in range(91)];

for i in range(N+1):
  if i <= 1:
    array[i] = i
  else :
    array[i] = array[i-1] + array[i-2]
print(array[N])
# 5527939700884757