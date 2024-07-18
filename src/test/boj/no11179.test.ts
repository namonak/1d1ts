import { No11179 } from '../../main/boj/no11179';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '13', expected: '11' },
  { given: '47', expected: '61' },
];

test('2진수 뒤집기 : https://www.acmicpc.net/problem/11179', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No11179().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
