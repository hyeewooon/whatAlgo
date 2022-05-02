inputNum = int(input())
isCalculate = True

i = 0

while isCalculate:
    if inputNum <= (i * (i + 1) / 2):
        isCalculate = False
    else:
        i = i + 1

summary = (i * (i + 1) / 2)

x = int(summary - inputNum + 1)
y = int(i + 1 - x)

if i % 2 == 0:
    print("%s/%s" % (y, x))
else:
    print("%s/%s" % (x, y))