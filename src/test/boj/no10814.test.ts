import { solution } from '../../main/boj/no10814';

test('나이순 정렬 : https://www.acmicpc.net/problem/10814', () => {
  const given = ['21 Junkyu', '21 Dohyun', '20 Sunyoung'];

  const expected = ['20 Sunyoung', '21 Junkyu', '21 Dohyun'].join('\n');

  expect(solution(given)).toBe(expected.trim());
});
