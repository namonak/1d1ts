import { No18110 } from '../../main/boj/no18110';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: `5
1
5
5
7
8`,
    expected: '6',
  },
  {
    given: `10
1
13
12
15
3
16
13
12
14
15`,
    expected: '13',
  },
  {
    given: `0`,
    expected: '0',
  },
  {
    given: `1
5`,
    expected: '5',
  },
  {
    given: `2
1
2`,
    expected: '2',
  },
  {
    given: `5
1
2
3
4
1000000`,
    expected: '3',
  },
  {
    given: `6
1
1
1
1
1
1000`,
    expected: '1',
  },
];

test('solved.ac : https://www.acmicpc.net/problem/18110', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No18110().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
