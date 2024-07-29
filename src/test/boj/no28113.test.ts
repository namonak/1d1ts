import { No28113 } from '../../main/boj/no28113';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '10 5 15', expected: 'Bus' },
  { given: '1 1 1', expected: 'Anything' },
  { given: '1 100 1', expected: 'Subway' },
];

test('정보섬의 대중교통 : https://www.acmicpc.net/problem/28113', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No28113().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
