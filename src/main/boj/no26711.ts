import * as readline from 'readline';
import { Readable } from 'stream';

export class No26711 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let a = BigInt(0);
      let b = BigInt(0);

      rl.on('line', (line: string) => {
        if (a === BigInt(0)) {
          a = BigInt(line);
          return;
        }

        b = BigInt(line);
        resolve((a + b).toString());
        rl.close();
      });
    });
  }
}
