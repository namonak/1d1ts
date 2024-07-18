import * as readline from 'readline';
import { Readable } from 'stream';

export class No2775 {
  async solve(input: Readable): Promise<string> {
    const rl = readline.createInterface({
      input,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      let inputCount: number = 0;
      const numbers: number[] = [];

      rl.on('line', (line: string) => {
        if (inputCount === 0) {
          inputCount = parseInt(line, 10);
        } else {
          numbers.push(parseInt(line, 10));
        }

        if (numbers.length === inputCount * 2) {
          resolve(solution(inputCount, numbers).join('\n'));
          rl.close();
        }
      });
    });
  }
}

function solution(testCount: number, numbers: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < testCount; i++) {
    const [k, n] = [numbers[i * 2], numbers[i * 2 + 1]];
    result.push(getPeopleCount(k, n));
  }
  return result;
}

function getPeopleCount(k: number, n: number): number {
  const memo: number[][] = Array.from({ length: 15 }, () => Array(15).fill(-1));
  function count(k: number, n: number): number {
    if (k === 0) return n;
    if (n === 1) return 1;

    if (memo[k][n] !== -1) return memo[k][n];

    memo[k][n] = count(k - 1, n) + count(k, n - 1);

    return memo[k][n];
  }

  return count(k, n);
}
