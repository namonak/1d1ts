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

export function solution(input: number): number {
  let count = 0;
  let n = input;

  while (n >= 5) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  return count;
}
