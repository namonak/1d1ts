import * as readline from 'readline';
import { Readable } from 'stream';

export class No11179 {
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
  const binary = n.toString(2);
  const reversed = binary.split('').reverse().join('');
  return parseInt(reversed, 2);
}
