const fs = require("fs");
const input = fs.readFileSync("1260.txt").toString().split('\n');

// 양방향 그래프
// bfs(너비, 최단거리) - 큐 사용
// dfs(깊이, 경로판별) - 스택 사용

const [n, m, v] = input[0].split(" ").map(Number);

const graph = Array.from(Array(n + 1), () => Array());

for (let i = 1; i <= m; i++) {
  const [n1, n2] = input[i].split(" ").map(Number);

  graph[n1].push(n2);
  graph[n2].push(n1);
}

// type: 'bfs' | 'dfs'
const solve = (type) => {
  const queue = [v];
  const visit = Array(n + 1).fill(false);
  const ans = [];

  while (queue.length) {
    const currVertax = type === 'bfs' ? queue.shift() : queue.pop();

    if (visit[currVertax] === false) {
        visit[currVertax] = true;
        ans.push(currVertax);

        if (graph[currVertax].length) {
            const appendList = type === 'bfs'
                ? graph[currVertax].sort((a, b) => a - b)
                : graph[currVertax].sort((a, b) => b - a);
            queue.push(...appendList);
        }
    }
  }
  return ans;
}

console.log(solve('dfs').join(' '));
console.log(solve('bfs').join(' '));