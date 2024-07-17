import { No1676 } from '../../main/boj/no1676';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '10', expected: '2' },
  { given: '3', expected: '0' },
];

test('팩토리얼 0의 개수 : https://www.acmicpc.net/problem/1676', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No1676().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
