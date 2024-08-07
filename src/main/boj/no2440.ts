import * as readline from 'readline';
import { Readable } from 'stream';

export class No2440 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        resolve(solution(parseInt(line, 10)));
        rl.close();
      });
    });
  }
}

function solution(a: number): string {
  let result = '';
  for (let i = a; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result.trim();
}
