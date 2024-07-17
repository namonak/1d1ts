import * as readline from 'readline';
import { Readable } from 'stream';

export class No1676 {
  async solve(input: Readable): Promise<string> {
    const rl = readline.createInterface({
      input,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.on('line', function (line: string) {
        resolve(solution(parseInt(line, 10)).toString());
        rl.close();
      });
    });
  }
}

export function solution(input: number): number {
  let count = 0;
  let n = input;

  while (n >= 5) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  return count;
}
