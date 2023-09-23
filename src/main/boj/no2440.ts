import * as readline from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (input: string) {
    console.log(solution(parseInt(input)));
    process.exit();
  });
}

export function solution(a: number): string {
  let result = '';
  for (let i = a; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result.trim();
}
