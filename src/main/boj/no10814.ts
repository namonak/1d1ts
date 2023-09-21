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
      return;
    }

    inputs.push(line);

    if (inputs.length === inputCount) {
      console.log(solution(inputs));
      process.exit();
    }
  });
}

interface Person {
  age: number;
  name: string;
}

export function solution(input: string[]): string {
  const people: Person[] = input.map((line) => {
    const [age, name] = line.split(' ');
    return { age: parseInt(age, 10), name };
  });

  people.sort((a, b) => a.age - b.age);
  return people.map((person) => `${person.age} ${person.name}`).join('\n');
}
