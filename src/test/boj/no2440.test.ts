import { No2440 } from '../../main/boj/no2440';
import { Readable } from 'stream';

test('별 찍기 - 3 : https://www.acmicpc.net/problem/2440', async () => {
  const given = '5';

  const expected = `*****
****
***
**
*`;

  const result = await new No2440().solve(Readable.from(given));
  expect(result).toBe(expected);
});
