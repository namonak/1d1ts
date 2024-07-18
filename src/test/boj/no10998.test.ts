import { No10998 } from '../../main/boj/no10998';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  { given: '1 2', expected: '2' },
  { given: '3 4', expected: '12' },
];

test('AxB : https://www.acmicpc.net/problem/10998', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No10998().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
