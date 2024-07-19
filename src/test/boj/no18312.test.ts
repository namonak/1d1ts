import { No18312 } from '../../main/boj/no18312';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '5 3', expected: '11475' },
  { given: '0 0', expected: '3600' },
  { given: '0 9', expected: '684' },
  { given: '23 0', expected: '62100' },
  { given: '23 9', expected: '22248' },
];

test('시각 : https://www.acmicpc.net/problem/18312', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No18312().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
