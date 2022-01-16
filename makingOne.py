def divide(x, count):
  if x == 1 or x ==0:
    return count
  elif x % 3== 0:
    x = x / 3
    return divide(x, count + 1)
  elif x % 2 ==0:
    x = x / 2
    return divide(x, count + 1) 
  
N = int(input())
x = divide(N-1,0)
y = divide(N,0)

if x == None:
  print(y)
elif x < y:
  print(x)
else:
  print(y)

