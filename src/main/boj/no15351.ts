import * as readline from 'readline';
import { Readable } from 'stream';

export class No15351 {
  async solve(input: Readable): Promise<string> {
    const rl = readline.createInterface({
      input,
      output: process.stdin,
    });

    let inputCount: number | null = null;
    const inputs: string[] = [];

    return new Promise((resolve) => {
      rl.on('line', function (line: string) {
        if (!inputCount) {
          inputCount = parseInt(line, 10);
          return;
        }

        inputs.push(line);

        if (inputs.length === inputCount) {
          resolve(solution(inputs).toString());
          rl.close();
        }
      });
    });
  }
}

export function solution(inputs: string[]): string {
  const result = [];

  for (let i = 0; i < inputs.length; i++) {
    const sum = inputs[i].split('').reduce((acc, cur) => {
      if (cur === ' ') {
        return acc;
      }

      return acc + cur.charCodeAt(0) - 64;
    }, 0);

    if (sum === 100) {
      result.push('PERFECT LIFE');
    } else {
      result.push(sum);
    }
  }

  return result.join('\n');
}
