import { No26711 } from '../../main/boj/no26711';
import { Readable } from 'stream';

test('A+B : https://www.acmicpc.net/problem/26711', async () => {
  const given = `1997
25`;
  const expected = '2022';

  const result = await new No26711().solve(Readable.from(given));
  expect(result).toBe(expected);
});
