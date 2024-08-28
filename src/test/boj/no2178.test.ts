import { No2178 } from '../../main/boj/no2178';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: `4 6
101111
101010
101011
111011`,
    expected: '15',
  },
  {
    given: `4 6
110110
110110
111111
111101`,
    expected: '9',
  },
  {
    given: `2 25
1011101110111011101110111
1110111011101110111011101`,
    expected: '38',
  },
  {
    given: `7 7
1011111
1110001
1000001
1000001
1000001
1000001
1111111`,
    expected: '13',
  },
];

test('미로 탐색 : https://www.acmicpc.net/problem/2178', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No2178().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
