import * as readline from 'readline';
import { Readable } from 'stream';

export class No2441 {
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

function solution(n: number): string {
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      result += ' ';
    }
    for (let j = i; j < n; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result.trim();
}
