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
  return b === 0 ? a : gcd(b, a % b);
}

function findGCD(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Empty array of numbers');
  }
  return numbers.reduce((acc, num) => gcd(acc, num));
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
