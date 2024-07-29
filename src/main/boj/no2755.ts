import * as readline from 'readline';
import { Readable } from 'stream';

export class No2755 {
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

function solution(inputs: string[]): string {
  let sum = 0;
  let totalCredit = 0;

  for (const input of inputs) {
    const [, credit, grade] = input.split(' ');
    totalCredit += parseInt(credit, 10);
    sum += parseInt(credit, 10) * getGradePoint(grade);
  }

  const gpa = Math.round((sum / totalCredit) * 100) / 100;
  return gpa.toFixed(2);
}

function getGradePoint(grade: string): number {
  switch (grade) {
    case 'A+':
      return 4.3;
    case 'A0':
      return 4.0;
    case 'A-':
      return 3.7;
    case 'B+':
      return 3.3;
    case 'B0':
      return 3.0;
    case 'B-':
      return 2.7;
    case 'C+':
      return 2.3;
    case 'C0':
      return 2.0;
    case 'C-':
      return 1.7;
    case 'D+':
      return 1.3;
    case 'D0':
      return 1.0;
    case 'D-':
      return 0.7;
    case 'F':
      return 0.0;
    default:
      throw new Error(`Unknown grade: ${grade}`);
  }
}
