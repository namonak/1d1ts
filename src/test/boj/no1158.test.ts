import { No1158 } from '../../main/boj/no1158';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: '7 3',
    expected: '<3, 6, 2, 7, 5, 1, 4>',
  },
  {
    given: '8 2',
    expected: '<2, 4, 6, 8, 3, 7, 5, 1>',
  },
  {
    given: '10 3',
    expected: '<3, 6, 9, 2, 7, 1, 8, 5, 10, 4>',
  },
];

test('요세푸스 문제 : https://www.acmicpc.net/problem/1158', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No1158().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
