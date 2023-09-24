import * as readLine from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputCount: number | null = null;
  const inputs: string[] = [];

  rl.on('line', function (line: string) {
    if (!inputCount) {
      inputCount = parseInt(line, 10);
      if (inputCount === 0) {
        console.log(0);
        process.exit();
      }
      return;
    }

    inputs.push(line);

    if (inputs.length === inputCount) {
      console.log(solution(inputs.map((input) => parseInt(input, 10))));
      process.exit();
    }
  });
}

function averageOfArray(arr: number[]): number {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

export function solution(numbers: number[]): number {
  const removeCount = Math.round(numbers.length * 0.15);
  const removeNumbers = numbers
    .sort((a, b) => a - b)
    .slice(removeCount, numbers.length - removeCount);
  return Math.round(averageOfArray(removeNumbers));
}
