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
  operand1: number;
  operand2: number;
  operator: string;
  result: number;
};

function solution(input: string[]): string {
  const operations: Operation[] = input.map((line) => {
    const [expression, result] = line.split(' = ');
    const [operand1, operator, operand2] = expression.split(' ');
    return {
      operand1: parseInt(operand1, 10),
      operand2: parseInt(operand2, 10),
      operator,
      result: parseInt(result, 10),
    };
  });

  return operations
    .map((operation) => {
      const { operand1, operand2, operator, result } = operation;
      let calculatedResult = 0;
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
      }
      return calculatedResult === result ? 'correct' : 'wrong answer';
    })
    .join('\n');
}
