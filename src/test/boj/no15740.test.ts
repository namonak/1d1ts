import { No15740 } from '../../main/boj/no15740';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '1 2', expected: '3' },
  { given: '-60 40', expected: '-20' },
  { given: '-999999999 1000000000', expected: '1' },
  { given: '1099511627776 1073741824', expected: '1100585369600' },
  {
    given: '123456789123456789123456789 987654321987654321987654321',
    expected: '1111111111111111111111111110',
  },
];

test('A+B - 9 : https://www.acmicpc.net/problem/15740', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No15740().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
