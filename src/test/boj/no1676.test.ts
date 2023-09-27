import { solution } from '../../main/boj/no1676';

const testCases = [
  { input: 10, output: 2 },
  { input: 3, output: 0 },
];

test('팩토리얼 0의 개수 : https://www.acmicpc.net/problem/1676', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
