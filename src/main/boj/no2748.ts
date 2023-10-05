import * as readline from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (line: string) {
    console.log(solution(parseInt(line, 10)).toString());
    process.exit();
  });
}

const MAX: number = 90;
const memo = new Array(MAX + 1).fill(BigInt(-1));

export function solution(n: number): bigint {
  memo[0] = BigInt(0);
  memo[1] = BigInt(1);

  return fibo(n);
}

function fibo(n: number): bigint {
  if (memo[n] !== BigInt(-1)) {
    return memo[n];
  }

  memo[n] = fibo(n - 1) + fibo(n - 2);

  return memo[n];
}
