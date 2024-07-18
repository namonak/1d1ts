import { No10156 } from '../../main/boj/no10156';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: '300 4 1000',
    expected: '200',
  },
  {
    given: '250 2 140',
    expected: '360',
  },
  {
    given: '20 6 120',
    expected: '0',
  },
  {
    given: '20 10 320',
    expected: '0',
  },
];

test('과자 : https://www.acmicpc.net/problem/10156', async () => {
  for (const { given, expected } of testCases) {
    const result = await new No10156().solve(Readable.from(given));
    expect(result).toBe(expected);
  }
});
