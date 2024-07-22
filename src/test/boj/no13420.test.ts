import { No13420 } from '../../main/boj/no13420';
import { Readable } from 'stream';

test('사칙연산 : https://www.acmicpc.net/problem/13420', async () => {
  const given = `8
3 * 0 = 0
3 * 2 = 7
11 + 11 = 22
11 + 11 = 11
7 - 9 = -2
7 - 9 = 1
9 / 3 = 3
9 / 3 = 4`;
  const expected = `correct
wrong answer
correct
wrong answer
correct
wrong answer
correct
wrong answer`;

  const result = await new No13420().solve(Readable.from(given));
  expect(result).toBe(expected);
});
