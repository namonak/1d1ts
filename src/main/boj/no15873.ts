import * as readline from 'readline';
import { Readable } from 'stream';

export class No15873 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        resolve(solution(parseInt(line, 10)).toString());
        rl.close();
      });
    });
  }
}

function solution(n: number): number {
  let result = 0;

  if (n < 100) {
    result = Math.floor(n / 10) + (n % 10);
  } else if (n % 10 === 0) {
    result = 10 + Math.floor(n / 100);
  } else {
    result = Math.floor(n / 10) + (n % 100);
  }

  return result;
}
