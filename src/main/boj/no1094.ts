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

export function solution(x: number): number {
  let n = x;
  let count = 0;
  while (n > 0) {
    if (n % 2 == 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
}
