import * as readline from 'readline';
import { Readable } from 'stream';

export class No2178 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let [n, m]: number[] = [0, 0];
      const maze: string[][] = [];

      rl.on('line', (line: string) => {
        if (n === 0 && m === 0) {
          [n, m] = line.split(' ').map(Number);
          return;
        }

        maze.push(line.split(''));

        if (maze.length === n) {
          const result = solution(n, m, maze);
          resolve(result);
          rl.close();
        }
      });
    });
  }
}

function solution(n: number, m: number, maze: string[][]): string {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue: [number, number][] = [[0, 0]];
  const visited: boolean[][] = Array.from(Array(n), () => Array(m).fill(false));
  const distance: number[][] = Array.from(Array(n), () => Array(m).fill(0));

  visited[0][0] = true;
  distance[0][0] = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift()!;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }

      if (maze[nx][ny] === '0' || visited[nx][ny]) {
        continue;
      }

      queue.push([nx, ny]);
      visited[nx][ny] = true;
      distance[nx][ny] = distance[x][y] + 1;
    }
  }

  return distance[n - 1][m - 1].toString();
}
