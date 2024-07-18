import * as readline from 'readline';
import { Readable } from 'stream';

export class No10998 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const [a, b] = line.split(' ').map((el) => parseInt(el, 10));
        resolve(solution(a, b).toString());
        rl.close();
      });
    });
  }
}

function solution(a: number, b: number): number {
  return a * b;
}
