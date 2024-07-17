import * as readLine from 'readline';
import { Readable } from 'stream';

export class No5363 {
  async solve(input: Readable): Promise<string> {
    const rl = readLine.createInterface({
      input,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      let n = 0;
      const lines: string[] = [];
      rl.on('line', function (line: string) {
        if (n === 0) {
          n = parseInt(line, 10);
        } else {
          lines.push(line);
        }
        if (lines.length === n) {
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
