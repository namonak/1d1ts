import { No1001 } from '../../main/boj/no1001';
import { Readable } from 'stream';

test('A+B : https://www.acmicpc.net/problem/1001', async () => {
  const given = '3 2';
  const expected = '1';

  const result = await new No1001().solve(Readable.from(given));
  expect(result).toBe(expected);
});
