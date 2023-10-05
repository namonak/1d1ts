import * as readLine from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (line: string) {
    console.log(solution(parseInt(line, 10)));
    process.exit();
  });
}

export function solution(n: number): number {
  let result = 0;

  if (n < 100) {
    result = Math.floor(n / 10) + (n % 10);
  } else if (n % 10 === 0) {
    result = 10 + Math.floor(n / 100);
  } else {
    result = Math.floor(n / 10) + (n % 100);
  }

  return result;
}
