import * as readline from 'readline';
import { Readable } from 'stream';

export class No4388 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      const inputs: string[] = [];

      rl.on('line', (line: string) => {
        const [a, b] = line.split(' ').map((line) => parseInt(line, 10));

        if (a === 0 && b === 0) {
          resolve(solution(inputs).join('\n'));
          rl.close();
        }

        inputs.push(line);
      });
    });
  }
}

function solution(input: string[]): number[] {
  return input.map((line) => {
    let [a, b] = line.split(' ').map((line) => parseInt(line, 10));
    let carry = 0;
    let count = 0;

    while (a > 0 || b > 0) {
      const sum = (a % 10) + (b % 10) + carry;
      carry = sum >= 10 ? 1 : 0;
      if (carry) {
        count += 1;
      }
      a = Math.floor(a / 10);
      b = Math.floor(b / 10);
    }

    return count;
  });
}
