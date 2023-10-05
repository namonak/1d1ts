import * as readLine from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (line: string) {
    const input = line.split(' ').map((el: string) => parseInt(el));
    console.log(solution(input[0], input[1], input[2]));
    process.exit();
  });
}

export function solution(k: number, n: number, m: number): number {
  const result = k * n - m;
  return result > 0 ? result : 0;
}
