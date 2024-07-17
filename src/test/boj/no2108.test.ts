import { No2108 } from '../../main/boj/no2108';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: `5
1
3
8
-2
2`,
    expected: `2
2
1
10`,
  },
  {
    given: `1
4000`,
    expected: `4000
4000
4000
0`,
  },
  {
    given: `5
-1
-2
-3
-1
-2`,
    expected: `-2
-2
-1
2`,
  },
  {
    given: `3
0
0
-1`,
    expected: `0
0
0
1`,
  },
];

test('통계학 : https://www.acmicpc.net/problem/2108', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No2108().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
