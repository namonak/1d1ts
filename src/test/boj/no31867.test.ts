import { No31867 } from '../../main/boj/no31867';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: `9
123456789`,
    expected: '1',
  },
  {
    given: `7
1234568`,
    expected: '0',
  },
  {
    given: `8
12345678`,
    expected: '-1',
  },
];

test('홀짝홀짝 : https://www.acmicpc.net/problem/31867', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No31867().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
