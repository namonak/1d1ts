import * as readline from 'readline';
import { Readable } from 'stream';

export class No18312 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      rl.on('line', (line: string) => {
        const [n, k] = line.split(' ').map((el) => parseInt(el, 10));
        resolve(solution(n, k).toString());
        rl.close();
      });
    });
  }
}

function solution(n: number, k: number): number {
  let count = 0;
  const kStr = k.toString();
  const maxSeconds = (n + 1) * 3600;

  for (let totalSeconds = 0; totalSeconds < maxSeconds; totalSeconds++) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    const time = `${padTime(h)}${padTime(m)}${padTime(s)}`;

    if (time.includes(kStr)) {
      count++;
    }
  }

  return count;
}

function padTime(unit: number): string {
  return unit < 10 ? '0' + unit : unit.toString();
}
