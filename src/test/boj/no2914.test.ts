import { No2914 } from '../../main/boj/no2914';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '38, 24', expected: '875' },
  { given: '1, 100', expected: '100' },
  { given: '10, 10', expected: '91' },
];

test('저작권 : https://www.acmicpc.net/problem/2914', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No2914().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
