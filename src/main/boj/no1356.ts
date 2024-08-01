import * as readline from 'readline';
import { Readable } from 'stream';

export class No1356 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const n = parseInt(line, 10);
        const result = isEugeneNumber(n) ? 'YES' : 'NO';
        resolve(result);
        rl.close();
      });
    });
  }
}

function isEugeneNumber(n: number): boolean {
  const str = n.toString();
  for (let i = 1; i < str.length; i++) {
    const left = str.slice(0, i);
    const right = str.slice(i);
    const leftProduct = left.split('').reduce((acc, cur) => acc * parseInt(cur, 10), 1);
    const rightProduct = right.split('').reduce((acc, cur) => acc * parseInt(cur, 10), 1);
    if (leftProduct === rightProduct) {
      return true;
    }
  }
  return false;
}
