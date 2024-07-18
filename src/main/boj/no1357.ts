import * as readline from 'readline';
import { Readable } from 'stream';

export class No1357 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const [x, y] = line.split(' ');
        resolve(solution(x, y).toString());
        rl.close();
      });
    });
  }
}

function solution(x: string, y: string): number {
  return reverseNumber((reverseNumber(x) + reverseNumber(y)).toString());
}

function reverseNumber(num: string): number {
  return parseInt(num.split('').reverse().join(''), 10);
}
