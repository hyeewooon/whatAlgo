const fs = require("fs");
const input = fs.readFileSync("test.txt").toString(); // test.txt 읽기
// 실제 백준 제출 시에는 'test.txt' 대신 '/dev/stdin' 으로 읽어야 한다.

console.log(input);
