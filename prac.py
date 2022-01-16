# N = int(input("숫자를 입력하세요"))
# count = 0
# reminder = 0
# if N >= 3 and N <= 3000:
#     if N % 5 == 0:
#         count = int(N / 5)
#         reminder = N % 5
#         count = count + int(reminder / 3)
#     elif N % 3 == 0:
#         for i in range(1, N):
#             for k in range(1, N):
#                 if N == 5*k+3*i:
#                     count = k+i
#     else:
#         for i in range(1, N):
#             for k in range(1, N):
#                 if N == 5*k+3*i:
#                     count = k+i
#         count = -1
# print(count)
N = int(input("숫자를 입력하세요"))

def count_sugar():
  count = []
  for i in range(0, N):
      for k in range(0, N):
          if N == 5*k+3*i:
            count.append(k+i)
            return count[0]
  if len(count) == 0:
    count.append(-1)
    return count[0]

print(count_sugar())
