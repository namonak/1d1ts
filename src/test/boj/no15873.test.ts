import { No15873 } from '../../main/boj/no15873';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '37', expected: '10' },
  { given: '102', expected: '12' },
];

test('공백 없는 A+B : https://www.acmicpc.net/problem/15873', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No15873().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
