import { No10814 } from '../../main/boj/no10814';
import { Readable } from 'stream';

test('나이순 정렬 : https://www.acmicpc.net/problem/10814', async () => {
  const given = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;
  const expected = `20 Sunyoung
21 Junkyu
21 Dohyun`;

  const result = await new No10814().solve(Readable.from(given));
  expect(result).toBe(expected);
});
