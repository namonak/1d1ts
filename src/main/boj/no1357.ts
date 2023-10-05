import * as readLine from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (line: string) {
    const input = line.split(' ');
    console.log(solution(input[0], input[1]));
    process.exit();
  });
}

export function solution(x: string, y: string): number {
  return reverseNumber((reverseNumber(x) + reverseNumber(y)).toString());
}

function reverseNumber(num: string): number {
  return parseInt(num.split('').reverse().join(''), 10);
}
