import { No11050 } from '../../main/boj/no11050';
import { Readable } from 'stream';

test('이항 계수 1 : https://www.acmicpc.net/problem/11050', async () => {
  const given = '5 2';
  const expected = '10';

  const result = await new No11050().solve(Readable.from(given));
  expect(result).toBe(expected);
});
