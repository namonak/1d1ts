import * as readLine from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (input: string) {
    console.log(solution(parseInt(input)));
    process.exit();
  });
}

export function solution(n: number): string {
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      result += ' ';
    }
    for (let j = i; j < n; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result.trim();
}
