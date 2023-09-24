import { solution } from '../../main/boj/no2440';

test('별 찍기 - 3 : https://www.acmicpc.net/problem/2440', () => {
  const given = 5;

  const expected = `
  *****
  ****
  ***
  **
  *`
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .trim();

  expect(solution(given)).toBe(expected);
});
