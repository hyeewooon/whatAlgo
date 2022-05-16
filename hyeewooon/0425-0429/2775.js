const fs = require("fs");
const input = fs.readFileSync("2775.txt").toString().split("\n");

const sum = (floor, room) => {
  if (floor === 0) {
    let sum_cnt = 0;
    for (let i = 1; i <= room; i++) {
      sum_cnt = i;
    }

    return sum_cnt;
  }

  let rec_sum = 0;
  for (let i = 1; i <= room; i++) {
    rec_sum += sum(floor - 1, i);
  }

  return rec_sum;
};

const num = input[0];

for (let i = 1; i <= num; i++) {
  const floor_num = input[2 * i - 1];
  const room_num = input[2 * i];

  console.log(sum(floor_num, room_num));
}
