import { No1356 } from '../../main/boj/no1356';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '1236', expected: 'YES' },
  { given: '1', expected: 'NO' },
  { given: '1221', expected: 'YES' },
  { given: '4729382', expected: 'NO' },
  { given: '42393338', expected: 'YES' },
];

test('유진수 : https://www.acmicpc.net/problem/1356', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No1356().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
