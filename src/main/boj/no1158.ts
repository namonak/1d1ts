import * as readline from 'readline';
import { Readable } from 'stream';

export class No1158 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const [n, k] = line.split(' ').map((el: string) => parseInt(el, 10));
        resolve(`<${solution(n, k).join(', ')}>`);
        rl.close();
      });
    });
  }
}

export function solution(n: number, k: number): number[] {
  const queue: number[] = Array.from({ length: n }, (_, i) => i + 1);
  const result: number[] = [];
  let index = 0;

  while (queue.length > 0) {
    index = (index + k - 1) % queue.length;
    result.push(queue.splice(index, 1)[0]);
  }

  return result;
}
