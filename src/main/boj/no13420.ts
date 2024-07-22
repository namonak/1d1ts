import * as readline from 'readline';
import { Readable } from 'stream';

export class No13420 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let inputCount: number | null = null;
      const inputs: string[] = [];

      rl.on('line', (line: string) => {
        if (inputCount === null) {
          inputCount = parseInt(line, 10);
          return;
        }

        inputs.push(line);

        if (inputs.length === inputCount) {
          resolve(solution(inputs));
          rl.close();
        }
      });
    });
  }
}

type Operation = {
  operand1: bigint;
  operand2: bigint;
  operator: string;
  result: bigint;
};

function solution(input: string[]): string {
  const operations: Operation[] = input.map((line) => {
    const [expression, result] = line.split(' = ');
    const [operand1, operator, operand2] = expression.split(' ');
    return {
      operand1: BigInt(operand1),
      operand2: BigInt(operand2),
      operator,
      result: BigInt(result),
    };
  });

  return operations
    .map((operation) => {
      const { operand1, operand2, operator, result } = operation;
      let calculatedResult: bigint;
      switch (operator) {
        case '+':
          calculatedResult = operand1 + operand2;
          break;
        case '-':
          calculatedResult = operand1 - operand2;
          break;
        case '*':
          calculatedResult = operand1 * operand2;
          break;
        case '/':
          calculatedResult = operand1 / operand2;
          break;
        default:
          throw new Error('Invalid operator');
      }
      return calculatedResult === result ? 'correct' : 'wrong answer';
    })
    .join('\n');
}
