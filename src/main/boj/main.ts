import * as readline from 'readline';
import { solution } from '../../main/boj/no1000';

if (process.env.NODE_ENV !== 'test') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (line: string) {
    console.log(solution(line));
    process.exit();
  });
}
