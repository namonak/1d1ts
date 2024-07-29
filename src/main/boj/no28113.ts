import * as readline from 'readline';
import { Readable } from 'stream';

export class No28113 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const [n, a, b] = line.split(' ').map((el) => parseInt(el, 10));

        const subwayTime = Math.max(n, b);

        if (a < subwayTime) {
          resolve('Bus');
        } else if (a > subwayTime) {
          resolve('Subway');
        } else {
          resolve('Anything');
        }

        rl.close();
      });
    });
  }
}
