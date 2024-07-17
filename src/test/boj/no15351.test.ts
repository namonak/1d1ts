import { No15351 } from '../../main/boj/no15351';
import { Readable } from 'stream';

const given = `4
OTAKU LIFE
PRODUCER
GAMING LIFE
PROGRAMMING`;
const expected = `PERFECT LIFE
PERFECT LIFE
83
131`;

test('인생 점수 : https://www.acmicpc.net/problem/15351', async () => {
  const result = await new No15351().solve(Readable.from(given));
  expect(result).toBe(expected);
});
