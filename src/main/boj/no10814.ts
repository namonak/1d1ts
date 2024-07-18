import * as readline from 'readline';
import { Readable } from 'stream';

export class No10814 {
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

type Person = {
  age: number;
  name: string;
};

export function solution(input: string[]): string {
  const people: Person[] = input.map((line) => {
    const [age, name] = line.split(' ');
    return { age: parseInt(age, 10), name };
  });

  people.sort((a, b) => a.age - b.age);
  return people.map((person) => `${person.age} ${person.name}`).join('\n');
}
