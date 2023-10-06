import * as readLine from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (line: string) {
    const input = line.split(' ').map((el: string) => parseInt(el));
    console.log(solution(input[0], input[1]));
    process.exit();
  });
}

const MAX: number = 10;
const memo = new Array(MAX + 1).fill(-1);

export function solution(n: number, k: number): number {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function factorial(n: number): number {
  if (n == 0) {
    return 1;
  }

  if (memo[n] !== -1) {
    return memo[n];
  }

  memo[n] = n * factorial(n - 1);

  return memo[n];
}
