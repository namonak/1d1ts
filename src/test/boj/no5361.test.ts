import { No5361 } from '../../main/boj/no5361';
import { Readable } from 'stream';

test('전투 드로이드 가격 : https://www.acmicpc.net/problem/5361', async () => {
  const given = `3
20 10 14 3 9
19 17 12 8 10
11 9 8 22 33`;
  const expected = `$13987.50
$15679.76
$16182.54`;

  const result = await new No5361().solve(Readable.from(given));
  expect(result).toBe(expected);
});
