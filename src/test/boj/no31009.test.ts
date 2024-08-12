import { No31009 } from '../../main/boj/no31009';
import { Readable } from 'stream';

test('진주로 가자! (Easy) : https://www.acmicpc.net/problem/31009', async () => {
  const given = `5
changwon 100
incheon 70
jinju 90
haenam 530
gangneung 660`;
  const expected = `90
3`;

  const result = await new No31009().solve(Readable.from(given));
  expect(result).toBe(expected);
});
