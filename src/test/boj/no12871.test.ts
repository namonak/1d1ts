import { No12871 } from '../../main/boj/no12871';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: `ab
abab`,
    expected: '1',
  },
  {
    given: `abc
bca`,
    expected: '0',
  },
];

test('무한 문자열 : https://www.acmicpc.net/problem/12871', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No12871().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
