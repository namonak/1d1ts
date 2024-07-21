import * as readline from 'readline';
import { Readable } from 'stream';

export class No5618 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let inputCount: number | null = null;
      let numbers: number[] = [];

      rl.on('line', (line: string) => {
        if (inputCount === null) {
          inputCount = parseInt(line, 10);
          return;
        }

        numbers = line.split(' ').map((x) => parseInt(x, 10));

        if (numbers.length === inputCount) {
          resolve(solution(numbers).join('\n'));
          rl.close();
        }
      });
    });
  }
}

function solution(numbers: number[]): number[] {
  const gcdValue = findGCD(numbers);
  return getDivisors(gcdValue);
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findGCD(numbers: number[]): number {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result = gcd(result, numbers[i]);
  }
  return result;
}

function getDivisors(n: number): number[] {
  const divisors: number[] = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
}
