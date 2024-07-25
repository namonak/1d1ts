import * as readline from 'readline';
import { Readable } from 'stream';

export class No5361 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let inputCount: number | null = null;
      const inputs: string[] = [];

      rl.on('line', (line: string) => {
        if (inputCount === null) {
          inputCount = parseInt(line, 10);
          return;
        }

        inputs.push(line);

        if (inputs.length === inputCount) {
          resolve(solution(inputs).join('\n'));
          rl.close();
        }
      });
    });
  }
}

function solution(inputs: string[]): string[] {
  const result: string[] = [];

  for (const input of inputs) {
    const [a, b, c, d, e] = input.split(' ').map(Number);
    result.push(getPrice(a, b, c, d, e));
  }

  return result;
}

function getPrice(a: number, b: number, c: number, d: number, e: number): string {
  return `$${(a * 350.34 + b * 230.9 + c * 190.55 + d * 125.3 + e * 180.9).toFixed(2)}`;
}
