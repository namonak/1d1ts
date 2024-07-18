import * as readline from 'readline';
import { Readable } from 'stream';

export class No2748 {
  private static MAX: number = 90;
  private memo: bigint[];

  constructor() {
    this.memo = new Array(No2748.MAX + 1).fill(BigInt(-1));
    this.memo[0] = BigInt(0);
    this.memo[1] = BigInt(1);
  }

  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const n = parseInt(line, 10);
        resolve(this.solution(n).toString());
        rl.close();
      });
    });
  }

  private solution(n: number): bigint {
    return this.fibo(n);
  }

  private fibo(n: number): bigint {
    if (this.memo[n] !== BigInt(-1)) {
      return this.memo[n];
    }

    this.memo[n] = this.fibo(n - 1) + this.fibo(n - 2);

    return this.memo[n];
  }
}
