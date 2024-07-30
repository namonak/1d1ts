import * as readline from 'readline';
import { Readable } from 'stream';

export class No31867 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let n: number | null = null;
      let k: string | null = null;

      rl.on('line', (line: string) => {
        if (n === null) {
          n = parseInt(line, 10);
          return;
        }

        k = line;

        resolve(solution(n, k).toString());
        rl.close();
      });
    });
  }
}

function solution(n: number, k: string): number {
  let evenCount: number = 0;
  let oddCount: number = 0;

  for (let i = 0; i < n; i++) {
    const digit = parseInt(k[i], 10);
    if (digit % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return evenCount > oddCount ? 0 : oddCount > evenCount ? 1 : -1;
}
