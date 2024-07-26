import { No4388 } from '../../main/boj/no4388';
import { Readable } from 'stream';

test('받아올림 : https://www.acmicpc.net/problem/4388', async () => {
  const given = `123 456
555 555
123 594
0 0`;
  const expected = `0
3
1`;

  const result = await new No4388().solve(Readable.from(given));
  expect(result).toBe(expected);
});
