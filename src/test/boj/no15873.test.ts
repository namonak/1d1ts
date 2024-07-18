import { No15873 } from '../../main/boj/no15873';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '37', expected: '10' },
  { given: '102', expected: '12' },
  { given: '10', expected: '1' },
  { given: '100', expected: '11' },
  { given: '110', expected: '11' },
  { given: '50', expected: '5' },
  { given: '99', expected: '18' },
];

test('공백 없는 A+B : https://www.acmicpc.net/problem/15873', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No15873().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
