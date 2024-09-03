import * as readline from 'readline';
import { Readable } from 'stream';

export class No7576 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let [m, n]: number[] = [0, 0];
      const box: number[][] = [];

      rl.on('line', (line: string) => {
        if (m === 0 && n === 0) {
          [m, n] = line.split(' ').map(Number);
          return;
        }

        box.push(line.split(' ').map(Number));

        if (box.length === n) {
          const result = solution(m, n, box);
          resolve(result);
          rl.close();
        }
      });
    });
  }
}

function solution(m: number, n: number, box: number[][]): string {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue: [number, number][] = [];
  let front = 0;
  let max = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (box[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  while (front < queue.length) {
    const [x, y] = queue[front++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || box[nx][ny] !== 0) {
        continue;
      }

      box[nx][ny] = box[x][y] + 1;
      max = Math.max(max, box[nx][ny]);
      queue.push([nx, ny]);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (box[i][j] === 0) {
        return '-1';
      }
    }
  }

  return (max - 1).toString();
}
