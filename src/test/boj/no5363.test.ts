import { No5363 } from '../../main/boj/no5363';
import { Readable } from 'stream';

test('요다 : https://www.acmicpc.net/problem/5363', async () => {
  const given = `4
I will go now to find the Wookiee
Solo found the death star near planet Kessel
I'll fight Darth Maul here and now
Vader will find Luke before he can escape
`;
  const expected = `go now to find the Wookiee I will
the death star near planet Kessel Solo found
Darth Maul here and now I'll fight
find Luke before he can escape Vader will`;

  const result = await new No5363().solve(Readable.from(given));
  expect(result).toBe(expected);
});
