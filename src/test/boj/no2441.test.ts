import { solution } from '../../main/boj/no2441';

test('별 찍기 - 4 : https://www.acmicpc.net/problem/2441', () => {
  const given = 5;

  const expected = `
*****
 ****
  ***
   **
    *`
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trim();

  expect(solution(given)).toBe(expected);
});
