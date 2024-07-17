import { No1357 } from '../../main/boj/no1357';
import { Readable } from 'stream';

type TestCase = {
  given: string;
  expected: string;
};

const testCases: TestCase[] = [
  {
    given: '123 100',
    expected: '223',
  },
  {
    given: '111 111',
    expected: '222',
  },
  {
    given: '5 5',
    expected: '1',
  },
  {
    given: '1000 1',
    expected: '2',
  },
  {
    given: '456 789',
    expected: '1461',
  },
];

test('뒤집힌 덧셈 : https://www.acmicpc.net/problem/1357', () => {
  testCases.forEach(async ({ given, expected }) => {
    const result = await new No1357().solve(Readable.from(given));
    expect(result).toBe(expected);
  });
});
