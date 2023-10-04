import { solution } from '../../main/boj/no1094';

const testCases = [
  { input: 23, output: 4 },
  { input: 32, output: 1 },
  { input: 64, output: 1 },
  { input: 48, output: 2 },
];

test('막대기 : https://www.acmicpc.net/problem/1094', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
