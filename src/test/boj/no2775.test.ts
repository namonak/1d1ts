import { No2775 } from '../../main/boj/no2775';
import { Readable } from 'stream';

test('부녀회장이 될테야 : https://www.acmicpc.net/problem/2775', async () => {
  const given = `2
1
3
2
3`;
  const expected = `6
10`;

  const result = await new No2775().solve(Readable.from(given));
  expect(result).toBe(expected);
});
