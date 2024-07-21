import { No5618 } from '../../main/boj/no5618';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: `2
75 125`,
    expected: `1
5
25`,
  },
  {
    given: `3
110 22 88`,
    expected: `1
2
11
22`,
  },
  {
    given: `3
66 11 3`,
    expected: `1`,
  },
];

test('공약수 : https://www.acmicpc.net/problem/5618', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No5618().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
