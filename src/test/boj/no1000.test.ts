import { No1000 } from '../../main/boj/no1000';
import { Readable } from 'stream';

test('A+B : https://www.acmicpc.net/problem/1000', async () => {
  const given = '1 2';
  const expected = '3';

  const result = await new No1000().solve(Readable.from(given));
  expect(result).toBe(expected);
});
