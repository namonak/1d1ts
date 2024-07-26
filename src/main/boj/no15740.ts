import * as readline from 'readline';
import { Readable } from 'stream';

export class No15740 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const [a, b] = line.split(' ').map((el) => BigInt(el));
        resolve((a + b).toString());
        rl.close();
      });
    });
  }
}
