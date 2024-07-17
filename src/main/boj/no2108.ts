import * as readline from 'readline';
import { Readable } from 'stream';

export class No2108 {
  async solve(input: Readable): Promise<string> {
    const rl = readline.createInterface({
      input,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      let n = 0;
      const numbers: string[] = [];
      rl.on('line', function (line: string) {
        if (n === 0) {
          n = parseInt(line, 10);
        } else {
          numbers.push(line);
        }
        if (numbers.length === n) {
          const result = solution(numbers.map((num) => parseInt(num, 10)));
          resolve(result.join('\n'));
        }
      });
    });
  }
}

function solution(numbers: number[]): number[] {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const sum = sortedNumbers.reduce((acc, val) => acc + val, 0);
  const average = Math.round(sum / numbers.length);
  const median = sortedNumbers[Math.floor(numbers.length / 2)];
  const mode = getMode(numbers);
  const range = sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];

  return [Object.is(average, -0) ? 0 : average, median, mode, range];
}

function getMode(numbers: number[]): number {
  const modeMap = new Map<number, number>();
  numbers.forEach((number) => {
    const count = modeMap.get(number) || 0;
    modeMap.set(number, count + 1);
  });

  let maxVal = -Infinity;
  modeMap.forEach((val) => {
    if (maxVal < val) {
      maxVal = val;
    }
  });

  const maxValKeys: number[] = [];
  modeMap.forEach((val, key) => {
    if (maxVal === val) {
      maxValKeys.push(key);
    }
  });
  maxValKeys.sort((a, b) => a - b);

  let result = -Infinity;

  if (maxValKeys.length == 1) {
    result = maxValKeys[0];
  } else {
    result = maxValKeys[1];
  }

  return result;
}
