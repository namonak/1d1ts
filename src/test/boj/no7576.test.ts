import { No7576 } from '../../main/boj/no7576';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: `6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`,
    expected: '8',
  },
  {
    given: `6 4
0 -1 0 0 0 0
-1 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`,
    expected: '-1',
  },
  {
    given: `6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1`,
    expected: '6',
  },
  {
    given: `5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0`,
    expected: '14',
  },
  {
    given: `2 2
1 -1
-1 1`,
    expected: '0',
  },
];

test('토마토 : https://www.acmicpc.net/problem/7576', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No7576().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
