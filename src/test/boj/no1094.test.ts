import { No1094 } from '../../main/boj/no1094';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '23', expected: '4' },
  { given: '32', expected: '1' },
  { given: '64', expected: '1' },
  { given: '48', expected: '2' },
];

test('막대기 : https://www.acmicpc.net/problem/1094', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No1094().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
