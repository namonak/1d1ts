import * as readline from 'readline';
import { Readable } from 'stream';

export class No18312 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const [n, k] = line.split(' ').map((el) => parseInt(el, 10));
        resolve(solution(n, k).toString());
        rl.close();
      });
    });
  }
}

function solution(n: number, k: number): number {
  let count = 0;
  const kStr = k.toString();

  for (let h = 0; h <= n; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 0; s < 60; s++) {
        const time = `${h < 10 ? '0' : ''}${h}${m < 10 ? '0' : ''}${m}${s < 10 ? '0' : ''}${s}`;
        if (time.includes(kStr)) {
          count++;
        }
      }
    }
  }

  return count;
}
