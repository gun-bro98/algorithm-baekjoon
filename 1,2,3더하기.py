T = int(input())

def add(n):
  if n == 1:
    return 1
  elif n == 2:
    return 2
  elif n == 3:
    return 4
  else:
    return add(n-1) + add(n-2) + add(n-3)

for i in range(T) :
  n = int(input())
  print(add(n)) 