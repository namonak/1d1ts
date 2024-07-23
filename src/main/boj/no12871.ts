import * as readline from 'readline';
import { Readable } from 'stream';

export class No12871 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let s: string | null = null;
      let t: string | null = null;

      rl.on('line', (line: string) => {
        if (s === null) {
          s = line;
          return;
        }

        t = line;

        resolve(solution(s, t));
        rl.close();
      });
    });
  }
}

function solution(s: string, t: string): string {
  const gcd = (a: number, b: number): number => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const lcm = (a: number, b: number): number => {
    return (a * b) / gcd(a, b);
  };

  const [sLen, tLen] = [s.length, t.length];
  const lcmLen = lcm(sLen, tLen);

  const sRepeat = s.repeat(lcmLen / sLen);
  const tRepeat = t.repeat(lcmLen / tLen);

  return sRepeat === tRepeat ? '1' : '0';
}
