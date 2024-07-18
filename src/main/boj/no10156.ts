import * as readline from 'readline';
import { Readable } from 'stream';

export class No10156 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const [k, n, m] = line.split(' ').map((el: string) => parseInt(el));
        resolve(solution(k, n, m).toString());
        rl.close();
      });
    });
  }
}

function solution(k: number, n: number, m: number): number {
  const result = k * n - m;
  return result > 0 ? result : 0;
}
