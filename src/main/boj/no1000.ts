import * as readline from 'readline';
import { Readable } from 'stream';

export class No1000 {
  async solve(input: Readable): Promise<string> {
    const rl = readline.createInterface({
      input,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.on('line', function (line: string) {
        const [a, b] = line.split(' ').map((el) => parseInt(el, 10));
        resolve((a + b).toString());
        rl.close();
      });
    });
  }
}
