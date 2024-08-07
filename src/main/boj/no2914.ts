import * as readline from 'readline';
import { Readable } from 'stream';

export class No2914 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const [a, i] = line.split(' ').map((el: string) => parseInt(el));
        resolve(solution(a, i).toString());
        rl.close();
      });
    });
  }
}

export function solution(a: number, i: number): number {
  return a * (i - 1) + 1;
}
