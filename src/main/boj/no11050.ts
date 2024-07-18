import * as readline from 'readline';
import { Readable } from 'stream';

export class No11050 {
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
  const MAX = 10;
  const memo = new Array(MAX + 1).fill(-1);

  function factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    if (memo[n] !== -1) {
      return memo[n];
    }
    memo[n] = n * factorial(n - 1);
    return memo[n];
  }

  return Math.round(factorial(n) / (factorial(k) * factorial(n - k)));
}
