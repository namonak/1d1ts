import * as readLine from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputCount: number | null = null;
  const inputs: number[] = [];

  rl.on('line', function (line: string) {
    if (!inputCount) {
      inputCount = parseInt(line, 10);
      return;
    }

    inputs.push(parseInt(line, 10));

    if (inputs.length === inputCount * 2) {
      solution(inputCount, inputs).forEach((num) => {
        console.log(num);
      });
      process.exit();
    }
  });
}

export function solution(testCount: number, numbers: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < testCount; i++) {
    const k = numbers[i * 2];
    const n = numbers[i * 2 + 1];
    result.push(getPeopleCount(k, n));
  }
  return result;
}

const memo: number[][] = Array.from({ length: 15 }, () => Array(15).fill(-1));

function getPeopleCount(k: number, n: number): number {
  if (k == 0) return n;
  if (n == 1) return 1;

  if (memo[k][n] !== -1) return memo[k][n];

  memo[k][n] = getPeopleCount(k - 1, n) + getPeopleCount(k, n - 1);
  return memo[k][n];
}
