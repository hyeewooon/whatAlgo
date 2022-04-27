import sys
sys.stdin = open('2775.txt', 'r')
mat = [[0]*15 for _ in range(15)]
for i in range(15):
    mat[0][i] = i+1

for i in range(1, 15):
    for j in range(15):
        mat[i][j] = sum(mat[i-1][:j+1])

T = int(input())
for _ in range(T):
    k = int(input())
    n = int(input())

    print(mat[k][n-1])

"""
0층 1호 2호 3호 ...   i호
    1   2   3    ... i명 만큼 산다. 

1층 1호 2호 3호       i호
    1명 3명 6명       i(i+1)/2 명 만큼 산다.     -> 

2층 1호 2호 3호       i호
    1명 4명 10명      (i(i+1)/2)*(i+1)(i+2)/2 명 만큼 산다.  
"""
