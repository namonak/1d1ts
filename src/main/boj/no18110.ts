import * as readline from 'readline';
import { Readable } from 'stream';

export class No18110 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let inputCount: number | null = null;
      const numbers: number[] = [];

      rl.on('line', (line: string) => {
        if (inputCount === null) {
          inputCount = parseInt(line, 10);
          if (inputCount === 0) {
            resolve('0');
            rl.close();
          }
          return;
        }

        numbers.push(parseInt(line, 10));

        if (numbers.length === inputCount) {
          resolve(solution(numbers).toString());
          rl.close();
        }
      });
    });
  }
}

function averageOfArray(arr: number[]): number {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

function solution(numbers: number[]): number {
  const removeCount = Math.round(numbers.length * 0.15);
  const removeNumbers = numbers
    .sort((a, b) => a - b)
    .slice(removeCount, numbers.length - removeCount);
  return Math.round(averageOfArray(removeNumbers));
}
