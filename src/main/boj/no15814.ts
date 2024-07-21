import * as readline from 'readline';
import { Readable } from 'stream';

export class No15814 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let inputCount: number | null = null;
      let inputString: string | null = null;
      const commands: number[][] = [];

      rl.on('line', (line: string) => {
        if (inputCount === null && inputString === null) {
          inputString = line;
          return;
        }

        if (inputCount === null) {
          inputCount = parseInt(line, 10);
          return;
        }

        commands.push(line.split(' ').map((x) => parseInt(x, 10)));

        if (commands.length === inputCount) {
          if (inputString !== null) {
            resolve(solution(inputString, commands));
          }
          rl.close();
        }
      });
    });
  }
}

function solution(string: string, commands: number[][]): string {
  let result = string;
  for (const [a, b] of commands) {
    result = swap(result, a, b);
  }
  return result;
}

function swap(string: string, a: number, b: number): string {
  const chars = string.split('');
  const temp = chars[a];
  chars[a] = chars[b];
  chars[b] = temp;
  return chars.join('');
}
