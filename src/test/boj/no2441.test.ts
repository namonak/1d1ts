import { No2441 } from '../../main/boj/no2441';
import { Readable } from 'stream';

test('별 찍기 - 4 : https://www.acmicpc.net/problem/2441', async () => {
  const given = '5';

  const expected = `*****
 ****
  ***
   **
    *`;

  const result = await new No2441().solve(Readable.from(given));
  expect(result).toBe(expected);
});
