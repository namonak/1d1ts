import * as readline from 'readline';

if (process.env.NODE_ENV !== 'test') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (line: string) {
    const input = line.split(' ').map((el: string) => parseInt(el));
    console.log(`<${solution(input[0], input[1]).join(', ')}>`);
    process.exit();
  });
}

export function solution(n: number, k: number): number[] {
  const queue: number[] = Array.from({ length: n }, (_, i) => i + 1);
  const result: number[] = [];
  let index = 0;

  while (queue.length > 0) {
    index = (index + k - 1) % queue.length;
    result.push(queue.splice(index, 1)[0]);
  }

  return result;
}
