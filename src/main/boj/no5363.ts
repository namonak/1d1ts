import * as readline from 'readline';
import { Readable } from 'stream';

export class No5363 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let inputCount: number | null = null;
      const lines: string[] = [];
      rl.on('line', function (line: string) {
        if (inputCount === null) {
          inputCount = parseInt(line, 10);
          return;
        }

        lines.push(line);

        if (lines.length === inputCount) {
          resolve(
            lines
              .map((line) => {
                const words = line.split(' ');
                return words.slice(2).join(' ') + ' ' + words.slice(0, 2).join(' ');
              })
              .join('\n'),
          );
        }
      });
    });
  }
}
