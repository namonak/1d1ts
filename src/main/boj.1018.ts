import * as readline from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input: number[] = [];

  rl.on('line', function (line: string) {
    input = line.split(' ').map((el: string) => parseInt(el));
  }).on('close', function () {
    console.log(solution(input[0], input[1]));
    process.exit();
  });
}

export function solution(a: number, b: number): number {
  return a + b;
}
