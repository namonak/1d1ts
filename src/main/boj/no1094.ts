import * as readline from 'readline';
import { Readable } from 'stream';

export class No1094 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        let n = parseInt(line, 10);
        let count = 0;
        while (n > 0) {
          if (n % 2 == 1) {
            count++;
          }
          n = Math.floor(n / 2);
        }
        resolve(count.toString());
        rl.close();
      });
    });
  }
}
