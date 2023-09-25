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

    if (inputs.length === inputCount) {
      const result = solution(inputs);
      result.forEach((num) => {
        console.log(num);
      });
      process.exit();
    }
  });
}

export function solution(numbers: number[]): number[] {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const sum = sortedNumbers.reduce((acc, val) => acc + val, 0);
  const average = Math.round(sum / numbers.length);
  const median = sortedNumbers[Math.floor(numbers.length / 2)];
  const mode = getMode(numbers);
  const range = sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];

  return [Object.is(average, -0) ? 0 : average, median, mode, range];
}

function getMode(numbers: number[]): number {
  const modeMap = new Map<number, number>();
  numbers.forEach((number) => {
    const count = modeMap.get(number) || 0;
    modeMap.set(number, count + 1);
  });

  let maxVal = -Infinity;
  modeMap.forEach((val) => {
    if (maxVal < val) {
      maxVal = val;
    }
  });

  const maxValKeys: number[] = [];
  modeMap.forEach((val, key) => {
    if (maxVal === val) {
      maxValKeys.push(key);
    }
  });
  maxValKeys.sort((a, b) => a - b);

  let result = -Infinity;

  if (maxValKeys.length == 1) {
    result = maxValKeys[0];
  } else {
    result = maxValKeys[1];
  }

  return result;
}
