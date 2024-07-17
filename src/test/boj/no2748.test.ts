import { No2748 } from '../../main/boj/no2748';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '10', expected: '55' },
  { given: '90', expected: '2880067194370816120' },
];

test('피보나치 수 2 : https://www.acmicpc.net/problem/2748', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No2748().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
