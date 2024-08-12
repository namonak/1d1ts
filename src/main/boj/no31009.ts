import * as readline from 'readline';
import { Readable } from 'stream';

export class No31009 {
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
          const result = solution(inputs);
          resolve(result.join('\n'));
          rl.close();
        }
      });
    });
  }
}

function solution(inputs: string[]): number[] {
  let jinjuFare: number = 0;
  let expensiveCount: number = 0;

  for (const input of inputs) {
    const [destination, fareStr] = input.split(' ');
    const fare = parseInt(fareStr, 10);

    if (destination === 'jinju') {
      jinjuFare = fare;
    }
  }

  for (const input of inputs) {
    const [, fareStr] = input.split(' ');
    const fare = parseInt(fareStr, 10);

    if (fare > jinjuFare) {
      expensiveCount++;
    }
  }

  return [jinjuFare, expensiveCount];
}
