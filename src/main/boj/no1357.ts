import * as readLine from 'readline';
import { Readable } from 'stream';

export class No1357 {
  async solve(input: Readable): Promise<string> {
    const rl = readLine.createInterface({
      input,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.on('line', function (line: string) {
        const [x, y] = line.split(' ');
        resolve(solution(x, y).toString());
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
