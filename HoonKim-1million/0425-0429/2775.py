num = int(input())

floor_list = []
ho_list = []

for i in range(0, num):
    floor_list.append(int(input()))
    ho_list.append(int(input()))

for i in range(0, len(floor_list)):
    floor_num = floor_list[i]
    ho_num = ho_list[i]
    answer = 0
    ho_arr = list(0 for i in range(0, ho_num))

    for j in range(0, floor_num + 1):
        ho_arr_after = ho_arr.copy()

        for k in range(0, ho_num):
            if j == 0:
                ho_arr[k] = k + 1
            else:
                last_floor_num = 0
                for m in range(0, k + 1):
                    last_floor_num = last_floor_num + ho_arr_after[m]

                ho_arr[k] = last_floor_num

    answer = ho_arr[ho_num - 1]
    print(answer)
