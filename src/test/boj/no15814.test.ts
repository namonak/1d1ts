import { No15814 } from '../../main/boj/no15814';
import { Readable } from 'stream';

test('야바위 대장 : https://www.acmicpc.net/problem/15814', async () => {
  const given = `Youngmaan-good
2
1 3
9 2`;
  const expected = 'Yn-ogmaanugood';

  const result = await new No15814().solve(Readable.from(given));
  expect(result).toBe(expected);
});
