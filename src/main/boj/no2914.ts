import * as readline from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (line: string) {
    const input = line.split(' ').map((el: string) => parseInt(el));
    console.log(solution(input[0], input[1]));
    process.exit();
  });
}

export function solution(a: number, i: number): number {
  return a * (i - 1) + 1;
}
